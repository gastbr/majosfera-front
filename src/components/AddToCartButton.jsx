/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const AddToCartButton = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <button
            onClick={() => addToCart(product)}
            className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition"
        >
            Añadir al Carrito
        </button>
    );
};

export default AddToCartButton;
