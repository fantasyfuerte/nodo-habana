import EventArticle from "./Event";
import { Event } from "./Event";

interface Props {
  allEvents: Event[];
}

const today = new Date();
today.setHours(0, 0, 0, 0);

export default function EventsSection({ allEvents }: Props) {
  const events = allEvents.reverse().slice(0, 4);
  events.reverse();
  const futureEvents = events.filter((event) => event.date >= today);
  const pastEvents = events.filter((event) => event.date < today);
  pastEvents.reverse();

  return (
    <section className="flex flex-col lg:grid md:grid-cols-[repeat(2,minmax(500px,1fr))] py-4 md:px-6">
      {futureEvents.map((event, index) => (
        <EventArticle {...event} key={index} />
      ))}
      {pastEvents.map((event, index) => (
        <EventArticle {...event} key={index} />
      ))}
    </section>
  );
}
