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
import { Link, useLocation } from 'react-router-dom';

const Search = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const location = useLocation();

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
    setSearchTerm('');
    setIsFocused(false);
  }, [location]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClosePopover = () => {
    setSearchTerm('');
    setIsFocused(false);
  };

  const filteredProducts = products.filter(product => {
    const searchWords = searchTerm.toLowerCase().split(' ');

    return searchWords.every(word => 
      product.title.toLowerCase().includes(word) ||
      product.brand.toLowerCase().includes(word) ||
      product.category.toLowerCase().includes(word)
    );
  });

  return (
    <Box>
      <Popover isOpen={isFocused || searchTerm.length > 0} onClose={() => setIsFocused(false)}>
        <PopoverTrigger>
          <InputGroup>
            <Input
              type="text"
              color="black"
              placeholder="Search by brand or product"
              value={searchTerm}
              w="500px"
              onChange={handleSearchChange}
              onFocus={() => setIsFocused(true)} // Open the popover on focus
              backgroundColor={isFocused || searchTerm.length > 0 ? 'white' : '#4A4A4'}
              transition="background-color 0.3s, border-color 0.3s"
              borderColor={isFocused || searchTerm.length > 0 ? 'gray.300' : 'gray.400'}
              _hover={{ borderColor: 'white' }}
              _focus={{
                borderColor: 'white',
                boxShadow: 'none',
              }}
            />
            {searchTerm.length > 0 && (
              <InputRightElement>
                <Button 
                  variant="link" 
                  onClick={handleClosePopover}
                  aria-label="Close"
                >
                  &times;
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
                    <Link to={`/product/${product.id}`}>
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
