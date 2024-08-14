import React from 'react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav>
      <div>Cart</div>
      <div id="nav-cart-item-count">{totalItems}</div>
    </nav>
  );
};

export default Navbar;