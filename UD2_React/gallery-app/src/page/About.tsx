import Header from '../components/Header'

export default function About() {
  return (
      <>
          <Header />
          <main className="min-h-screen bg-linear-to-b from-gray-50 to-gray-200 flex flex-row items-center justify-center px-6 py-12">
              <section>
                  <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
                      Sobre la Galería <span className="text-blue-600">Martínez Montañés</span>
                  </h1>

                  <div className="flex flex-row justify-around p-2">
                      <div>
                          <p className="text-lg text-gray-700 mb-8">
                              La Galería <strong>Martínez Montañés</strong> nace con el propósito de acercar la escultura contemporánea a todas las personas. Creemos que cada obra tridimensional tiene el poder de transformar los espacios, provocar emociones y contar
                              historias sin necesidad de palabras.
                          </p>
                          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                              Nuestro catálogo reúne artistas consagrados y nuevos talentos que exploran materiales como el mármol, el metal y la cerámica desde perspectivas únicas.
                              Cada exposición es una experiencia sensorial pensada para inspirar a quienes nos visitan.
                          </p>
                      </div>
                      <img src="https://www.cirquedusoleil.com/-/media/cds/images/art-gallery/512x288_diapo8-10.jpg?db=web&h=288&vs=1&w=512&sc_lang=es&hash=C388B7FDF11A8E2BD2B32EB6D45E1E10" className="rounded-2xl shadow-lg w-full"></img>
                  </div>


                  <div className="bg-gray-100/60 p-8 rounded-2xl shadow-2xl">
                      <h2 className="text-3xl font-semibold text-blue-700 mb-4">
                          Nuestra visión
                      </h2>
                      <p className="text-gray-700">
                          En <strong>Martínez Montañés</strong>, entendemos el arte como una conversación entre el
                          creador y el espectador. Nos apasiona crear un espacio donde la escultura
                          pueda dialogar con la tecnología y la educación, fomentando el
                          descubrimiento y la creatividad.
                      </p>
                  </div>

                  <footer className="mt-12 text-gray-500 text-sm text-center">
                      © {new Date().getFullYear()} Galería Martínez Montañés
                  </footer>
              </section>
          </main>
      </>
  )
}