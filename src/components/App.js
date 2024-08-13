import React from 'react';
import { CartProvider } from '../context/CartContext';
import Navbar from './Navbar';
import ProductList from './ProductList';
import CartTotal from './CartTotal';
import ClearCartButton from './ClearCartButton';

const App = () => (
    <CartProvider>
        <div id="main">
            <Navbar />
            <ProductList />
            <CartTotal />
            <ClearCartButton />
        </div>
    </CartProvider>
);

export default App;