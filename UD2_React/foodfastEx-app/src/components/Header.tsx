import { Link } from 'react-router'
import logo from '../assets/logo_amarillo.png'

export default function Header() {
  return (
    <>
    <header className='flex flex-row bg-white shadow-lg justify-between items-center p-2'>
        <Link to="/">
        <img src={logo} className='w-20 h-20'></img>
        </Link>
       <p className='text-4xl font-mono text-red-600 font-semibold'>McDonald's</p>
    </header>
    </>
  )
}
