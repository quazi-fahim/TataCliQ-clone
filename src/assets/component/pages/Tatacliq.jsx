import React from 'react'
import { Box,Text,Image  } from '@chakra-ui/react'
import BigSlider from '../subcomponent/BigSlider'
import Blockbox from '../subcomponent/Blockbox'
import Bankoffer from '../subcomponent/Bankoffer'
import Categorybox from '../subcomponent/Categorybox'
import Categoryslides from '../subcomponent/Categoryslides'
import Footer from '../utils/Footer'
import Heritagepage from '../subcomponent/Heritagepage'
import Menpage from '../subcomponent/Menpage'
const Tatacliq = () => {
  return(
    <Box bg="#ECECEC" >
 
 <BigSlider />
 <Blockbox/>
 <Bankoffer/>
 <Box display="flex" justifyContent="center" alignItems="center" mt={10}><Text   fontSize='5xl' fontWeight='bold'   bgClip='text' bgGradient='linear-gradient(to-r , #ed6ea0 0%, #ec8c69 100%)'>Best Brands on Offers</Text></Box>
 <Categorybox/>
 <Box display="flex" justifyContent="center" alignItems="center" mt={10}><Text   fontSize='5xl' fontWeight='bold'   bgClip='text' bgGradient='linear-gradient(to-r , #ed6ea0 0%, #ec8c69 100%)'>The Westside Store</Text></Box>
 <Categoryslides/>
 <Box display="flex" justifyContent="center" alignItems="center" mt={10}><Text   fontSize='5xl' fontWeight='bold'   bgClip='text' bgGradient='linear-gradient(to-r , #ed6ea0 0%, #ec8c69 100%)'>Heritage Hype</Text></Box>
 <Box display="flex" justifyContent="center" alignItems="center" mt={20}><Image src="//assets.tatacliq.com/medias/sys_master/images/62351070199838.png"/></Box>
<Heritagepage/>
<Box display="flex" justifyContent="center" alignItems="center" mt={10}><Text   fontSize='5xl' fontWeight='bold'   bgClip='text' bgGradient='linear-gradient(to-r , #ed6ea0 0%, #ec8c69 100%)'>Men In Casual</Text></Box>
<Menpage/>
 <Footer/>
  </Box>
  )
  
}

export default Tatacliq