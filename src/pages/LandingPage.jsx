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
          Bienvenido al Marketplace de Asociaciones
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-lg">
          Descubre productos de diversas asociaciones y apoya sus iniciativas
          comprando directamente desde nuestra plataforma.
        </p>
        <Link
          to="/home"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Explorar productos
        </Link>
      </main>
    </div>
  );
};

export default LandingPage;
