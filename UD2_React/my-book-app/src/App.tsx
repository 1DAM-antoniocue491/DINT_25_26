import './App.css'
import { Books } from './data/data'
import Library from './pages/Library'
import Header from './components/Header'

function App() {

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
