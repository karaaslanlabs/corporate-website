"use client";

import type { Locale } from "@/lib/locale";
import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

const copy = {
  tr: {
    code: "03 / YAKLAŞIM",
    title: "Çalışma yaklaşımımız",
    intro:
      "Çalışmayı dört aşamada yürütürüz: problemi ve bağlamı anlamak, temel varsayımları doğrulamak, uygun çözümü geliştirmek ve kullanım sonuçlarını izlemek.",
    steps: [
      ["01", "Problemi ve bağlamı anla", "İhtiyacı, mevcut çözümü, kullanıcı davranışını ve beklenen sonucu tanımlarız."],
      ["02", "Varsayımları doğrula", "Kritik varsayımları kullanım, davranış, maliyet, gelir veya diğer ölçülebilir sinyallerle test ederiz."],
      ["03", "Çözümü geliştir", "Doğrulanan ihtiyaca göre ürün, yazılım veya sistem geliştiririz."],
      ["04", "Sonuçları izle", "Kullanım sonuçlarını izler; gerekli iyileştirmeleri veri ve gözleme göre yaparız."],
    ],
  },
  en: {
    code: "03 / APPROACH",
    title: "Our working approach",
    intro:
      "We work in four stages: understand the problem and context, validate the key assumptions, develop the appropriate solution, and monitor the results in use.",
    steps: [
      ["01", "Understand the problem and context", "We define the need, existing solution, user behavior, and expected outcome."],
      ["02", "Validate assumptions", "We test critical assumptions with usage, behavior, cost, revenue, or other measurable signals."],
      ["03", "Develop the solution", "We develop the product, software, or system required by the validated need."],
      ["04", "Monitor outcomes", "We monitor usage outcomes and make improvements based on data and observation."],
    ],
  },
} as const;

export function OperatingModel({ locale }: { locale: Locale }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 45%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.3,
  });
  const t = copy[locale];

  return (
    <section
      className="operating-model"
      id="yaklasim"
      ref={sectionRef}
      aria-labelledby="operating-title"
    >
      <div className="section-shell">
        <div className="operating-model__head">
          <p className="section-code">{t.code}</p>
          <h2 id="operating-title">{t.title}</h2>
          <p>{t.intro}</p>
        </div>

        <div className="operating-model__track" aria-hidden="true">
          <motion.span style={{ scaleX: progress }} />
        </div>

        <div className="operating-model__steps">
          {t.steps.map(([number, title, body]) => (
            <article key={number}>
              <span className="operating-model__dot" aria-hidden="true" />
              <small>{number}</small>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
