import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

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
  // Add other brands here...
];

const Brandfilter = () => {
  const [hoveredBrand, setHoveredBrand] = useState(null);
  const [isBrandHovered, setIsBrandHovered] = useState(false);
  const navigate = useNavigate();

  // Handle sub-brand click and navigate to sub-brand page
  const handleSubBrandClick = (subBrand) => {
    navigate(`/subbrand/${subBrand}`);
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
        <PopoverContent bg="white" color="black" width={{ base: "100%", md: "800px" }}>
          <PopoverArrow bg="white" />
          <PopoverBody>
            <Flex direction={{ base: "row", md: "row" }}>
              <Box flex="1" pr={4} mb={{ base: 4, md: 0 }}>
                {brands.map((brand) => (
                  <Flex
                    key={brand.name}
                    align="center"
                    cursor="pointer"
                    onMouseEnter={() => setHoveredBrand(brand.name)}
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
                <Box flex="1" pl={4} borderLeft={{ base: "none", md: "1px solid black" }}>
                  {brands
                    .find((brand) => brand.name === hoveredBrand)
                    .subBrands.map((subbrand) => (
                      <Text
                        key={`${hoveredBrand}-${subbrand}`} // Unique key
                        cursor="pointer"
                        onClick={() => handleSubBrandClick(subbrand)} // Navigate on sub-brand click
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

export default Brandfilter;
