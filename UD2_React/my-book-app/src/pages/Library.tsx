import React from "react"
import Book from "../components/Book"
import type { IBooks } from "../types/Interfaces"

interface LibraryProps {
    books: IBooks[]
}

export default function Library({books} : LibraryProps) {
    var [book, setBook] = React.useState<number>(0);
    
    function nextBook() {
        if (book < books.length - 1) {
            setBook(book + 1);
        }
    }

    function beforeBook() {
        if (book > 0) {
            setBook(book - 1);
        }
    }

    return (
        <div>
            <div className="flex flex-row justify-center gap-10 items-center">
                <button onClick={beforeBook} className="py-1 px-3 rounded-2xl font-bold text-white bg-amber-500 hover:bg-amber-400">Before</button>
                <p className="border-2 rounded-full p-2 w-11 flex justify-center font-bold bg-amber-100 text-amber-700">{book + 1}</p>
                <button onClick={nextBook} className="py-1 px-3 rounded-2xl font-bold text-white bg-amber-500 hover:bg-amber-400">Next</button>
            </div>

            <div className="flex justify-center w-full mt-20">
                {
                    books.map((b, index) => {
                        return (
                            index === book &&
                            <Book key={b.ISBN} ISBN={b.ISBN} titulo={b.titulo} autor={b.autor} imagen={b.imagen} fechaPublicacion={b.fechaPublicacion} state={b.state} categoria={b.categoria} favourite={b.favourite} />
                        )
                    })
                }
            </div>
        </div>
        
    )
}

