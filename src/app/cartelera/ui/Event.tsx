import Image from "next/image";

export interface Event {
  title: string;
  paragraph: string;
  time: string[];
  date: Date;
  img: string;
}

export default function Event({ title, paragraph, time, date, img }: Event) {
  return (
    <article className="flex justify-between p-4 mx-4 my-3 select-none shadow-custom-hover transition">
      <div className="text-[18.5px] basis-[60%]">
        <h3 className="font-semibold">{title}</h3>
        <p className="font-normal text-gray-600 pr-4">{paragraph}</p>
        <ul className="mt-5">
          <li>
            <span className="font-normal text-gray-600">Horario: </span>
            <span className="font-semibold">
              {time[0]} - {time[1]}
            </span>
          </li>
          <li>
            <span className="font-normal text-gray-600">Fecha: </span>
            <span className="font-semibold">
              {date.getDay()} {date.getDate()} de {date.getMonth()}
            </span>
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
