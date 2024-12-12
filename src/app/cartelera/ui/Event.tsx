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
    <article className="flex justify-between p-2 max-w-[45%] select-none">
      <div className="text-[18.5px] basis-[60%]">
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
      <div className="basis-[40%] h-[187px]">
        <Image
          className="rounded-md w-full h-full object-cover"
          width={390}
          height={350}
          src={img}
          alt="Imagen del articulo"
        />
      </div>
    </article>
  );
}
