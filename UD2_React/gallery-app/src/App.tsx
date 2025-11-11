import { Routes, Route } from "react-router"
import Gallery from "./page/Gallery"
import Home from "./page/Home"
import About from "./page/About"
import NotFound from "./page/NotFound"
import Detail from "./page/Detail"
import Awards from "./page/Awards"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/awards" element={<Awards/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
