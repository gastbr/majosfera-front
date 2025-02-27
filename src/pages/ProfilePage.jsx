import { useState, useEffect } from "react";
import { user, updateUser } from "../services/auth";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });

  // Cargar los datos del usuario autenticado
  useEffect(() => {
    user().then((data) => {
      if (data) {
        setProfile(data);
        setFormData({
          userName: data.userName || "",
          password: "",
          confirmPassword: "",
        });
      }
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setMessage("");

    if (formData.password && formData.password !== formData.confirmPassword) {
      setMessage("Las contraseñas no coinciden.");
      return;
    }

    // Construir el payload a enviar:
    // Incluimos el nuevo userName y, si se desea cambiar la contraseña, se la enviamos
    const payload = {
      userName: formData.userName,
    };
    if (formData.password) {
      payload.password = formData.password;
      payload.password_confirmation = formData.confirmPassword;
    }

    try {
      const updatedUser = await updateUser(payload);
      setProfile(updatedUser);
      setEditing(false);
      setMessage("Perfil actualizado con éxito.");
    } catch (error) {
      console.error("Error al actualizar perfil:", error);
      setMessage(error.message || "Error al actualizar el perfil.");
    }
  };

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-100 text-amber-900">
        <p>Cargando perfil...</p>
      </div>
    );
  }

  return (
    <main className="flex-1 flex flex-col items-center p-6">
      <h2 className="text-4xl font-extrabold mb-4 text-center">Mi Perfil</h2>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        {editing ? (
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1">
                Nombre de Usuario
              </label>
              <input
                type="text"
                name="userName"
                className="w-full p-2 border rounded-lg"
                value={formData.userName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1">
                Nueva Contraseña (opcional)
              </label>
              <input
                type="password"
                name="password"
                className="w-full p-2 border rounded-lg"
                placeholder="Dejar en blanco para no cambiar"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                name="confirmPassword"
                className="w-full p-2 border rounded-lg"
                placeholder="Confirmar contraseña"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => {
                  setEditing(false);
                  setMessage("");
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition"
              >
                Guardar Cambios
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-lg text-amber-800 mb-2">
              <span className="font-bold">Usuario: </span>
              {profile.userName}
            </p>
            <p className="text-lg text-amber-800 mb-2">
              <span className="font-bold">Email: </span>
              {profile.email}
            </p>
            <button
              onClick={() => setEditing(true)}
              className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition"
            >
              Editar Perfil
            </button>
          </div>
        )}
        {message && (
          <div className="mt-4 text-center text-red-600">{message}</div>
        )}
      </div>
    </main>
  );
};

export default ProfilePage;
