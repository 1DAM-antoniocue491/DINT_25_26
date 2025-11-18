
import React from "react";
import Header from "../components/Header";

import type { ICategory } from "../types/Interfaces";
import { getCategories } from "../data/Api";

import { CardCategory } from "../components/CardCategory";

export default function Categories() {

  const [categories] = React.useState<ICategory[]>(getCategories());

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-b from-yellow-300/20 via-yellow-500/50 to-yellow-700/70">
      <Header />
      <p className='text-7xl text-black font-bold text-center'>Categorías</p>
      <main className="flex-1 flex justify-center p-5">

        <div className="w-full max-w-6xl">
          <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {categories.map((category, i) => {
              return <>
                <CardCategory key={i} id={category.id} title={category.title} imageUrl={category.imageUrl} />
              </>;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
