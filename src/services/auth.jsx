import api from "./axios";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

// Función para obtener el token desde localStorage
export const getToken = () => localStorage.getItem("token");

// Obtener los datos del usuario autenticado
export const user = () => {
  return api
    .get("/api/user")
    .then((response) => {
      console.log("==> user:", response);
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching user:", error);
      throw error;
    });
};

// Login: realiza una solicitud POST al endpoint /api/login
export async function login(email, password, dispatch) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error || errorData.message || "Error en el login"
      );
    }

    const data = await response.json();
    // Guarda el token en localStorage
    localStorage.setItem("token", data.token);
    dispatch({ type: "SET_USERNAME", payload: data.userName });
    return { status: response.status, ...data };
  } catch (error) {
    console.error("Error en el servicio login:", error);
    throw error;
  }
}

// Logout: envía una solicitud POST a /api/logout y elimina el token
export const logout = () => {
  return api
    .post(
      "/api/logout",
      {},
      { headers: { Authorization: `Bearer ${getToken()}` } }
    )
    .then((response) => {
      console.log("==> logout successful:", response);
      localStorage.removeItem("token");
      return response.data;
    })
    .catch((error) => {
      console.error("==> logout error:", error);
      throw error;
    });
};

// Register: crea un nuevo usuario
export const register = (
  userName,
  name,
  email,
  password,
  password_confirmation
) => {
  return api
    .post(
      "/api/register",
      { userName, name, email, password, password_confirmation },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((response) => {
      console.log("==> register successful:", response);
      return response.data;
    })
    .catch((error) => {
      console.error("==> register error:", error);
      throw error;
    });
};

// updateUser: actualiza el perfil del usuario autenticado (envía una solicitud PUT a /api/user)
export const updateUser = async (data) => {
  const token = getToken();
  const response = await api.put("/api/user", data, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  // Axios ya lanza un error si la respuesta no es 2xx, pero puedes agregar validación adicional:
  return response.data;
};
