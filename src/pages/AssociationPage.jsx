import React, { useState } from "react";
import { Link, useParams } from "react-router";

const AssociationPage = () => {
  const { id } = useParams();
  const [association] = useState({
    name: "Asociación Ejemplo",
    direccion: "Calle Ejemplo, 123",
    email: "contacto@asociacion.com",
    telefono: "123-456-789",
    descripcion: "Esta es la descripción de la asociación seleccionada.",
    productos: [
      { id: 1, name: "Producto 1", precio: "10€" },
      { id: 2, name: "Producto 2", precio: "20€" },
    ],
  });

  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
      {/* Header */}
      <header className="bg-amber-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Perfil de la Asociación</h1>
        <div className="flex space-x-4 mt-6">
          <Link
            to="/"
            className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
          >
            Inicio
          </Link>
          <Link
            to="/associations-list"
            className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
          >
            Asociaciones
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center p-6">
        <h1 className="text-4xl font-extrabold mb-4">{association.name}</h1>
        <p className="text-lg text-amber-800 mb-2">
          <strong>Dirección:</strong> {association.direccion}
        </p>
        <p className="text-lg text-amber-800 mb-2">
          <strong>Email:</strong> {association.email}
        </p>
        <p className="text-lg text-amber-800 mb-6">
          <strong>Teléfono:</strong> {association.telefono}
        </p>
        <p className="text-lg text-amber-800 mb-6 max-w-lg text-center">
          {association.descripcion}
        </p>

        {/* Lista de Productos */}
        {association.productos.length > 0 && (
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
            {association.productos.map((producto) => (
              <div
                key={producto.id}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <h2 className="text-2xl font-bold mb-2">{producto.name}</h2>
                <p className="text-lg text-amber-800 mb-4">
                  Precio: {producto.precio}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-amber-600 text-white py-3 text-center text-sm">
        &copy; {new Date().getFullYear()} Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default AssociationPage;
