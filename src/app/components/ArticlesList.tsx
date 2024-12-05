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
    title: "Nuestro centro",
    subtitle: "Un lugar mágico",
    paragraph:
      "En el corazón del Malecón habanero, Nodo Habana se erige como un espacio vibrante donde la tradición y la innovación se entrelazan. Este proyecto de desarrollo local no solo revitaliza el entorno urbano, sino que también fomenta la colaboración comunitaria, impulsando el crecimiento cultural y económico de la zona. Aquí, cada rincón cuenta una historia, y cada iniciativa es una chispa que enciende el espíritu creativo de La Habana. Nodo Habana es más que un centro, es un punto de encuentro donde las ideas cobran vida y la magia de la ciudad se renueva día a día.",
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
