import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";

const API_URL = import.meta.env.VITE_API_URL; // URL del backend desde .env

const AssociationPage = () => {
  const { id } = useParams();
  const [association, setAssociation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [phone, setPhone] = useState(null); // Estado para almacenar el teléfono
  const [favourites, setFavourites] = useState([]); // Estado para favoritos

  // Función para alternar favorito
  const toggleFavourite = (product) => {
    setFavourites((prev) =>
      prev.some((fav) => fav.id === product.id)
        ? prev.filter((fav) => fav.id !== product.id)
        : [...prev, product]
    );
  };

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
          setPhone(phoneData.length > 0 ? phoneData[0].phone : "No disponible");
        }

        // Obtener los productos (filtramos adicionalmente por seguridad)
        const productsResponse = await fetch(
          `${API_URL}/api/products?association_id=${id}`
        );
        if (productsResponse.ok) {
          const productsData = await productsResponse.json();
          const filteredProducts = productsData.filter(
            (product) => product.association_id == id
          );
          setProducts(filteredProducts);
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
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900 overflow-x-hidden">

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
                className="bg-white p-6 rounded-lg shadow-md text-center relative"
              >
                <div className="relative">
                  {/* Imagen más pequeña */}
                  <img
                    src={product.image_url || "https://via.placeholder.com/300"}
                    alt={product.name}
                    className="w-40 h-auto rounded-lg mx-auto"
                  />
                  {/* Botón de favorito en la esquina superior derecha */}
                  <button
                    onClick={() => toggleFavourite(product)}
                    className="absolute top-2 right-2 flex items-center justify-center p-1 rounded-full bg-white hover:bg-gray-100 transition"
                  >
                    {favourites.some((fav) => fav.id === product.id) ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-600"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <h2 className="text-2xl font-bold mt-4 mb-2">{product.name}</h2>
                <p className="text-lg text-amber-800 mb-4">
                  Precio: {product.price}€
                </p>
                {/* Botón de Añadir al Carrito */}
                <div className="flex justify-center space-x-4 mt-4">
                  <button className="flex items-center justify-center p-2 rounded-lg bg-yellow-500 hover:bg-green-700 transition text-white">
                    Añadir al Carrito
                  </button>
                </div>
                {/* Enlace para ver detalle del producto */}
                <Link
                  to={`/product/${product.id}`}
                  className="inline-block mt-4 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
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

    </div>
  );
};

export default AssociationPage;
