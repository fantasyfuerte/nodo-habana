import Image from "next/image";

export interface Event {
  title: string;
  paragraph: string;
  time: string[];
  date: Date;
  img: string;
}

export default function Event({ title, paragraph, time, date, img }: Event) {
  const today = new Date();
  const daysLeft = date.getDate() - today.getDate();
  const isDone = daysLeft < 0;
  const relativeDate =
    daysLeft == 0
      ? "Hoy"
      : daysLeft == 1
      ? "Mañana"
      : daysLeft > 1
      ? `Faltan ${daysLeft} días`
      : daysLeft == -1
      ? "Ayer"
      : `Hace ${-daysLeft} días`;

  return (
    <article
      className={`${
        isDone && "opacity-65"
      } flex flex-col h-[438px] md:h-auto md:flex-row justify-between p-4 mx-4 my-3 select-none shadow-custom-hover transition`}
    >
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
            <span className="font-semibold">{relativeDate}</span>
          </li>
        </ul>
      </div>
      <div className="basis-[40%] h-[187px]">
        <Image
          className="rounded-md w-full h-full object-cover mt-2 md:mt-0"
          width={390}
          height={350}
          src={img}
          alt="Imagen del articulo"
        />
      </div>
    </article>
  );
}
