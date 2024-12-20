import ArticlesList from "./ui/ArticlesList";
import SocialLinks from "./ui/SocialLinks";
import { eventArticles } from "./cartelera/lib/constants";
import Image from "next/image";

const today = new Date();
today.setHours(0, 0, 0, 0);

const nextEvent = eventArticles.find((event) => {
  const eventDate = new Date(event.date);
  eventDate.setHours(0, 0, 0, 0);
  return eventDate >= today;
});

const getRelativeDate = (date: Date) => {
  const eventDate = new Date(date);
  const diffTime = eventDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Hoy";
  if (diffDays === 1) return "Mañana";
  return eventDate.toLocaleDateString();
};

export default function Home() {
  return (
    <main>
      <section id="about-us">
        <h1 className="text-center text-2xl font-semibold mb-2 py-5 select-none">
          Un espacio de conexiones culturales
        </h1>
        <SocialLinks />
        <article className="mb-28 py-5">
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
      <section
        id="today-event"
        className="bg-gray-100 p-10 px-20 rounded-lg shadow-md mb-10"
      >
        <h2 className="text-center text-2xl mb-8 font-semibold select-none">
          Evento de hoy
        </h2>
        {nextEvent ? (
          <article className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              width={700}
              height={700}
              src={nextEvent.img}
              alt={nextEvent.title}
              className="w-full h-64 object-cover rounded-t-lg mb-4"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{nextEvent.title}</h3>
              <p className="text-gray-700 mb-4">{nextEvent.paragraph}</p>
              <p className="text-gray-500">
                Fecha: {getRelativeDate(nextEvent.date)}
              </p>
              <p className="text-gray-500">Hora: {nextEvent.time}</p>
            </div>
          </article>
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
