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
                totalItems: state.totalItems + action.payload.quantity, // Increase by item quantity
                totalAmount: state.totalAmount + action.payload.price * action.payload.quantity,
            };
        case 'INCREMENT':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
                totalItems: state.totalItems + 1, // Increment total items count
                totalAmount: state.totalAmount + state.items.find(item => item.id === action.payload).price,
            };
        case 'DECREMENT':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
                totalItems: state.totalItems > 0 ? state.totalItems - 1 : 0, // Decrement total items count
                totalAmount: state.totalAmount - state.items.find(item => item.id === action.payload).price,
            };
        case 'REMOVE_ITEM':
            const itemToRemove = state.items.find(item => item.id === action.payload);
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
                totalItems: state.totalItems - itemToRemove.quantity, // Decrease by item quantity
                totalAmount: state.totalAmount - (itemToRemove.price * itemToRemove.quantity),
            };
        case 'CLEAR_CART':
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
            { id: 1, name: 'Product 1', price: 500.00, quantity: 1 },
            { id: 2, name: 'Product 2', price: 1000.00, quantity: 1 },
            { id: 3, name: 'Product 3', price: 200.00, quantity: 1 },
            { id: 4, name: 'Product 4', price: 299.97, quantity: 1 },
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