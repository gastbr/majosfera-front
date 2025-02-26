//Header.jsx

import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router";

const Header = () => {
  const { user, logout } = useContext(AppContext); // Assuming you have a logout function in your context

  return (
    <header className="bg-amber-600 text-white py-4 px-4 md:px-8 shadow-md flex justify-between items-center">
      {/* Logo y nombre de la app */}
      <Link to="/" className="text-xl md:text-2xl font-bold">
        Majosfera Market
      </Link>

      {/* Navegación */}
      <nav className="flex space-x-4">
        <Link to="/" className="px-4 py-2 rounded-lg bg-white text-amber-600">
          Eventos
        </Link>
        <Link
          to="/market"
          className="px-4 py-2 rounded-lg bg-white text-amber-600"
        >
          Tienda
        </Link>
        <Link
          to="/associations-list"
          className="px-4 py-2 rounded-lg bg-white text-amber-600"
        >
          Asociaciones
        </Link>
        <Link
          to="/contact"
          className="px-4 py-2 rounded-lg bg-white text-amber-600"
        >
          Contacto
        </Link>
        <Link
          to="/favourite"
          className="px-4 py-2 rounded-lg bg-white text-amber-600"
        >
          Favoritos
        </Link>
        <Link
          to="/order"
          className="px-4 py-2 rounded-lg bg-white text-amber-600"
        >
          Pedido
        </Link>

        {/* Mostrar nombre del usuario si está logueado */}
        {user ? (
          <>
            <Link
              to="/profile"
              className="px-4 py-2 rounded-lg bg-white text-amber-600 font-bold"
            >
              {`Hola, ${user.userName}`}
            </Link>
            <button
              onClick={logout}
              className="px-4 py-2 rounded-lg bg-red-600 text-white"
            >
              Cerrar Sesión
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg bg-white text-amber-600"
          >
            Iniciar Sesión
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;