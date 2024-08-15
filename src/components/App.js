import React, { createContext, memo, useReducer, useState } from 'react';
import './App.css';
import { Reducer, initialState } from './Reducer';

export const Datacontext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [list, setList] = useState(state.arraydata);

  const array = [
    {
      id: 1,
      title: "Samsung Galaxy S7",
      price: 599.99,
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png",
      amount: 1,
    },
    {
      id: 2,
      title: "Google Pixel",
      price: 499.99,
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png",
      amount: 1,
    },
    {
      id: 3,
      title: "Xiaomi Redmi Note 2",
      price: 699.99,
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png",
      amount: 1,
    },
  ];

  const handleRemoveItem = (item) => {
    setList((list) => list.filter((elem) => elem.title !== item.title));
  };

  const total = () => {
    let sum = 0;
    list.forEach(item => {
      sum += item.amount * item.price;
    });
    return sum;
  };

  const increment = (i) => {
    setList(list => {
      const newList = [...list];
      newList[i].amount++;
      return newList;
    });
  };

  const decrement = (i) => {
    setList(list => {
      const newList = [...list];
      if (newList[i].amount === 1) {
        newList.splice(i, 1);
      } else {
        newList[i].amount--;
      }
      return newList;
    });
  };

  const navCount = () => {
    let count = 0;
    list.forEach(item => {
      count += item.amount;
    });
    return count;
  };

  return (
    <Datacontext.Provider value={{ list, increment, decrement }}>
      <div id="main">
        <nav className="navbar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          (<span id="nav-cart-item-count">{navCount()}</span> Items)
          <h1>useReducer</h1>
        </nav>

        {list.length > 0 && (
          <div id="cart-items-list">
            {list.map((item, i) => (
              <div className="cart-item" key={item.id}>
                <img src={item.img} alt={item.title} />
                <h4>{item.title}</h4>
                <p id={`cart-item-price-${item.id}`}>Price: {item.price}</p>
                <button id={`decrement-btn-${item.id}`} onClick={() => decrement(i)}>
                  -
                </button>
                <span id={`cart-amount-${item.id}`}>{item.amount}</span>
                <p>Amount: {(item.price * item.amount).toFixed(2)}</p>
                <button id={`increment-btn-${item.id}`} onClick={() => increment(i)}>
                  +
                </button>
                <button onClick={() => handleRemoveItem(item)} id={`cart-item-remove-${item.id}`}>
                  Remove
                </button>
              </div>
            ))}
            <p id="cart-total-amount">$ {total().toFixed(2)}</p>
            <button onClick={() => setList([])} id="clear-all-cart">
              Clear All
            </button>
          </div>
        )}

        {list.length === 0 && <p>Cart is currently empty</p>}
      </div>
    </Datacontext.Provider>
  );
};

export default memo(App);
