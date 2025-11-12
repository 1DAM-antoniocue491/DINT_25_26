import './App.css'
import Library from './pages/Library'
import Articles from './components/Articles'
import Home from './pages/Home'
import Awards from './components/Awards'
import Detail from './pages/Detail'
import NotFound from './pages/NotFound'
import { Routes, Route } from "react-router"

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/library' element={<Library/>} />
      <Route path='/articles' element={<Articles/>} />
      <Route path='/awards' element={<Awards/>} />
      <Route path='/detail/:isbn' element={<Detail/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </>
  )
}

export default App
