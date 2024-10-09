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
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from "@chakra-ui/icons";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";

// Example categories and subcategories
const categories = [
  {
    name: "Women's Fashion",
    subcategories: ["Kurtis & Kurtas", "Suits", "Sarees", "Lehengas", "Blouses"],
  },
  {
    name: "Men's Fashion",
    subcategories: ["Shirts", "T-shirts", "Jeans", "Jackets"],
  },
  {
    name: "Beauty",
    subcategories: ["Skincare", "Haircare", "Makeup", "Fragrances"],
  },
];

// Main Component
const CategoryFilter = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isCategoryHovered, setIsCategoryHovered] = useState(false);
  const navigate = useNavigate();

  // Handle category click and navigate to category page
  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <Box p={4}>
      {/* Category Button with Popover */}
      <Popover trigger="hover">
        <PopoverTrigger>
          <Text
            color={"white"}
            cursor="pointer"
            onMouseEnter={() => setIsCategoryHovered(true)}
            onMouseLeave={() => setIsCategoryHovered(false)}
          >
            Category
            {/* Show Chevron based on hover state */}
            {isCategoryHovered ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Text>
        </PopoverTrigger>
        <PopoverContent bg="white" color="black" width={useBreakpointValue({ base: "100%", md: "800px" })}>
          <PopoverArrow bg="white" />
          <PopoverBody>
            <Flex direction={{ base: "row", md: "row" }}>
              {/* Categories Section */}
              <Box flex="1" pr={4} mb={{ base: 4, md: 0 }}>
                {categories.map((category) => (
                  <Flex
                    key={category.name}
                    align="center"
                    cursor="pointer"
                    onMouseEnter={() => setHoveredCategory(category.name)}
                    onClick={() => handleCategoryClick(category.name)}
                    mb={2}
                  >
                    <Text fontWeight="bold" mr={2}>
                      {category.name}
                    </Text>
                    {/* Show ChevronRightIcon when hovered, otherwise ChevronDownIcon */}
                    {hoveredCategory === category.name ? (
                      <ChevronRightIcon />
                    ) : (
                      <ChevronDownIcon />
                    )}
                  </Flex>
                ))}
              </Box>

              {/* Subcategories Section */}
              {hoveredCategory && (
                <Box flex="1" pl={4} borderLeft={{ base: "none", md: "1px solid black" }}>
                  {categories
                    .find((category) => category.name === hoveredCategory)
                    .subcategories.map((subcat) => (
                      <Text
                        key={subcat}
                        cursor="pointer"
                        onClick={() => handleCategoryClick(subcat)}
                        _hover={{ color: "blue.500" }}
                        mb={1}
                      >
                        {subcat}
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

// Category Page Component to Display Products
const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams(); // Get category name from the URL

  // Fetch products based on category name
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/products"); // Adjust the API URL if necessary
        setProducts(
          res.data.filter((product) => product.category === categoryName)
        );
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, [categoryName]);

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>
        Products in {categoryName}
      </Text>
      {products.length > 0 ? (
        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={4}>
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
        <Text>No products available for this category.</Text>
      )}
    </Box>
  );
};

export default CategoryFilter;
