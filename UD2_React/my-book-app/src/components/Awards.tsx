import React from "react"
import Book from "../components/Book"
import type { IBooks } from "../types/Interfaces"
import { getAwards } from "../data/api"
import Header from '../components/Header'
import NavBar from '../components/NavBar'

export default function Awards() {

    const [page, setPage] = React.useState<number>(0);
    const [totalPages, setTotalPages] = React.useState<number>(getAwards(page).totalPages);
    const [allBooks, setAllBooks] = React.useState<IBooks[]>(getAwards(page).books);


    function nextBook() {
        setPage(page + 1);
    }

    function beforeBook() {
        setPage(page - 1);
    }

    React.useEffect(() => {
        const data = getAwards(page);
        setAllBooks(data.books);
        setTotalPages(data.totalPages);
    }, [page]);

    return (

        <>
            <Header />
            <NavBar />
            <div className="flex flex-col gap-10">
                <div className="flex justify-center w-full">
                    {
                        allBooks.map((b, index) => {
                            return (
                                <Book key={`book-${b.ISBN}-${index}`} ISBN={b.ISBN} titulo={b.titulo} autor={b.autor} imagen={b.imagen} fechaPublicacion={b.fechaPublicacion} state={b.state} categoria={b.categoria} favourite={b.favourite}/>
                            )
                        })
                    }
                </div>

                <div className="flex flex-row justify-center gap-10 items-center">
                    {page > 0 && <button onClick={beforeBook} className="py-1 px-3 rounded-2xl font-bold text-white bg-amber-500 hover:bg-amber-400">Before</button>}
                    <p className="border-2 rounded-full p-2 flex justify-center font-bold bg-amber-100 text-amber-700">{page + 1} de {totalPages}</p>
                    {page < totalPages - 1 && <button onClick={nextBook} className="py-1 px-3 rounded-2xl font-bold text-white bg-amber-500 hover:bg-amber-400">Next</button>}
                </div>
            </div>
        </>
    )
}

