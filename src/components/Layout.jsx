/* eslint-disable react/prop-types */
import Header from "./Header";
import Footer from "./Footer";
import FloatingCartButton from "./FloatingCartButton";
import CartDrawer from "./CartDrawer";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Layout = ({ children }) => {
  const { isOpen } = useContext(CartContext);
  return (
    <>
      <FloatingCartButton />
      {isOpen && <CartDrawer />}
      <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900 overflow-x-hidden">
        <Header />
        <main className="flex flex-1 flex-col items-center justify-center">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
