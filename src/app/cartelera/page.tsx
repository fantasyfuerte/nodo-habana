const eventArticles = [
  {
    title: "Apertura cultural del ejemplo",
    paragraph:
      "Parrafo de ejemplo con poca importancia visual. Aqui se explica el evento en menos de tres líneas.",
    time: ["8:00PM", "11:00PM"],
    date: "Lunes 16 de Diciembre",
    img: "./fachada.jpeg",
  },
];

export default function Page() {
  return (
    <main className="h-screen">
      <h1 className="text-2xl font-semibold text-center py-5">
        Próximos eventos
      </h1>
      <section className="flex justify-around flex-wrap">
        {eventArticles.map(({ title, paragraph, time, date, img }, index) => (
          <article key={index}>
            <div>
              <h3>{title}</h3>
              <p>{paragraph}</p>
              <ul>
                <li>
                  Horario:{time[0]} - {time[1]}
                </li>
                <li>Fecha:{date}</li>
              </ul>
            </div>
            <div>
              <img
                width={50}
                height={50}
                src={img}
                alt="Imagen del articulo"
              ></img>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
