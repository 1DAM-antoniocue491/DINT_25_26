import { useParams } from "react-router";
import Header from "../components/Header"
import Product from "../components/Product"
import { getProducts } from "../types/api"
import React from "react";

export default function Products() {
    const { id } = useParams()
    const [products] = React.useState(getProducts(Number(id)).products);


    return (
        <>
            <Header />

            <div className="flex flex-col p-6 bg-gradient-to-l from-[#ff6000fc] from-60% to-[#ff7300e0] justify-center items-center">
                <div className="flex flex-row gap-2 text-3xl font-extrabold text-white">
                    <h1>Black Friday</h1>
                    <h1 className="text-amber-400">Ordenadores</h1>
                </div>
                <p className="text-white text-center">¡El Black Friday de Martínez Montañés ya está aquí! Comiienzan las mejores ofertas del año con descuentos de hasta el 60% en tus productos tecnológicos favoritos. Ofertas válidas hasta el <b>31/11/2025</b>.</p>
            </div>

            <div className="mt-3 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-3 p-3">
                {
                    products.map((product) => (
                        <Product key={product.id} id={product.id} name={product.name} category={product.category} image={product.image} isTrending={product.isTrending} discountPercent={product.discountPercent} originalPrice={product.originalPrice} stars={product.stars} reviews={product.reviews} />
                    ))
                }
            </div>
        </>
    )
}