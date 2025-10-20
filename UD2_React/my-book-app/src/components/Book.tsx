interface BookProos {
    ISBN: number;
    titulo: string;
    autor: string;
    imagen: string;
    fechaPublicacion: string;
    state: "Leído"|"Pendiente"|"Sin empezar";
}

type Estado = "Leído"|"Pendiente"|"Sin empezar";

export default function Book({ISBN, titulo, autor, imagen, fechaPublicacion, state} : BookProos) {
    return (
        <div className="w-fill flex flex-col rounded-md m-2 bg-white shadow-md">
            <img className="h-50 w-full object-cover object-center rounded-t-md" src={imagen} alt={titulo} />
            <div className="p-5">
                <h2 className="font-bold">{titulo}</h2>
                <p className="text-[13px] text-gray-500">{autor}</p>
                <p className="text-[13px] text-gray-500 mb-2">Publicado: {fechaPublicacion}</p>
                <Estado estado={state}/>
            </div>
        </div>
    )
}

function Estado({estado}: {estado : Estado}) {
    if (estado === "Leído") {
        return (
            <p className="w-24 text-[14px] text-center rounded-2xl text-green-600 font-bold bg-green-200">Leído</p>
        )
    } else if (estado === "Pendiente") {
        return (
            <p className="w-24 text-[14px] text-center rounded-2xl text-yellow-600 font-bold bg-yellow-200">Pendiente</p>
        )
    } else if (estado === "Sin empezar") {
        return (
            <p className="w-24 text-[14px] text-center rounded-2xl text-red-600 font-bold bg-red-200">Sin Empezar</p>
        )
    }
}