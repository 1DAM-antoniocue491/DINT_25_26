import { Category, Movie } from "../types/Interface";
import { categories } from "./data";

export function getCategories(): Category[] {
    return categories;
}

export async function getMoviesByCategory(endpoint: string): Promise<Movie[]> {
    const resp = await fetch(`https://api.sampleapis.com/movies/${endpoint}`);
    return await resp.json();
}