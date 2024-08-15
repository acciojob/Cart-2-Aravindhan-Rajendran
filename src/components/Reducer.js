export const initialState = [
  {
    id: 1,
    title: "Samsung Galaxy S7",
    price: 599.99,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png",
    amount: 1
  },
  {
    id: 2,
    title: "Google Pixel",
    price: 499.99,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png",
    amount: 1
  },
  {
    id: 3,
    title: "Xiaomi Redmi Note 2",
    price: 300.00,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png",
    amount: 1
  },
  {
    id: 4,
    title: "sdddfvdd",
    price: 699.99,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png",
    amount: 1
  }
];

export const Reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, amount: item.amount + 1 }
          : item
      );
    case 'DECREMENT':
      return state.map(item =>
        item.id === action.payload.id && item.amount > 1
          ? { ...item, amount: item.amount - 1 }
          : item
      );
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload.id);
    case 'CLEAR_ALL':
      return [];
    default:
      return state;
  }
};