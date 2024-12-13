import Link from "next/link";

export function Footer() {
  return (
    <footer className="shadow-custom bg-white rounded-lg shadow m-4 select-none">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2024
          <a href="#" className="hover:underline">
            Nodo Habana™
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <Link href="/#about-us" className="hover:underline me-4 md:me-6">
              Sobre nosotros
            </Link>
          </li>

          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licencia
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
