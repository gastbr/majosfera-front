import React, { useState } from "react";
import { Link, useParams } from "react-router";

const ProductPage = () => {
  const { id } = useParams();
  const [favourites, setFavourites] = useState([]);
  const [product] = useState({
    name: "Producto Ejemplo",
    category: "Categoría 1",
    description: "Descripción detallada del producto.",
    price: "25€",
    stock: 10,
    image: "https://via.placeholder.com/300",
    association: "Asociación Ejemplo",
  });

  const toggleFavourite = (product) => {
    setFavourites((prev) =>
      prev.some((fav) => fav.id === product.id)
        ? prev.filter((fav) => fav.id !== product.id)
        : [...prev, product]
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
      {/* Header */}
      <header className="bg-amber-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Detalles del Producto</h1>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
          >
            Inicio
          </Link>
          <Link
            to="/market"
            className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
          >
            Tienda
          </Link>
          <Link
            to="/favourite"
            className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
          >
            Favoritos
          </Link>
          <Link
            to="/order"
            className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
          >
            Pedido
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center p-6 text-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-64 h-auto rounded-lg mb-4"
        />
        <h1 className="text-4xl font-extrabold mb-2">{product.name}</h1>
        <p className="text-lg text-amber-800 mb-2">
          <strong>Categoría:</strong> {product.category}
        </p>
        <p className="text-lg text-amber-800 mb-2">
          <strong>Precio:</strong> {product.price}
        </p>
        <p className="text-lg text-amber-800 mb-2">
          <strong>Stock:</strong> {product.stock} unidades
        </p>
        <p className="text-lg text-amber-800 mb-6 max-w-lg text-center">
          {product.description}
        </p>

        <div className="flex space-x-4 mt-4">
          <button
            onClick={() => toggleFavourite(product)}
            className={`px-4 py-2 rounded-lg text-lg transition ${
              favourites.some((fav) => fav.id === product.id)
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-gray-300 hover:bg-gray-400 text-black"
            }`}
          >
            {favourites.some((fav) => fav.id === product.id)
              ? "Quitar de Favoritos"
              : "Añadir a Favoritos"}
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition">
            Añadir al Carrito
          </button>
          <Link
            to={`/association/`}
            // to={`/association/${product.association}`}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Ver Asociación
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-amber-600 text-white py-3 text-center text-sm">
        &copy; {new Date().getFullYear()} Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default ProductPage;
