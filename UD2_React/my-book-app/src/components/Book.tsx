import React from "react";
import IconButton from "./IconButton";
import { Link } from "react-router";

interface BookProos {
    ISBN: number;
    titulo: string;
    autor: string;
    imagen: string;
    fechaPublicacion: string;
    state: "Leído"|"Pendiente";
    categoria: string;
    favourite: boolean;
}

export default function Book({ISBN, titulo, autor, imagen, fechaPublicacion, state, categoria, favourite} : BookProos) {
    var [status, setStatus] = React.useState(favourite);
    var [state, setState] = React.useState<"Leído"|"Pendiente">(state);

    function toggleState() {
        if (state === "Leído") {
            setState("Pendiente");
        } else {
            setState("Leído");
        }
    }

    return (
        <div className="w-2/4 flex flex-col rounded-md m-2 bg-white shadow-md">
            <img className="h-100 w-full object-cover object-center rounded-t-md" src={imagen} alt={titulo} />
            <div className="p-5">
                <h2 className="font-bold text-xl">{titulo}</h2>
                <p className="text-md text-gray-500">{autor}</p>
                <p className="text-md text-gray-500 mb-2">Publicado: {fechaPublicacion}</p>

                <div className="flex justify-between items-center mb-4">
                    <div className="flex flex-col gap-2">
                        {state === "Leído" && 
                            <button onClick={toggleState} className="w-min px-3 text-sm text-center rounded-2xl text-green-600 font-bold bg-green-200">Leído</button>
                        }
                        {state === "Pendiente" &&
                            <button onClick={toggleState} className="w-min px-3 text-sm text-center rounded-2xl text-yellow-600 font-bold bg-yellow-200">Pendiente</button>
                        }
                        <p className="w-min px-3 text-sm text-center rounded-2xl text-purple-600 font-bold bg-purple-200">{categoria}</p>
                    </div>
                    <IconButton status={status} callBack={() => setStatus(!status)} />
                </div>

                <button  className="border px-3 py-1 rounded-md bg-amber-500 text-white font-bold">
                    <Link to={`/detail/${ISBN}`}>Más información</Link>
                </button>
            </div>
        </div>
    )
}