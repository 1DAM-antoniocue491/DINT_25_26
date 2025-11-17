import type { IProduct } from "../types/Interfaces";
import { categories, products } from "./Data";

export function getCategories(){
    return categories;
}

export function getCategoryName(id: number){
    const category = categories.find(c => c.id === id);
    return category ? category.title : "Categoría no encontrada";
}

export function getData(page : number, category: number, marca: string): {
    products : IProduct[], totalPages: number, allProducts: number
} {
    const filtered : IProduct[] = products.filter((sc) =>
        (category === 0 || sc.category === Number(category))
        && 
        (marca === "Todas" || sc.brand === marca)
    )

    return {
        products: filtered.slice(page * 4, page*4+4), 
        totalPages: Math.ceil(filtered.length / 4),
        allProducts: filtered.length
    };
}

export function getMarcas(category: number): string[] {
    const filtered : IProduct[] = products.filter((sc) =>
        (category === 0 || sc.category === Number(category))
    )

    const marcasSet: Set<string> = new Set();
    filtered.forEach((product) => {
        marcasSet.add(product.brand);
    });

    return ["Todas", ...Array.from(marcasSet)];
}