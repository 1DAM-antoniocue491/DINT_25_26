import { Link } from "react-router";

interface CategoryProps {
    id: number;
    title: string;
    url: string;
}

export default function Category(props: CategoryProps) {
    return (
        <>
            <Link to={`/products/${props.id}`} className="flex flex-row justify-start items-center shadow-lg p-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-200">
                <img className="w-2/4" src={props.url} alt="Imagen" />
                <h1 className="text-2xl font-bold">{props.title}</h1>
            </Link>
        </>
    )
}