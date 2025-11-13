export interface Category {
    id: number;
    title: string;
    url: string;
}

export interface Products {
    id: number;
    name: string;
    category: number;
    image: string;
    isTrending: boolean;
    discountPercent: number;
    originalPrice: number;
    stars: number;
    reviews: number;
}