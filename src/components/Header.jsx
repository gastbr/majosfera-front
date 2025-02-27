import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { Link, useLocation, useNavigate } from "react-router";
import { logout } from "../services/auth";


const Header = () => {
  const { state } = useContext(AppContext);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathName = useLocation().pathname;

  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/"); // Redirige al landing (inicio) tras el logout
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('#user-button') && !event.target.closest('.dropdown-menu')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [setIsDropdownOpen]);

  return (
    <header className="bg-amber-600 text-white py-4 px-4 md:px-8 shadow-md flex justify-between items-center md:flex-row flex-col h-32">
      {/* Logo y nombre de la app */}
      <div className="flex justify-between items-center w-full">
        <div className="flex content-between md:items-center gap-2">
          <Link to="/" className="flex items-center">
            <img
              src="/logo-notext.png"
              alt="Logo Majosfera"
              className="w-12 h-12 mr-2 md:mr-4"
            />
          </Link>
          <Link to="/" className="text-xl md:text-2xl font-bold flex flex-col gap-0">
            <span className="p-0 m-0">M A J O S F E R A</span><span className="title-text text-3xl">Market</span>
          </Link>
        </div>
        {/* Burger menu toggle button */}
        <button
          className="md:hidden flex justify-center items-center w-8 h-8 bg-white rounded-full"
          onClick={() => setIsBurgerOpen(!isBurgerOpen)}
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
      </div>

      {/* Burger menu */}
      <nav className={`flex flex-col fixed top-20 left-0 w-full h-full bg-amber-600 z-50 space-y-4 mt-4 md:mt-0 ${isBurgerOpen ? 'block md:hidden' : 'hidden'}`}>
        <Link
          to="/"
          className={`flex items-center font-bold p-4 ${pathName === '/' ? 'border-b-4 border-stone-200 cursor-default' : 'hover:bg-amber-700 rounded-lg'}`}
        >
          Inicio
        </Link>
        <Link
          to=""
          className={`font-bold p-4 cursor-not-allowed`}
        >
          Eventos
        </Link>
        <Link
          to="/market"
          className={`flex items-center font-bold p-4 ${pathName === '/market' ? 'border-b-4 border-stone-200 cursor-default' : 'hover:bg-amber-700 rounded-lg'}`}
        >
          Tienda
        </Link>
        <Link
          to="/associations-list"
          className={`flex items-center font-bold p-4 ${pathName === '/associations-list' ? 'border-b-4 border-stone-200 cursor-default' : 'hover:bg-amber-700 rounded-lg'}`}
        >
          Asociaciones
        </Link>
        <Link
          to="/contact"
          className={`flex items-center font-bold p-4 ${pathName === '/contact' ? 'border-b-4 border-stone-200 cursor-default' : 'hover:bg-amber-700 rounded-lg'}`}
        >
          Contacto
        </Link>
        <Link
          to="/profile"
          className={`flex items-center font-bold p-4 ${pathName === '/profile' ? 'border-b-4 border-stone-200 cursor-default' : 'hover:bg-amber-700 rounded-lg'}`}
        >
          Perfil
        </Link>
        <Link
          to="/favourite"
          className={`flex items-center font-bold p-4 ${pathName === '/favourite' ? 'border-b-4 border-stone-200 cursor-default' : 'hover:bg-amber-700 rounded-lg'}`}
        >
          Favoritos
        </Link>
        <Link
          to="/register-product"
          className={`flex items-center font-bold p-4 ${pathName === '/register-product' ? 'border-b-4 border-stone-200 cursor-default' : 'hover:bg-amber-700 rounded-lg'}`}
        >
          Registrar producto
        </Link>
        <Link
          to="/CRUD-product"
          className={`flex items-center font-bold p-4 ${pathName === '/CRUD-product' ? 'border-b-4 border-stone-200 cursor-default' : 'hover:bg-amber-700 rounded-lg'}`}
        >
          Editar productos
        </Link>
        <button
          onClick={() => handleLogout()}
          className={`font-bold p-4 hover:bg-amber-700 rounded-lg`}
        >
          Cerrar sesión
        </button>
      </nav>

      {/* Navegación */}
      <nav
        className={`md:flex space-x-4 md:space-x-8 mt-4 md:mt-0 hidden`}
      >
        <Link to="/"
          className={`flex items-center font-bold p-4 ${pathName === '/' ? 'border-b-4 border-stone-200 cursor-default' : 'hover:bg-amber-700 rounded-lg'}`}>
          Inicio
        </Link>
        <Link to=""
          className={`flex items-center cursor-not-allowed font-bold p-4 ${pathName === '' ? 'border-b-4 border-stone-200 cursor-default' : ''}`}>
          Eventos
        </Link>
        <Link
          to="/market"
          className={`flex items-center font-bold p-4 ${pathName === '/market' ? 'border-b-4 border-stone-200 cursor-default' : 'hover:bg-amber-700 rounded-lg'}`}
        >
          Tienda
        </Link>
        <Link
          to="/associations-list"
          className={`flex items-center font-bold p-4 ${pathName === '/associations-list' ? 'border-b-4 border-stone-200 cursor-default' : 'hover:bg-amber-700 rounded-lg'}`}
        >
          Asociaciones
        </Link>
        <Link
          to="/contact"
          className={`flex items-center font-bold p-4 ${pathName === '/contact' ? 'border-b-4 border-stone-200 cursor-default' : 'hover:bg-amber-700 rounded-lg'}`}
        >
          Contacto
        </Link>
        {/* Mostrar nombre del usuario si está logueado */}
        {state.user ? (
          <div className="relative">
            <button
              id="user-button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              to="/profile"
              className="font-semibold px-8 py-3 rounded-full text-sm md:text-base transition-all duration-300 bg-white text-amber-700 hover:bg-amber-50 hover:text-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 border border-amber-700 shadow-sm hover:shadow-md"
            >
              {`Hola, ${state.user?.userName}`}
            </button>

            {/* Dropdown menu */}
            <div
              className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-md z-10"
              style={{ display: isDropdownOpen ? 'block' : 'none' }}
            >
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-right"
              >
                Perfil
              </Link>
              <Link
                to="/favourite"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-right"
              >
                Favoritos
              </Link>
              <Link
                to="/register-product"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-right"
              >
                Registrar producto
              </Link>
              <Link
                to="/CRUD-product"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-right"
              >
                CRUD de productos
              </Link>
              <button
                onClick={() => handleLogout()}
                className="block px-4 py-2 text-sm text-red-600 hover:bg-red-100 hover:text-red-900 w-full text-right"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        ) : (
          <Link
            to="/login"
            className="font-bold p-4 hover:bg-amber-700 rounded-lg"
          >
            Iniciar Sesión
          </Link>
        )}
      </nav>
    </header >
  );
};

export default Header;