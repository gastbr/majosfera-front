import React, { useState } from "react";
import { Link } from "react-router";

const OrderPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Producto A",
      price: 20,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Producto B",
      price: 10,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
      {/* Header */}
      <header className="bg-amber-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Resumen del Pedido</h1>
        <Link
          to="/"
          className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
        >
          Inicio
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center p-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Tu Pedido</h1>
        <p className="text-lg text-amber-800 mb-6 max-w-lg">
          Aquí puedes ver los productos que vas a comprar, modificar cantidades
          o eliminar artículos.
        </p>

        {/* Cart Items */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
              <p className="text-lg text-amber-800 mb-2">
                Precio: {item.price}€
              </p>
              <p className="text-lg text-amber-800 mb-2">
                Cantidad: {item.quantity}
              </p>
              <div className="flex justify-center space-x-2">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="bg-gray-300 px-3 py-1 rounded-lg hover:bg-gray-400 transition"
                >
                  -
                </button>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="bg-gray-300 px-3 py-1 rounded-lg hover:bg-gray-400 transition"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>

        {/* Total Amount */}
        <h2 className="text-2xl font-bold mt-6">Total: {totalAmount}€</h2>
        <Link
          to="/payment"
          className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition"
        >
          Confirmar Pedido
        </Link>
      </main>

      {/* Footer */}
      <footer className="bg-amber-600 text-white py-3 text-center text-sm">
        &copy; {new Date().getFullYear()} Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default OrderPage;
