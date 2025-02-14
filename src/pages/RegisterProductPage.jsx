import React, { useState } from "react";
import { Link } from "react-router";

const RegisterProductPage = () => {
  const [productData, setProductData] = useState({
    categoria: "",
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
    foto: "",
    idCategoria: "",
  });

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Producto registrado exitosamente");
    // Aquí se puede agregar la lógica de registro de productos
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
      {/* Header */}
      <header className="bg-amber-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Registro de Producto</h1>
        <Link
          to="/"
          className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
        >
          Inicio
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-extrabold mb-4">Añadir Nuevo Producto</h1>
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="categoria"
              className="w-full p-2 border rounded-lg mb-4"
              value={productData.categoria}
              onChange={handleChange}
              placeholder="Categoría"
              required
            />
            <input
              type="text"
              name="nombre"
              className="w-full p-2 border rounded-lg mb-4"
              value={productData.nombre}
              onChange={handleChange}
              placeholder="Nombre del Producto"
              required
            />
            <textarea
              name="descripcion"
              className="w-full p-2 border rounded-lg mb-4"
              rows="3"
              value={productData.descripcion}
              onChange={handleChange}
              placeholder="Descripción"
              required
            ></textarea>
            <input
              type="number"
              name="precio"
              className="w-full p-2 border rounded-lg mb-4"
              value={productData.precio}
              onChange={handleChange}
              placeholder="Precio"
              required
            />
            <input
              type="number"
              name="stock"
              className="w-full p-2 border rounded-lg mb-4"
              value={productData.stock}
              onChange={handleChange}
              placeholder="Stock"
              required
            />
            <input
              type="text"
              name="idCategoria"
              className="w-full p-2 border rounded-lg mb-4"
              value={productData.idCategoria}
              onChange={handleChange}
              placeholder="ID Categoría"
              required
            />
            <input
              type="file"
              name="foto"
              className="w-full p-2 border rounded-lg mb-4"
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition"
            >
              Registrar Producto
            </button>
          </form>
        </div>

        {/* Navegación */}
        <div className="flex space-x-4 mt-6">
          <Link
            to="/CRUD-product"
            className="bg-amber-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-amber-700 transition"
          >
            Modificar Producto
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

export default RegisterProductPage;
