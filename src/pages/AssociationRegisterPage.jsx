import React, { useState } from "react";
import { Link } from "react-router";

const AssociationRegisterPage = () => {
  const [associationData, setAssociationData] = useState({
    gestorId: "",
    name: "",
    nif: "",
    razonSocial: "",
    direccion: "",
    email: "",
    telefono: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    setAssociationData({ ...associationData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Asociación registrada exitosamente");
    // Aquí se puede agregar la lógica de registro de asociaciones
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
      {/* Header */}
      <header className="bg-amber-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Registro de Asociación</h1>
        <Link
          to="/"
          className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
        >
          Inicio
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-extrabold mb-4">
          Registrar Nueva Asociación
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="gestorId"
              className="w-full p-2 border rounded-lg mb-4"
              value={associationData.gestorId}
              onChange={handleChange}
              placeholder="ID del Gestor"
              required
            />
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded-lg mb-4"
              value={associationData.name}
              onChange={handleChange}
              placeholder="Nombre de la Asociación"
              required
            />
            <input
              type="text"
              name="nif"
              className="w-full p-2 border rounded-lg mb-4"
              value={associationData.nif}
              onChange={handleChange}
              placeholder="NIF"
              required
            />
            <input
              type="text"
              name="razonSocial"
              className="w-full p-2 border rounded-lg mb-4"
              value={associationData.razonSocial}
              onChange={handleChange}
              placeholder="Razón Social"
              required
            />
            <input
              type="text"
              name="direccion"
              className="w-full p-2 border rounded-lg mb-4"
              value={associationData.direccion}
              onChange={handleChange}
              placeholder="Dirección"
              required
            />
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded-lg mb-4"
              value={associationData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="telefono"
              className="w-full p-2 border rounded-lg mb-4"
              value={associationData.telefono}
              onChange={handleChange}
              placeholder="Teléfono"
              required
            />
            <textarea
              name="descripcion"
              className="w-full p-2 border rounded-lg mb-4"
              rows="3"
              value={associationData.descripcion}
              onChange={handleChange}
              placeholder="Descripción de la Asociación"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition"
            >
              Registrar Asociación
            </button>
          </form>
        </div>

        {/* Navegación */}
        <div className="flex space-x-4 mt-6">
          <Link
            to="/association-CRUD"
            className="bg-amber-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-amber-700 transition"
          >
            Gestionar Asociaciones
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-amber-600 text-white py-3 text-center text-sm">
        &copy; {new Date().getFullYear()} Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default AssociationRegisterPage;
