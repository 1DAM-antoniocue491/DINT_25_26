import { Link } from "react-router"

interface CardProps {
    id: number,
    title: string,
    url: string
}


export default function CardCategory({ id, title, url }: CardProps) {
    return (
    <Link
      to={`/products/${id}`}
      className="flex flex-col md:flex-row items-center gap-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 w-full max-w-xl p-4"
    >
      <img
        src={url}
        alt={title}
        className="w-full md:w-40 h-32 object-contain"
      />
      <h5 className="text-xl md:text-2xl font-bold text-gray-900 text-center md:text-left flex-1">
        {title}
      </h5>
    </Link>
    )
}
