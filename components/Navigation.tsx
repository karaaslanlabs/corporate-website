"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  ["Alanlar", "#alanlar"],
  ["Yaklaşım", "#yaklasim"],
  ["Teknoloji", "#teknoloji"],
  ["GüvenCheck", "#guncel-calisma"],
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`nav-shell ${scrolled || open ? "nav-shell--active" : ""}`}>
      <a className="nav-brand" href="#top" aria-label="Karaaslan Labs ana sayfa">
        <Image
          src="/assets/brand/karaaslan-labs-lockup-reversed.svg"
          alt="Karaaslan Labs"
          width={690}
          height={180}
          priority
        />
      </a>

      <nav id="site-nav" className={`nav-links ${open ? "nav-links--open" : ""}`} aria-label="Ana navigasyon">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="nav-contact" href="#iletisim" onClick={() => setOpen(false)}>İletişim</a>
      </nav>

      <button
        className={`nav-menu ${open ? "nav-menu--open" : ""}`}
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
