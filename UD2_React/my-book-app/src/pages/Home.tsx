import Background from '../assets/background.jpg';
import { Link } from 'react-router';

export default function Library() {
    return (
        <>
        <div className='relative w-full h-screen overflow-hidden'>
            <img
                className='absolute inset-0 w-full h-full object-cover z-0'
                src={Background}
                alt="Background" />

            <div className="absolute inset-0 bg-black/40 z-10"></div>

            <div className='w-full h-full flex flex-col items-center justify-center relative z-10 text-white p-6'>
                <h1 className='text-6xl font-extrabold'>Librería Martínez Montañés</h1>
                <p className='mt-5 text-xl'>Esta es la librería privada del instituto Martínez Montañés</p>
                <Link
                    to="/library"
                    className='bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded mt-8'
                    >
                    Ir a la librería
                </Link>
            </div>
        </div>
        </>
    )
}