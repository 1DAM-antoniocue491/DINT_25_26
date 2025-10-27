import './App.css'
import Header from './components/Header.tsx'
import Gallery from './pages/Gallery.tsx'
import { sculptureList } from './data/data.ts'

function App() {

  return (
    <body className='bg-gray-200'>
      <Header />
      <Gallery card={sculptureList} />
    </body>
  )
}

export default App
