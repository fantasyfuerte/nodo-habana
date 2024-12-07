import StyledArticle from "./StyledArticle";

const principalArticles = [
  {
    title: "Nuestro centro",
    subtitle: "Un lugar mágico",
    paragraph:
      "En el corazón del Malecón habanero, Nodo Habana se erige como un espacio vibrante donde la tradición y la innovación se entrelazan. Este proyecto de desarrollo local no solo revitaliza el entorno urbano, sino que también fomenta la colaboración comunitaria, impulsando el crecimiento cultural y económico de la zona. Aquí, cada rincón cuenta una historia, y cada iniciativa es una chispa que enciende el espíritu creativo de La Habana. Nodo Habana es más que un centro, es un punto de encuentro donde las ideas cobran vida y la magia de la ciudad se renueva día a día.",
    img: "/fachada.jpeg",
    centerImg: true,
  },
  {
    title: "Escena cultural",
    subtitle: "Aires de mar y arte",
    paragraph:
      "Situado en el icónico Malecón habanero, este teatro-bar ofrece una experiencia inmersiva en la cultura cubana. Más que un simple lugar para beber, es un espacio donde el arte, la música y la historia se fusionan en un ambiente vibrante y relajado. Desde conciertos espontáneos hasta exposiciones artísticas y noches de teatro, cada visita promete una aventura diferente, siempre con el encanto inconfundible de la brisa marina y la energía de La Habana como telón de fondo.",
    img: "/balcon.jpeg",
    centerImg: true,
  },
];

export default function ArticlesList() {
  return (
    <section>
      {principalArticles.map((article, index) => (
        <StyledArticle {...article} key={index} />
      ))}
    </section>
  );
}
