"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "News", href: "/news" },
  { label: "Sustainability", href: "/sustainability" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container navbar">
        <Link href="/" className="brand" aria-label="Terra Energy Home">
          <span className="brand-mark">T</span>
          <span className="brand-name">
            TERRA<span>ENERGY</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link${isActive ? " active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/about" className="navbar-cta">
          Discover Us <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}