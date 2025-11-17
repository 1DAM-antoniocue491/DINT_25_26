interface CardProductsProps {
    image: string,
    name: string,
    stars: number,
    reviews: number,
    discount: number,
    price: number

}

export default function CardProduct({ image, name, stars, reviews, discount, price }: CardProductsProps) {
    const starsPrint = [...Array(5)];
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col justify-between">
            <span className="top-3 left-3 bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-sm w-fit">- {discount} %</span>
            <img className="p-6 mx-auto max-h-100 object-cover" src={image} alt="product image" />

            <div className="px-5 pb-5">

                <h5 className="text-xl font-semibold text-gray-900 ">{name}</h5>

                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1">
                        {
                            starsPrint.map((_, i) => {
                                if (i < stars) {
                                    return <svg key={`star-full-${i}`} className="w-4 h-4 text-yellow-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>;
                                } else {
                                    return <svg key={`star-empty-${i}`} className="w-4 h-4 text-gray-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M11 17.033 6.482 19.408a1.534 1.534 0 0 1-2.226-1.617l.863-5.03L1.63 9.2a1.523 1.523 0 0 1 .387-1.575 1.523 1.523 0 0 1 1.238-1.044l5.051-.734 2.259-4.577a1.534 1.534 0 0 1 2.752 0l2.259 4.577 5.051.734a1.535 1.535 0 0 1 1.625 2.175l-3.656 3.563.863 5.031a1.532 1.532 0 0 1-2.226 1.616L11 17.033Z" />
                                    </svg>;
                                }
                            })
                        }
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ml-4 ">{reviews} opiniones</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-red-600">{(price - (price * discount / 100)).toFixed(2)} €</span>
                    <span className="text-2xl font-bold text-gray-900 line-through">{price} €</span>
                </div>

            </div>
        </div>
    )
}
