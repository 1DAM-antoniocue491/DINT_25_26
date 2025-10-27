interface CardProps {
    name: string;
    imageUrl: string;
    description: string;
}

export function Card({ name, imageUrl, description }: CardProps) {
    return (
        <div className="w-2/5 rounded-md p-4 flex flex-col items-center gap-2 bg-white shadow-2xl">
            <p className="text-2xl">{name}</p>
            <img className="h-100 w-full object-cover object-center rounded-md" src={imageUrl} alt="Imagen" />
            <p>{description}</p>
        </div>
    )
}