import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Grid,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

// Example brands data
const brands = [
  {
    name: "roadster",
    subBrands: ["Roadster Men", "Roadster Women", "Roadster Lifestyle"],
  },
  {
    name: "blackberrys",
    subBrands: ["Blackberrys Casual", "Blackberrys Formal"],
  },
  {
    name: "van-heusen",
    subBrands: ["Van Heusen Men", "Van Heusen Women", "Van Heusen Athleisure"],
  },
  {
    name: "allen-solly",
    subBrands: ["Allen Solly Men", "Allen Solly Women", "Allen Solly Junior"],
  },
  {
    name: "twills",
    subBrands: ["Twills Men", "Twills Women"],
  },
  {
    name: "samsung",
    subBrands: ["Samsung Galaxy", "Samsung Appliances"],
  },
  {
    name: "sony",
    subBrands: ["Sony Bravia", "Sony Xperia"],
  },
  {
    name: "lg",
    subBrands: ["LG Electronics", "LG Home Appliances"],
  },
  {
    name: "dell",
    subBrands: ["Dell Inspiron", "Dell XPS"],
  },
  {
    name: "hp",
    subBrands: ["HP Pavilion", "HP Omen"],
  },
  {
    name: "lenovo",
    subBrands: ["Lenovo ThinkPad", "Lenovo IdeaPad"],
  },
  {
    name: "asus",
    subBrands: ["Asus ROG", "Asus ZenBook"],
  },
  {
    name: "fitbit",
    subBrands: ["Fitbit Versa", "Fitbit Charge"],
  },
  {
    name: "xiaomi",
    subBrands: ["Xiaomi Mi", "Xiaomi Redmi"],
  },
];

// Main Component
const BrandFilter = () => {
  const [hoveredBrand, setHoveredBrand] = useState(null);
  const [isBrandHovered, setIsBrandHovered] = useState(false);
  const navigate = useNavigate();

  // Handle brand click and navigate to brand page
  const handleBrandClick = (brand) => {
    navigate(`/brand/${brand}`);
  };

  return (
    <Box p={4}>
      <Popover trigger="hover">
        <PopoverTrigger>
          <Text
            color={"white"}
            cursor="pointer"
            onMouseEnter={() => setIsBrandHovered(true)}
            onMouseLeave={() => setIsBrandHovered(false)}
          >
            Brand
            {isBrandHovered ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Text>
        </PopoverTrigger>
        <PopoverContent bg="white" color="black" width="800px">
          <PopoverArrow bg="white" />
          <PopoverBody>
            <Flex>
              <Box flex="1" pr={4}>
                {brands.map((brand) => (
                  <Flex
                    key={brand.name}
                    align="center"
                    cursor="pointer"
                    onMouseEnter={() => setHoveredBrand(brand.name)}
                    onClick={() => handleBrandClick(brand.name)}
                    mb={2}
                  >
                    <Text fontWeight="bold" mr={2}>
                      {brand.name}
                    </Text>
                    {hoveredBrand === brand.name ? (
                      <ChevronRightIcon />
                    ) : (
                      <ChevronDownIcon />
                    )}
                  </Flex>
                ))}
              </Box>

              {hoveredBrand && (
                <Box flex="1" pl={4} borderLeft="1px solid black">
                  {brands
                    .find((brand) => brand.name === hoveredBrand)
                    .subBrands.map((subbrand) => (
                      <Text
                        key={`${hoveredBrand}-${subbrand}`} // Unique key
                        cursor="pointer"
                        onClick={() => handleBrandClick(subbrand)}
                        _hover={{ color: "blue.500" }}
                        mb={1}
                      >
                        {subbrand}
                      </Text>
                    ))}
                </Box>
              )}
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

// Brand Page Component to Display Products
const BrandPage = () => {
  const [products, setProducts] = useState([]);
  const { brandName } = useParams();

  // Fetch products based on brand name
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/products");
        setProducts(res.data.filter((product) => product.brand === brandName));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, [brandName]);

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>
        Products from {brandName}
      </Text>
      {products.length > 0 ? (
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {products.map((product) => (
            <Box
              key={product.id}
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
            >
              <Text fontSize="xl" fontWeight="bold">
                {product.name}
              </Text>
              <Text>{product.description}</Text>
              <Text color="blue.500">{product.price}</Text>
            </Box>
          ))}
        </Grid>
      ) : (
        <Text>No products available for this brand.</Text>
      )}
    </Box>
  );
};

export default BrandFilter;
