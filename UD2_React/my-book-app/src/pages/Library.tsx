import Book from "../components/Book"
import type { IBooks } from "../types/Interfaces"

interface LibraryProps {
    books: IBooks[]
}

export default function Library({books} : LibraryProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 px-5">
            {
                books.map((b, index) => {
                    return (
                        <Book key={index} ISBN={b.ISBN} titulo={b.titulo} autor={b.autor} imagen={b.imagen} fechaPublicacion={b.fechaPublicacion} state={b.state} categoria={b.categoria} />
                    )
                })
            }
        </div>
    )
}

