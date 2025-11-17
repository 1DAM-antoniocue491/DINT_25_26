export interface ICatery{
    id: number,
    title: string,
    url: string
}

export interface IProduct{
  id: number;
  name: string;
   brand: string;
  category: number;
  image: string;
  isTrending: boolean;
  discountPercent: number;
  originalPrice: number;
  stars: number;
  reviews: number;
}