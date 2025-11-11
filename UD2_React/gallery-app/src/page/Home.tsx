import { Link } from "react-router";


export default function Home() {
  return (
      <section className="relative h-screen bg-[url('https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774')] bg-cover bg-center ">
    
      <div className="absolute inset-0 opacity-50 bg-black"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Galería de Esculturas
        </h1>
        <p className="text-lg md:text-xl mb-8 text-white">
          Explora una colección única de obras artísticas que combinan historia y forma.
        </p>
        <Link to="/gallery" className="bg-blue-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Ver galería
        </Link>
     
      </div>
    </section>
  )
}
