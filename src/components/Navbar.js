"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Navbar.module.css";

import ThemeToggle from "./ThemeToggle";

const links = [
  {
    href: "/",
    label: "Home",
  },

  {
    href: "/hoteis",
    label: "Hotéis",
  },

  {
    href: "/galeria",
    label: "Galeria",
  },

  {
    href: "/quem-somos",
    label: "Quem Somos",
  },

  {
    href: "/contato",
    label: "Contato",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuAberto, setMenuAberto] = useState(false);

  function isActive(href) {
    if (href === "/hoteis") {
      return pathname.startsWith("/hoteis");
    }

    return pathname === href;
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <img
            src="/favicon-128x128.png"
            alt="ReservaMB HDS"
            className={styles.logoImage}
          />

          <div className={styles.logoText}>
            <strong>ReservaMB</strong>

            <span>HDS Systems</span>
          </div>
        </Link>

        <button
          className={styles.menuButton}
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        <div
          className={`${styles.links} ${
            menuAberto ? styles.linksAberto : ""
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuAberto(false)}
              className={`${styles.link} ${
                isActive(link.href) ? styles.active : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          <ThemeToggle />

          <Link
            href="/hoteis"
            className={styles.cta}
          >
            Reservar agora
          </Link>
        </div>
      </nav>
    </header>
  );
}