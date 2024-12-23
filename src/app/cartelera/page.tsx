import EventsSection from "./ui/EventsSection";
import { eventArticles } from "@/app/cartelera/lib/constants";

export default function Page() {
  return (
    <main className="select-none">
      <h1
        className="text-2xl font-semibold text-center pt-5 pb-2"
        id="proximos-eventos"
      >
        Descubre y conecta con la cultura
      </h1>
      <EventsSection allEvents={eventArticles} />
    </main>
  );
}
