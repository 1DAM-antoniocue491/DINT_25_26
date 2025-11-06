import Gallery from "./pages/Gallery"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import { Routes, Route } from "react-router"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
