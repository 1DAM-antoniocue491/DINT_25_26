import { Category } from "../types/Interface";
import { categories } from "./data";

export function getCategories(): Category[] {
    return categories;
}