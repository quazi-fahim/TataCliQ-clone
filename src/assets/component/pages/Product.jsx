import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../utils/Redux/fetchdata/action';
import {
  Box,
  Button,
  Grid,
  Image,
  Text,
  Stack,
  Heading,
  Spinner,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

const Product = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.product);
    const [filteredData, setFilteredData] = useState(products); // Initialize with full product list
    const [category, setCategory] = useState('all'); // 'all', 'men', 'women'

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        // Filter products when the category is updated
        if (category === 'all') {
            setFilteredData(products);
        } else {
            setFilteredData(products.filter(product => product.category === category));
        }
    }, [category, products]);

    const handleFilterChange = (category) => {
        setCategory(category); // Update category state
    };

    if (loading) return <Spinner />;
    if (error) return (
        <Alert status="error">
            <AlertIcon />
            Error: {error}
        </Alert>
    );

    return (
        <Box>
            <Stack direction="row" spacing={4} mb={4}>
                <Button onClick={() => handleFilterChange('all')}>All</Button>
                <Button onClick={() => handleFilterChange('men')}>Men</Button>
                <Button onClick={() => handleFilterChange('women')}>Women</Button>
            </Stack>
            
            <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
                {filteredData.map(product => (
                    <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
                        <Link to={`/products/${product.id}`}>
                            <Image src={product.image} alt={product.name} objectFit="cover" />
                        </Link>
                        <Box p={4}>
                            <Heading as="h3" size="md">{product.name}</Heading>
                            
                            <Link to={`/products/${product.id}`}>
                               
                            </Link>
                        </Box>
                    </Box>
                ))}
            </Grid>
        </Box>
    );
};

export default Product;
