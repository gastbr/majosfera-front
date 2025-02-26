import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link, useLocation } from "react-router";


const Header = () => {
  const { user, logout } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = useLocation().pathname;
  console.log("pathName: ", pathName);

  return (
    <header className="bg-amber-600 text-white py-4 px-4 md:px-8 shadow-md flex justify-between items-center md:flex-row flex-col">
      {/* Logo y nombre de la app */}
      <div className="flex items-center">
        <img
          src="/logo-notext.png"
          alt="Logo Majosfera"
          className="w-11 h-1 md:w-12 md:h-12 mr-2"
        />
        <Link to="/" className="text-xl md:text-2xl font-bold flex flex-col gap-0">
          <span className="p-0 m-0">M A J O S F E R A</span><span className="title-text text-3xl p-0 m-0">Market</span>
        </Link>
      </div>

      {/* Burger menu toggle button */}
      <button
        className="md:hidden flex justify-center w-8 h-8 bg-white rounded-full"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-4 h-4 text-amber-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Navegación */}
      <nav
        className={`${isMenuOpen ? 'block' : 'hidden'
          } md:flex space-x-4 md:space-x-8 mt-4 md:mt-0`}
      >
        <Link to="/"
          className="px-4 py-2 text-lg font-bold rounded-t-lg border-b-2 border-white bg-amber-600 hover:bg-amber-700">
          Eventos
        </Link>
        <Link
          to="/market"
          className={`px-4 py-2 text-lg font-bold rounded-t-lg bg-amber-600 ${pathName === '/market' ? ' rounded-b-lg border-sky-800 cursor-default' : 'hover:bg-amber-700'} border-white`}
        >
          Tienda
        </Link>
        <Link
          to="/associations-list"
          className="px-4 py-2 text-lg font-bold rounded-t-lg border-b-2 border-white bg-amber-600 hover:bg-amber-700"
        >
          Asociaciones
        </Link>
        <Link
          to="/contact"
          className="px-4 py-2 text-lg font-bold rounded-t-lg border-b-2 border-white bg-amber-600 hover:bg-amber-700"
        >
          Contacto
        </Link>
        <Link
          to="/favourite"
          className="px-4 py-2 text-lg font-bold rounded-t-lg border-b-2 border-white bg-amber-600 hover:bg-amber-700"
        >
          Favoritos
        </Link>
        <Link
          to="/order"
          className="px-4 py-2 text-lg font-bold rounded-t-lg border-b-2 border-white bg-amber-600 hover:bg-amber-700"
        >
          Pedido
        </Link>

        {/* Mostrar nombre del usuario si está logueado */}
        {user ? (
          <>
            <Link
              to="/profile"
              className="px-4 py-2 text-lg font-bold rounded-t-lg border-b-2 border-white bg-amber-600 hover:bg-amber-700 font-bold"
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
            className="px-4 py-2 text-lg font-bold rounded-t-lg border-b-2 border-white bg-amber-600 hover:bg-amber-700"
          >
            Iniciar Sesión
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;