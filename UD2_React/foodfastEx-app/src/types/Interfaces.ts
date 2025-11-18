export interface IProduct {
  id: number;
  categoryId: number;
  title: string;
  imageUrl: string;
  price: number;
  ingredients: string[];
  allergens: string[];
};

export interface ICategory{
    id: number;
    title: string;
    imageUrl: string;
}