import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import Footer from "../components/Footer";

const API_URL = import.meta.env.VITE_API_URL; // URL del backend desde .env

const AssociationPage = () => {
  const { id } = useParams();
  const [association, setAssociation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [phone, setPhone] = useState(null); // Estado para almacenar el teléfono

  // Obtener la información de la asociación, su teléfono y productos desde la API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener la asociación
        const response = await fetch(`${API_URL}/api/associations/${id}`);
        if (!response.ok) throw new Error("Asociación no encontrada");
        const data = await response.json();
        setAssociation(data);

        // Obtener el teléfono de la asociación
        const phoneResponse = await fetch(
          `${API_URL}/api/association-phones?association_id=${id}`
        );
        if (phoneResponse.ok) {
          const phoneData = await phoneResponse.json();
          setPhone(phoneData.length > 0 ? phoneData[0].phone : "No disponible"); // Obtener el primer teléfono registrado
        }

        // Obtener solo los productos de esta asociación
        const productsResponse = await fetch(
          `${API_URL}/api/products?association_id=${id}`
        );
        if (productsResponse.ok) {
          const productsData = await productsResponse.json();
          setProducts(productsData);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // Mensajes de carga y error
  if (loading) {
    return (
      <div className="text-center text-amber-600 text-xl p-10">
        Cargando asociación...
      </div>
    );
  }

  if (error || !association) {
    return (
      <div className="text-center text-red-600 text-xl p-10">
        Error: {error || "Asociación no encontrada"}
      </div>
    );
  }

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
          <strong>Dirección:</strong> {association.address || "No disponible"}
        </p>
        <p className="text-lg text-amber-800 mb-2">
          <strong>Email:</strong> {association.email || "No disponible"}
        </p>
        <p className="text-lg text-amber-800 mb-6">
          <strong>Teléfono:</strong> {phone || "No disponible"}
        </p>
        <p className="text-lg text-amber-800 mb-6 max-w-lg text-center">
          {association.description || "No hay descripción disponible."}
        </p>

        {/* Lista de Productos */}
        {products.length > 0 ? (
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="text-lg text-amber-800 mb-4">
                  Precio: {product.price}€
                </p>
                <Link
                  to={`/product/${product.id}`}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Ver Producto
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg text-gray-600">
            Esta asociación aún no tiene productos.
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AssociationPage;
