import EventArticle from "./Event";
import { Event } from "./Event";

interface Props {
  allEvents: Event[];
}

export default function EventsSection({ allEvents }: Props) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const events = allEvents.sort((a, b) => a.date.getDay() + b.date.getDay());

  const futureEvents = events.filter((event) => event.date >= today);
  const pastEvents = events.filter((event) => event.date < today);

  return (
    <section className="flex flex-col lg:grid md:grid-cols-[repeat(2,minmax(500px,1fr))] py-4 md:px-6">
      {futureEvents.map((event, index) => (
        <EventArticle {...event} key={index} today={today} />
      ))}
      {pastEvents.map((event, index) => (
        <EventArticle {...event} key={index} today={today} />
      ))}
    </section>
  );
}
