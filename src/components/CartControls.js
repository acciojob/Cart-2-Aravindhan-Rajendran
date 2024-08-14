import React from 'react';
import { useCart } from '../context/CartContext';

const CartControls = () => {
  const { cart, dispatch } = useCart();

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div>
      <button id="clear-all-cart" onClick={handleClearCart}>Clear Cart</button>
      <div id="cart-total-amount">Total: ${totalAmount.toFixed(2)}</div>
    </div>
  );
};

export default CartControls;