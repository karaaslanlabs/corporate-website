"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { SignalField } from "./SignalField";

const lineEase = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

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
        <span className="hero-next__label hero-next__label--product">ÜRÜNLER</span>
        <span className="hero-next__label hero-next__label--systems">SİSTEMLER</span>
        <span className="hero-next__label hero-next__label--research">ARAŞTIRMA</span>
        <span className="hero-next__label hero-next__label--automation">YAPAY ZEKÂ / OTOMASYON</span>
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
          <span>TEKNOLOJİ ŞİRKETİ</span>
        </motion.div>

        <h1 id="hero-title">
          <span className="hero-next__line">
            <motion.span
              initial={reduce ? false : { y: "115%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.78, delay: 0.12, ease: lineEase }}
            >
              Ürünler, sistemler
            </motion.span>
          </span>
          <span className="hero-next__line">
            <motion.span
              initial={reduce ? false : { y: "115%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.78, delay: 0.21, ease: lineEase }}
            >
              ve yeni teknoloji
            </motion.span>
          </span>
          <span className="hero-next__line hero-next__line--outline">
            <motion.span
              initial={reduce ? false : { y: "115%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.78, delay: 0.30, ease: lineEase }}
            >
              girişimleri geliştiriyoruz.
            </motion.span>
          </span>
        </h1>

        <motion.div
          className="hero-next__bottom"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <p>
            Karaaslan Labs; yazılım, yapay zekâ, otomasyon ve araştırma
            yetkinliklerini bir araya getirerek gerçek problemler üzerinde çalışan
            bir teknoloji şirketidir. Tek bir ürün, sektör ya da teknoloji
            trendiyle sınırlı değiliz. Değer üretebileceğimiz alanları araştırır,
            doğrular ve inşa ederiz.
          </p>

          <div className="hero-next__actions">
            <a className="signal-link" href="#alanlar">
              <span>Nasıl çalıştığımızı keşfet</span>
              <b aria-hidden="true">↘</b>
            </a>
            <a className="signal-link signal-link--muted" href="#guncel-calisma">
              <span>Güncel çalışma: GüvenCheck</span>
              <b aria-hidden="true">↗</b>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="hero-next__scroll" aria-hidden="true">
        <span />
        <small>KAYDIR / KEŞFET</small>
      </div>
    </section>
  );
}
