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
    <article className="flex justify-between p-2 w-[45%] select-none">
      <div className="text-[19px] basis-2/3">
        <h3 className="font-semibold">{title}</h3>
        <p className="font-normal text-gray-600">{paragraph}</p>
        <ul className="mt-5">
          <li>
            <span className="font-normal text-gray-600">Horario: </span>
            <span className="font-semibold">
              {time[0]} - {time[1]}
            </span>
          </li>
          <li>
            <span className="font-normal text-gray-600">Fecha: </span>
            <span className="font-semibold">{date}</span>
          </li>
        </ul>
      </div>
      <div className="basis-1/3 object-cover">
        <Image
          className="rounded-md w-full"
          width={170}
          height={160}
          src={img}
          alt="Imagen del articulo"
        ></Image>
      </div>
    </article>
  );
}
