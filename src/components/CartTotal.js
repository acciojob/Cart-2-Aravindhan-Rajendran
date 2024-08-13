import React from 'react';
import { useCart } from '../context/CartContext';

const CartTotal = () => {
    const { state } = useCart();

    const totalAmount = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div id="cart-total-amount">
            Total: ${totalAmount.toFixed(2)}
        </div>
    );
};

export default CartTotal;