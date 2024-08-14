// src/components/App.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const App = () => {
    const { state, dispatch } = useContext(CartContext);

    const products = [
        { id: 1, name: "Product 1", price: 100 },
        { id: 2, name: "Product 2", price: 200 },
        { id: 3, name: "Product 3", price: 300 },
    ];

    const addToCart = (product) => {
        dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
    };

    const incrementItem = (product) => {
        dispatch({ type: "INCREMENT_ITEM", payload: product });
    };

    const decrementItem = (product) => {
        dispatch({ type: "DECREMENT_ITEM", payload: product });
    };

    const removeItem = (product) => {
        dispatch({ type: "REMOVE_ITEM", payload: product });
    };

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };

    return (
        <div id="main">
            <nav>
                <h1>Shopping Cart</h1>
                <div id="nav-cart-item-count">
                    Cart Items: {state.totalItems}
                </div>
            </nav>

            <div>
                <h2>Products</h2>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            {product.name} - ${product.price}
                            <button onClick={() => addToCart(product)}>
                                Add to Cart
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2>Cart</h2>
                <ul id="cart-items-list">
                    {state.items.length === 0 ? (
                        <p>Cart is currently empty</p>
                    ) : (
                        state.items.map((item) => (
                            <li key={item.id}>
                                {item.name} - ${item.price} x {item.quantity}
                                <button
                                    id={`increment-btn-${item.id}`}
                                    onClick={() => incrementItem(item)}
                                >
                                    +
                                </button>
                                <button
                                    id={`decrement-btn-${item.id}`}
                                    onClick={() => decrementItem(item)}
                                >
                                    -
                                </button>
                                <button
                                    onClick={() => removeItem(item)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))
                    )}
                </ul>

                <button id="clear-all-cart" onClick={clearCart}>
                    Clear Cart
                </button>

                <div id="cart-total-amount">
                    Total Amount: ${state.totalAmount}
                </div>
            </div>
        </div>
    );
};

export default App;