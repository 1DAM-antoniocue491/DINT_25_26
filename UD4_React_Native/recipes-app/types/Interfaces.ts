export interface IFood {
    id: number,
    titulo: string,
    descripcion: string,
    categoria: string,
    tiempo: number,
    nivel: string,
    imagen: string
}

export interface IRecipe {
  id: number
  title: string
  course: string
  cuisine: string
  mainIngredient: string
  description: string
  source: string
  url: string
  urlHost: string
  prepTime: number
  cookTime: number
  totalTime: number
  servings: number
  yield: string
  ingredients: string
  directions: string
  tags: string
  rating: string
  publicUrl: string
  photoUrl: string
  private: string
  nutritionalScoreGeneric: string
  calories: number | string
  fat: string
  cholesterol: string
  sodium: string
  sugar: string
  carbohydrate: string
  fiber: string
  protein: string
  cost: string
}