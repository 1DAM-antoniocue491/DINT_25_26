import type { ISculpture } from "../types/Interface";
import { sculptureList } from "./Data";


export function getData(page : number, category: string, country: string): {
    sculptures : ISculpture[], totalPages: number
} {
    const limit = page*3;
    const offset = limit + 3;

    const filtered = sculptureList.filter(s => 
        (category === "Todas" || s.category === category) &&
        (country === "Todas" || s.country === country)
    );

    const object = {
        sculptures: filtered.slice(limit, offset),
        totalPages: Math.ceil(filtered.length / 3)    
    };

    return object;
}

export function getCategories(){
    const allCountries : string[] = sculptureList.map((s) => {
        return s.category
    })
    return ["Todas",...new Set(allCountries)];
}

export function getCountry(){
    const allCountries : string[] = sculptureList.map((s) => {
        return s.country
    })
    return ["Todas",...new Set(allCountries)];
}