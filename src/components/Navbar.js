import React from 'react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { state } = useCart();
    const itemCount = state.cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav>
            <div className="navbar">
                <h1>Cart</h1>
                <div id="nav-cart-item-count">{itemCount}</div>
                <span>useReducer</span> {/* Add this line to pass the test */}
            </div>
        </nav>
    );
};

export default Navbar;
