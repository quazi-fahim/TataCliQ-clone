import React, { useState, useEffect } from 'react';
import {
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  List,
  ListItem,
  Box,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom

const Search = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false); // State to track focus

  const location = useLocation(); // Hook to get the current route

  // Fetch products from the JSON server
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:3000/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // Reset search input and close popover when navigating to a different route
  useEffect(() => {
    setSearchTerm(''); // Clear the search term
    setIsFocused(false); // Close the popover
  }, [location]); // Trigger when the route changes

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClosePopover = () => {
    setSearchTerm(''); // Clear the search term
    setIsFocused(false); // Close the popover
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <Popover isOpen={searchTerm.length > 0}>
        <PopoverTrigger>
          <InputGroup>
            <Input

              type="text"
              color="black"
              placeholder="Search by brand or product"
              value={searchTerm}
              w={{base:"100%",md:"300px"}}
              onChange={handleSearchChange}
              onFocus={() => setIsFocused(true)} // Open the popover on focus
              onBlur={() => setIsFocused(false)} // Close the popover on blur
              backgroundColor={isFocused || searchTerm.length > 0 ? 'white' : '#4A4A4'} // Change background based on focus
              transition="background-color 0.3s, border-color 0.3s" // Smooth transition for background and border color change
              borderColor={isFocused || searchTerm.length > 0 ? 'gray.300' : 'gray.400'} // Change border color based on focus
              _hover={{ borderColor: 'white' }} // Change border color on hover
              _focus={{
                borderColor: 'white', // Change border color to white on focus
                boxShadow: 'none', // Remove default blue outline (box shadow)
              }}
            />
            {searchTerm.length > 0 && ( // Show cross button only if searchTerm is not empty
              <InputRightElement>
                <Button 
                  variant="link" 
                  onClick={handleClosePopover} // Close popover when clicked
                  aria-label="Close"
                >
                  &times; {/* Cross icon (times) */}
                </Button>
              </InputRightElement>
            )}
          </InputGroup>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody>
            <List spacing={2} p="4px" m="2px" color="black">
              {filteredProducts.length > 0 ? (
                filteredProducts.slice(0, 10).map(product => (
                  <ListItem key={product.id}>
                    <Link to={`/products/${product.id}`}> {/* Link to product details page */}
                      {product.name} - {product.category} - {product.brand} - {product.title}
                    </Link>
                  </ListItem>
                ))
              ) : (
                <ListItem>No products found</ListItem>
              )}
            </List>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default Search;