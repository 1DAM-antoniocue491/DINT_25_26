import './App.css'
import { Books } from './data/data'
import Library from './pages/Library'
import Header from './components/Header'

function App() {

  return (
    <>
    
        <Header/>
          <label>
                    Input de texto: <input name="myInput" />
                </label>
        <Library books={Books}/>
    
    </>
  )
}

export default App
