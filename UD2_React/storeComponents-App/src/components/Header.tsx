
import { Link } from "react-router"
import logo from "../assets/logoMMStore.png"

export default function Header() {
  return (
    <header className="w-full bg-black text-white flex items-center justify-between px-6 py-4 shadow-md">
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img
            src={logo}
            alt="Logo MMStore"
            className="w-15 object-contain"
          />
        </Link>
      </div>
      <h1 className="text-xl font-semibold tracking-wide">MM Store</h1>
    </header>
  )
}
