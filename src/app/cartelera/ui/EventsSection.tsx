"use client"

import EventArticle from "./Event";
import { Event } from "./Event";

interface Props {
  allEvents: Event[];
}

async function getDate() {
  return new Promise((resolve) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    resolve(today)
  })
}

const today = await getDate() as Date

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
