/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartDrawer = ({ onClose }) => {
    const { cart, removeFromCart } = useContext(CartContext);

    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    return (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6 flex flex-col z-50">
            <button onClick={onClose} className="text-right text-red-600 text-2xl">✕</button>
            <h2 className="text-3xl font-bold mb-4">🛒 Tu Carrito</h2>
            {cart.length === 0 ? (
                <p className="text-gray-600 text-lg">El carrito está vacío.</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between mb-6 p-4 border-b border-gray-200">
                        <img src={item.image_url} alt={item.name} className="w-20 h-20 rounded-lg" />
                        <div className="ml-4">
                            <p className="text-lg font-bold">{item.name}</p>
                            <p className="text-lg">{item.price}€</p>
                            <p className="text-lg">x{item.quantity}</p>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-600 text-2xl ml-4">🗑</button>
                    </div>
                ))
            )}
            {cart.length > 0 && (
                <div className="mt-6 p-4 border-t border-gray-200">
                    <p className="text-lg font-bold">Total:</p>
                    <p className="text-2xl font-bold">{calculateTotal()}€</p>
                </div>
            )}
        </div>
    );
};

export default CartDrawer;
