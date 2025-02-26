import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../services/axios";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  // 🔹 Cargar usuario autenticado y su carrito al iniciar
  useEffect(() => {
    const fetchUserAndCart = async () => {
      try {
        const userResponse = await api.get("/api/user");
        setUser(userResponse.data);

        const cartResponse = await api.get("/api/orders");
        setCart(cartResponse.data.products || []); // Se asegura de que el carrito contenga productos
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
      setFavorites(response.data.favorites);
    } catch (error) {
      console.error("Error actualizando favoritos:", error);
    }
  };

  // 🔹 Función para agregar productos al carrito
  const addToCart = async (productId) => {
    try {
      const response = await api.post("/api/cart", { product_id: productId });
      setCart(response.data.cart);
    } catch (error) {
      console.error("Error actualizando carrito:", error);
    }
  };

  // 🔹 Función para eliminar productos del carrito
  const removeFromCart = async (productId) => {
    try {
      const response = await api.delete(`/api/orders/products/${productId}`);
      console.log("Producto eliminado:", response.data);

      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    } catch (error) {
      console.error("Error eliminando producto del carrito:", error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        user,
        favorites,
        cart,
        setCart,
        toggleFavorite,
        addToCart,
        removeFromCart, // ✅ Ahora puedes eliminar productos del carrito
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// ✅ Validación de `children` con PropTypes
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
