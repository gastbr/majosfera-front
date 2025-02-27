import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router";

const OrderPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container flex flex-col items-center min-h-screen p-4">
      {/* White area with the cart content */}
      <div className="p-4 md:p-6 lg:p-8 bg-stone-100 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-800 md:text-3xl lg:text-4xl mb-6">Tu pedido</h2>

        {/* Table-like layout for product information */}
        <div className="grid grid-cols-5 gap-4 text-gray-600 font-medium mb-4 border-b pb-2">
          <span>Imagen</span>
          <span>Nombre</span>
          <span>Cantidad</span>
          <span>Precio</span>
          <span>Acciones</span>
        </div>
        <ul className="divide-y divide-gray-200">
          {cart.map((item) => (
            <li key={item.id} className="py-4 grid grid-cols-5 gap-4 items-center">
              <div className="flex items-center">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg"
                />
              </div>
              <span className="text-lg font-medium text-gray-800 md:text-xl">{item.name}</span>
              <span className="text-lg font-medium text-gray-800 md:text-xl">{item.quantity}</span>
              <span className="text-lg font-medium text-gray-800 md:text-xl">${item.price}</span>
              <div className="flex justify-end">
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-200"
                  onClick={() => removeFromCart(item.id)}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* "Continuar" button just below the white box, outside of it */}
      <div className="w-full max-w-4xl flex justify-end mt-4">
        <Link
          to="/payment"
          className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition duration-200 text-lg flex items-center gap-2 shadow-md"
        >
          Continuar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default OrderPage;