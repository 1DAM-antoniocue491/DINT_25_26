interface ProductsProps {
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

export default function Products(props: ProductsProps) {
    function calculateDiscountedPrice(originalPrice: number, discountPercent: number): number {
        return originalPrice - (originalPrice * (discountPercent / 100));
    }

    return (
        <>
            <div className="border flex flex-col rounded-md justify-between">
                <div>
                    <p className="flex justify-center items-center bg-red-300 text-red-800 w-11 text-xs p-1 rounded-md"> - {props.discountPercent} %</p>
                    <div className="flex justify-center">
                        <img className="w-3/4" src={props.image} alt="Imagen" />
                    </div>
                </div>
                <div className="p-3">
                    <p className="font-bold">{props.name}</p>
                    <p className="bg-blue-200 w-25 text-center rounded-md text-blue-800 text-xs font-semibold p-1">{props.reviews} opiniones</p>
                    
                    <div className="flex flex-row justify-between">
                        <p>{calculateDiscountedPrice(props.originalPrice, props.discountPercent)} €</p>
                        <p>{props.originalPrice} €</p>
                    </div>
                </div>
            </div>
        </>
    )
}