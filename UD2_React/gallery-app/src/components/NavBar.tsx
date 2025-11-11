import { NavLink } from 'react-router'

export default function Navbar() {
  return (
    <nav className='flex gap-4 p-4 bg-blue-300 text-white'>
        <NavLink to="/gallery" className={({isActive}) => isActive ? 'font-bold text-blue-600' : 'text-white'}>
        Galeria
        </NavLink>
        <NavLink to="/awards" className={({isActive}) => isActive ? 'font-bold text-blue-600' : 'text-white'}>
        Premios
        </NavLink>
    </nav>
  )
}
