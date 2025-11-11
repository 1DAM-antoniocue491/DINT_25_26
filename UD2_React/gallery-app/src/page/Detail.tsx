import { Link, useParams } from "react-router";
import Header from "../components/Header";
import { idExists } from "../data/Api";
import Error from "../assets/advertencia.png";

export default function Detail() {
  const {id} = useParams();

  const found = idExists(Number(id));

  if (found == undefined){
    return (
      <>
        <Header />
        <main className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
          <img src={Error} className="w-20"></img>
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Escultura no encontrada
          </h1>
          <button className="text-blue-600 hover:underline text-lg cursor-pointer">
            <Link to="/gallery">Volver a la galería</Link>
          </button>
        </main>
      </>
    )
  }
  return (
    <>
      <Header />
      <main className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 py-12 px-6 flex justify-center">
        <article className="max-w-5xl bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row">
      
          <div className="md:w-1/2">
            <img
              src={found?.url}
              alt={found?.alt}
              className="h-full w-full object-cover"
            />
          </div>
  
          <div className="md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {found?.name}
              </h1>
              <h2 className="text-lg text-gray-600 mb-4 italic">
                {found?.artist}
              </h2>
  
              <p className="text-gray-700 leading-relaxed mb-6">
                {found?.description}
              </p>
  
              <div className="flex gap-6 text-gray-700">
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase">
                    Categoría
                  </p>
                  <p>{found.category}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase">
                    País
                  </p>
                  <p>{found.country}</p>
                </div>
              </div>
            </div>
  
  
            <div className="mt-8">
              <button
                className="px-3 text-blue-600 hover:text-white hover:bg-blue-700 text-lg cursor-pointer rounded-2xl bg-blue-100"
              >
                <Link to="/gallery">Volver a la galería</Link>
              
              </button>
            </div>
          </div>
        </article>
      </main>
    </>
  )  
  
}
