/* eslint-disable react/prop-types */
import { useReducer, useEffect } from "react";
import api from "../services/axios";
import { AppContext } from "./AppContext";

// Define the initial state
const initialState = {
  user: null,
  favorites: [],
  cart: [],
};

// Define the reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "ADD_FAVORITE":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite !== action.payload
        ),
      };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // 🔹 Cargar usuario autenticado y su carrito al iniciar
  useEffect(() => {
    const fetchUserAndCart = async () => {
      try {
        const userResponse = await api.get("/api/user");
        dispatch({ type: "SET_USER", payload: userResponse.data });

        const cartResponse = await api.get("/api/orders");
        dispatch({ type: "ADD_TO_CART", payload: cartResponse.data.products });
      } catch (error) {
        console.error("Error al obtener usuario o carrito:", error);
      }
    };

    fetchUserAndCart();
  }, []);

  // 🔹 Función para agregar/quitar favoritos
  const toggleFavorite = async (productId) => {
    try {
      const response = await api.post("/api/favorites", {
        product_id: productId,
      });
      dispatch({ type: "ADD_FAVORITE", payload: response.data.favorites });
    } catch (error) {
      console.error("Error actualizando favoritos:", error);
    }
  };

  // 🔹 Función para agregar productos al carrito
  const addToCart = async (productId) => {
    try {
      const response = await api.post("/api/cart", { product_id: productId });
      dispatch({ type: "ADD_TO_CART", payload: response.data.cart });
    } catch (error) {
      console.error("Error actualizando carrito:", error);
    }
  };

  // 🔹 Función para eliminar productos del carrito
  const removeFromCart = async (productId) => {
    try {
      const response = await api.delete(`/api/orders/products/${productId}`);
      console.log("Producto eliminado:", response.data);
      dispatch({ type: "REMOVE_FROM_CART", payload: productId });
    } catch (error) {
      console.error("Error eliminando producto del carrito:", error);
    }
  };

  return (
    <AppContext.Provider
      value={{ state, dispatch, toggleFavorite, addToCart, removeFromCart }}
    >
      {children}
    </AppContext.Provider>
  );
};
