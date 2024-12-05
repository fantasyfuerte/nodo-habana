import ArticlesList from "./components/ArticlesList";

export default function Home() {
  return (
    <>
      <section className="">
        <article className="pb-16 mb-36">
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
            dinámica donde la creatividad se desarrolla y toma forma.
            <br></br>
            <strong className="md:text-[19px]">
              Únete y sé parte del latido que impulsa La Habana.
            </strong>
          </p>
        </article>
      </section>
      <ArticlesList />
    </>
  );
}
