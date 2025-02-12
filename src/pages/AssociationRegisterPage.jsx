import React from "react";
import { Link } from "react-router";

const AssociationRegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <header className="w-full py-6 bg-white shadow-md text-center text-2xl font-bold">
        AssociationRegisterPage
      </header>
      <main className="flex flex-col items-center text-center mt-10">
        <h1 className="text-4xl font-extrabold mb-4">
          Bienvenido a la AssociationRegisterPage
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-lg">
          EL registro del ADMIN, para crear asociaciones, como el registro de
          usuarios pero con asociaciones
        </p>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            inicio
          </Link>
          <Link
            to="/association-CRUD"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Gestionar asociaciones
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AssociationRegisterPage;
