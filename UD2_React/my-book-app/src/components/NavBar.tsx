import { NavLink } from 'react-router'

export default function Navbar() {
  return (
    <nav className='flex gap-4 p-4 bg-amber-300 text-white mb-4'>
        <NavLink to="/library" className={({isActive}) => isActive ? 'font-bold text-amber-600' : 'text-white'}>
        Librería
        </NavLink>
        <NavLink to="/awards" className={({isActive}) => isActive ? 'font-bold text-amber-600' : 'text-white'}>
        Premiados
        </NavLink>
    </nav>
  )
}