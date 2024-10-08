import axios from "axios";

// Action Types
export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILED = "FETCH_PRODUCTS_FAILED";

// Fetch Products Action
export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_PRODUCTS_REQUEST });
        try {
            const res = await axios.get("http://localhost:3000/products");
            dispatch({
                type: FETCH_PRODUCTS_SUCCESS,
                payload: res.data,
            });
        } catch (error) {
            dispatch({
                type: FETCH_PRODUCTS_FAILED,
                payload: error.message,
            });
        }
    };
};
