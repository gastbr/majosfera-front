import { useState, useEffect } from "react";
import { Link } from "react-router";


import api from "../services/axios";

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cargar los pedidos del usuario
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get("/api/orders");
        console.log("Pedidos obtenidos:", response.data);
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  // Función para eliminar un producto del pedido
  const handleRemoveProduct = async (orderId, productId) => {
    try {
      const response = await api.delete(
        `/api/orders/${orderId}/products/${productId}`
      );
      console.log("Producto eliminado:", response.data);

      // Actualizar el estado filtrando el producto eliminado
      setOrders(
        (prevOrders) =>
          prevOrders
            .map((order) =>
              order.id === orderId
                ? {
                  ...order,
                  products: order.products.filter(
                    (product) => product.id !== productId
                  ),
                }
                : order
            )
            .filter((order) => order.products.length > 0) // Filtra pedidos vacíos
      );
    } catch (error) {
      console.error("Error al eliminar producto del pedido:", error);
    }
  };

  if (loading) {
    return (
      <p className="text-center text-lg text-amber-800">Cargando pedido...</p>
    );
  }

  // Filtrar pedidos sin productos antes de renderizar
  const filteredOrders = orders.filter(
    (order) => order.products && order.products.length > 0
  );

  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
      <main className="flex-1 flex flex-col items-center p-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Tus Pedidos</h1>

        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div key={order.id} className="w-full max-w-4xl">
              <h2 className="text-2xl font-bold my-4">Código #{order.id}</h2>

              {/* Lista de productos del pedido */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {order.products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white p-6 rounded-lg shadow-md text-center"
                  >
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-24 h-24 mx-auto rounded-lg mb-4 object-cover"
                    />
                    <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                    <p className="text-lg text-amber-800 mb-2">
                      Precio: {product.price}€
                    </p>
                    <p className="text-lg text-amber-800 mb-2">
                      Cantidad: {product.pivot?.quantity || 1}
                    </p>
                    <button
                      onClick={() => handleRemoveProduct(order.id, product.id)}
                      className="mt-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-amber-800">
            No tienes productos en tu pedido.
          </p>
        )}

        <Link
          to="/payment"
          className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition"
        >
          Confirmar Pedido
        </Link>
      </main>
    </div>
  );
};

export default OrderPage;
