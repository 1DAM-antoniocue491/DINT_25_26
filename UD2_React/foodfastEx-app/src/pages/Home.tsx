import Header from "../components/Header"
import { Link } from "react-router"

export default function Home() {
  return (
    <>
      <Header />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 p-2">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold lg:text-9xl">Nuestros productos más icónicos</h1>
          <p>Disfruta de opciones deliciosas, desde nuestra carta de hamburguesass hasta nuestros McFlurry.</p>
        </div>

        <Link to={`/products/2`} className="bg-amber-300 rounded-md p-4 flex flex-col items-center hover:shadow-lg shadow-amber-700">
          <img src="https://mcdonalds.es/api/cms/images/aMQLkWGNHVfTPFlE_Novedades_560x560_2-1-.png" alt="Imagen Novedades"
            className="w-full"
          />
          <p className="font-bold">Novedades</p>
        </Link>

        <Link to={`/products/1`} className="bg-amber-300 rounded-md p-4 flex flex-col items-center hover:shadow-lg shadow-amber-700">
          <img src="https://mcdonalds.es/api/cms/images/aGt2m0MqNJQqHlqA_Ofertas_v2_560x560.png" alt="Imagen Ofertas"
            className="w-full"
          />
          <p className="font-bold">Ofertas</p>
        </Link>
      </div>

      <div className="flex justify-center mt-4 mb-10">
        <Link className="bg-amber-400 px-5 py-2 rounded-md text-sm font-bold hover:text-white hover:bg-amber-500 hover:shadow-lg shadow-amber-700" to="/categories">VER TODA LA CARTA</Link>
      </div>
    </>
  )
}
