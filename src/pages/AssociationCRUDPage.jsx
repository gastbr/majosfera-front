import React, { useState } from "react";
import { Link } from "react-router";

const AssociationCRUDPage = () => {
  const [search, setSearch] = useState("");
  const [selectedAssociation, setSelectedAssociation] = useState(null);
  const [associations, setAssociations] = useState([
    {
      id: 1,
      name: "Asociación A",
      nif: "12345678A",
      razonSocial: "Razón A",
      direccion: "Calle 1",
      email: "a@asociacion.com",
      telefono: "123456789",
    },
    {
      id: 2,
      name: "Asociación B",
      nif: "87654321B",
      razonSocial: "Razón B",
      direccion: "Calle 2",
      email: "b@asociacion.com",
      telefono: "987654321",
    },
  ]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSelectAssociation = (association) => {
    setSelectedAssociation({ ...association });
  };

  const handleChange = (e) => {
    setSelectedAssociation({
      ...selectedAssociation,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveChanges = () => {
    setAssociations(
      associations.map((a) =>
        a.id === selectedAssociation.id ? selectedAssociation : a
      )
    );
    alert("Asociación actualizada");
  };

  const handleDelete = () => {
    if (selectedAssociation) {
      setAssociations(
        associations.filter((a) => a.id !== selectedAssociation.id)
      );
      setSelectedAssociation(null);
      alert("Asociación eliminada");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
      {/* Header */}
      <header className="bg-amber-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Gestión de Asociaciones</h1>
        <Link
          to="/"
          className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
        >
          Inicio
        </Link>
      </header>

      {/* Search Bar */}
      <div className="p-4 w-full max-w-lg mx-auto">
        <input
          type="text"
          className="w-full p-2 border rounded-lg"
          placeholder="Buscar asociación..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      {/* List of Associations */}
      <main className="flex-1 flex flex-col items-center p-6">
        <ul className="w-full max-w-lg">
          {associations
            .filter((a) => a.name.toLowerCase().includes(search.toLowerCase()))
            .map((association) => (
              <li
                key={association.id}
                className="p-4 bg-white rounded-lg shadow-md mb-4 cursor-pointer"
                onClick={() => handleSelectAssociation(association)}
              >
                {association.name}
              </li>
            ))}
        </ul>

        {/* Selected Association Details */}
        {selectedAssociation && (
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center mt-6">
            <h2 className="text-2xl font-bold mb-4">Editar Asociación</h2>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded-lg mb-4"
              value={selectedAssociation.name}
              onChange={handleChange}
              placeholder="Nombre"
            />
            <input
              type="text"
              name="nif"
              className="w-full p-2 border rounded-lg mb-4"
              value={selectedAssociation.nif}
              onChange={handleChange}
              placeholder="NIF"
            />
            <input
              type="text"
              name="razonSocial"
              className="w-full p-2 border rounded-lg mb-4"
              value={selectedAssociation.razonSocial}
              onChange={handleChange}
              placeholder="Razón Social"
            />
            <input
              type="text"
              name="direccion"
              className="w-full p-2 border rounded-lg mb-4"
              value={selectedAssociation.direccion}
              onChange={handleChange}
              placeholder="Dirección"
            />
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded-lg mb-4"
              value={selectedAssociation.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              type="text"
              name="telefono"
              className="w-full p-2 border rounded-lg mb-4"
              value={selectedAssociation.telefono}
              onChange={handleChange}
              placeholder="Teléfono"
            />
            <button
              className="mt-4 bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition"
              onClick={handleSaveChanges}
            >
              Guardar Cambios
            </button>
            <button
              className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition ml-2"
              onClick={handleDelete}
            >
              Eliminar Asociación
            </button>
          </div>
        )}
      </main>

      {/* Navigation */}
      <div className="flex space-x-4 mt-6 pb-6">
        <Link
          to="/association-register"
          className="bg-amber-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-amber-700 transition"
        >
          Registrar Asociación
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-amber-600 text-white py-3 text-center text-sm">
        &copy; {new Date().getFullYear()} Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default AssociationCRUDPage;
