import {  Center, Grid, GridItem, Image } from '@chakra-ui/react';
import React from 'react';
import {Link, useNavigate} from "react-router-dom"
const card = [
  {
    url:"",
    searchParams:{id:1},
    image:"https://assets.tatacliq.com/medias/sys_master/images/62351065677854.png",
  },
  {
    url:"",
    searchParams:{id:2},
    image: "https://assets.tatacliq.com/medias/sys_master/images/62351065743390.png",
  },
   {
    url:"",
    searchParams:{id:3},
    image:    "https://assets.tatacliq.com/medias/sys_master/images/62351065808926.png",
  },
  {
    url:"",
    searchParams:{id:4},
    image:    "https://assets.tatacliq.com/medias/sys_master/images/62351065874462.png",

  },
  {
    url:"",
    searchParams:{id:5},
    image:    "https://assets.tatacliq.com/medias/sys_master/images/62351065939998.png",

  },
  {
    url:"",
    searchParams:{id:6},
    image:    "https://assets.tatacliq.com/medias/sys_master/images/62351066005534.png",

  },

  {
    url:"",
    searchParams:{id:7},
    image:    "https://assets.tatacliq.com/medias/sys_master/images/62351066071070.png",

  },
  {
    url:"",
    searchParams:{id:8},
    image:    "https://assets.tatacliq.com/medias/sys_master/images/62351066234910.png",

  },
  {
    url:"",
    searchParams:{id:9},
    image:       "https://assets.tatacliq.com/medias/sys_master/images/62351066300446.png",


  },
  {
    url:"",
    searchParams:{id:10},
    image:    "https://assets.tatacliq.com/medias/sys_master/images/62351066365982.png",

  },
  {
    url:"",
    searchParams:{id:11},
    image:    "https://assets.tatacliq.com/medias/sys_master/images/62351066431518.png"

  }
    
   

];

const Blockbox = () => {
const navigate=useNavigate();

  return (
    <Center ml={5}> 
      <Grid 
        templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(11, 1fr)', lg: 'repeat(11, 1fr)',xl:'repeat(11, 140px)' }} 
         
        m={10}
      >
        {card.map((item, index) => (
          <GridItem w='100%' key={index}>
            <Link to={{pathname:item.url,
            search:new URLSearchParams(item.searchParams).toString()}}
             onClick={()=>navigate(item.url,{search: new URLSearchParams(item.searchParams).toString()})}>
            <Image 
              src={item.image} 
              borderRadius="5px" 
              bg="white" 
              objectFit="cover" // Ensures the image covers the item area
              w="90%" // Ensure the image takes the full width of the GridItem
              h="auto" // Maintain the aspect ratio of the image
            />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Center>
  );
}

export default Blockbox;
