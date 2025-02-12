import React from "react";
import { Link } from "react-router";

const AssociationPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <header className="w-full py-6 bg-white shadow-md text-center text-2xl font-bold">
        Marketplace de Asociaciones
      </header>
      <main className="flex flex-col items-center text-center mt-10">
        <h1 className="text-4xl font-extrabold mb-4">
          Bienvenido a la página de Asociaciones
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-lg">
          Mazo div con las asociaciones, se puede ver el perfil de cada una con
          los productos
        </p>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Inicio
          </Link>
          <Link
            to="/associations"
            className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition"
          >
            Ver asociaciones
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AssociationPage;
