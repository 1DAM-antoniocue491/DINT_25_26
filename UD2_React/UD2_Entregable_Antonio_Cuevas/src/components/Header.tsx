import LogoMMStore from '../assets/LogoMMStore.png'
import { Link } from 'react-router'

export default function Header() {
    return (
        <>
            <header className='flex p-3 bg-black justify-between items-center'>
                <Link to="/">
                    <img className='w-14' src={LogoMMStore} alt="Imagen carrito" />
                </Link>

                <p className='text-white text-xl font-bold'>MM Store</p>
            </header>
        </>
    )
}