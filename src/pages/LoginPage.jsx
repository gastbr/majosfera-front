import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { login } from '../services/auth';
import Footer from "../components/Footer";

const LoginPage = () => {
  const [userData, setUserData] = useState({
    email: "user@test.com",
    password: "123",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData.email, userData.password)
      .then(() => {
        navigate("/profile");
      })
      .catch((error) => {
        console.error("Login failed", error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
      {/* Header */}
      <header className="bg-amber-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Log in</h1>
        <Link
          to="/"
          className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
        >
          Inicio
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-extrabold mb-4">Bienvenido</h1>
        <p className="text-lg text-amber-800 mb-6 max-w-lg text-center">
          Inicia sesión para acceder a tu cuenta.
        </p>

        {/* Formulario de Login */}
        <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded-lg mb-4"
            placeholder="Tu email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            required
          />

          <label className="block text-sm font-bold mb-2">Contraseña</label>
          <input
            type="password"
            className="w-full p-2 border rounded-lg mb-4"
            placeholder="Tu contraseña"
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            required
          />

          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition"
          >
            Iniciar sesión
          </button>
          <div className="flex justify-center mt-6">
            <Link
              to="/register"
              className="bg-amber-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-amber-700 transition"
            >
              Registrarse
            </Link>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;