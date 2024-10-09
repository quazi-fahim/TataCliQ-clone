// CartPage.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems, removeFromCart } from '../utils/Redux/cart/cartaction'; // Ensure this path is correct
import { Box, Button, Center, Image } from "@chakra-ui/react";

const CartPage = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCartItems()); // Fetch items when the component mounts
    }, [dispatch]);

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2); // Format to two decimal places

    return (<Box>
        <Box m="10px" w={{base:"100%",md:"100%"}} bg={"goldenrod"} color="white">Total Price: ${totalPrice}</Box>
        <Button bg={"goldenrod"}>Buynow</Button>
        <Center>
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        {cartItems.map(item => (
                            <div key={item.id} style={{ margin: '20px 0' }}>
                                <Image 
                                    src={item.image} 
                                    alt={item.name} 
                                    objectFit="cover" 
                                    boxSize="150px" 
                                    borderRadius="md"
                                />
                                <h2>{item.name}</h2>
                                <p>Price: ${item.price.toFixed(2)}</p>

                                <Button bg="lightblue" onClick={() => handleRemoveFromCart(item.id)}>
                                    Remove
                                </Button>
                            </div>
                        ))}
                       
                    </div>
                )}
            </div>
            
        </Center>
        
        </Box>
    );
};

export default CartPage;
