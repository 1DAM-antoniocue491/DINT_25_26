import React from 'react'
import HeroBanner from '../components/HeroBanner';
import CardCategory from '../components/CardCategory';
import type { ICatery } from '../types/Interfaces';
import { getCategories } from '../data/Api';

export default function Categories() {

  const uid = React.useId();
  const [categories] = React.useState<ICatery[]>(getCategories());

  return (
    <>
    
      <HeroBanner />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center p-3 gap-4'>
        {
          categories.map((c, i) => {
            return <CardCategory key={`cat-${uid}-${i}`} id={c.id} title={c.title} url={c.url} />;
          })
        }
      </div>

    </>


  )
}
