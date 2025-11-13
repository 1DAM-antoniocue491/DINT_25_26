import { Products_Data } from "../data/Productos_Data"
import type { Products } from "./Interface"

export function getProducts(categoryId: number): {
    products: Products[];
} {
    console.log("Category ID:", categoryId);
    
    if (categoryId === 0) {
        return { products: Products_Data };
    }

    const products = Products_Data.filter(product => product.category === categoryId);
    return { products };
}