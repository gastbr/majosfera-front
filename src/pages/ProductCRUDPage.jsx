import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import api from "../services/axios";

const ProductCRUDPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [sortType, setSortType] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [message, setMessage] = useState("");

  // Cargar productos de la asociación logueada
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener datos del usuario autenticado
        const userRes = await api.get("/api/user");
        const associationId = userRes.data.association_id; // Obtener el ID de la asociación

        if (!associationId) {
          console.error("El usuario no tiene una asociación asignada.");
          return;
        }

        // Obtener productos y categorías
        const [productsRes, categoriesRes] = await Promise.all([
          api.get(`/api/products?association_id=${associationId}`), // Filtrar productos por asociación
          api.get("/api/categories"),
        ]);

        setProducts(productsRes.data);
        setCategories(categoriesRes.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    fetchData();
  }, []);

  // Manejo de búsqueda
  const handleSearchChange = (e) => setSearch(e.target.value);

  // Manejo de selección de producto para edición
  const handleSelectProduct = (product) => setSelectedProduct({ ...product });

  // Manejo de cambios en la edición del producto
  const handleChange = (e) => {
    setSelectedProduct({ ...selectedProduct, [e.target.name]: e.target.value });
  };

  // Guardar cambios en el producto
  const handleSaveChanges = async () => {
    try {
      await api.put(`/api/products/${selectedProduct.id}`, selectedProduct);
      setProducts(
        products.map((p) =>
          p.id === selectedProduct.id ? selectedProduct : p
        )
      );
      setMessage("✅ Producto actualizado correctamente");
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Error actualizando producto:", error);
      setMessage("❌ Error al actualizar producto");
    }
  };

  // Eliminar producto
  const handleDelete = async () => {
    if (!selectedProduct) return;

    try {
      await api.delete(`/api/products/${selectedProduct.id}`);
      setProducts(products.filter((p) => p.id !== selectedProduct.id));
      setSelectedProduct(null);
      setMessage("✅ Producto eliminado correctamente");
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Error eliminando producto:", error);
      setMessage("❌ Error al eliminar producto");
    }
  };

  // Filtrar productos por búsqueda y categoría
  const filteredProducts = products
    .filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        (filterCategory ? p.category_id == filterCategory : true)
    )
    .sort((a, b) => {
      if (sortType === "price") {
        return sortDirection === "asc" ? a.price - b.price : b.price - a.price;
      } else {
        return sortDirection === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
    });

  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
      <Header />
      <main className="flex-1 flex flex-col items-center p-6">
        <h1 className="text-4xl font-extrabold mb-4">Gestión de Productos</h1>

        {/* Barra de búsqueda y filtros */}
        <div className="flex flex-col md:flex-row w-full max-w-4xl mb-6 space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            className="flex-1 p-2 border rounded-lg"
            placeholder="Buscar producto..."
            value={search}
            onChange={handleSearchChange}
          />
          <select
            className="p-2 border rounded-lg"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <select
            className="p-2 border rounded-lg"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="name">Ordenar por Nombre</option>
            <option value="price">Ordenar por Precio</option>
          </select>
          <button
            className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition"
            onClick={() =>
              setSortDirection(sortDirection === "asc" ? "desc" : "asc")
            }
          >
            {sortDirection === "asc" ? "⬆️ Asc" : "⬇️ Desc"}
          </button>
        </div>

        {/* Lista de productos */}
        <ul className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              className="p-4 bg-white rounded-lg shadow-md cursor-pointer"
              onClick={() => handleSelectProduct(product)}
            >
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-sm text-gray-700">{product.description}</p>
              <p className="text-lg font-semibold text-amber-700">
                {product.price}€
              </p>
            </li>
          ))}
        </ul>

        {/* Mensajes de éxito o error */}
        {message && (
          <div className="mt-4 text-lg font-semibold px-4 py-2 rounded-lg bg-green-200 text-green-800">
            {message}
          </div>
        )}

        {/* Formulario de edición */}
        {selectedProduct && (
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center mt-6">
            <h2 className="text-2xl font-bold mb-4">Editar Producto</h2>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded-lg mb-4"
              value={selectedProduct.name}
              onChange={handleChange}
              placeholder="Nombre"
            />
            <input
              type="number"
              name="price"
              className="w-full p-2 border rounded-lg mb-4"
              value={selectedProduct.price}
              onChange={handleChange}
              placeholder="Precio"
            />
            <input
              type="number"
              name="stock"
              className="w-full p-2 border rounded-lg mb-4"
              value={selectedProduct.stock}
              onChange={handleChange}
              placeholder="Stock"
            />
            <textarea
              name="description"
              className="w-full p-2 border rounded-lg mb-4"
              rows="3"
              value={selectedProduct.description}
              onChange={handleChange}
              placeholder="Descripción"
            ></textarea>
            <button
              className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition"
              onClick={handleSaveChanges}
            >
              Guardar Cambios
            </button>
            <button
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition ml-2"
              onClick={handleDelete}
            >
              Eliminar Producto
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductCRUDPage;
