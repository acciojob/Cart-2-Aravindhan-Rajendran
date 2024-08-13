import React from 'react';
import { useCart } from '../context/CartContext';

const ClearCartButton = () => {
    const { dispatch } = useCart();

    const handleClearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    return (
        <button id="clear-all-cart" onClick={handleClearCart}>
            Clear Cart
        </button>
    );
};

export default ClearCartButton;
