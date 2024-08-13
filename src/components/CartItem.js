import React from 'react';

const CartItem = ({ item, onIncrement, onDecrement }) => (
    <div>
        <span id={`cart-item-price-${item.id}`}>{item.price}</span>
        <span id={`cart-amount-${item.id}`}>{item.quantity}</span>
        <button id={`increment-btn-${item.id}`} onClick={onIncrement}>+</button>
        <button id={`decrement-btn-${item.id}`} onClick={onDecrement}>-</button>
    </div>
);

export default CartItem;