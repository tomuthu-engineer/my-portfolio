"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8" aria-label="Main navigation">
      <ul className="flex gap-8">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.path}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              }
                            capitalize font-medium hover:text-accent transition-all`}
              aria-current={link.path === pathname ? "page" : undefined}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
