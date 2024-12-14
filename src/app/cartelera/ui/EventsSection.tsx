import EventArticle from "./Event";
import { Event } from "./Event";

interface Props {
  events: Event[];
}

export default function EventsSection({ events }: Props) {
  return (
    <section className="grid grid-cols-[repeat(2,1fr)] py-4 px-6">
      {events.map((event, index) => (
        <EventArticle {...event} key={index} />
      ))}
    </section>
  );
}
