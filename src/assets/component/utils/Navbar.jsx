import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Image,
  Box,
  Stack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import Search from "../pages/Search";
import Categoryfilter from "../pages/Categoryfilter";
import BrandFilter from "../pages/Brandfilter";
import { logout } from "./Redux/action";
import Cart from "../pages/Cart";
import { HamburgerIcon } from "@chakra-ui/icons"; // Import Hamburger Icon for the dropdown

const Navbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.sign.isLoggedIn);
  console.log("Is Logged In:", isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  // Determine whether to show the dropdown menu or not
  const isMobileOrMedium = useBreakpointValue({ base: true, md: true, lg: false });

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
      height={{ base: "130px", md: "120px" }}
    >
      {/* Logo Section */}
      <Box>
        <Link to="/">
          <Box width="60px" height="60px">
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
        <Box display="flex" alignItems="flex-end" w={{ base: "100%", md: "100%" }} gap={4} p="3px" m="0px" bg="black">
          {/* Conditionally Render "Tata CLiQ Luxury" only on larger screens */}
          {isMobileOrMedium ? (
            // Mobile Dropdown Menu for Medium and Small Screens
            <Menu>
              <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" flexDirection={"End"} />
              <MenuList color="black" textAlign="center">
                <MenuItem as={Link} to="/luxury">Tata CLiQ Luxury</MenuItem>
                <MenuItem as={Link} to="/cliqcash">CLiQ Cash</MenuItem>
                <MenuItem as={Link} to="/giftcard">Gift Card</MenuItem>
                <MenuItem as={Link} to="/cliqcare">CLiQ Care</MenuItem>
                <MenuItem as={Link} to="/trackorder">Track Orders</MenuItem>
                {!isLoggedIn ? (
                  <>
                    <MenuItem as={Link} to="/signin">Sign in</MenuItem>
                    <MenuItem as={Link} to="/signup">Sign Up</MenuItem>
                  </>
                ) : (
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                )}
              </MenuList>
            </Menu>
          ) : (
            <Stack direction={{ base: "row", md: "row" }} spacing={10} alignItems="center">
              {/* Render Links on Larger Screens */}
              <Box mr="300px">
                <Link to="/luxury">Tata CLiQ Luxury</Link>
              </Box>
              <Link to="/cliqcash">CLiQ Cash</Link>
              <Link to="/giftcard">Gift Card</Link>
              <Link to="/cliqcare">CLiQ Care</Link>
              <Link to="/trackorder">Track Orders</Link>
              {/* Sign in / Sign Up */}
              {!isLoggedIn ? (
                <Breadcrumb>
                  <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to="/signin">Sign in</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to="/signup">Sign Up</BreadcrumbLink>
                  </BreadcrumbItem>
                </Breadcrumb>
              ) : (
                <Text onClick={handleLogout}>Logout</Text>
              )}
            </Stack>
          )}
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
