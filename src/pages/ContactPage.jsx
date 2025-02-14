import React from "react";
import { Link } from "react-router";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900">
      {/* Header */}
      <header className="bg-amber-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Contacto</h1>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="bg-white text-amber-600 px-4 py-2 rounded-lg text-lg hover:bg-gray-200 transition"
          >
            Inicio
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-extrabold mb-4">Contáctanos</h1>
        <p className="text-lg text-amber-800 mb-6 max-w-lg text-center">
          Utiliza este formulario para sugerencias, dudas o para solicitar el
          alta de una asociación. El administrador te enviará los requisitos por
          email.
        </p>

        {/* Formulario de Contacto */}
        <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <label className="block text-sm font-bold mb-2">Nombre</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg mb-4"
            placeholder="Tu nombre"
            required
          />

          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded-lg mb-4"
            placeholder="Tu email"
            required
          />

          <label className="block text-sm font-bold mb-2">Mensaje</label>
          <textarea
            className="w-full p-2 border rounded-lg mb-4"
            rows="4"
            placeholder="Escribe tu mensaje"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition"
          >
            Enviar
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-amber-600 text-white py-3 text-center text-sm">
        &copy; {new Date().getFullYear()} Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default ContactPage;
