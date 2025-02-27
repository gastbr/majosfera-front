/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router";

const CartDrawer = ({ onClose }) => {
    const { cart, removeFromCart } = useContext(CartContext);

    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="fixed top-0 right-0 w-80 h-full shadow-lg p-6 flex flex-col z-150 overflow-y-scroll bg-amber-100">
            <button onClick={onClose} className="text-right text-red-600 text-2xl">✕</button>
            <h2 className="text-3xl font-bold mb-4 bg-amber-100 flex items-center gap-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-14 text-amber-400 bg-sky-600 rounded-full p-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                Tu carrito</h2>
            {cart.length === 0 ? (
                <p className="text-gray-600 text-lg">El carrito está vacío.</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between mb-6 p-4 border-b border-stone-400">
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
                <div className="mt-6 p-4 border-t border-stone-400">
                    <p className="text-lg font-bold">Total:</p>
                    <p className="text-2xl font-bold">{calculateTotal()}€</p>
                </div>
            )}
            <Link to="/order" className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition ml-4 text-lg flex justify-center items-center gap-4">
                Realizar Pedido
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                </svg>
            </Link>
        </div>
    );
};

export default CartDrawer;
