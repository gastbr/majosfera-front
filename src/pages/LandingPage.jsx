import React from "react";
import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
      {/* Header */}
      <header className="bg-amber-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Marketplace de Asociaciones</h1>
        <div className="flex space-x-4">
          <Link
            to="/eventos"
            className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
          >
            Eventos
          </Link>
          <Link
            to="/market"
            className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
          >
            Tienda
          </Link>
          <Link
            to="/associations-list"
            className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
          >
            Asociaciones
          </Link>
          <Link
            to="/contact"
            className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
          >
            Contacto
          </Link>
          <Link
            to="/profile"
            className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
          >
            Perfil
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          Bienvenido a la Landing Page
        </h1>

        {/* Carrusel o contenido destacado */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl mb-6">
          <p className="text-lg text-amber-800">
            Destacado: Aquí puedes colocar un carrusel de imágenes o contenido
            relevante.
          </p>
        </div>

        {/* Información con imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Ejemplo"
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-lg">Descubre nuestras asociaciones y eventos.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Ejemplo"
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-lg">
              Participa en nuestra comunidad y apoya una causa.
            </p>
          </div>
        </div>

        {/* Sección de Login y Registro */}
        <div className="flex space-x-4 mt-6">
          <Link
            to="/login"
            className="bg-amber-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-amber-700 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-amber-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-amber-700 transition"
          >
            Registro
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

export default LandingPage;
