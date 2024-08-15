import React, { createContext, memo, useReducer } from 'react';
import '../styles/App.css';
import { Reducer, initialState } from './Reducer';

export const Datacontext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const handleRemoveItem = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  const increment = (item) => {
    dispatch({ type: 'INCREMENT', payload: item });
  };

  const decrement = (item) => {
    dispatch({ type: 'DECREMENT', payload: item });
  };

  const total = () => {
    return state.reduce((acc, item) => acc + item.amount * item.price, 0);
  };

  const navCount = () => {
    return state.reduce((acc, item) => acc + item.amount, 0);
  };

  return (
    <Datacontext.Provider value={{ state, increment, decrement }}>
      <div id='main'>
        <nav className='navbar'>
          {/* SVG and other elements */}
          (<span id='nav-cart-item-count'>{navCount()}</span> Items)
          <h1>useReducer</h1>
        </nav>
        {state.length > 0 ? (
          <div id='cart-items-list'>
            {state.map((item) => (
              <div className='cart-item' key={item.id}>
                <img src={item.img} alt={item.title} />
                <h4>{item.title}</h4>
                <p id={'cart-item-price-' + item.id}>Price: {item.price}</p>
                <button id={'decrement-btn-' + item.id} onClick={() => decrement(item)}>-</button>
                <span id={'cart-amount-' + item.id}>{item.amount}</span>
                <p>Amount: {(item.price * item.amount).toFixed(2)}</p>
                <button id={'increment-btn-' + item.id} onClick={() => increment(item)}>+</button>
                <button onClick={() => handleRemoveItem(item)} id={'cart-item-remove-' + item.id}>Remove</button>
              </div>
            ))}
            <p id='cart-total-amount'>$ {total().toFixed(2)}</p>
            <button onClick={() => dispatch({ type: 'CLEAR_ALL' })} id='clear-all-cart'>Clear All</button>
          </div>
        ) : (
          <p>Cart is currently empty</p>
        )}
      </div>
    </Datacontext.Provider>
  );
}

export default memo(App);
