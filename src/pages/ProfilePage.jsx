import React from "react";
import { Link } from "react-router";

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <header className="w-full py-6 bg-white shadow-md text-center text-2xl font-bold">
        Perfil de usuario
      </header>
      <main className="flex flex-col items-center text-center mt-10">
        <h1 className="text-4xl font-extrabold mb-4">
          Bienvenido a la PROFILE PAGE
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-lg">
          Hacer header, footer, y poner datos del usuario, el usuario tiene CRUD
          desde aquí, eso implica crear más página o hacer algo para que
          aparezcan componentes cuando acciones botones
        </p>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            inicio
          </Link>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Log in
          </Link>
          <Link
            to="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Registro
          </Link>
        </div>
        <p className="text-lg text-gray-600 mb-6 max-w-lg">
          Si el usuario es admin
        </p>
        <div className="flex space-x-4">
          <Link
            to="/association-register"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            registro asociaciones
          </Link>
          <Link
            to="/association-CRUD"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Gestionar asociaciones
          </Link>
        </div>
        <p className="text-lg text-gray-600 mb-6 max-w-lg">
          Si el usuario es gestor
        </p>
        <div className="flex space-x-4">
          <Link
            to="/association-profile"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            perfil asociación
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
