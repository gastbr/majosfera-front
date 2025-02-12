import React from "react";
import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <header className="w-full py-6 bg-white shadow-md text-center text-2xl font-bold">
        Marketplace de Asociaciones
      </header>
      <main className="flex flex-col items-center text-center mt-10">
        <h1 className="text-4xl font-extrabold mb-4">
          Bienvenido a la LADING PAGE
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-lg">
          Hacer header, footer, y poner contenido con carruseles o lo que sea
        </p>
        <div className="flex space-x-4">
          <Link
            to="/eventos" //botón vacio
            className="bg-yellow-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Explorar eventos
          </Link>
          <Link
            to="/market"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Explorar tienda
          </Link>
          <Link
            to="/associations-list"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Explorar asociaciones
          </Link>
          <Link
            to="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Registro
          </Link>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
