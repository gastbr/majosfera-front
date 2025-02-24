import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-amber-600 text-white py-4 px-4 md:px-8 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">LOGO Y NOMBRE APP</h1>
        {/* Botón de menú para pantallas menores a lg */}
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
        {/* Menú horizontal para pantallas lg en adelante */}
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
      {/* Menú móvil */}
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
  );
};

export default Header;
