import Header from "../components/Header"
import HeroImg from "../assets/heroImg.png"
import Category from "../components/Category"
import { Categories_Data } from "../data/Categories_Data"

export default function Home() {
    return (
        <>
            <Header />

            <div className="bg-[#ff6000fc] p-5 flex justify-between items-center">
                <img className="w-1/4" src={HeroImg} alt="Imagen" />
                <div className="flex flex-col justify-center items-center">
                    <p className="text-white text-sm">Un mes de ofertas en tecnología</p>
                    <h1 className="text-3xl font-bold text-white text-shadow-lg/100">BLACK PRIDAY</h1>
                    <h1 className="text-3xl font-bold text-white">MARTÍNEZ MONTAÑÉS</h1>
                </div>
                <img className="w-1/4" src={HeroImg} alt="Imagen" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 p-3">
                {
                    Categories_Data.map((category) => (
                        <Category key={category.id} id={category.id} title={category.title} url={category.url} />
                    ))
                }
            </div>
        </>
    )
}