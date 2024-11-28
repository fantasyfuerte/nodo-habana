import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex justify-center gap-1 mt-2 ">
      <Link
        href="/shows"
        className="w-20 font-semibold hover:opacity-70 hover:scale-105 transition text-center"
      >
        Shows
      </Link>
      <Link
        href="/"
        className="w-20 border-x-2 border-sky-200 font-semibold hover:opacity-70 hover:scale-105 transition text-center"
      >
        Inicio
      </Link>
      <Link
        href="/menu"
        className="w-20 font-semibold hover:opacity-70 hover:scale-105 transition text-center"
      >
        Menu
      </Link>
    </div>
  );
}
