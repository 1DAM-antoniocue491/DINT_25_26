import './App.css'
import Library from './pages/Library'
import Articles from './components/Articles'
import Home from './pages/Home'
import Awards from './components/Awards'
import { Routes, Route } from "react-router"

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/library' element={<Library/>} />
      <Route path='/articles' element={<Articles/>} />
      <Route path='/awards' element={<Awards/>} />
    </Routes>
    </>
  )
}

export default App
