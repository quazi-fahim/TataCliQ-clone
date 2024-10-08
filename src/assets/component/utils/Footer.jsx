import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" mt="100px" display={'flex'} justifyContent={"space-between"}  bg="gray.800" color="white" py={4} h="100px">
      <Flex
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        px={6}
      >
        <Text>&copy; {new Date().getFullYear()} Tata CliQ</Text>
        <Flex>
          <Link href="#" mx={2}>Privacy Policy</Link>
          <Link href="#" mx={2}>Terms of Service</Link>
          <Link href="#" mx={2}>Contact Us</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
