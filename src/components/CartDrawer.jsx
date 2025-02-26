/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartDrawer = ({ onClose }) => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6 flex flex-col">
            <button onClick={onClose} className="text-right text-red-600">✕</button>
            <h2 className="text-xl font-bold mb-4">🛒 Tu Carrito</h2>
            {cart.length === 0 ? (
                <p className="text-gray-600">El carrito está vacío.</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between mb-4">
                        <img src={item.image_url} alt={item.name} className="w-16 h-16 rounded-lg" />
                        <p>{item.name}</p>
                        <p>{item.price}€</p>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-600">🗑</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default CartDrawer;
