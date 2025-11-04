import React, { type ChangeEvent } from "react"
import Book from "../components/Book"
import type { IBooks } from "../types/Interfaces"
import { getData, getState } from "../data/api"

interface LibraryProps {
    books: IBooks[]
}

export default function Library({ books }: LibraryProps) {
    const [book, setBook] = React.useState<number>(0);

    const [states] = React.useState<string[]>(getState());
    const [selectedState, setSelectedState] = React.useState<string>("Todos");
    const [page, setPage] = React.useState<number>(0);
    const [totalPages, setTotalPages] = React.useState<number>(getData(0, selectedState).totalPages);
    const [allBooks, setAllBooks] = React.useState<IBooks[]>(getData(page, selectedState).books);
    const [nameFilter, setNameFilter] = React.useState<string>('');

    function nextBook() {
        setPage(page + 1);
    }

    function beforeBook() {
        setPage(page - 1);
    }

    const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setNameFilter(e.target.value);
    }

    React.useEffect(() => {
        const data = getData(page, selectedState);
        setAllBooks(data.books);
        setTotalPages(data.totalPages);
    }, [page, selectedState]);

    const handleState = (selected: ChangeEvent<HTMLSelectElement>) => {
        setSelectedState(selected.target.value);
        setPage(0);
    }

    return (

        <>
            <div className="flex flex-col gap-10">
                <label>
                    Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
                </label>
                <input name="myInput" defaultValue="Some initial value" />
                <div>
                    <label htmlFor="select" className="ml-5 font-bold">Filtrado por estado: </label>
                    <select name="select" id="select"
                        value={selectedState}
                        onChange={handleState}>
                        {
                            states.map((s, index) => {
                                return (
                                    <option key={`state-${s}-${index}`} value={s}>{s}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <div className="flex justify-center w-full">
                    {
                        allBooks.map((b, index) => {
                            return (
                                <Book key={`book-${b.ISBN}-${index}`} ISBN={b.ISBN} titulo={b.titulo} autor={b.autor} imagen={b.imagen} fechaPublicacion={b.fechaPublicacion} state={b.state} categoria={b.categoria} favourite={b.favourite} />
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

