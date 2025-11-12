import { Link, useParams } from "react-router";
import { isbnExists } from "../data/api"
import Header from '../components/Header'

export default function Detail() {
    const { isbn } = useParams();

    const found = isbnExists(Number(isbn));

    if (found == undefined){
    return (
      <>
        <Header />
        <main className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Libro no encontrado
          </h1>
          <button className="text-blue-600 hover:underline text-lg cursor-pointer">
            <Link to="/library">Volver a la librería</Link>
          </button>
        </main>
      </>
    )
  }
    return (
        <>
        <Header />
        <div className="flex flex-col items-center pb-20 justify-center">
            <h1 className="text-3xl font-bold mt-10 mb-5">{found.titulo}</h1>
            <div className="flex flex-row items-center p-10 gap-10">
                <img className="h-96 w-64 object-cover object-center rounded-md mb-5" src={found.imagen} alt={found.titulo} />
                <div>
                    <p className="text-lg mb-2"><span className="font-bold">Autor:</span> {found.autor}</p> 
                    <p className="text-lg mb-2"><span className="font-bold">Fecha de Publicación:</span> {found.fechaPublicacion}</p>
                    <p className="text-lg mb-2"><span className="font-bold">Estado:</span> {found.state}</p>
                    <p className="text-lg mb-2"><span className="font-bold">Categoría:</span> {found.categoria}</p>
                    <p className="text-lg mb-2"><span className="font-bold">Descripción:</span> {found.descripcion}</p>
                    <button className="mt-4 border px-3 py-1 rounded-md bg-amber-500 text-white font-bold">
                        <Link to="/library">Volver a la biblioteca</Link>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}