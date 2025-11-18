import { type IProduct } from "../types/Interfaces";
import { getAllIngredients } from "../data/Api";
import React from "react";

interface CardProductProps {
    product: IProduct;
}

export default function CardProduct({ product }: CardProductProps) {

    const ingredientes = product.ingredients;
    const alergenos = product.allergens;

    const [ ingredients, setIntredients ] = React.useState<boolean>(false);
    const [ allergens, setAllergens ] = React.useState<boolean>(false);

    function changeIngredients() {
        setIntredients(!ingredients);
    }

    function changeAllergents() {
        setAllergens(!allergens);
    }

    return (
        <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl cursor-pointer p-4 flex flex-col justify-between gap-3">
        
            <div className="w-full h-50 flex justify-center items-center overflow-hidden">
                <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="max-h-full object-cover"
                />
            </div>

            <div className="flex flex-col items-center justify-between gap-2">
                <h3 className="font-semibold text-lg text-slate-900">
                    {product.title}
                </h3>
                <span className="font-bold text-xl text-slate-800">
                    {product.price.toFixed(2)} €
                </span>
            </div>

            <div className="flex flex-col gap-1">
                <button
                    className="w-full bg-green-800 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-4xl text-sm"
                    onClick={changeIngredients} 
                >
                    {!ingredients ? "Ver ingredientes" : "No ver ingredientes"}
                </button>
                {
                    ingredients && 
                    <div>
                        <p className="font-bold text-sm">Ingredientes:</p>
                        <ul>
                            {
                                ingredientes.map((ingrediente) => (
                                    <li className="list-disc list-inside text-sm">{ingrediente}</li>
                                ))
                            }
                        </ul>
                    </div>
                }

                <button
                    className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded-4xl text-sm"
                    onClick={changeAllergents}
                >
                    {!allergens ? "Ver alergias" : "No ver alergias"}
                </button>
                {
                    allergens && 
                    <div>
                        <p className="font-bold text-sm">Ingredientes:</p>
                        <ul>
                            {
                                alergenos.map((alergeno) => (
                                    <li className="list-disc list-inside text-sm">{alergeno}</li>
                                ))
                            }
                        </ul>
                    </div>
                }

                <div>

                </div>
            </div>        
        </div>
    );
}
