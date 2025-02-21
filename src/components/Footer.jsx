export default function Footer() {
    return (
        <footer className="bg-amber-600 text-white py-3 text-center text-sm">
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
        </footer>
    );
}