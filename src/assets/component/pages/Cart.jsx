import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const CartPage = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch(handleRemoveFromCart(id));
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CartPage;
