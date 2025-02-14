import React, { useState } from "react";
import { Link } from "react-router";

const ProfileCRUDPage = ({ isAdmin }) => {
  const [userData, setUserData] = useState({
    nombre: "Nombre",
    apellidos: "Apellido",
    email: "usuario@email.com",
    password: "",
    foto: "https://via.placeholder.com/150",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleDelete = () => {
    if (isAdmin) {
      alert("Usuario eliminado.");
      // Aquí iría la lógica para eliminar el usuario
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
      {/* Header */}
      <header className="bg-amber-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Editar Perfil</h1>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
          >
            Inicio
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
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-extrabold mb-4">Editar Información</h1>
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
          <img
            src={userData.foto}
            alt="Foto de perfil"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <input
            type="text"
            name="nombre"
            className="w-full p-2 border rounded-lg mb-4"
            value={userData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
          />
          <input
            type="text"
            name="apellidos"
            className="w-full p-2 border rounded-lg mb-4"
            value={userData.apellidos}
            onChange={handleChange}
            placeholder="Apellidos"
          />
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded-lg mb-4"
            value={userData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            className="w-full p-2 border rounded-lg mb-4"
            value={userData.password}
            onChange={handleChange}
            placeholder="Contraseña"
          />
          <button className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition">
            Guardar Cambios
          </button>
          {isAdmin && (
            <button
              className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition mt-4"
              onClick={handleDelete}
            >
              Eliminar Usuario
            </button>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-amber-600 text-white py-3 text-center text-sm">
        &copy; {new Date().getFullYear()} Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default ProfileCRUDPage;
