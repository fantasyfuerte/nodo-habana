import Image from "next/image";

interface Props {
  title: string;
  paragraph: string;
  time: string[];
  date: string;
  img: string;
}

export default function Event({ title, paragraph, time, date, img }: Props) {
  return (
    <article>
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
        <Image
          width={50}
          height={50}
          src={img}
          alt="Imagen del articulo"
        ></Image>
      </div>
    </article>
  );
}
