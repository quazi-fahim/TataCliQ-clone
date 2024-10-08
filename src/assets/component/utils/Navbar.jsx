import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink,Text, Image, Box, Stack, Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import Search from "../pages/Search";

import Categoryfilter from "../pages/Categoryfilter";
import BrandFilter from "../pages/Brandfilter";
import { logout } from "./Redux/action";
import Cart from "../pages/Cart";

const Navbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.sign.isLoggedIn); // Access the logged-in status from the Redux store
  console.log("Is Logged In:", isLoggedIn); 

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box
      as="nav"
      align="center"
      display="flex"
      justifyContent="space-around"
    
      wrap="wrap"
      padding="1rem"
      backgroundColor="#212121"
      color="#fff"
      height="100px"
    >
      {/* Logo Section */}
      <Box>
        <Link to="/">
          <Box width="60px" height="60px"> {/* Set desired image size */}
            <Image
              src="https://www.tatacliq.com/src/general/components/img/group.svg"
              alt="Tata CLiQ Logo"
              width="100%"
              height="100%"
            />
          </Box>
        </Link>
      </Box>

<Box>
      {/* Links and Filters Section */}
      <Box display="flex" alignItems="flex-end" w={"100%"}gap={4} p="3px" m="0px" bg="black">
        <Box mr="300px">
          <Link to="/luxury">Tata CLiQ Luxury</Link>
        </Box>

        <Stack
          direction={{ base: "column", md: "row" }} // Stack vertically on small screens
          spacing={10}
          alignItems="center"
        >
          <Link to="/cliqcash">CLiQ Cash</Link>
          <Link to="/giftcard">Gift Card</Link>
          <Link to="/cliqcare">CLiQ Care</Link>
          <Link to="/trackorder">Track Orders</Link>
 
          {/* Sign in / Sign Up */}
          {!isLoggedIn ? (
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/signin">
                  Sign in
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/signup">
                  Sign Up
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          ) : (
            <Text onClick={handleLogout} >
              Logout
            </Text>
          )}
        </Stack>
        <Box w="150px"/>
      </Box>

      {/* Filters Section */}
      <Box display="flex" alignItems="center" gap={4}>
        <Categoryfilter />
        <BrandFilter />
        <Search />
       <Text as={Link} to="/cart">Cart</Text>
      </Box>
    </Box>
    </Box>
  );
};

export default Navbar;
