import React, { useState } from 'react';
import { Box, Center, IconButton, useBreakpointValue } from '@chakra-ui/react';
import Slider from 'react-slick';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

// Settings for the slider
const settings = (currentSlide) => ({
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  // Custom dot placement in the bottom-left corner
  appendDots: (dots) => (
    <div
      style={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
      }}
    >
      <ul style={{ margin: '0px', display: 'flex', justifyContent: 'flex-end' }}>
        {dots}
      </ul>
    </div>
  ),
  customPaging: (i) => (
    <div
      style={{
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: '#fff',
        margin: '5px',
        opacity: currentSlide === i ? 1 : 0.4,
        transition: 'opacity 0.3s ease',
      }}
    />
  ),
});

export default function BigSlider() {
  const [slider, setSlider] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);  // State to track the current slide

  // Use breakpoints for top and side positions
  const top = useBreakpointValue({ base: '90%', md: '60%' });
  const side = useBreakpointValue({ base: '10px', md: '30px' });

  // Responsive height for the slider container
  const sliderHeight = useBreakpointValue({ base: '300px', md: '350px', lg: '600px' });

  // Image cards used in the slider
  const cards = [
    { url: "", searchParams: { id: 1 }, image: 'https://assets.tatacliq.com/medias/sys_master/images/62351056601118.jpg' },
    { url: "", searchParams: { id: 2 }, image: 'https://assets.tatacliq.com/medias/sys_master/images/62351056076830.jpg' },
    { url: "", searchParams: { id: 3 }, image: 'https://assets.tatacliq.com/medias/sys_master/images/62351056142366.jpg' },
    { url: "", searchParams: { id: 4 }, image: 'https://assets.tatacliq.com/medias/sys_master/images/62351056142366.jpg' },
    { url: "", searchParams: { id: 5 }, image: 'https://assets.tatacliq.com/medias/sys_master/images/62351056142366.jpg' },
    { url: "", searchParams: { id: 6 }, image: 'https://assets.tatacliq.com/medias/sys_master/images/62351056207902.jpg' },
    { url: "", searchParams: { id: 7 }, image: 'https://assets.tatacliq.com/medias/sys_master/images/50504080326686.jpg' },
    { url: "", searchParams: { id: 8 }, image: 'https://assets.tatacliq.com/medias/sys_master/images/62351056273438.jpg' },
    { url: "", searchParams: { id: 9 }, image: 'https://assets.tatacliq.com/medias/sys_master/images/62351056404510.jpg' },
  ];

  // Handle after slide change to update the current slide
  const handleAfterChange = (index) => {
    setCurrentSlide(index);
  };

  // Handle image click to navigate to the corresponding slide
  const handleImageClick = (index) => {
    slider?.slickGoTo(index);
  };

  return (
    <Center>
      <Box
        position={'relative'}
        m={{ base: '10px', md: '20px' }}
        height={sliderHeight}
        width={'85%'}
        overflow={'hidden'}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        {/* Left Icon */}
        <IconButton
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(20%, -50%)'}
          zIndex={2}
          bg="white"
          color="black"
          opacity={0.6}
          _hover={{ opacity: 1 }}
          onClick={() => slider?.slickPrev()}
        >
          <ArrowLeftIcon />
        </IconButton>

        {/* Right Icon */}
        <IconButton
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(-20%, -50%)'}
          zIndex={2}
          bg="white"
          color="black"
          opacity={0.6}
          _hover={{ opacity: 1 }}
          onClick={() => slider?.slickNext()}
        >
          <ArrowRightIcon />
        </IconButton>

        {/* Slider */}
        <Slider
          {...settings(currentSlide)}
          ref={(slider) => setSlider(slider)}
          afterChange={handleAfterChange}  // Update the current slide index after each slide change
        >
          {cards.map((card, index) => (
            <Box
              key={index}
              height={sliderHeight} // Responsive height for the images
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="contain"// Ensure the image fully fits in the box and resizes responsively
              backgroundImage={`url(${card.image})`} // Use the image property from the card object
              width="100%" // Ensure the image takes up full width of the box
              display="flex"
              justifyContent="center"
              alignItems="center"
              onClick={() => handleImageClick(index)} // Handle image click
            >
              {/* Optional: You can add any overlay or text here */}
            </Box>
          ))}
        </Slider>
      </Box>
    </Center>
  );
}
