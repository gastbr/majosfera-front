import React from "react";
import { Link } from "react-router";

const RegisterProductPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <header className="w-full py-6 bg-white shadow-md text-center text-2xl font-bold">
        ProductCRUDPage
      </header>
      <main className="flex flex-col items-center text-center mt-10">
        <h1 className="text-4xl font-extrabold mb-4">
          Bienvenido a la ProductCRUDPage
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-lg">
          El gestor tiene acceso a esta página, aquí puede modificar, quitar, o
          ver su producto, todo en esta misma página. También tiene una barra de
          busqueda en la parte superior debajo del header.
        </p>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            inicio
          </Link>
          <Link
            to="/register-product"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            registro producto
          </Link>
        </div>
      </main>
    </div>
  );
};

export default RegisterProductPage;
