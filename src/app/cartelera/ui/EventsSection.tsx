"use client";

import EventArticle from "./Event";
import { Event } from "./Event";

interface Props {
  allEvents: Event[];
}

async function getDate() {
  const response = await fetch("https://api.nodo-habana.com/api/date");
  const data = await response.json();
  return new Date(data.date);
}

const today = await getDate()

export default function EventsSection({ allEvents }: Props) {
  const events = allEvents.reverse().slice(0, 4);
  
  const futureEvents = events.filter((event) => event.date >= today).reverse();
  const pastEvents = events.filter((event) => event.date < today).reverse();
  pastEvents.reverse();

  return (
    <section className="flex flex-col lg:grid md:grid-cols-[repeat(2,minmax(500px,1fr))] py-4 md:px-6">
      {futureEvents.map((event, index) => (
        <EventArticle {...event} key={index} today={today}/>
      ))}
      {pastEvents.map((event, index) => (
        <EventArticle {...event} key={index} today={today}/>
      ))}
    </section>
  );
}
