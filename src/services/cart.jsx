// src/services/cart.js
import api from "./axios";

// Obtener el pedido pendiente del usuario (carrito)
export const getCart = async () => {
  const response = await api.get("/api/orders");
  return response.data;
};

// Actualizar la cantidad de un item en el carrito
export const updateCartItem = async (orderItemId, quantity) => {
  const response = await api.put(`/api/order-items/${orderItemId}`, {
    quantity,
  });
  return response.data;
};

// Eliminar un item del carrito
export const removeCartItem = async (orderItemId) => {
  const response = await api.delete(`/api/order-items/${orderItemId}`);
  return response.data;
};
