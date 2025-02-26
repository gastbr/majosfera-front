import { useState } from "react";
import CartDrawer from "./CartDrawer";

const FloatingCartButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 bg-amber-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-amber-700 transition"
            >
                🛒 Ver Carrito
            </button>
            {isOpen && <CartDrawer onClose={() => setIsOpen(false)} />}
        </>
    );
};

export default FloatingCartButton;
