export default function Footer() {
  return (
    <footer className="bg-amber-600 text-white py-4 px-4 text-center text-sm">
      <div className="flex items-center justify-around">
        <p>
          &copy; {new Date().getFullYear()} Majosfera - Todos los derechos
          reservados.
        </p>
        {/* Sección de certificados */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <img
            src="/wcag.jpg"
            alt="Certificado WCAG-WAI 2.1"
            title="Cumple con las pautas WCAG 2.1"
            className="w-20 object-contain"
          />
          <img
            src="/Sello 600 EFQM_24-27.jpg"
            alt="Sello 600 EFQM"
            title="Avalan gestión EFQM"
            className="w-8 object-contain"
          />
          <img
            src="/AENOR-logo-redondo-ESP.png"
            alt="Certificado AENOR"
            title="Certificado AENOR"
            className="w-12 object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
