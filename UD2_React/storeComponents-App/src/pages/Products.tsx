
import type { IProduct } from "../types/Interfaces";
import React, { type ChangeEvent } from "react";
import { getData, getCategoryName, getMarcas } from "../data/Api";
import CardProduct from "../components/CardProduct";
import { useParams } from "react-router";

export default function Products() {
  const { id } = useParams()
  
  const uid = React.useId();
  const [selectedMarca, setSelectedMarca] = React.useState<string>("Todas");
  const [page, setPage] = React.useState<number>(0);
  const [allData, setAlldata]=React.useState<IProduct[]>(getData(0, Number(id), selectedMarca).products);
  const [totalPages, setTotalPages] = React.useState<number>(getData(0, Number(id), selectedMarca).totalPages);
  const [ countAllProducts, setCountAllProducts ] = React.useState<number>(getData(0, Number(id), selectedMarca).allProducts);

  const categoryName = getCategoryName(Number(id ?? "0"));

  const itemsPerPage = 4;
  const firsNumber = page * itemsPerPage + 1;
  const secondNumber = Math.min((page + 1) * itemsPerPage, countAllProducts);
  const [ marcas ] = React.useState<string[]>(getMarcas(Number(id)));

  const handleNextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };
  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const handleMarca = (selected: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMarca(selected.target.value);
    setPage(0);
  };

  React.useEffect(() => {
    const { products, totalPages, allProducts } = getData(page, Number(id), selectedMarca);
    setAlldata(products);
    setTotalPages(totalPages);
    setCountAllProducts(allProducts);
  }, [id, page, selectedMarca]);

  return (
    <>
   
      <section className="w-full bg-linear-to-r from-orange-400 to-orange-600 text-white py-6 px-8 shadow-md text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2 tracking-tight">
          Black Friday <span className="text-yellow-300">{categoryName}</span>
        </h2>
        <p className="max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          ¡El Black Friday de Martínez Montañés ya está aquí! Comienzan las mejores
          ofertas del año con descuentos de hasta el 60% en tus productos tecnológicos favoritos. Ofertas
          válidas hasta el <strong>30/11/2025</strong>.
        </p>
      </section>

      <div className="flex flex-row justify-center items-center gap-3 m-4">
        <label htmlFor='marca' className='my-auto font-medium'>Marca: </label>
          <select name='select' id='marca' className='my-auto px-3 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 shadow-sm cursor-pointer text-left'
            value={selectedMarca} onChange={handleMarca}
          >
            {
              marcas.map((cat, i) =>{
                return (<option key={`category-${uid}-${i}`} value={cat}>{cat}</option>);
              })
            }
          </select>
      </div>

      <div className="grid  md:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-4 p-4">
        {
          allData.map((d, i) => {
            return <CardProduct key={`prod-${uid}-${i}`} image={d.image} name={d.name} stars={d.stars} reviews={d.reviews} discount={d.discountPercent} price={d.originalPrice} />
          })
        }

      </div>

      <div className="flex flex-col justify-center items-center">
        <p>Mostrando del <b>{firsNumber}</b> al <b>{secondNumber}</b> de <b>{countAllProducts}</b> productos</p>
        <div className="flex flex-row gap-3 mt-2">
          {
            page > 0 && <button onClick={handlePreviousPage} className="border px-5 py-1 rounded-md bg-gray-800 font-semibold text-white">Anterior</button>
          }
          {
            page < totalPages - 1 && <button onClick={handleNextPage} className="border px-5 py-1 rounded-md bg-gray-800 font-semibold text-white">Siguiente</button>
          }
        </div>
      </div>
    </>
  )
}
