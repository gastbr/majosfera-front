import React, { useState } from "react";
import { Link } from "react-router";

const AssociationListPage = () => {
  const [associations] = useState([
    {
      id: 1,
      name: "Asociación A",
      descripcion: "Descripción de la Asociación A",
    },
    {
      id: 2,
      name: "Asociación B",
      descripcion: "Descripción de la Asociación B",
    },
    {
      id: 3,
      name: "Asociación C",
      descripcion: "Descripción de la Asociación C",
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
      {/* Header */}
      <header className="bg-amber-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Lista de Asociaciones</h1>
        <Link
          to="/"
          className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
        >
          Inicio
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center p-6">
        <h1 className="text-4xl font-extrabold mb-4">Explora Asociaciones</h1>
        <p className="text-lg text-amber-800 mb-6 max-w-lg text-center">
          Explora todas las asociaciones disponibles. Haz clic en una para ver
          más detalles.
        </p>

        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {associations.map((association) => (
            <div
              key={association.id}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <h2 className="text-2xl font-bold mb-2">{association.name}</h2>
              <p className="text-lg text-amber-800 mb-4">
                {association.descripcion}
              </p>
              <Link
                to={`/association/`}
                // to={`/association/${association.id}`}
                className="bg-amber-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-green-700 transition"
              >
                Ver Asociación
              </Link>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-amber-600 text-white py-3 text-center text-sm">
        &copy; {new Date().getFullYear()} Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default AssociationListPage;
