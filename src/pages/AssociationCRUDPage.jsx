import React from "react";
import { Link } from "react-router";

const AssociationCRUDPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <header className="w-full py-6 bg-white shadow-md text-center text-2xl font-bold">
        AssociationCRUDPage
      </header>
      <main className="flex flex-col items-center text-center mt-10">
        <h1 className="text-4xl font-extrabold mb-4">
          Bienvenido a la AssociationCRUDPage
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-lg">
          Aquí el admin tiene todo el poder del mundo, para modificar, quitar la
          asociacion. En esta página aparecen todas las asoaciociones con una
          barra de busqueda en la parte superior debajo del header. Y si pulsa
          una asociacion en la misma pagina aparecen sus datos para modificarla
          o eliminarla
        </p>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            inicio
          </Link>
          <Link
            to="/association-register"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            registro asociaciones
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AssociationCRUDPage;
