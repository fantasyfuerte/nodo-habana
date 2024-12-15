import EventArticle from "./Event";
import { Event } from "./Event";

interface Props {
  events: Event[];
}

export default function EventsSection({ events }: Props) {
  return (
    <section className="flex flex-col lg:grid md:grid-cols-[repeat(2,minmax(500px,1fr))] py-4 md:px-6">
      {events.map((event, index) => (
        <EventArticle {...event} key={index} />
      ))}
    </section>
  );
}
