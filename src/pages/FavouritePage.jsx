import React, { useState } from "react";
import { Link } from "react-router";

const FavouritePage = () => {
  const [favourites, setFavourites] = useState([
    {
      id: 1,
      name: "Producto A",
      price: "20€",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Producto B",
      price: "10€",
      image: "https://via.placeholder.com/150",
    },
  ]);

  const removeFavourite = (id) => {
    setFavourites(favourites.filter((product) => product.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
      {/* Header */}
      <header className="bg-amber-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Productos Favoritos</h1>
        <Link
          to="/"
          className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
        >
          Inicio
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center p-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          Tus Productos Favoritos
        </h1>
        <p className="text-lg text-amber-800 mb-6 max-w-lg">
          Aquí puedes gestionar los productos que has marcado como favoritos.
          Puedes eliminarlos o añadirlos al carrito.
        </p>

        {/* Favourite Products List */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favourites.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-lg text-amber-800 mb-2">
                Precio: {product.price}
              </p>
              <div className="flex flex-col space-y-2">
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                  Añadir al Carrito
                </button>
                <button
                  onClick={() => removeFavourite(product.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Quitar de Favoritos
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-amber-600 text-white py-3 text-center text-sm">
        &copy; {new Date().getFullYear()} Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default FavouritePage;
