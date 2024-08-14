import React from 'react';
import { useCart } from '../context/CartContext';

const CartItemsList = () => {
  const { cart, dispatch } = useCart();

  const handleIncrement = (id) => {
    dispatch({ type: 'INCREMENT_ITEM', payload: { id } });
  };

  const handleDecrement = (id) => {
    dispatch({ type: 'DECREMENT_ITEM', payload: { id } });
  };

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  if (cart.length === 0) {
    return <p>Cart is currently empty</p>;
  }

  return (
    <ul id="cart-items-list">
      {cart.map(item => (
        <li key={item.id}>
          <div>{item.name}</div>
          <div id={`cart-item-price-${item.id}`}>{item.price}</div>
          <div id={`cart-amount-${item.id}`}>{item.quantity}</div>
          <button id={`increment-btn-${item.id}`} onClick={() => handleIncrement(item.id)}>+</button>
          <button id={`decrement-btn-${item.id}`} onClick={() => handleDecrement(item.id)}>-</button>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default CartItemsList;