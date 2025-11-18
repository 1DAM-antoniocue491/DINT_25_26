import { categories, products } from "./Data";

export function getCategories(){
    return categories;
}

export function getProductsByCategory(id: number, ingrediente: string){
    return products.filter(b =>
        (b.categoryId === id)
        &&
        (ingrediente == "Todas" || b.ingredients.includes(ingrediente))
    )
}

export function getAllIngredients(categoryId: number){
    const ingredients = products
        .filter(p => p.categoryId === categoryId)
        .flatMap(p => p.ingredients);

    const unique = Array.from(new Set(ingredients)).sort();
    return ["Todas", ...unique];

}

export function getCategoryName(id: number){
    const category = categories.find((category) => category.id === id);
    return category ? category.title : "Categoría no encontrada";
}
