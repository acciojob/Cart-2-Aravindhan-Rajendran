const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            // Logic to add item to cart
            return { ...state, cart: [...state.cart, action.payload] };
        case 'REMOVE_ITEM':
            // Logic to remove item from cart
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
        case 'INCREMENT':
            // Logic to increment item quantity
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };
        case 'DECREMENT':
            // Logic to decrement item quantity
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                        : item
                ),
            };
        case 'CLEAR_CART':
            return { cart: [] };
        default:
            return state;
    }
};

export default cartReducer;