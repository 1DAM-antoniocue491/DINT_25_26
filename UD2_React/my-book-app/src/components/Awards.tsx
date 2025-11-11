import React from "react"
import Header from "./Header"
import ImagenLibro from "../assets/libroImagen.jpg"
import { getAwards } from "../data/api"
import NavBar from '../components/NavBar'

export default function Awards() {
    const [awards] = React.useState(getAwards());

    return (
        <>
        <Header />
        <NavBar />
        <div className="flex flex-col items-center pb-20">
            <h1 className="text-3xl">Artículos</h1>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-1">
                {
                    awards.map((s) => (
                        <div className="rounded-2xl shadow-2xl mt-10">
                            <div className="relative overflow-hidden p-10 rounded-t-2xl">
                                <img className="absolute inset-0 w-full h-full object-cover z-0" src={ImagenLibro} alt="Imagen" />
                                <img className="relative z-10 w-40 rounded-2xl" src={s.imagen} alt="Imagen" />
                            </div>
                            <div className="p-4">
                                <p className="text-2xl">{s.titulo}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}