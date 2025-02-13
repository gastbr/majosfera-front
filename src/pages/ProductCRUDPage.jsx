import React, { useState } from "react";
import { Link } from "react-router";

const ProductCRUDPage = () => {
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Producto A",
      price: 20,
      stock: 5,
      description: "Descripción de Producto A",
    },
    {
      id: 2,
      name: "Producto B",
      price: 10,
      stock: 2,
      description: "Descripción de Producto B",
    },
  ]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct({ ...product });
  };

  const handleChange = (e) => {
    setSelectedProduct({ ...selectedProduct, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = () => {
    setProducts(
      products.map((p) => (p.id === selectedProduct.id ? selectedProduct : p))
    );
    alert("Producto actualizado");
  };

  const handleDelete = () => {
    if (selectedProduct) {
      setProducts(products.filter((p) => p.id !== selectedProduct.id));
      setSelectedProduct(null);
      alert("Producto eliminado");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
      {/* Header */}
      <header className="bg-amber-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Gestión de Productos</h1>
        <Link
          to="/"
          className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
        >
          Inicio
        </Link>
      </header>

      {/* Search Bar */}
      <div className="p-4 w-full max-w-lg mx-auto">
        <input
          type="text"
          className="w-full p-2 border rounded-lg"
          placeholder="Buscar producto..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      {/* List of Products */}
      <main className="flex-1 flex flex-col items-center p-6">
        <ul className="w-full max-w-lg">
          {products
            .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
            .map((product) => (
              <li
                key={product.id}
                className="p-4 bg-white rounded-lg shadow-md mb-4 cursor-pointer"
                onClick={() => handleSelectProduct(product)}
              >
                {product.name} - {product.price}€
              </li>
            ))}
        </ul>

        {/* Selected Product Details */}
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
              className="mt-4 bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition"
              onClick={handleSaveChanges}
            >
              Guardar Cambios
            </button>
            <button
              className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition ml-2"
              onClick={handleDelete}
            >
              Eliminar Producto
            </button>
          </div>
        )}
      </main>

      {/* Navigation */}
      <div className="flex space-x-4 mt-6 pb-6">
        <Link
          to="/register-product"
          className="bg-amber-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-amber-700 transition"
        >
          Registrar Producto
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-amber-600 text-white py-3 text-center text-sm">
        &copy; {new Date().getFullYear()} Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default ProductCRUDPage;
