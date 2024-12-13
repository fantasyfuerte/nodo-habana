const eventArticles = [
  {
    title: "Apertura cultural del ejemplo",
    paragraph:
      "Parrafo de ejemplo con poca importancia visual. Aqui se explica el evento en menos de tres líneas.",
    time: ["8:00PM", "11:00PM"],
    date: "Lunes 16 de Diciembre",
    img: "/fachada.jpeg",
  },
  {
    title: "Apertura cultural del ejemplo",
    paragraph:
      "Parrafo de ejemplo con poca importancia visual. Aqui se explica el evento en menos de tres líneas.",
    time: ["8:00PM", "11:00PM"],
    date: "Lunes 16 de Diciembre",
    img: "/balcon.jpeg",
  },
];
import EventArticle from "./ui/Event";

export default function Page() {
  return (
    <main className="select-none">
      <h1
        className="text-2xl font-semibold text-center py-5"
        id="proximos-eventos"
      >
        Proximamente
      </h1>
      <section className="flex justify-around flex-wrap py-4 px-6">
        {eventArticles.map((event, index) => (
          <EventArticle {...event} key={index} />
        ))}
      </section>
      <h1
        className="text-2xl font-semibold text-center py-5"
        id="ultimos-eventos"
      >
        Últimos eventos
      </h1>
      <section className="flex justify-around flex-wrap py-4 px-6">
        {eventArticles.map((event, index) => (
          <EventArticle {...event} key={index} />
        ))}
      </section>
    </main>
  );
}
