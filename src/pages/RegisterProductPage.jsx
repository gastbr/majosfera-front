import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import api from "../services/axios";

const RegisterProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category_id: "",
    association_id: "",
    image_url: "",
    image_file: null, // Para imagen subida desde el dispositivo
  });

  const [categories, setCategories] = useState([]);
  const [associations, setAssociations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [loggedAssociationId, setLoggedAssociationId] = useState(""); // ID de la asociación logueada

  // Cargar datos de usuario y asociaciones desde la API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, categoryRes, associationRes] = await Promise.all([
          api.get("/api/user"), // Obtener datos del usuario autenticado
          api.get("/api/categories"),
          api.get("/api/associations"),
        ]);

        const userAssociationId = userRes.data.association_id || ""; // Obtener ID de asociación del usuario
        setLoggedAssociationId(userAssociationId);

        setCategories(categoryRes.data);
        setAssociations(associationRes.data);

        // Si el usuario tiene una asociación, preseleccionarla en el formulario
        setProductData((prev) => ({
          ...prev,
          association_id: userAssociationId,
        }));
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    fetchData();
  }, []);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  // Manejar subida de archivo
  const handleImageChange = (e) => {
    setProductData((prev) => ({
      ...prev,
      image_file: e.target.files[0], // Guardar archivo local
      image_url: "", // Limpiar URL si se sube un archivo
    }));
  };

  // Función para mostrar mensajes de error o éxito y hacerlos desaparecer
  const showMessage = (text, type) => {
    setMessage({ text, type });

    setTimeout(() => {
      setMessage({ text: "", type: "" });
    }, 3000);
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", productData.name);
      formData.append("description", productData.description);
      formData.append("price", productData.price);
      formData.append("stock", productData.stock);
      formData.append("category_id", productData.category_id);
      formData.append("association_id", productData.association_id);

      if (productData.image_file) {
        formData.append("image", productData.image_file);
      } else if (productData.image_url) {
        formData.append("image_url", productData.image_url);
      }

      await api.post("/api/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      showMessage("✅ Producto registrado exitosamente", "success");

      setProductData({
        name: "",
        description: "",
        price: "",
        stock: "",
        category_id: "",
        association_id: loggedAssociationId, // Volver a la asociación logueada por defecto
        image_url: "",
        image_file: null,
      });

    } catch (error) {
      let errorMsg = "❌ Error al registrar el producto";

      if (error.response && error.response.data) {
        errorMsg = `❌ ${error.response.data.message || "Revisa los datos ingresados"}`;
      }

      console.error("Error registrando producto:", error);
      showMessage(errorMsg, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
      <Header />
      <main className="flex-1 flex flex-col items-center p-6">
        <h1 className="text-4xl font-extrabold mb-4">Añadir Nuevo Producto</h1>

        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded-lg"
              value={productData.name}
              onChange={handleChange}
              placeholder="Nombre del Producto"
              required
            />
            <textarea
              name="description"
              className="w-full p-2 border rounded-lg"
              rows="3"
              value={productData.description}
              onChange={handleChange}
              placeholder="Descripción"
              required
            ></textarea>
            <input
              type="number"
              name="price"
              className="w-full p-2 border rounded-lg"
              value={productData.price}
              onChange={handleChange}
              placeholder="Precio"
              required
            />
            <input
              type="number"
              name="stock"
              className="w-full p-2 border rounded-lg"
              value={productData.stock}
              onChange={handleChange}
              placeholder="Stock"
              required
            />

            {/* Selector de Categoría */}
            <select
              name="category_id"
              className="w-full p-2 border rounded-lg"
              value={productData.category_id}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione una categoría</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            {/* Selector de Asociación (preseleccionando la del usuario logueado) */}
            <select
              name="association_id"
              className="w-full p-2 border rounded-lg"
              value={productData.association_id}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione una asociación</option>
              {associations.map((association) => (
                <option key={association.id} value={association.id}>
                  {association.name}
                </option>
              ))}
            </select>

            {/* Vista previa de imagen */}
            <div className="flex justify-center mb-4">
              <img
                src={
                  productData.image_file
                    ? URL.createObjectURL(productData.image_file)
                    : productData.image_url || "/noPhoto.jpg"
                }
                alt="Vista previa"
                className="w-32 h-32 object-cover rounded-lg border"
              />
            </div>

            {/* Subida de imagen (URL o Archivo) */}
            <input
              type="text"
              name="image_url"
              className="w-full p-2 border rounded-lg"
              value={productData.image_url}
              onChange={handleChange}
              placeholder="URL de la imagen (opcional)"
            />
            <input
              type="file"
              name="image"
              className="w-full p-2 border rounded-lg"
              onChange={handleImageChange}
            />

            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition"
              disabled={loading}
            >
              {loading ? "Registrando..." : "Registrar Producto"}
            </button>
          </form>

          {message.text && (
            <div className={`mt-4 text-lg font-semibold px-4 py-2 rounded-lg ${message.type === "success" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
              {message.text}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterProductPage;
