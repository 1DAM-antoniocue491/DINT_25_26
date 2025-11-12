import type { IBooks } from '../types/Interfaces'
import { Books } from '../data/data'
import type { IArticles } from '../types/ArticlesInterface'
import { articulosLibros } from '../data/articles'

export function getData(page: number, state: string, name: string): {
    books: IBooks[], totalPages: number
} {

    const limit = page*4;
    const offset = limit + 4;

    const filtered = Books.filter(b =>
        (state === "Todos" || b.state === state)
        &&
        (name === '' || b.titulo.toLowerCase().includes(name.toLowerCase()))
    )

    const object = {
        books: filtered.slice(limit, offset),
        totalPages: Math.ceil(filtered.length / 4)
    }

    return object;
}

export function getAwards(page: number): {
    books: IBooks[], totalPages: number
} {
    const limit = page*4;
    const offset = limit + 4;

    const filtered = Books.filter(b => ( b.award === true ));

    return {
        books: filtered.slice(limit, offset),
        totalPages: Math.ceil(filtered.length / 4)
    };
}

export function getArticles(): IArticles[] {
    return articulosLibros;
}

export function getState() {
    const states : string[] = Books.map((b) => {
        return b.state;
    });

    return ["Todos", ...new Set(states)];
}

export function isbnExists(ISBN : number) : IBooks | undefined {
    return Books.find((s) => s.ISBN === ISBN);
}