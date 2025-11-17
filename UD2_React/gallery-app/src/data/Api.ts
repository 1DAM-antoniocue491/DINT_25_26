import type { ISculpture } from "../types/Interface";
import { sculptureList } from "./Data";

export function getData(page : number, category : string, country : string, sip : number = 3): {
    sculptures : ISculpture[], totalPages: number
} {
    const filtered : ISculpture[] = sculptureList.filter((sc) =>
        (category === "Todas" || sc.category === category) 
        && (country === "Todas" || sc.country === country)
    )
    return {
        sculptures: filtered.slice(page * sip, page*sip+sip), 
        totalPages: Math.ceil(filtered.length / sip)
    };
}

export function idExists(id : number) : ISculpture | undefined {
    const daid = sculptureList.find((s) => s.id == id);
    return daid;
}

export function getCategories(){
    const allCategory : string[] = sculptureList.map((s) => {
        return s.category
    })
    return ["Todas",...new Set(allCategory)];
}
export function getCountries(){
    const allCountry : string[] = sculptureList.map((s) => {
        return s.country
    })
    return ["Todas",...new Set(allCountry)];
}