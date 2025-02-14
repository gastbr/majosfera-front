import React, { useState } from "react";
import { Link } from "react-router";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [address, setAddress] = useState("");
  const [userData] = useState({
    name: "Juan Pérez",
    email: "juan@example.com",
  });

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
      {/* Header */}
      <header className="bg-amber-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Proceso de Pago</h1>
        <Link
          to="/"
          className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
        >
          Inicio
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center p-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Detalles de Pago</h1>
        <p className="text-lg text-amber-800 mb-6 max-w-lg">
          Completa tu información para finalizar la compra.
        </p>

        {/* User Data */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-left">
          <h2 className="text-2xl font-bold mb-4">Datos del Usuario</h2>
          <p>
            <strong>Nombre:</strong> {userData.name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
        </div>

        {/* Address Input */}
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

        {/* Payment Method */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-left mt-4">
          <h2 className="text-2xl font-bold mb-4">Método de Pago</h2>
          <select
            className="w-full p-2 border rounded-lg"
            value={paymentMethod}
            onChange={handlePaymentChange}
          >
            <option value="credit-card">Tarjeta de Crédito</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Transferencia Bancaria</option>
          </select>
        </div>

        {/* Confirm Button */}
        <Link
          to="/confirmation"
          className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition"
        >
          Confirmar Pago
        </Link>
      </main>

      {/* Footer */}
      <footer className="bg-amber-600 text-white py-3 text-center text-sm">
        &copy; {new Date().getFullYear()} Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default PaymentPage;
