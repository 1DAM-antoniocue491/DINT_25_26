import './App.css'
import React from 'react'
import type { IBooks } from './types/Interfaces'
import Library from './pages/Library'
import Header from './components/Header'

function App() {

  var [dataBooks, setDataBooks] = React.useState<IBooks[]>([]);

  const Books: IBooks[] = [
  {
    ISBN: 9781234567000,
    titulo: "El despertar de la luna",
    autor: "Lucía Martínez",
    imagen: "https://m.media-amazon.com/images/I/612JXVmJrKL._UF1000,1000_QL80_.jpg",
    fechaPublicacion: "2023-05-12",
    state: "Leído",
    categoria: "Fantasía",
    favourite: true
  },
  {
    ISBN: 9781234567001,
    titulo: "Sombras en la niebla",
    autor: "Carlos Gómez",
    imagen: "https://editorialcirculorojo.com/wp-content/uploads/sombras-en-la-niebla.jpg",
    fechaPublicacion: "2022-08-24",
    state: "Pendiente",
    categoria: "Misterio",
    favourite: false
  },
  {
    ISBN: 9781234567002,
    titulo: "La ciudad olvidada",
    autor: "Ana Torres",
    imagen: "https://m.media-amazon.com/images/I/619s9YZZyCL._UF1000,1000_QL80_.jpg",
    fechaPublicacion: "2021-11-05",
    state: "Pendiente",
    categoria: "Aventura",
    favourite: false
  },
  {
    ISBN: 9781234567003,
    titulo: "El último suspiro",
    autor: "Juan Pérez",
    imagen: "https://www.entreletras.eu/wp-content/uploads/2025/04/unnamed-8.jpg",
    fechaPublicacion: "2020-03-15",
    state: "Leído",
    categoria: "Suspense",
    favourite: false
  },
  {
    ISBN: 9781234567004,
    titulo: "Ecos del pasado",
    autor: "María López",
    imagen: "https://imagessl5.casadellibro.com/a/l/s5/45/9788419197245.webp",
    fechaPublicacion: "2019-07-22",
    state: "Pendiente",
    categoria: "Historia",
    favourite: false
  },
  {
    ISBN: 9781234567005,
    titulo: "El jardín secreto",
    autor: "Pedro Sánchez",
    imagen: "https://images.cdn1.buscalibre.com/fit-in/360x360/04/10/0410be3dff53a4285f6e71968869f160.jpg",
    fechaPublicacion: "2018-02-10",
    state: "Leído",
    categoria: "Infantil",
    favourite: false
  },
  {
    ISBN: 9781234567006,
    titulo: "Voces en la oscuridad",
    autor: "Laura García",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7OOgPNyXx89Wp7J4RK9AeUl81leLpZ-2fWg&s",
    fechaPublicacion: "2017-09-30",
    state: "Leído",
    categoria: "Terror",
    favourite: false
  },
  {
    ISBN: 9781234567007,
    titulo: "El viaje del héroe",
    autor: "José Martínez",
    imagen: "https://m.media-amazon.com/images/I/81xqiaNWAkL._UF1000,1000_QL80_.jpg",
    fechaPublicacion: "2016-06-18",
    state: "Pendiente",
    categoria: "Aventura",
    favourite: false
  },
  {
    ISBN: 9781234567008,
    titulo: "La sombra del viento",
    autor: "Isabel Allende",
    imagen: "https://images.cdn3.buscalibre.com/fit-in/360x360/97/a9/97a9e0ef37c3b33e9303147883d03372.jpg",
    fechaPublicacion: "2015-04-25",
    state: "Pendiente",
    categoria: "Drama",
    favourite: false
  },
  {
    ISBN: 9781234567009,
    titulo: "El código Da Vinci",
    autor: "Dan Brown",
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/b6308a567ef29464d38ae06d17d7efc6460dece1f500947ac64df8950e668d27.jpg",
    fechaPublicacion: "2014-12-05",
    state: "Leído",
    categoria: "Misterio",
    favourite: false
  }
];




  return (
    <>
      <body className='bg-gray-200'>
        <Header/>
        <Library books={Books}/>
      </body>
    </>
  )
}

export default App
