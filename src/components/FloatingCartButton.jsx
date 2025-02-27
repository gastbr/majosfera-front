import { useState, useEffect } from "react";
import CartDrawer from "./CartDrawer";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const FloatingCartButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [animate, setAnimate] = useState(false);
    const { cart } = useContext(CartContext);

    useEffect(() => {
        if (cart.length > 0) {
            setAnimate(true);
            setTimeout(() => {
                setAnimate(false);
            }, 500);
        }
    }, [cart]);

    return (
        <>
            <button
                className={`z-50 fixed bottom-6 right-6 bg-sky-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-sky-500 transition ${animate ? "animate-bounce" : ""
                    }`}
                onClick={() => setIsOpen(true)}
            >
                🛒 Ver Carrito
            </button>
            {isOpen && <CartDrawer onClose={() => setIsOpen(false)} />}
        </>
    );
};

export default FloatingCartButton;