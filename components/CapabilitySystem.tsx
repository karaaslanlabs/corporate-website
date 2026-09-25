"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useMotionValueEvent } from "motion/react";
import { useEffect, useRef, useState } from "react";

const capabilities = [
  {
    index: "01",
    eyebrow: "ÜRÜN / GİRİŞİM",
    title: "Ürünler ve Yeni Girişimler",
    body: "Gerçek bir kullanıcı ihtiyacına ve sürdürülebilir bir iş mantığına dayanan yeni ürün ve teknoloji girişimlerini araştırır, doğrular ve geliştiririz.",
  },
  {
    index: "02",
    eyebrow: "YAZILIM / SİSTEM",
    title: "Yazılım ve Sistemler",
    body: "Bir problemi güvenilir biçimde çözmek için gereken yazılımı, iş akışını ve teknik sistemi yalnızca gerektiği kadar karmaşık olacak şekilde kurarız.",
  },
  {
    index: "03",
    eyebrow: "YAPAY ZEKÂ / OTOMASYON",
    title: "Yapay Zekâ ve Otomasyon",
    body: "Yapay zekâ ve otomasyonu; araştırma, geliştirme, analiz ve operasyon kapasitemizi artıran bir kaldıraç olarak kullanırız.",
  },
  {
    index: "04",
    eyebrow: "ARAŞTIRMA / DOĞRULAMA",
    title: "Araştırma ve Doğrulama",
    body: "Büyük yatırım yapmadan önce problemi, kullanıcı ihtiyacını, pazarı, teknik uygulanabilirliği ve gerçek değer sinyallerini mümkün olduğunca doğrularız.",
  },
];

function CapabilityVisual({ active }: { active: number }) {
  const reduce = useReducedMotion();

  return (
    <div className={`capability-visual capability-visual--${active + 1}`} aria-hidden="true">
      <div className="capability-visual__frame">
        <div className="capability-visual__grid" />
        <div className="capability-visual__axis capability-visual__axis--x" />
        <div className="capability-visual__axis capability-visual__axis--y" />

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="capability-visual__state"
            initial={reduce ? false : { opacity: 0, scale: 0.96, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={reduce ? undefined : { opacity: 0, scale: 1.035, rotate: 2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {active === 0 && (
              <div className="visual-product-map">
                <span className="visual-product-map__core">01</span>
                <i className="visual-product-map__orbit visual-product-map__orbit--a" />
                <i className="visual-product-map__orbit visual-product-map__orbit--b" />
                <b className="visual-product-map__node visual-product-map__node--a" />
                <b className="visual-product-map__node visual-product-map__node--b" />
                <b className="visual-product-map__node visual-product-map__node--c" />
              </div>
            )}

            {active === 1 && (
              <div className="visual-system-map">
                <span>GİRDİ</span><span>MANTIK</span><span>SİSTEM</span><span>ÇIKTI</span>
                <i /><i /><i />
              </div>
            )}

            {active === 2 && (
              <div className="visual-ai-map">
                <span className="visual-ai-map__diamond visual-ai-map__diamond--a" />
                <span className="visual-ai-map__diamond visual-ai-map__diamond--b" />
                <span className="visual-ai-map__diamond visual-ai-map__diamond--c" />
                <i className="visual-ai-map__signal visual-ai-map__signal--a" />
                <i className="visual-ai-map__signal visual-ai-map__signal--b" />
              </div>
            )}

            {active === 3 && (
              <div className="visual-research-map">
                <svg viewBox="0 0 500 340" preserveAspectRatio="none">
                  <path d="M20 278 C92 198 132 238 190 148 S298 92 360 130 S424 82 480 38" />
                  <path d="M20 220 C110 250 142 165 218 198 S336 246 480 110" />
                </svg>
                <span className="visual-research-map__point p1" />
                <span className="visual-research-map__point p2" />
                <span className="visual-research-map__point p3" />
                <span className="visual-research-map__point p4" />
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="capability-visual__status">
          <span>KL / KABİLİYET SİSTEMİ</span>
          <b>{capabilities[active].eyebrow}</b>
        </div>
      </div>
    </div>
  );
}

export function CapabilitySystem() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 900px)");
    const sync = () => setCompact(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(3, Math.max(0, Math.floor(value * 4)));
    if (!compact) setActive(next);
  });

  const visualActive = compact ? 0 : active;

  return (
    <section className="capability-system" id="alanlar" ref={sectionRef} aria-labelledby="capabilities-title">
      <div className="capability-system__intro">
        <p className="section-code">01 / ÇALIŞMA ALANLARI</p>
        <h2 id="capabilities-title">
          Tek bir kategoriye değil,
          <span>çözmeye değer problemlere odaklanıyoruz.</span>
        </h2>
        <p>
          Teknolojiyi belirli bir ürün türüne veya sektöre sıkıştırmıyoruz. Gerçek
          bir ihtiyaç ve güçlü bir değer potansiyeli gördüğümüzde farklı alanlarda
          çalışabiliriz; her alanı aynı disiplinle araştırır, doğrular ve geliştiririz.
        </p>
      </div>

      <div className="capability-system__body">
        <div className="capability-system__visual-column">
          <CapabilityVisual active={visualActive} />
        </div>

        <div className="capability-system__steps">
          {capabilities.map((item, index) => (
            <article
              key={item.index}
              className={`capability-step ${index === active ? "capability-step--active" : ""}`}
            >
              <div className="capability-step__number">{item.index}</div>
              <p className="capability-step__eyebrow">{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <p className="capability-step__body">{item.body}</p>
              <div className="capability-step__rule"><span /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
