import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

const ProductList = () => {
    const { state, dispatch } = useCart();

    const handleIncrement = (id) => {
        dispatch({ type: 'INCREMENT', payload: id });
    };

    const handleDecrement = (id) => {
        dispatch({ type: 'DECREMENT', payload: id });
    };

    return (
        <div id="cart-items-list">
            {state.cart.length === 0 ? (
                <p>Cart is currently empty</p>
            ) : (
                state.cart.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onIncrement={() => handleIncrement(item.id)}
                        onDecrement={() => handleDecrement(item.id)}
                    />
                ))
            )}
        </div>
    );
};

export default ProductList;