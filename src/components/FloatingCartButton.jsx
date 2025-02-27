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
                className={`fixed z-100 bottom-4 md:bottom-6 right-6 bg-sky-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-sky-500 transition ${animate ? "animate-bounce" : ""
                    }`}
                onClick={() => setIsOpen(true)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>

            </button>
            {isOpen && <CartDrawer onClose={() => setIsOpen(false)} />}
        </>
    );
};

export default FloatingCartButton;