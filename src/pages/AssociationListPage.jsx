import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router";

const API_URL = import.meta.env.VITE_API_URL;

const AssociationListPage = () => {
  // useSearchParams para la búsqueda
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const [search, setSearch] = useState(initialSearch);

  // Estado para ordenar alfabéticamente
  const [sortDirection, setSortDirection] = useState("asc");

  // Estados para almacenar asociaciones, loading y error
  const [associations, setAssociations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estado para paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // Llamada a la API para obtener asociaciones
  useEffect(() => {
    const fetchAssociations = async () => {
      try {
        const response = await fetch(`${API_URL}/api/associations`);
        if (!response.ok) {
          throw new Error("Error al obtener asociaciones");
        }
        const data = await response.json();
        setAssociations(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAssociations();
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setSearchParams({ search: value });
    // Reinicia la paginación al cambiar la búsqueda
    setCurrentPage(1);
  };

  const toggleSort = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    // Reinicia la paginación si se cambia el orden
    setCurrentPage(1);
  };

  // Filtrar asociaciones según el término de búsqueda
  const filteredAssociations = associations.filter((assoc) =>
    assoc.name.toLowerCase().includes(search.toLowerCase())
  );

  // Ordenar las asociaciones alfabéticamente
  const sortedAssociations = filteredAssociations.sort((a, b) => {
    return sortDirection === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  // Cálculo de la paginación
  const totalPages = Math.ceil(sortedAssociations.length / itemsPerPage);
  const displayedAssociations = sortedAssociations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
        <main className="flex-1 flex items-center justify-center">
          <p className="text-xl text-amber-600">Cargando asociaciones...</p>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
        <main className="flex-1 flex items-center justify-center">
          <p className="text-xl text-red-600">Error: {error}</p>
        </main>
      </div>
    );
  }

  return (
    <>
      <main className="flex-1 flex flex-col items-center p-6">
        <h1 className="text-4xl font-extrabold mb-4">Explora Asociaciones</h1>
        <p className="text-lg text-amber-800 mb-6 max-w-lg text-center">
          Explora todas las asociaciones disponibles. Haz clic en una para ver
          más detalles.
        </p>

        {/* Barra de búsqueda */}
        <div className="relative p-4 w-full max-w-4xl mx-auto">
          <input
            type="text"
            className="w-full p-2 pr-10 h-10 border rounded-lg"
            placeholder="Buscar asociación..."
            value={search}
            onChange={handleSearchChange}
          />
          {search && (
            <button
              onClick={() => {
                setSearch("");
                setSearchParams({ search: "" });
                setCurrentPage(1);
              }}
              className="absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-gray-900"
            >
              ✕
            </button>
          )}
        </div>

        {/* Botón de ordenación alfabética */}
        <div className="w-full max-w-4xl mx-auto p-4 flex justify-end">
          <button
            onClick={toggleSort}
            className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition text-sm"
          >
            Ordenar Alfabéticamente {sortDirection === "asc" ? "A-Z" : "Z-A"}
          </button>
        </div>

        {/* Listado de asociaciones */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedAssociations.map((association) => (
            <div
              key={association.id}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <h2 className="text-2xl font-bold mb-2">{association.name}</h2>
              <p className="text-lg text-amber-800 mb-4">
                {association.descripcion || "Sin descripción"}
              </p>
              <Link
                to={`/association/${association.id}`}
                className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Ver Asociación
              </Link>
            </div>
          ))}
        </div>

        {/* Controles de paginación */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center mt-6 space-x-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg disabled:opacity-50"
            >
              Anterior
            </button>
            <span className="text-lg">
              Página {currentPage} de {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default AssociationListPage;
