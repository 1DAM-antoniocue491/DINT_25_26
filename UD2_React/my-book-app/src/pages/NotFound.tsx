import { Link } from "react-router";

export default function NotFound () {
    return (
        <div className="min-h-screen flex items-center justify-center flex-col gap-4 p-6 text-center bg-gray-50">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-800 m-0">404</h1>
            <h2 className="text-2xl text-gray-600 m-0">Página no encontrada</h2>
            <p className="max-w-xl text-gray-500">
                La página que buscas no existe o ha sido movida. Comprueba la URL o vuelve
                al inicio.
            </p>
            <Link
                to="/"
                className='bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded mt-8'
            >
                Volver al inicio
            </Link>
        </div>
    );
};
