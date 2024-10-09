// cartReducer.js

import { ADD_TO_CART, REMOVE_FROM_CART, SET_CART_ITEMS } from "./cartaction";

const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART_ITEMS:
            return {
                ...state,
                cartItems: action.payload,
            };
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
            };
        default:
            return state;
    }
};

export default cartReducer;
