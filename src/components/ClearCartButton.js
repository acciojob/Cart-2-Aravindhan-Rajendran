import React from 'react';
import { useCart } from '../context/CartContext';

const ClearCartButton = () => {
    const { dispatch } = useCart();

    return (
        <button id="clear-all-cart" onClick={() => dispatch({ type: 'CLEAR_CART' })}>
            Clear Cart
        </button>
    );
};

export default ClearCartButton;