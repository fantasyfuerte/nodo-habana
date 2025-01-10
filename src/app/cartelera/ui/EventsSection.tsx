"use client";

import { useEffect, useState } from "react";
import EventArticle from "./Event";
import { Event } from "./Event";

interface Props {
  allEvents: Event[];
}

export default function EventsSection({ allEvents }: Props) {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    setToday(today);
  }, []);

  const events = allEvents.reverse().slice(0, 4);

  const futureEvents = events.filter((event) => event.date >= today);
  const pastEvents = events.filter((event) => event.date < today);
  pastEvents.reverse();

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
