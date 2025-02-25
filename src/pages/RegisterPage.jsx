import { useState } from "react";
import { Link, useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const API_URL = import.meta.env.VITE_API_URL; // Asegúrate de que apunta a tu backend

const RegisterPage = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    password: "",
    confirmPassword: "",
    foto: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    if (userData.password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres");
      return;
    }

    // Construimos el payload según lo que espera el backend.
    // En este ejemplo, usamos el campo "userName" concatenando nombre y apellidos.
    const payload = {
      userName: `${userData.nombre} ${userData.apellidos}`,
      name: `${userData.nombre} ${userData.apellidos}`,
      email: userData.email,
      password: userData.password,
      password_confirmation: userData.confirmPassword,
      // 'admin' puedes establecerlo aquí si es necesario, por ejemplo: admin: false
    };

    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Registro exitoso");
        navigate("/login");
      } else {
        alert(
          "Error en el registro: " +
            (data.error || data.message || "Error desconocido")
        );
      }
    } catch (error) {
      alert("Error en el registro: " + error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
      <Header />
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-extrabold mb-4">Crea tu cuenta</h1>
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              className="w-full p-2 border rounded-lg mb-4"
              placeholder="Nombre"
              value={userData.nombre}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="apellidos"
              className="w-full p-2 border rounded-lg mb-4"
              placeholder="Apellidos"
              value={userData.apellidos}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded-lg mb-4"
              placeholder="Email"
              value={userData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              className="w-full p-2 border rounded-lg mb-4"
              placeholder="Contraseña"
              value={userData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              className="w-full p-2 border rounded-lg mb-4"
              placeholder="Confirmar Contraseña"
              value={userData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition"
            >
              {loading ? "Registrando..." : "Registrarse"}
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterPage;
