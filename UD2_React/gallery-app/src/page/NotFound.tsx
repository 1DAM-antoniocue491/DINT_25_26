import { Link } from 'react-router';
export default function NotFound() {
   return (
    <main className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4 text-blue-600">404</h1>
      <p className="text-xl mb-6">Página no encontrada</p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
        Volver al inicio
      </Link>
    </main>
   );
}