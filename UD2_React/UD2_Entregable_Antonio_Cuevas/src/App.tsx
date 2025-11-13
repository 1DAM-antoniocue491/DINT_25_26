import Home from './page/Home'
import Products from './page/Products'
import './App.css'
import { Routes, Route } from 'react-router'

function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<Products />} />
      </Routes>
    </>
  )
}

export default App
