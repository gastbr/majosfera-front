// src/services/favorites.js
import api from "./axios";

// Obtiene el listado de favoritos del usuario
export const getFavorites = async () => {
  const response = await api.get("/api/favorites");
  return response.data;
};

// Elimina un favorito dado su ID
export const deleteFavorite = async (favoriteId) => {
  const response = await api.delete(`/api/favorites/${favoriteId}`);
  return response.data;
};
