import Header from "../components/Header";
import Navbar from "../components/NavBar";


export default function Awards() {
  return (
    <>
    <Header/>
    <Navbar/>
      <section className="mt-6 bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">Premios y Reconocimientos</h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Nuestra galería ha sido reconocida internacionalmente por su contribución al arte
          contemporáneo y la promoción de jóvenes escultores. Estos son algunos de los premios
          más destacados recibidos en los últimos años:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Premio Internacional de Escultura Moderna</strong> — 2023</li>
          <li><strong>Exposición Destacada del Año</strong> — Bienal de París 2022</li>
          <li><strong>Innovación en Arte Digital</strong> — Museo Contemporáneo de Sevilla, 2021</li>
        </ul>

        <p className="mt-6 text-gray-600 italic">
          Seguimos trabajando para impulsar el talento y la creatividad en el arte tridimensional.
        </p>
      </section>
    </>

  );
}
