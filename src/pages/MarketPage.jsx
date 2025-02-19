import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const API_URL = import.meta.env.VITE_API_URL; // URL del backend desde .env

const MarketPage = ({ isGestor }) => {
  const [search, setSearch] = useState("");
  const [sortByPrice, setSortByPrice] = useState("asc");
  const [filterCategory, setFilterCategory] = useState(""); // Estado para categoría seleccionada
  const [filterAssociation, setFilterAssociation] = useState(""); // Estado para asociación seleccionada
  const [favourites, setFavourites] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [associations, setAssociations] = useState([]);

  // Obtener productos, categorías y asociaciones desde el backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener productos
        const productResponse = await fetch(`${API_URL}/api/products`);
        const productData = await productResponse.json();
        setProducts(productData);

        // Obtener categorías
        const categoryResponse = await fetch(`${API_URL}/api/categories`);
        const categoryData = await categoryResponse.json();
        setCategories(categoryData);

        // Obtener asociaciones
        const associationResponse = await fetch(`${API_URL}/api/associations`);
        const associationData = await associationResponse.json();
        setAssociations(associationData);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSortChange = () => {
    setSortByPrice(sortByPrice === "asc" ? "desc" : "asc");
  };

  const toggleFavourite = (product) => {
    setFavourites((prev) =>
      prev.some((fav) => fav.id === product.id)
        ? prev.filter((fav) => fav.id !== product.id)
        : [...prev, product]
    );
  };

  // Filtrar productos por categoría y asociación
  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) &&
        (filterCategory ? product.category_id == filterCategory : true) &&
        (filterAssociation ? product.association_id == filterAssociation : true)
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

          {/* Filtro de Categoría */}
          <label className="block mb-2">Categoría:</label>
          <select
            className="w-full p-2 border rounded-lg mb-4"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">Todas</option>
            {categories.length > 0 ? (
              categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))
            ) : (
              <option value="">No hay categorías disponibles</option>
            )}
          </select>

          {/* Filtro de Asociación */}
          <label className="block mb-2">Asociación:</label>
          <select
            className="w-full p-2 border rounded-lg mb-4"
            value={filterAssociation}
            onChange={(e) => setFilterAssociation(e.target.value)}
          >
            <option value="">Todas</option>
            {associations.length > 0 ? (
              associations.map((association) => (
                <option key={association.id} value={association.id}>
                  {association.name}
                </option>
              ))
            ) : (
              <option value="">No hay asociaciones disponibles</option>
            )}
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
            {filteredProducts.length === 0 ? (
              <p className="text-xl text-gray-600">
                No hay productos disponibles
              </p>
            ) : (
              <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="relative bg-white p-6 rounded-lg shadow-md text-center"
                  >
                    {/* Favorite Icon */}
                    <button
                      onClick={() => toggleFavourite(product)}
                      className="absolute top-3 right-3 text-2xl"
                    >
                      {favourites.some((fav) => fav.id === product.id) ? (
                        <span className="text-red-600">❤️</span>
                      ) : (
                        <span className="text-gray-400">🤍</span>
                      )}
                    </button>

                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-auto rounded-lg mb-4"
                    />
                    <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                    <p className="text-lg text-amber-800 mb-2">
                      Precio: {product.price}€
                    </p>
                    <div className="flex flex-col space-y-2">
                      <Link
                        to={`/product/${product.id}`}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                      >
                        Ver Producto
                      </Link>
                      <Link
                        to={`/association/${product.association_id}`}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                      >
                        Ver Asociación
                      </Link>
                      <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition">
                        Añadir al Carrito
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default MarketPage;
