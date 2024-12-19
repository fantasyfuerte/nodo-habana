import ArticlesList from "./ui/ArticlesList";
import SocialLinks from "./ui/SocialLinks";
import Event from "./cartelera/ui/Event";
import { eventArticles } from "./cartelera/lib/constants";
const today = new Date();
today.setHours(0, 0, 0, 0);

const nextEvent = eventArticles.find((event) => {
  const eventDate = new Date(event.date);
  eventDate.setHours(0, 0, 0, 0);
  return eventDate >= today;
});

export default function Home() {
  return (
    <main>
      <section id="about-us">
        <h1 className="text-center text-2xl font-semibold mb-2 py-5 select-none">
          Un espacio de conexiones culturales
        </h1>
        <SocialLinks />
        <article className="mb-36 py-5">
          <h3 className="text-center text-xl font-semibold mb-3">
            ¿Quiénes somos?
          </h3>
          <p className="text-center px-2 md:px-44 text-md md:text-lg text-gray-800 first-letter:ml-10">
            Bienvenido a Nodo Habana,<br></br> un espacio dedicado a la
            promoción cultural en el Malecón, donde el arte, la creatividad y la
            colaboración se encuentran para construir nuevas oportunidades.
            Nuestro propósito es ser un punto de encuentro para artistas,
            creadores y impulsando el talento local y ofreciendo una plataforma
            accesible y dinámica donde la creatividad se desarrolla y toma
            forma.<br></br>
            <br></br>
            <strong className="md:text-[19px]">
              Únete y sé parte del latido que impulsa La Habana.
            </strong>
          </p>
        </article>
      </section>
      <section>
        <h2 className="text-center text-2xl font-semibold mb-5 py-5 select-none">
          Evento de hoy
        </h2>
        {nextEvent ? (
          <Event {...nextEvent} />
        ) : (
          <p className="text-center text-lg font-semibold">
            No hay eventos para hoy
          </p>
        )}
      </section>
      <ArticlesList />
    </main>
  );
}
