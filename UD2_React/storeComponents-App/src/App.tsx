import { Route, Routes } from "react-router"
import Categories from "./pages/Categories"
import Products from "./pages/Products"
import Header from "./components/Header"

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Categories/>}></Route>
      <Route path="/products/:id" element={<Products/>}></Route>
    </Routes>
    

    </>
  )
}

export default App
