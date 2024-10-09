// cartActions.js
import axios from 'axios';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_CART_ITEMS = 'SET_CART_ITEMS';

const API_URL = 'http://localhost:3000/cart'; // Adjust the URL according to your JSON Server setup

// Action to set cart items from the server
export const setCartItems = (cartItems) => ({
    type: SET_CART_ITEMS,
    payload: cartItems,
});

// Add item to cart and post to db.json
export const addToCart = (product) => {
    return async (dispatch) => {
        const response = await axios.post(API_URL, product);
        dispatch({
            type: ADD_TO_CART,
            payload: response.data, // Get the added product data
        });
    };
};

// Remove item from cart and delete from db.json
export const removeFromCart = (id) => {
    return async (dispatch) => {
        await axios.delete(`${API_URL}/${id}`); // Delete from db.json
        dispatch({
            type: REMOVE_FROM_CART,
            payload: id,
        });
    };
};

// Fetch cart items from db.json
export const fetchCartItems = () => {
    return async (dispatch) => {
        const response = await axios.get(API_URL);
        dispatch(setCartItems(response.data)); // Dispatch the fetched items to the reducer
    };
};
