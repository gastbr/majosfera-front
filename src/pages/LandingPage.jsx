import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-amber-100 text-amber-900 overflow-x-hidden">

      {/* Contenido principal */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-6 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
          Bienvenido a la Landing Page
        </h1>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md w-full max-w-md md:max-w-2xl lg:max-w-4xl mb-6">
          <p className="text-base md:text-lg text-amber-800">
            Destacado: Aquí puedes colocar un carrusel de imágenes o contenido
            relevante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-md md:max-w-2xl lg:max-w-4xl mb-6">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Ejemplo"
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-base md:text-lg">
              Descubre nuestras asociaciones y eventos.
            </p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Ejemplo"
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-base md:text-lg">
              Participa en nuestra comunidad y apoya una causa.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-6">
          <Link
            to="/login"
            className="bg-amber-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-base md:text-lg hover:bg-amber-700 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-amber-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-base md:text-lg hover:bg-amber-700 transition"
          >
            Registro
          </Link>
        </div>
      </main>

    </div>
  );
};

export default LandingPage;
