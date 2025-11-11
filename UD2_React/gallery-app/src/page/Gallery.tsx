import React, { type ChangeEvent } from 'react'
import Button from '../components/Button'
import Card from '../components/Card';
import type { ISculpture } from '../types/Interface';
import { getCategories, getCountries, getData } from '../data/Api';
import Header from '../components/Header';
import Navbar from '../components/NavBar';

export default function Gallery() {
    // Sculpture per page, cuantas esculturas tiene una pagina
    const sip = 3;
    const uid = React.useId();

    const [categories] = React.useState<string[]>(getCategories());
    const [selectedCategory, setSelectedCategory] = React.useState<string>("Todas");

    const [country] = React.useState<string[]>(getCountries());
    const [selectedCountry, setSelectedCountry] = React.useState<string>("Todas");

    const [page, setPage] = React.useState<number>(0);
    const [allData, setAlldata]=React.useState<ISculpture[]>(getData(0, selectedCategory, selectedCountry, sip).sculptures);
    const [totalPages, setTotalPages] = React.useState<number>(getData(0, selectedCategory, selectedCountry, sip).totalPages);

    const next = () => {
        setPage(page+1)
    }
    const before = () => {
        setPage(page-1)
    }
    const handleCategory = (selected : ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(selected.target.value);
        setPage(0);
    }
    const handleCountry = (selected : ChangeEvent<HTMLSelectElement>) => {
        setSelectedCountry(selected.target.value);
        setPage(0);
    }

    React.useEffect(()=>{
        const {sculptures, totalPages} = getData(page, selectedCategory, selectedCountry, sip);
        setAlldata(sculptures);
        setTotalPages(totalPages);
    }, [page, selectedCategory, selectedCountry]);

    return (
        <>
            <Header />
            <Navbar/>
            <div className='flex flex-col justify-content items-center pt-4'>
                <div className='flex flex-row gap-4'>
                    <label htmlFor='categorie' className='my-auto font-medium'>Categorías: </label>
                    <select name='select' id='categorie' className='my-auto px-3 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 shadow-sm cursor-pointer text-left'
                        value={selectedCategory} onChange={handleCategory}
                    >
                        {
                            categories.map((cat, i) =>{
                                return (<option key={`category-${uid}-${i}`} value={cat}>{cat}</option>);
                            })
                        }
                    </select>
                    
                    <label htmlFor='country' className='my-auto font-medium'>Pais: </label>
                    <select name='select' id='country' className='my-auto px-3 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 shadow-sm cursor-pointer text-left'
                        value={selectedCountry} onChange={handleCountry}
                    >
                        {
                            country.map((cat, i) =>{
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
                
                {
                    (totalPages == 0) ? 
                        <div className='bg-red-50 p-2 rounded-lg font-light my-4'>No hay esculturas que cumplan dicho filtro</div> : 
                    <>
                        <div className='flex flex-row gap-4 py-4'>
                            {page > 0 && <Button title='Anterior' callback={before} />}
                            <h4 className='font-light font-serif p-1'>({page+1} de {totalPages})</h4>
                            {page < totalPages-1 && <Button title='Siguiente' callback={next} />}
                        </div>
                    </>
                }
            </div>
        </>
    )
}
