import Book from "../components/Book"
import type { IBooks } from "../types/Interfaces"

interface LibraryProps {
    books: IBooks[]
}

export default function Library({books} : LibraryProps) {
    return (
        <div className="grid grid-cols-4">
            {
                books.map((b, index) => {
                    return (
                        <Book />
                    )
                })
            }
        </div>
    )
}

