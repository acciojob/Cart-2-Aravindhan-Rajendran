import React, { useReducer, useContext } from 'react';
import { CartProvider, CartContext } from '../context/CartContext'; // Ensure the path is correct
import './App.css';

const App = () => {
    const { state, dispatch } = useContext(CartContext);

    const handleIncrement = (id) => {
        dispatch({ type: 'INCREMENT', payload: id });
    };

    const handleDecrement = (id) => {
        dispatch({ type: 'DECREMENT', payload: id });
    };

    const handleRemove = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id });
    };

    const handleClearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    return (
        <div id="main">
            <nav>
                <h1>Shopping Cart</h1>
                <div id="nav-cart-item-count">
                    {state.totalItems}
                </div>
                <p>useReducer</p>
            </nav>
            <button id="clear-all-cart" onClick={handleClearCart}>
                Clear Cart
            </button>
            {state.items.length === 0 ? (
                <p>Cart is currently empty</p>
            ) : (
                <ul id="cart-items-list">
                    {state.items.map((item) => (
                        <li key={item.id}>
                            <span id={`cart-item-name-${item.id}`}>{item.name}</span>
                            <span id={`cart-item-price-${item.id}`}>${item.price}</span>
                            <span id={`cart-amount-${item.id}`}>{item.quantity}</span>
                            <button
                                id={`increment-btn-${item.id}`}
                                onClick={() => handleIncrement(item.id)}
                            >
                                +
                            </button>
                            <button
                                id={`decrement-btn-${item.id}`}
                                onClick={() => handleDecrement(item.id)}
                            >
                                -
                            </button>
                            <button
                                id={`cart-item-remove-${item.id}`}
                                onClick={() => handleRemove(item.id)}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            {state.totalAmount}
        </div>
    );
};

export default App;