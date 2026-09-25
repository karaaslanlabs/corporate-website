"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function GuvenCheckStage() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const yB = useTransform(scrollYProgress, [0, 1], [-20, 78]);
  const rotateA = useTransform(scrollYProgress, [0, 1], [-7, -3]);
  const rotateB = useTransform(scrollYProgress, [0, 1], [6, 2]);

  return (
    <section className="guven-stage" id="guncel-calisma" ref={ref} aria-labelledby="guven-title">
      <div className="guven-stage__word" aria-hidden="true">GÜVENCHECK</div>

      <div className="guven-stage__copy">
        <p className="section-code section-code--light">04 / GÜNCEL ÇALIŞMA</p>
        <h2 id="guven-title">GüvenCheck</h2>
        <p className="guven-stage__promise">Şüpheli bir dijital içerik mi gördün? <strong>GüvenCheck’e sor.</strong></p>
        <p className="guven-stage__description">GüvenCheck; mesaj, bağlantı/URL, internet sitesi, fotoğraf, görsel ve ekran görüntüsü gibi şüpheli dijital içerikleri değerlendirir; riski, nedenini ve şimdi ne yapılması gerektiğini daha anlaşılır hale getirmeyi amaçlayan bir Karaaslan Labs ürünüdür.</p>

        <div className="guven-stage__sequence" aria-label="GüvenCheck çıktı yapısı">
          <span>RİSK</span><i /><span>NEDEN</span><i /><span>ŞİMDİ NE YAPMALI?</span>
        </div>

        <a className="guven-stage__link" href="https://guvencheck.vercel.app/" target="_blank" rel="noopener noreferrer">
          GüvenCheck’i keşfet <span aria-hidden="true">↗</span>
        </a>

        <p className="guven-stage__note">GüvenCheck, Karaaslan Labs’ın bugün üzerinde çalıştığı gerçek ürünlerden biridir; şirketin çalışabileceği alanların tamamını temsil etmez.</p>
      </div>

      <div className="guven-stage__screens" aria-label="GüvenCheck ürün görselleri">
        <motion.figure className="guven-stage__screen guven-stage__screen--wide" style={{ y: yB }}>
          <Image src="/assets/guvencheck/6.webp" alt="GüvenCheck risk sonucu ekranı" width={1794} height={876} />
        </motion.figure>
        <motion.figure className="guven-stage__screen guven-stage__screen--phone guven-stage__screen--a" style={{ y: yA, rotate: rotateA }}>
          <Image src="/assets/guvencheck/1.webp" alt="GüvenCheck içerik kontrol ekranı" width={941} height={1672} />
        </motion.figure>
        <motion.figure className="guven-stage__screen guven-stage__screen--phone guven-stage__screen--b" style={{ y: yB, rotate: rotateB }}>
          <Image src="/assets/guvencheck/3.webp" alt="GüvenCheck yüksek risk sonucu ekranı" width={941} height={1672} />
        </motion.figure>
      </div>
    </section>
  );
}
