import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL; // URL del backend desde .env

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // Para mostrar mensajes de éxito o error
  const [loading, setLoading] = useState(false);
  const [fade, setFade] = useState(false); // Controla la opacidad para el fade out

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setFade(false);

    try {
      const response = await fetch(`${API_URL}/api/contact-messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al enviar el mensaje");
      }

      // const data = await response.json();
      setStatus({ success: true, message: "Mensaje enviado correctamente" });
      // Limpiar el formulario
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus({ success: false, message: error.message });
    } finally {
      setLoading(false);
    }
  };

  // useEffect para iniciar el fade out del mensaje después de 2 segundos
  useEffect(() => {
    let fadeTimeout;
    let removeTimeout;
    if (status) {
      fadeTimeout = setTimeout(() => {
        setFade(true);
      }, 2000);
      removeTimeout = setTimeout(() => {
        setStatus(null);
        setFade(false);
      }, 3000); // El mensaje se elimina 1 segundo después de iniciar el fade
    }
    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(removeTimeout);
    };
  }, [status]);

  return (
    <>
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-extrabold mb-4">Contáctanos</h1>
        <p className="text-lg text-amber-800 mb-6 max-w-lg text-center">
          Utiliza este formulario para sugerencias, dudas o para solicitar el
          alta de una asociación. El administrador te enviará los requisitos por correo electrónico.
        </p>

        {/* Formulario de Contacto */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        >
          <label className="block text-sm font-bold mb-2">Nombre</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg mb-4"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded-lg mb-4"
            placeholder="Tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="block text-sm font-bold mb-2">Mensaje</label>
          <textarea
            className="w-full p-2 border rounded-lg mb-4"
            rows="4"
            placeholder="Escribe tu mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>

        {status && (
          <p
            className={`mt-4 text-lg transition-opacity duration-1000 ${fade ? "opacity-0" : "opacity-100"
              } ${status.success ? "text-green-600" : "text-red-600"}`}
          >
            {status.message}
          </p>
        )}
      </main>
    </>
  );
};

export default ContactPage;
