import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"; // Adjust the import path if necessary
import { CartProvider } from "./context/CartContext"; // Import the CartProvider to wrap the App component

ReactDOM.render(
    <React.StrictMode>
        <CartProvider>
            <App />
        </CartProvider>
    </React.StrictMode>,
    document.getElementById("root")
);