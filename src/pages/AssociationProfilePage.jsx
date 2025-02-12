import React from "react";
import { Link } from "react-router";

const AssociationProfilePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <header className="w-full py-6 bg-white shadow-md text-center text-2xl font-bold">
        AssociationProfilePage
      </header>
      <main className="flex flex-col items-center text-center mt-10">
        <h1 className="text-4xl font-extrabold mb-4">
          Bienvenido a la AssociationProfilePage
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-lg">
          La página de perfil de la asoación que solo el gestor puede ver y
          modificar
        </p>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            inicio
          </Link>
          <Link
            to="/CRUD-product"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            modificar producto
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

export default AssociationProfilePage;
