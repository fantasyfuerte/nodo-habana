import StyledArticle from "./components/StyledArticle";

export default function Home() {
  return (
    <>
      <section className="">
        <article className="shadow-custom pb-16 mb-36">
          <h1 className="text-center text-2xl font-semibold py-8 mt-10">
            Un espacio de conexiones culturales
          </h1>
          <p className="text-center px-14 text-md md:text-lg text-gray-800 first-letter:ml-10">
            Bienvenido a Nodo Habana, un espacio dedicado a la promoción
            cultural en el Malecón, donde el arte, la creatividad y la
            colaboración
            <br></br> se encuentran para construir nuevas oportunidades. Nuestro
            propósito es ser un punto de encuentro para artistas, creadores y
            emprendedores,<br></br>
            impulsando el talento local y ofreciendo una plataforma accesible y
            dinámica donde la creatividad se desarrolla y toma forma. En Nodo
            Habana, creemos en el poder de la cultura como motor de
            transformación social, combinando tradición y modernidad para
            generar experiencias significativas.
            <br></br>
            <strong className="md:text-[19px]">
              Únete y sé parte del latido que impulsa La Habana.
            </strong>
          </p>
        </article>
      </section>
      <section className="bg-color-blue">
        <StyledArticle
          title="Nuestro centro"
          subtitle="Un lugar mágico"
          paragraph="En el corazón del Malecón habanero, Nodo Habana se erige como un espacio vibrante donde la tradición y la innovación se entrelazan. Este proyecto de desarrollo local no solo revitaliza el entorno urbano, sino que también fomenta la colaboración comunitaria, impulsando el crecimiento cultural y económico de la zona. Aquí, cada rincón cuenta una historia, y cada iniciativa es una chispa que enciende el espíritu creativo de La Habana. Nodo Habana es más que un centro, es un punto de encuentro donde las ideas cobran vida y la magia de la ciudad se renueva día a día."
          img={"/balcon.jpeg"}
        />
      </section>
    </>
  );
}
