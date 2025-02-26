import { useState, useEffect } from "react";
import { Link } from "react-router";


import { user } from "../services/auth";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [address, setAddress] = useState("");
  const [userData, setUserData] = useState(null);

  // Cargar datos del usuario autenticado
  useEffect(() => {
    user()
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  }, []);

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  if (!userData) {
    return (
      <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
        <main className="flex-1 flex items-center justify-center p-6">
          <p className="text-xl">Cargando datos del usuario...</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
      <main className="flex-1 flex flex-col items-center p-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Detalles de Pago</h1>
        <p className="text-lg text-amber-800 mb-6 max-w-lg">
          Completa tu información para finalizar la compra.
        </p>

        {/* Datos del usuario */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-left">
          <h2 className="text-2xl font-bold mb-4">Datos del Usuario</h2>
          <p>
            <strong>Nombre:</strong> {userData.name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
        </div>

        {/* Dirección de Envío */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-left mt-4">
          <h2 className="text-2xl font-bold mb-4">Dirección de Envío</h2>
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            placeholder="Introduce tu dirección"
            value={address}
            onChange={handleAddressChange}
          />
        </div>

        {/* Método de Pago */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-left mt-4">
          <h2 className="text-2xl font-bold mb-4">Método de Pago</h2>
          <select
            className="w-full p-2 border rounded-lg"
            value={paymentMethod}
            onChange={handlePaymentChange}
          >
            <option value="credit-card">Tarjeta de Crédito</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bizum</option>
          </select>
        </div>

        {/* Botón de Confirmación */}
        <Link
          to=""
          className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition"
        >
          Confirmar Pago
        </Link>
      </main>
    </div>
  );
};

export default PaymentPage;
