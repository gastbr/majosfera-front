import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import AddToCartButton from "../components/AddToCartButton";
import FloatingCartButton from "../components/FloatingCartButton";

const API_URL = import.meta.env.VITE_API_URL;

const MarketPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const [search, setSearch] = useState(initialSearch);
  const [activeSort, setActiveSort] = useState("price");
  const [sortDirection, setSortDirection] = useState("asc");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterAssociation, setFilterAssociation] = useState("");
  //const [setFavourites] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [associations, setAssociations] = useState([]);
  const [cart, setCart] = useState(() => JSON.parse(sessionStorage.getItem("cart")) || []);

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productRes, categoryRes, associationRes] = await Promise.all([
          fetch(`${API_URL}/api/products`),
          fetch(`${API_URL}/api/categories`),
          fetch(`${API_URL}/api/associations`),
        ]);

        setProducts(await productRes.json());
        setCategories(await categoryRes.json());
        setAssociations(await associationRes.json());
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    fetchData();
  }, []);

  // 🔹 Manejo de búsqueda y actualización de parámetros en la URL
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      if (value) {
        params.set("search", value);
      } else {
        params.delete("search");
      }
      return params;
    });
    setCurrentPage(1);
  };

  // 🔹 Alternar ordenación por precio
  const handleSortPrice = () => {
    setActiveSort("price");
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  // 🔹 Alternar ordenación por nombre
  const handleSortName = () => {
    setActiveSort("name");
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  // 🔹 Agregar/quitar favoritos
  /*   const toggleFavourite = (product) => {
      setFavourites((prev) =>
        prev.some((fav) => fav.id === product.id)
          ? prev.filter((fav) => fav.id !== product.id)
          : [...prev, product]
      );
    }; */

  // 🔹 Agregar productos al carrito
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // 🔹 Filtrar productos según búsqueda, categoría y asociación
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterCategory ? product.category_id.toString() === filterCategory : true) &&
      (filterAssociation ? product.association_id.toString() === filterAssociation : true)
  );

  // 🔹 Ordenar productos según selección
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (activeSort === "price") {
      return sortDirection === "asc" ? a.price - b.price : b.price - a.price;
    }
    return sortDirection === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  // 🔹 Paginación
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const displayedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">

      {/* Contenedor principal con sidebar y contenido */}
      <div className="flex flex-col md:flex-row flex-1 p-6">
        {/* Sidebar de filtros */}
        <aside className="w-full md:w-1/4 p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-bold mb-4">Filtros</h2>

          {/* Filtro de Categoría */}
          <label className="block mb-2">Categoría:</label>
          <select
            className="w-full p-2 border rounded-lg mb-4"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">Todas</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          {/* Filtro de Asociación */}
          <label className="block mb-2">Asociación:</label>
          <select
            className="w-full p-2 border rounded-lg mb-4"
            value={filterAssociation}
            onChange={(e) => setFilterAssociation(e.target.value)}
          >
            <option value="">Todas</option>
            {associations.map((association) => (
              <option key={association.id} value={association.id}>
                {association.name}
              </option>
            ))}
          </select>
        </aside>

        {/* Contenido principal */}
        <div className="flex-1 flex flex-col">
          {/* Barra de búsqueda */}
          <div className="relative p-4 w-full max-w-4xl mx-auto">
            <input
              type="text"
              className="w-full p-2 pr-10 h-10 border rounded-lg"
              placeholder="Buscar producto..."
              value={search}
              onChange={handleSearchChange}
            />
          </div>

          {/* Botones de ordenación */}
          <div className="p-4 w-full max-w-4xl mx-auto flex justify-center space-x-4">
            <button onClick={handleSortPrice} className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition">
              Ordenar por Precio {sortDirection === "asc" ? "↓" : "↑"}
            </button>
            <button onClick={handleSortName} className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition">
              Ordenar Alfabéticamente {sortDirection === "asc" ? "A-Z" : "Z-A"}
            </button>
          </div>

          {/* Lista de Productos */}
          <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {displayedProducts.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-lg shadow-md text-center">
                <img src={product.image_url} alt={product.name} className="w-full h-auto rounded-lg mb-4" />
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="text-lg text-amber-800 mb-2">Precio: {product.price}€</p>

                <div className="flex flex-col space-y-2">
                  <Link to={`/product/${product.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Ver Producto
                  </Link>
                  <AddToCartButton product={product} onAddToCart={handleAddToCart} />
                </div>
              </div>
            ))}
          </main>

          {/* Paginación */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mt-6">
              <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="px-4 py-2 bg-gray-300 rounded-lg">
                Anterior
              </button>
              <span>Página {currentPage} de {totalPages}</span>
              <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-300 rounded-lg">
                Siguiente
              </button>
            </div>
          )}
        </div>
      </div>

      <FloatingCartButton cart={cart} />
    </div>
  );
};

export default MarketPage;
