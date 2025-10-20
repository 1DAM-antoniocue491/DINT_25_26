import './App.css'
import type { IBooks } from './types/Interfaces'
import Library from './pages/Library'
import Header from './components/Header'

function App() {

  const Books: IBooks[] = [
    {
      ISBN: 847584,
      titulo: "hola1",
      autor: "autor1",
      imagen: "imagen1",
      fechaPublicacion: "fecha1",
      state: "Leído"
    },
    {
      ISBN: 847584,
      titulo: "hola2",
      autor: "autor2",
      imagen: "imagen2",
      fechaPublicacion: "fecha2",
      state: "Pendiente"
    },
    {
      ISBN: 847584,
      titulo: "hola3",
      autor: "autor3",
      imagen: "imagen3",
      fechaPublicacion: "fecha3",
      state: "Sin empezar"
    },
    {
      ISBN: 847584,
      titulo: "hola4",
      autor: "autor4",
      imagen: "imagen4",
      fechaPublicacion: "fecha4",
      state: "Leído"
    }
  ]

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
