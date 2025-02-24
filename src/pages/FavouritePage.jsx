import { useState } from "react";
// import { Link } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900 overflow-x-hidden">
      <Header />
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center p-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          Tus Productos Favoritos
        </h1>
        <p className="text-lg text-amber-800 mb-6 max-w-lg">
          Aquí puedes gestionar los productos que has marcado como favoritos.
          Puedes eliminarlos o añadirlos al carrito.
        </p>

        {/* Listado de Productos Favoritos */}
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favourites.map((product) => (
            <div
              key={product.id}
              className="relative bg-white p-6 rounded-lg shadow-md text-center"
            >
              {/* Botón de eliminar favorito */}
              <button
                onClick={() => removeFavourite(product.id)}
                className="absolute top-2 right-2 flex items-center justify-center p-1 rounded-full bg-white hover:bg-gray-100 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>

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
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FavouritePage;
