"use client";

import Image from "next/image";
import type { Locale } from "@/lib/locale";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const copy = {
  tr: {
    code: "01 / GÜNCEL ÜRÜN",
    promiseLead: "Şüpheli bir dijital içerik mi gördün?",
    promiseStrong: "GüvenCheck’e sor.",
    description:
      "GüvenCheck; mesaj, bağlantı/URL, internet sitesi, fotoğraf, görsel ve ekran görüntüsü gibi şüpheli dijital içerikleri değerlendirir; riski, nedenini ve şimdi ne yapılması gerektiğini daha anlaşılır hale getirmeyi amaçlayan bir Karaaslan Labs ürünüdür.",
    sequence: ["RİSK", "NEDEN", "ŞİMDİ NE YAPMALI?"],
    sequenceLabel: "GüvenCheck çıktı yapısı",
    link: "GüvenCheck’i keşfet",
    note:
      "GüvenCheck, Karaaslan Labs’ın bugün üzerinde çalıştığı gerçek ürünlerden biridir; şirketin çalışabileceği alanların tamamını temsil etmez.",
    altWide: "GüvenCheck risk sonucu ekranı",
    altA: "GüvenCheck içerik kontrol ekranı",
    altB: "GüvenCheck yüksek risk sonucu ekranı",
    screensLabel: "GüvenCheck ürün görselleri",
  },
  en: {
    code: "01 / CURRENT PRODUCT",
    promiseLead: "Seen suspicious digital content?",
    promiseStrong: "Ask GüvenCheck.",
    description:
      "GüvenCheck is a Karaaslan Labs product designed to assess suspicious digital content—including messages, links and URLs, websites, photos, images, and screenshots—and make the risk, the reason behind it, and the next action easier to understand.",
    sequence: ["RISK", "WHY", "WHAT TO DO NEXT"],
    sequenceLabel: "GüvenCheck output structure",
    link: "Explore GüvenCheck",
    note:
      "GüvenCheck is one of the real products Karaaslan Labs is working on today; it does not define the full range of areas the company may work in.",
    altWide: "GüvenCheck risk result screen",
    altA: "GüvenCheck content check screen",
    altB: "GüvenCheck high-risk result screen",
    screensLabel: "GüvenCheck product screens",
  },
} as const;

export function GuvenCheckStage({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yA = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const yB = useTransform(scrollYProgress, [0, 1], [-20, 78]);
  const rotateA = useTransform(scrollYProgress, [0, 1], [-7, -3]);
  const rotateB = useTransform(scrollYProgress, [0, 1], [6, 2]);
  const t = copy[locale];

  return (
    <section className="guven-stage" id="guncel-calisma" ref={ref} aria-labelledby="guven-title">
      <div className="guven-stage__word" aria-hidden="true">GÜVENCHECK</div>

      <div className="guven-stage__copy">
        <p className="section-code section-code--light">{t.code}</p>
        <h2 id="guven-title">GüvenCheck</h2>
        <p className="guven-stage__promise">
          {t.promiseLead} <strong>{t.promiseStrong}</strong>
        </p>
        <p className="guven-stage__description">{t.description}</p>

        <div className="guven-stage__sequence" aria-label={t.sequenceLabel}>
          <span>{t.sequence[0]}</span><i /><span>{t.sequence[1]}</span><i /><span>{t.sequence[2]}</span>
        </div>

        <a
          className="guven-stage__link"
          href="https://guvencheck.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.link} <span aria-hidden="true">↗</span>
        </a>

        <p className="guven-stage__note">{t.note}</p>
      </div>

      <div className="guven-stage__screens" aria-label={t.screensLabel}>
        <motion.figure className="guven-stage__screen guven-stage__screen--wide" style={{ y: yB }}>
          <Image src="/assets/guvencheck/6.webp" alt={t.altWide} width={1794} height={876} />
        </motion.figure>
        <motion.figure
          className="guven-stage__screen guven-stage__screen--phone guven-stage__screen--a"
          style={{ y: yA, rotate: rotateA }}
        >
          <Image src="/assets/guvencheck/1.webp" alt={t.altA} width={941} height={1672} />
        </motion.figure>
        <motion.figure
          className="guven-stage__screen guven-stage__screen--phone guven-stage__screen--b"
          style={{ y: yB, rotate: rotateB }}
        >
          <Image src="/assets/guvencheck/3.webp" alt={t.altB} width={941} height={1672} />
        </motion.figure>
      </div>
    </section>
  );
}
