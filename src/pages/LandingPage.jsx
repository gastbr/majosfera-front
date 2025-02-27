import { Link } from "react-router";

const LandingPage = () => {

  const emojisHi = ["👋", "👋🏻", "👋🏼", "👋🏽", "👋🏾", "👋🏿"];
  const emojisHandshake = ["🤝", "🤝🏻", "🤝🏼", "🤝🏽", "🤝🏾", "🤝🏿"];

  return (
    <>
      {/* Contenido principal */}
      <main className="landing-bg flex-1 flex flex-col items-center justify-center p-4 md:p-6 text-center">
        <h1 className="flex flex-col gap-10 text-3xl md:text-4xl lg:text-5xl font-extrabold m-4 text-stone-100">
          <p className="text-2xl">Bienvenido a</p>
          <p className="flex flex-col justify-center items-center mb-18">
            <span>M A J O S F E R A</span>
            <span className="text-amber-600 title-text">Market</span>
          </p>
        </h1>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md w-full max-w-md md:max-w-2xl lg:max-w-4xl mb-6">
          <p className="text-4xl">{emojisHi[Math.floor(Math.random() * emojisHi.length)]}</p>
          <p className="text-base md:text-lg text-amber-800">
            Majosfera es un marketplace dedicado a conectar asociaciones con personas interesadas en apoyar sus iniciativas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-md md:max-w-2xl lg:max-w-4xl mb-6">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
            <p className="text-4xl">🔎</p>
            <p className="text-base md:text-lg">
              Explora productos y servicios ofrecidos por distintas asociaciones y contribuye a su impacto en la comunidad.
            </p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
            <p className="text-4xl">{emojisHandshake[Math.floor(Math.random() * emojisHandshake.length)]}</p>
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
    </>
  );
};

export default LandingPage;
