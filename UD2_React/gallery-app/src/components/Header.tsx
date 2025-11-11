import React from "react"
import { Link } from "react-router";

export default function Header() {
  const [isShown, setIsShown] = React.useState<boolean>(false);

  const showDrop = () => {
    setIsShown(!isShown);
  }

  return (
    <>
        <header className="bg-blue-500 p-5 text-center flex items-center justify-between px-8">
          <h1 className="text-2xl text-white font-semibold">Gallery App</h1>

          <div className="relative inline-block text-left">
            <button
              id="dropdownMenuButton"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 cursor-pointer rounded-lg px-5 py-2.5 "
              onClick={showDrop}
            >
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
            </button>
            <div
              id="dropdownMenu"
              className={`absolute right-0 mt-2 w-44 z-10 ${!isShown ? "hidden" : ""} bg-white divide-y divide-gray-100 rounded-lg shadow-sm`}
            >
              <ul className="py-2 text-sm text-gray-700"
                aria-labelledby="dropdownMenuButton">
                <li>
                  <Link to="/about" className="block px-4 py-2 hover:bg-gray-100 ">
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="block px-4 py-2 hover:bg-gray-100 ">
                    Galería
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>

    </>
  )
}
