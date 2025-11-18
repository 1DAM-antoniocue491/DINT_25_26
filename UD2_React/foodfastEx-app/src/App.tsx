import Home from "./pages/Home"
import Categories from "./pages/Categories"
import Products from "./pages/Products"
import NotFound from "./pages/NotFound"
import { Routes, Route } from "react-router"

function App() {
 
  return (
    <>   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/products/:id" element={<Products />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
