import Image from "next/image";
import {Event} from '@/app/cartelera/ui/Event'

interface Props{
    event: Event
}

const today = new Date();
const getRelativeDate = (date: Date) => {
  const eventDate = new Date(date);
  const diffTime = eventDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Hoy";
  if (diffDays === 1) return "Mañana";
  return eventDate.toLocaleDateString();
};

const TodayEvent = ({ event }:Props) => {
  if (!event) {
    return (
      <p className="text-center text-lg font-semibold">
        No hay eventos para hoy
      </p>
    );
  }

  return (
    <section
      id="today-event"
      className="bg-gray-100 p-10 px-20 rounded-lg shadow-md mb-10"
    >
      <h2 className="text-center text-2xl mb-8 font-semibold select-none">
        Evento de hoy
      </h2>
      <article className="bg-white p-6 rounded-lg shadow-lg">
        <Image
          width={700}
          height={700}
          src={event.img}
          alt={event.title}
          className="w-full h-64 object-cover rounded-t-lg mb-4"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
          <p className="text-gray-700 mb-4">{event.paragraph}</p>
          <p className="text-gray-500">
            Fecha: {getRelativeDate(event.date)}
          </p>
          <p className="text-gray-500">
            Hora: <strong>{event.time[0]} - {event.time[1]}</strong>
          </p>
        </div>
      </article>
    </section>
  );
};

export default TodayEvent;
