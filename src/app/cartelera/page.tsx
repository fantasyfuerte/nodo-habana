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
    img: "/fachada.jpeg",
  },
];
import EventArticle from "./ui/Event";

export default function Page() {
  return (
    <main className="h-screen">
      <h1 className="text-2xl font-semibold text-center py-5">
        Próximos eventos
      </h1>
      <section className="flex justify-around flex-wrap">
        {eventArticles.map((event, index) => (
          <EventArticle {...event} key={index} />
        ))}
      </section>
    </main>
  );
}
