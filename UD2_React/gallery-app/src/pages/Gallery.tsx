import React, { type ChangeEvent } from 'react'
import Button from '../components/Button'
import Card from '../components/Card';
import type { ISculpture } from '../types/Interface';
import { getCategories, getData, getCountry } from '../data/Api';
import Header from "../components/Header"

export default function Gallery() {
    // Sculpture per page, cuantas esculturas tiene una pagina
    const uid = React.useId();
    const [categories] = React.useState<string[]>(getCategories());
    const [selectedCategory, setSelectedCategory] = React.useState<string>('Todas');
    
    const [countries] = React.useState<string[]>(getCountry());
    const [selectedCountry, setSelectedCountry] = React.useState<string>('Todas');

    const [page, setPage] = React.useState<number>(0);
    const [allData, setAlldata]=React.useState<ISculpture[]>(getData(0, selectedCategory, selectedCountry).sculptures);
    const [totalPages, setTotalPages] = React.useState<number>(getData(0, selectedCategory, selectedCountry).totalPages);

    const next = () => {
        setPage(page+1)
    }
    const before = () => {
        setPage(page-1)
    }

    const handleCategory = (selected: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(selected.target.value);
        setPage(0);
    }

    const handleCountry = (selected: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCountry(selected.target.value);
        setPage(0);
    }

    React.useEffect(()=>{
        const {sculptures, totalPages} = getData(page, selectedCategory, selectedCountry);
        setAlldata(sculptures)
        setTotalPages(totalPages)
    }, [page, selectedCategory, selectedCountry]);

    return (
        <>
        <Header />
        <div className='flex flex-col justify-content items-center pt-4'>
            
            <div>
                <label className='font-bold' htmlFor="select">Categoría: </label>
                <select name='select' className='mb-2 px-3 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 shadow-sm cursor-pointer text-left'
                value={selectedCategory}
                onChange={handleCategory}>
                    {
                        categories.map((cat, i) =>{
                            return (<option key={`category-${uid}-${i}`} value={cat}>{cat}</option>);
                        })
                    }
                </select>
        
                <label className='font-bold ml-10' htmlFor="select">País: </label>
                <select name='select' className='mb-2 px-3 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 shadow-sm cursor-pointer text-left'
                value={selectedCountry}
                onChange={handleCountry}>
                    {
                        countries.map((cat, i) =>{
                            return (<option key={`country-${uid}-${i}`} value={cat}>{cat}</option>);
                        })
                    }
                </select>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {
                    allData.map((sc, index)=>{
                        return <Card key={`card-${uid}-${index}`} data={sc} />
                    })
                }
            </div>
            
            {allData.length === 0 &&
                <h3 className='font-extralight border bg-red-300 text-red-600 rounded-md text-xl p-4 m-20'>No hay esculturas que coinciden con este filtro</h3>
            }
            
            {allData.length > 0 &&
                <div className='flex flex-row gap-4 py-4'>
                    {page > 0 && <Button title='Anterior' callback={before} />}
                    <h4 className='font-light font-serif p-1'>({page+1} de {totalPages})</h4>
                    {page < totalPages-1 && <Button title='Siguiente' callback={next} />}
                </div>
            }
            
        </div>
        </>
    )
}