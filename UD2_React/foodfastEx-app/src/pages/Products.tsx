import Header from '../components/Header';
import React from 'react';
import CardProduct from '../components/CardProduct';
import type { IProduct } from '../types/Interfaces';
import { getProductsByCategory, getCategoryName, getAllIngredients } from '../data/Api';
import { useParams } from 'react-router';


export default function Products() {

  const id = useParams();

  const [data, setData] = React.useState<IProduct[]>(getProductsByCategory(Number(id.id), "Todas"));
  const [ selectedIngredient, setSelectedIngredient ] = React.useState<string>("Todas");

  const ingredientes = getAllIngredients(Number(id.id));
  const catecoryName = getCategoryName(Number(id.id));

  const handleIngredient = (selected: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedIngredient(selected.target.value);
  }

    React.useEffect(() => {
        const products = getProductsByCategory(Number(id.id), selectedIngredient);
        setData(products);
    }, [id.id, selectedIngredient]);

  return (
    <div className=" min-h-screen flex flex-col bg-linear-to-b
            from-gray-100/20  via-gray-300/50 to-gray-500/50">
      <Header />
      <p className='text-7xl text-black font-bold text-center'>{catecoryName}</p>


      <div className="flex flex-row justify-center p-3 mt-3"
      >
        <div className="flex flex-row justify-center items-baseline gap-2">
          <label className="text-sm font-medium">Ingredientes:</label>
          <select
            name="select"
            value={selectedIngredient}
            onChange={handleIngredient}
            className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 shadow-sm
              cursor-pointer">
                {
                  ingredientes.map((s, index) => {
                    return (
                      <option key={`state-${s}-${index}`} value={s}>{s}</option>
                    )
                  })
                }
          </select>
        </div>


      </div>

      <main className="flex-1 flex justify-center p-5">
        <div className="w-full max-w-6xl">
          <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {data.map((product, i) => (
              <CardProduct
                key={`${product.id}-${i}`} product={product}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
