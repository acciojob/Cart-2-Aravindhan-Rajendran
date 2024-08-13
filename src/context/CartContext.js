import React, { createContext, useReducer, useContext, useEffect } from 'react';
import cartReducer from '../reducers/cartReducer';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { cart: [] });

    // Initialize cart with sample products
    useEffect(() => {
        dispatch({
            type: 'ADD_ITEM',
            payload: { id: 1, price: 10.00, quantity: 1 }
        });
        dispatch({
            type: 'ADD_ITEM',
            payload: { id: 2, price: 20.00, quantity: 2 }
        });
    }, []);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);