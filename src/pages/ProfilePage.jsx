import React, { useState } from "react";
import { Link } from "react-router";

const ProfilePage = () => {
  const [role, setRole] = useState("user"); // Puede ser "user", "admin" o "gestor"

  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
      {/* Header */}
      <header className="bg-amber-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Perfil de Usuario</h1>
        <div className="flex items-center space-x-4">
          <select
            className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg cursor-pointer"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">Usuario</option>
            <option value="admin">Administrador</option>
            <option value="gestor">Gestor</option>
          </select>
          <Link
            to="/"
            className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
          >
            Inicio
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-extrabold mb-4">Bienvenido a tu perfil</h1>

        {/* Información del usuario */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Foto de perfil"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold">Nombre Apellido</h2>
          <p className="text-lg text-amber-800">usuario@email.com</p>
          <Link
            to="/profile-update"
            className="bg-amber-600 text-white px-3 py-1 rounded-lg text-lg hover:bg-amber-700 transition"
          >
            Modificar perfil
          </Link>
        </div>

        {/* Opciones según el rol */}
        {role === "admin" && (
          <>
            <h2 className="text-2xl font-bold mt-6">
              Opciones de Administrador
            </h2>
            <div className="flex space-x-4 mb-6">
              <Link
                to="/association-register"
                className="bg-amber-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-amber-700 transition"
              >
                Registrar Asociaciones
              </Link>
              <Link
                to="/association-CRUD"
                className="bg-amber-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-amber-700 transition"
              >
                Gestionar Asociaciones
              </Link>
            </div>
          </>
        )}
        {role === "gestor" && (
          <>
            <h2 className="text-2xl font-bold mt-6">Opciones de Gestor</h2>
            <div className="flex space-x-4 mb-6">
              <Link
                to="/association-profile"
                className="bg-amber-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-amber-700 transition"
              >
                Perfil de Asociación
              </Link>
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-amber-600 text-white py-3 text-center text-sm">
        &copy; {new Date().getFullYear()} Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default ProfilePage;
