import { useState } from "react";
import { Link } from "react-router";
import Footer from "../components/Footer";

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900 overflow-x-hidden">
      {/* Header */}
      <header className="bg-amber-600 text-white py-4 px-4 md:px-8 shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">
            Marketplace de Asociaciones
          </h1>
          {/* Mostrar el menú hamburguesa para pantallas menores a lg */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* Mostrar la barra de navegación completa solo en pantallas lg en adelante */}
          <nav className="hidden lg:flex space-x-4">
            <Link
              to="/"
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
              to="/favourite"
              className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
            >
              Favoritos
            </Link>
            <Link
              to="/order"
              className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
            >
              Pedido
            </Link>
            <Link
              to="/profile"
              className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
            >
              Perfil
            </Link>
          </nav>
        </div>
        {/* Menú móvil: se muestra para pantallas menores a lg */}
        {menuOpen && (
          <nav className="lg:hidden mt-4 flex flex-col space-y-2">
            <Link
              to="/"
              className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
              onClick={() => setMenuOpen(false)}
            >
              Eventos
            </Link>
            <Link
              to="/market"
              className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
              onClick={() => setMenuOpen(false)}
            >
              Tienda
            </Link>
            <Link
              to="/associations-list"
              className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
              onClick={() => setMenuOpen(false)}
            >
              Asociaciones
            </Link>
            <Link
              to="/contact"
              className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </Link>
            <Link
              to="/favourite"
              className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
              onClick={() => setMenuOpen(false)}
            >
              Favoritos
            </Link>
            <Link
              to="/order"
              className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
              onClick={() => setMenuOpen(false)}
            >
              Pedido
            </Link>
            <Link
              to="/profile"
              className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
              onClick={() => setMenuOpen(false)}
            >
              Perfil
            </Link>
          </nav>
        )}
      </header>

      {/* Contenido principal */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-6 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
          Bienvenido a la Landing Page
        </h1>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md w-full max-w-md md:max-w-2xl lg:max-w-4xl mb-6">
          <p className="text-base md:text-lg text-amber-800">
            Destacado: Aquí puedes colocar un carrusel de imágenes o contenido
            relevante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-md md:max-w-2xl lg:max-w-4xl mb-6">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Ejemplo"
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-base md:text-lg">
              Descubre nuestras asociaciones y eventos.
            </p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Ejemplo"
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-base md:text-lg">
              Participa en nuestra comunidad y apoya una causa.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-6">
          <Link
            to="/login"
            className="bg-amber-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-base md:text-lg hover:bg-amber-700 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-amber-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-base md:text-lg hover:bg-amber-700 transition"
          >
            Registro
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
