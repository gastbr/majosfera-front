import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import Header from "../components/Header";

const API_URL = import.meta.env.VITE_API_URL; // URL del backend desde .env

const MarketPage = () => {
  // Inicializamos el parámetro "search" desde la URL
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const [search, setSearch] = useState(initialSearch);
  // Estado para el método de ordenación: "price" o "name"
  const [activeSort, setActiveSort] = useState("price");
  // Dirección de ordenación: "asc" o "desc"
  const [sortDirection, setSortDirection] = useState("asc");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterAssociation, setFilterAssociation] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [associations, setAssociations] = useState([]);

  // Obtener productos, categorías y asociaciones desde el backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await fetch(`${API_URL}/api/products`);
        const productData = await productResponse.json();
        setProducts(productData);

        const categoryResponse = await fetch(`${API_URL}/api/categories`);
        const categoryData = await categoryResponse.json();
        setCategories(categoryData);

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
    const value = e.target.value;
    setSearch(value);
    setSearchParams({ search: value });
  };

  // Alternar ordenación por precio
  const handleSortPrice = () => {
    if (activeSort === "price") {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setActiveSort("price");
      setSortDirection("asc");
    }
  };

  // Alternar ordenación por nombre
  const handleSortName = () => {
    if (activeSort === "name") {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setActiveSort("name");
      setSortDirection("asc");
    }
  };

  const toggleFavourite = (product) => {
    setFavourites((prev) =>
      prev.some((fav) => fav.id === product.id)
        ? prev.filter((fav) => fav.id !== product.id)
        : [...prev, product]
    );
  };

  // Filtrar productos según búsqueda, categoría y asociación
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterCategory ? product.category_id == filterCategory : true) &&
      (filterAssociation ? product.association_id == filterAssociation : true)
  );

  // Ordenar según el método y dirección seleccionados
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (activeSort === "price") {
      return sortDirection === "asc" ? a.price - b.price : b.price - a.price;
    } else if (activeSort === "name") {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return sortDirection === "asc" ? -1 : 1;
      if (nameA > nameB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    }
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900 overflow-x-hidden">
      <Header />
      {/* Contenedor principal con sidebar y contenido, responsive */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Sidebar de filtros */}
        <aside className="w-full md:w-1/4 p-6 bg-amber-100 shadow-md">
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
        {/* Contenido principal */}
        <div className="flex-1 flex flex-col">
          {/* Barra de búsqueda en bloque independiente */}
          <div className="relative p-4 w-full max-w-4xl mx-auto">
            <input
              type="text"
              className="w-full p-2 pr-10 h-10 border rounded-lg"
              placeholder="Buscar producto..."
              value={search}
              onChange={handleSearchChange}
            />
            {search && (
              <button
                onClick={() => {
                  setSearch("");
                  setSearchParams({ search: "" });
                }}
                className="absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-gray-900"
              >
                ✕
              </button>
            )}
          </div>

          {/* Botones de ordenación en bloque separado */}
          <div className="p-4 w-full max-w-4xl mx-auto flex justify-center space-x-4">
            <button
              onClick={handleSortPrice}
              className="bg-amber-600 text-white px-2 md:px-4 h-10 rounded-lg hover:bg-amber-700 transition text-[0.7rem] md:text-sm flex items-center justify-center"
            >
              Ordenar Precio{" "}
              {activeSort === "price"
                ? sortDirection === "asc"
                  ? "↓"
                  : "↑"
                : ""}
            </button>
            <button
              onClick={handleSortName}
              className="bg-amber-600 text-white px-2 md:px-4 h-10 rounded-lg hover:bg-amber-700 transition text-[0.7rem] md:text-sm flex items-center justify-center"
            >
              Ordenar Alfabéticamente{" "}
              {activeSort === "name"
                ? sortDirection === "asc"
                  ? "A-Z"
                  : "Z-A"
                : ""}
            </button>
          </div>
          {/* Lista de Productos */}
          <main className="flex-1 flex flex-col items-center p-6">
            {sortedProducts.length === 0 ? (
              <p className="text-xl text-gray-600">
                No hay productos disponibles
              </p>
            ) : (
              <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="relative bg-white p-6 rounded-lg shadow-md text-center"
                  >
                    {/* Ícono de favorito */}
                    <button
                      onClick={() => toggleFavourite(product)}
                      className="absolute top-2 right-2 flex items-center justify-center p-1 rounded-full bg-white hover:bg-gray-100 transition"
                    >
                      {favourites.some((fav) => fav.id === product.id) ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-600"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
                          />
                        </svg>
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
                        className="bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                      >
                        Ver Producto
                      </Link>
                      <Link
                        to={`/association/${product.association_id}`}
                        className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
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
