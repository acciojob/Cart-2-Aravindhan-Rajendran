import React, { createContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const initialState = {
    items: [],
    totalItems: 0,
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            // Handle adding an item
            return {
                ...state,
                items: [...state.items, action.payload],
                totalItems: state.totalItems + 1,
                totalAmount: state.totalAmount + action.payload.price * action.payload.quantity,
            };
        case 'INCREMENT':
            // Handle incrementing quantity
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
                totalAmount: state.totalAmount + state.items.find(item => item.id === action.payload).price,
            };
        case 'DECREMENT':
            // Handle decrementing quantity
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
                totalAmount: state.totalAmount - state.items.find(item => item.id === action.payload).price,
            };
        case 'REMOVE_ITEM':
            // Handle removing an item
            const itemToRemove = state.items.find(item => item.id === action.payload);
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
                totalItems: state.totalItems - 1,
                totalAmount: state.totalAmount - (itemToRemove.price * itemToRemove.quantity),
            };
        case 'CLEAR_CART':
            // Handle clearing the cart
            return {
                ...state,
                items: [],
                totalItems: 0,
                totalAmount: 0,
            };
        default:
            return state;
    }
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Add example products when the app initializes
    useEffect(() => {
        const exampleProducts = [
            { id: 1, name: 'Product 1', price: 10.00, quantity: 1 },
            { id: 2, name: 'Product 2', price: 20.00, quantity: 1 },
            { id: 3, name: 'Product 3', price: 30.00, quantity: 1 },
            { id: 4, name: 'Product 4', price: 30.00, quantity: 1 },
        ];

        exampleProducts.forEach(product =>
            dispatch({ type: 'ADD_ITEM', payload: product })
        );
    }, []);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };