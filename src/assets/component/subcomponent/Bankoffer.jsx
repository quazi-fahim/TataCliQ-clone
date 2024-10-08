import { Center, Grid, GridItem, Image } from '@chakra-ui/react';
import React from 'react';

const Bankoffer = () => {
  return (
    <Center>
      <Grid
        templateColumns="repeat(3, 1fr)" // Always 3 columns
        gap={6}

        w="100%" // Grid takes full width of the container
        maxWidth="1000px" // Shrinks the grid to fit smaller screens
      >
        <GridItem w="100%" h="auto">
          <Image
            src="https://assets.tatacliq.com/medias/sys_master/images/50074650869790.jpg"
            w="100%" 
            h="auto"
            objectFit="cover"
            borderRadius="10px"
          />
        </GridItem>
        <GridItem w="100%" h="auto">
          <Image
            src="https://assets.tatacliq.com/medias/sys_master/images/62309792808990.jpg"
            w="100%" 
            h="auto"
            objectFit="cover"
            borderRadius="10px"
          />
        </GridItem>
        <GridItem w="100%" h="auto">
          <Image
            src="https://assets.tatacliq.com/medias/sys_master/images/50063519580190.jpg"
            w="100%" 
            h="auto"
            objectFit="cover"
            borderRadius="10px"
          />
        </GridItem>
      </Grid>
    </Center>
  );
};

export default Bankoffer;
