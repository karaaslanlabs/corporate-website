"use client";

import Image from "next/image";
import type { Locale } from "@/lib/locale";
import { useEffect, useState } from "react";

const labels = {
  tr: {
    links: [
      ["GüvenCheck", "#guncel-calisma"],
      ["Alanlar", "#alanlar"],
      ["Yaklaşım", "#yaklasim"],
      ["Şirket", "#sirket"],
    ],
    contact: "İletişim",
    home: "Karaaslan Labs ana sayfası",
    open: "Menüyü aç",
    close: "Menüyü kapat",
    nav: "Ana menü",
  },
  en: {
    links: [
      ["GüvenCheck", "#guncel-calisma"],
      ["Focus areas", "#alanlar"],
      ["Approach", "#yaklasim"],
      ["Company", "#sirket"],
    ],
    contact: "Contact",
    home: "Karaaslan Labs home page",
    open: "Open menu",
    close: "Close menu",
    nav: "Main navigation",
  },
} as const;

export function Navigation({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const copy = labels[locale];

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

  const chooseLanguage = (nextLocale: Locale) => {
    try {
      window.localStorage.setItem("kl-language", nextLocale);
    } catch {
      // Language switching must still work if storage is unavailable.
    }
    setOpen(false);
  };

  return (
    <header className={`nav-shell ${scrolled || open ? "nav-shell--active" : ""}`}>
      <a className="nav-brand" href="#top" aria-label={copy.home}>
        <Image
          src="/assets/brand/karaaslan-labs-lockup-reversed.svg"
          alt="Karaaslan Labs"
          width={690}
          height={180}
          priority
        />
      </a>

      <nav
        id="site-nav"
        className={`nav-links ${open ? "nav-links--open" : ""}`}
        aria-label={copy.nav}
      >
        {copy.links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-contact" href="#iletisim" onClick={() => setOpen(false)}>
          {copy.contact}
        </a>
        <div className="language-switch" aria-label={locale === "tr" ? "Dil seçimi" : "Language selection"}>
          <a
            href="/"
            lang="tr"
            aria-current={locale === "tr" ? "page" : undefined}
            onClick={() => chooseLanguage("tr")}
          >
            TR
          </a>
          <span aria-hidden="true">/</span>
          <a
            href="/en/"
            lang="en"
            aria-current={locale === "en" ? "page" : undefined}
            onClick={() => chooseLanguage("en")}
          >
            EN
          </a>
        </div>
      </nav>

      <button
        className={`nav-menu ${open ? "nav-menu--open" : ""}`}
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        aria-label={open ? copy.close : copy.open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
