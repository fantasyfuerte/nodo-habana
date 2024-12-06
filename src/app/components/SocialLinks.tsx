const links = [{ img: "", link: "",alt:"" }];
import Link from "next/link";

export default function SocialLinks() {
  return (
    <article>
      <ul className="flex gap-2">
        <li>
          <Link href={""}>
            <img alt="Instagram logo" width={20} height={20} src="/social/instagram.svg" />
          </Link>
        </li>
        <li>
          <Link href={""}>
            <img alt="Facebook logo" width={20} height={20} src="/social/facebook.svg" />
          </Link>
        </li>
      </ul>
    </article>
  );
}
