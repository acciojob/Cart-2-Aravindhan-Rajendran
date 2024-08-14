// src/context/CartContext.js
import React, { createContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                items: [...state.items, action.payload],
                totalItems: state.totalItems + 1,
                totalAmount: state.totalAmount + action.payload.price,
            };
        case "INCREMENT_ITEM":
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
                totalItems: state.totalItems + 1,
                totalAmount: state.totalAmount + action.payload.price,
            };
        case "DECREMENT_ITEM":
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
                totalItems: state.totalItems - 1,
                totalAmount: state.totalAmount - action.payload.price,
            };
        case "REMOVE_ITEM":
            const itemToRemove = state.items.find(item => item.id === action.payload.id);
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
                totalItems: state.totalItems - itemToRemove.quantity,
                totalAmount: state.totalAmount - (itemToRemove.price * itemToRemove.quantity),
            };
        case "CLEAR_CART":
            return {
                items: [],
                totalItems: 0,
                totalAmount: 0,
            };
        default:
            return state;
    }
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        items: [],
        totalItems: 0,
        totalAmount: 0,
    });

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };