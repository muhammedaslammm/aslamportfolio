"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  let path = usePathname().replace("/", "");
  return (
    <header className="border-b border-neutral-600">
      <nav className="flex flex-col items-center gap-1 py-4">
        <Link className="font--heading text-[1.2rem]" href="/">
          MUHAMMED ASLAM
        </Link>
        <ul className="flex gap-12 text-[.9rem] text-neutral-400">
          <li>
            <Link
              href="/about-me"
              className={`${path === "about-me" && "text-white"} hover:text-white transition-colors`}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`${path === "projects" && "text-white"} hover:text-white transition-colors`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${path === "contact" && "text-white"} hover:text-white transition-colors`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
