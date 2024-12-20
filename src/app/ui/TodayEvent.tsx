import Image from "next/image";
import { Event } from "@/app/cartelera/ui/Event";

interface Props {
  event: Event;
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

const TodayEvent = ({ event }: Props) => {
  if (!event) {
    return (
      <p className="text-center text-lg font-semibold text-gray-700">
        No hay eventos para hoy
      </p>
    );
  }

  return (
    <section
      id="today-event"
      className="bg-white shadow-lg p-8 rounded-lg mb-24"
    >
      <article className="flex flex-col md:flex-row items-center">
        <Image
          width={1000}
          height={1000}
          src={event.img}
          alt={event.title}
          className="w-full md:w-2/5 h-64 object-cover rounded-lg mb-4 md:mb-0 md:mr-4"
        />
        <div className="flex-1 p-4">
          <h3 className="text-2xl font-bold mb-2 text-gray-800">
            {event.title}
          </h3>
          <p className="text-gray-600 mb-4">{event.paragraph}</p>
          <p className="text-gray-500 mb-2">
            Fecha:{" "}
            <strong className="text-gray-800">
              {getRelativeDate(event.date)}
            </strong>
          </p>
          <p className="text-gray-500">
            Hora:{" "}
            <strong className="text-gray-800">
              {event.time[0]} - {event.time[1]}
            </strong>
          </p>
        </div>
      </article>
    </section>
  );
};

export default TodayEvent;
