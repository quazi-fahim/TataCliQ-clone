import { Box, Center,Grid,GridItem,Text,Image, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link,  useNavigate } from 'react-router-dom'

const card=[
  {
    url:"",
    searchParams:{id:1},
    image: "https://assets.tatacliq.com/medias/sys_master/images/62351066562590.png",
  },
  {
    url:"",
    searchParams:{id:2},
    image: "https://assets.tatacliq.com/medias/sys_master/images/62351066497054.png",
  },
  {
    url:"",
    searchParams:{id:3},
    image:"https://assets.tatacliq.com/medias/sys_master/images/62351066628126.png",
  },
  {
    url:"",
    searchParams:{id:4},
    image: "https://assets.tatacliq.com/medias/sys_master/images/62351066791966.png",
  },
  {
    url:"",
    searchParams:{id:5},
    image: "https://assets.tatacliq.com/medias/sys_master/images/62351066857502.png",
  },
  {
    url:"",
    searchParams:{id:6},
    image: "https://assets.tatacliq.com/medias/sys_master/images/62351066923038.png",
  },
  {
    url:"",
    searchParams:{id:7},
    image: "https://assets.tatacliq.com/medias/sys_master/images/62351066988574.png",
  },
  {
    url:"",
    searchParams:{id:2},
    image: "https://assets.tatacliq.com/medias/sys_master/images/62351067054110.png",
  },]
const Categorybox = () => {
const navigate=useNavigate();
    
  return (
  
    <Center>
   

  <Box width="100%" mt="100px">
   

    {/* Grid to display slides - Always show 4 slides */}
    <Box display="flex" justifyContent="center">
      <Grid
        templateColumns={{base:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"}} // Always 4 columns
        gap={4}
        width="100%"
        maxWidth="1200px" 
      >
        {card.map((slide, index) => (
          <Box
            key={index}
            cursor="pointer"
            _hover={{ transform: "scale(1.0095)" }} // Lift effect on hover
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
  )
}

export default Categorybox
