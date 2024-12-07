const links = [
  { img: "/social/instagram.svg", url: "https://www.instagram.com/nodo.habana", alt: "Instagram logo" },
  { img: "/social/facebook.svg", url: "https://www.facebook.com/share/kpYVar11M26NXYz7", alt: "Facebook logo" },
];
import Link from "next/link";

export default function SocialLinks() {
  return (
    <article>
      <ul className="flex gap-2 justify-center">
        {links.map((link, index) => (
          <li key={index} className="hover:opacity-65 transition-opacity">
            <a href={link.url}>
              <img alt={link.alt} width={20} height={20} src={link.img} />
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
