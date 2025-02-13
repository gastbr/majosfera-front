import React, { useState } from "react";
import { Link } from "react-router";

const MarketPage = ({ isGestor }) => {
  const [search, setSearch] = useState("");
  const [sortByPrice, setSortByPrice] = useState("asc");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterAssociation, setFilterAssociation] = useState("");
  const [products] = useState([
    {
      id: 1,
      name: "Producto A",
      price: 20,
      image: "https://via.placeholder.com/150",
      category: "Categoría 1",
      association: "Asociación 1",
    },
    {
      id: 2,
      name: "Producto B",
      price: 10,
      image: "https://via.placeholder.com/150",
      category: "Categoría 2",
      association: "Asociación 2",
    },
  ]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSortChange = () => {
    setSortByPrice(sortByPrice === "asc" ? "desc" : "asc");
  };

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) &&
        (filterCategory ? product.category === filterCategory : true) &&
        (filterAssociation ? product.association === filterAssociation : true)
    )
    .sort((a, b) =>
      sortByPrice === "asc" ? a.price - b.price : b.price - a.price
    );

  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
      {/* Header */}
      <header className="bg-amber-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Marketplace de Productos</h1>
        <Link
          to="/"
          className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
        >
          Inicio
        </Link>
      </header>

      <div className="flex flex-1">
        {/* Sidebar Filters */}
        <aside className="w-1/4 p-6 bg-amber-100 shadow-md">
          <h2 className="text-xl font-bold mb-4">Filtros</h2>
          <label className="block mb-2">Categoría:</label>
          <select
            className="w-full p-2 border rounded-lg mb-4"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">Todas</option>
            <option value="Categoría 1">Categoría 1</option>
            <option value="Categoría 2">Categoría 2</option>
          </select>
          <label className="block mb-2">Asociación:</label>
          <select
            className="w-full p-2 border rounded-lg mb-4"
            value={filterAssociation}
            onChange={(e) => setFilterAssociation(e.target.value)}
          >
            <option value="">Todas</option>
            <option value="Asociación 1">Asociación 1</option>
            <option value="Asociación 2">Asociación 2</option>
          </select>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Search Bar & Sorting */}
          <div className="p-4 w-full max-w-4xl mx-auto flex justify-between items-center">
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              placeholder="Buscar producto..."
              value={search}
              onChange={handleSearchChange}
            />
            <button
              onClick={handleSortChange}
              className="ml-4 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition"
            >
              Ordenar {sortByPrice === "asc" ? "↓" : "↑"}
            </button>
          </div>

          {/* Product List */}
          <main className="flex-1 flex flex-col items-center p-6">
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
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
                    Precio: {product.price}€
                  </p>
                  <div className="flex flex-col space-y-2">
                    <Link
                      to={`/product/`}
                      // to={`/product/${product.id}`}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                    >
                      Ver Producto
                    </Link>
                    <Link
                      to={`/association`}
                      // to={`/association/${product.association}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      Ver Asociación
                    </Link>
                    <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition">
                      Añadir al Carrito
                    </button>
                    {isGestor && (
                      <>
                        <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition">
                          Editar Producto
                        </button>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                          Eliminar Producto
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-amber-600 text-white py-3 text-center text-sm">
        &copy; {new Date().getFullYear()} Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default MarketPage;
