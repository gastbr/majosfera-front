import React, { useState } from "react";
import { Link } from "react-router";

const RegisterPage = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    password: "",
    confirmPassword: "",
    foto: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se puede agregar la lógica de registro
    alert("Registro exitoso");
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
      {/* Header */}
      <header className="bg-amber-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Registro de Usuario</h1>
        <Link
          to="/"
          className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
        >
          Inicio
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-extrabold mb-4">Crea tu cuenta</h1>
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              className="w-full p-2 border rounded-lg mb-4"
              value={userData.nombre}
              onChange={handleChange}
              placeholder="Nombre"
              required
            />
            <input
              type="text"
              name="apellidos"
              className="w-full p-2 border rounded-lg mb-4"
              value={userData.apellidos}
              onChange={handleChange}
              placeholder="Apellidos"
              required
            />
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded-lg mb-4"
              value={userData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              className="w-full p-2 border rounded-lg mb-4"
              value={userData.password}
              onChange={handleChange}
              placeholder="Contraseña"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              className="w-full p-2 border rounded-lg mb-4"
              value={userData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirmar Contraseña"
              required
            />
            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition"
            >
              Registrarse
            </button>
          </form>
        </div>

        {/* Navegación */}
        <div className="flex space-x-4 mt-6">
          <Link
            to="/login"
            className="bg-amber-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-amber-700 transition"
          >
            Log in
          </Link>
          {/* <Link
            to="/profile"
            className="bg-amber-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-amber-700 transition"
          >
            Perfil
          </Link> */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-amber-600 text-white py-3 text-center text-sm">
        &copy; {new Date().getFullYear()} Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default RegisterPage;
