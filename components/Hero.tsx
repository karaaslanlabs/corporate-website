"use client";

import Image from "next/image";
import type { Locale } from "@/lib/locale";
import { motion, useReducedMotion } from "motion/react";
import { SignalField } from "./SignalField";

const lineEase = [0.22, 1, 0.36, 1] as const;

const copy = {
  tr: {
    meta: "TEKNOLOJİ ŞİRKETİ",
    labels: ["ÜRÜNLER", "SİSTEMLER", "ARAŞTIRMA", "YAPAY ZEKÂ / OTOMASYON"],
    lines: ["Ürünler, sistemler", "ve yeni teknoloji", "girişimleri geliştiriyoruz."],
    body:
      "Karaaslan Labs; yazılım, yapay zekâ, otomasyon ve araştırma yetkinliklerini bir araya getirerek gerçek problemler üzerinde çalışan bir teknoloji şirketidir. Tek bir ürün, sektör ya da teknoloji trendiyle sınırlı değiliz. Değer üretebileceğimiz alanları araştırır, doğrular ve inşa ederiz.",
    primary: "GüvenCheck’i keşfet",
    secondary: "Nasıl çalışıyoruz",
    scroll: "KAYDIR / KEŞFET",
  },
  en: {
    meta: "TECHNOLOGY COMPANY",
    labels: ["PRODUCTS", "SYSTEMS", "RESEARCH", "AI / AUTOMATION"],
    lines: ["We build products,", "systems and new", "technology ventures."],
    body:
      "Karaaslan Labs is a technology company that brings together software, AI, automation, and research capabilities to work on real problems. We are not defined by a single product, industry, or technology trend. We research, validate, and build where we can create real value.",
    primary: "Explore GüvenCheck",
    secondary: "How we work",
    scroll: "SCROLL / EXPLORE",
  },
} as const;

export function Hero({ locale }: { locale: Locale }) {
  const reduce = useReducedMotion();
  const t = copy[locale];

  return (
    <section className="hero-next" id="top" aria-labelledby="hero-title">
      <SignalField />

      <div className="hero-next__grid" aria-hidden="true" />
      <div className="hero-next__noise" aria-hidden="true" />

      <div className="hero-next__core" aria-hidden="true">
        <span className="hero-next__core-ring hero-next__core-ring--a" />
        <span className="hero-next__core-ring hero-next__core-ring--b" />
        <span className="hero-next__core-ring hero-next__core-ring--c" />
        <div className="hero-next__mark">
          <Image
            src="/assets/brand/karaaslan-labs-mark.svg"
            alt=""
            width={128}
            height={128}
            priority
          />
        </div>
        <span className="hero-next__label hero-next__label--product">{t.labels[0]}</span>
        <span className="hero-next__label hero-next__label--systems">{t.labels[1]}</span>
        <span className="hero-next__label hero-next__label--research">{t.labels[2]}</span>
        <span className="hero-next__label hero-next__label--automation">{t.labels[3]}</span>
      </div>

      <div className="hero-next__content">
        <motion.div
          className="hero-next__meta"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          <span>KARAASLAN LABS</span>
          <i />
          <span>{t.meta}</span>
        </motion.div>

        <h1 id="hero-title">
          {t.lines.map((line, index) => (
            <span
              className={`hero-next__line ${index === 2 ? "hero-next__line--outline" : ""}`}
              key={line}
            >
              <motion.span
                initial={reduce ? false : { y: "115%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.78,
                  delay: 0.12 + index * 0.09,
                  ease: lineEase,
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="hero-next__bottom"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <p>{t.body}</p>

          <div className="hero-next__actions">
            <a className="signal-link" href="#guncel-calisma">
              <span>{t.primary}</span>
              <b aria-hidden="true">↘</b>
            </a>
            <a className="signal-link signal-link--muted" href="#yaklasim">
              <span>{t.secondary}</span>
              <b aria-hidden="true">↗</b>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="hero-next__scroll" aria-hidden="true">
        <span />
        <small>{t.scroll}</small>
      </div>
    </section>
  );
}
