"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const path = usePathname();

  return (
    <div className="flex justify-center gap-1 mt-2 select-none">
      <Link
        href="/cartelera"
        className={`w-20 font-semibold hover:opacity-70 hover:scale-105 transition text-center ${
          path.includes("/shows") && "text-indigo-950"
        }`}
      >
        Cartelera
      </Link>
      <Link
        href="/"
        className={`w-24 border-x-2 border-sky-200 font-semibold hover:opacity-70 hover:scale-105 transition text-center ${
          path == "/" && "text-indigo-950"
        }`}
      >
        Principal
      </Link>
      <Link
        href="/servicios"
        className={`font- w-20 font-semibold hover:opacity-70 hover:scale-105 transition text-center ${
          path.includes("/menu") && "text-indigo-950"
        }`}
      >
        Servicios
      </Link>
    </div>
  );
}
