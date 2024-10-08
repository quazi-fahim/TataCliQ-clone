import React from 'react';
import { Box, Button, Center, Grid, Image, Flex } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useSlider } from "../utils/Customhook/useSlider";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

// Card data with images and search params
const card = [
  { url: "/category", searchParams: { id: 1 }, image: "https://assets.tatacliq.com/medias/sys_master/images/62351067381790.png" },
  { url: "/category", searchParams: { id: 2 }, image: "https://assets.tatacliq.com/medias/sys_master/images/62351067447326.png" },
  { url: "/category", searchParams: { id: 3 }, image: "https://assets.tatacliq.com/medias/sys_master/images/62351067643934.png" },
  { url: "/category", searchParams: { id: 4 }, image: "https://assets.tatacliq.com/medias/sys_master/images/62351067709470.png" },
  { url: "/category", searchParams: { id: 5 }, image: "https://assets.tatacliq.com/medias/sys_master/images/62351067775006.png" },
  { url: "/category", searchParams: { id: 6 }, image: "https://assets.tatacliq.com/medias/sys_master/images/62351067840542.png" },
  { url: "/category", searchParams: { id: 7 }, image: "https://assets.tatacliq.com/medias/sys_master/images/62351067906078.png" },
  { url: "/category", searchParams: { id: 8 }, image: "https://assets.tatacliq.com/medias/sys_master/images/62351067578398.png" }
];

const Menpage = () => {
  const { currentslide, nextslide, prevslide } = useSlider(card, 4); // Custom hook with 4 slides

  return (
    <Center>
        
      <Box width="100%" mt={10}>
        {/* Navigation Buttons */}
        <Flex justifyContent="end" mb={10} mr={10}>
          <Button onClick={prevslide} bg={'white'} mr={1} borderRadius="20px 0  0 20px "><ChevronLeftIcon/></Button>
          <Button onClick={nextslide} bg={'white'} borderRadius="0 20px 20px 0" ><ChevronRightIcon/></Button>
        </Flex>

        {/* Grid to display slides - Always show 4 slides */}
        <Box display="flex" justifyContent="center">
          <Grid
            templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(4, 1fr)",xl:"repeat(4, 1fr)"}} // Always 4 columns
            gap={4}
            width="100%"
            maxWidth="1000px" // Optional: Limit the max width of the grid
          >
            {currentslide.map((slide, index) => (
              <Box
                key={index}
                cursor="pointer"
                _hover={{ transform: "scale(1.05)" }} // Lift effect on hover
                transition="transform 0.2s"
              >
                <Link
                  to={{
                    pathname: slide.url,  // URL path for the link
                    search: new URLSearchParams(slide.searchParams).toString()  // Construct search params for navigation
                  }}
                >
                  <Image
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    borderRadius="10px"
                    w="100%" // Image width takes the full width of the grid item
                    h="auto" // Height adjusts based on the width
                  />
                </Link>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </Center>
  );
};

export default Menpage;
