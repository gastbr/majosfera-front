// src/components/LogoutButton.jsx
import { useNavigate } from "react-router";
import { logout } from "../services/auth";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      // Después de cerrar sesión, redirige a la página de landing (inicio)
      navigate("/");
    } catch (error) {
      console.error("Error al hacer logout:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
