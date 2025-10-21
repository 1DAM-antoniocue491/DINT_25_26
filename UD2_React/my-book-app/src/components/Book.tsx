interface BookProos {
    ISBN: number;
    titulo: string;
    autor: string;
    imagen: string;
    fechaPublicacion: string;
    state: "Leído"|"Pendiente";
    categoria: string;
}

export default function Book({ISBN, titulo, autor, imagen, fechaPublicacion, state, categoria} : BookProos) {
    return (
        <div className="w-fill flex flex-col rounded-md m-2 bg-white shadow-md">
            <img className="h-100 w-full object-cover object-center rounded-t-md" src={imagen} alt={titulo} />
            <div className="p-5">
                <h2 className="font-bold text-xl">{titulo}</h2>
                <p className="text-md text-gray-500">{autor}</p>
                <p className="text-md text-gray-500 mb-2">Publicado: {fechaPublicacion}</p>

                <div className="flex justify-between">
                    {state === "Leído" && 
                        <p className="w-min px-3 text-sm text-center rounded-2xl text-green-600 font-bold bg-green-200">Leído</p>
                    }
                    {state === "Pendiente" &&
                        <p className="w-min px-3 text-sm text-center rounded-2xl text-yellow-600 font-bold bg-yellow-200">Pendiente</p>
                    }
                    <p className="w-min px-3 text-sm text-center rounded-2xl text-purple-600 font-bold bg-purple-200">{categoria}</p>
                </div>
            </div>
        </div>
    )
}