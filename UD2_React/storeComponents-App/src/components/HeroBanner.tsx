import hero from "../assets/heroImg.png";

export default function HeroBanner() {
  return (
      <section className="w-full bg-[#ff6000fc] text-white py-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
      
      <div className="hidden md:flex flex-1 justify-center">
        <img
          src={hero}
          alt="Productos izquierda"
          className=""
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          Un mes de ofertas en tecnología
        </h2>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-shadow-lg text-shadow-black">
          BLACK FRIDAY
        </h1>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          MARTÍNEZ MONTAÑÉS STORE
        </h2>
      </div>

    <div className="hidden md:flex flex-1 justify-center">
        <img
          src={hero}
          alt="Productos izquierda"
          className=""
        />
      </div>
    </section>
  )
}
