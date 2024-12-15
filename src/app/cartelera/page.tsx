import EventsSection from "./ui/EventsSection";
import { eventArticles } from "@/app/cartelera/lib/constants";

export default function Page() {
  return (
    <main className="select-none">
      <h1
        className="text-2xl font-semibold text-center py-5"
        id="proximos-eventos"
      >
        Proximamente
      </h1>
      <EventsSection events={eventArticles} />
      <h1
        className="text-2xl font-semibold text-center py-5"
        id="ultimos-eventos"
      >
        Últimos eventos
      </h1>
      <EventsSection events={eventArticles} />
    </main>
  );
}
