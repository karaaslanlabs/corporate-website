"use client";

import type { Locale } from "@/lib/locale";
import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

const copy = {
  tr: {
    code: "02 / YAKLAŞIM",
    title: "Önce doğru problemi anlarız, sonra gereken sistemi kurarız.",
    intro:
      "Teknoloji bizim için amaç değil; doğru problemi çözmek, güvenilir sonuç üretmek ve sürdürülebilir değer oluşturmak için kullandığımız bir araçtır.",
    steps: [
      ["01", "Problemi Anla", "İhtiyacı, kullanım davranışını, mevcut çözümü ve beklenen sonucu anlamadan kapsamı büyütmeyiz."],
      ["02", "Kanıtla", "Varsayımları mümkün olduğunca erken; gerçek kullanım, davranış, maliyet, gelir veya başka somut sinyallerle test ederiz."],
      ["03", "İnşa Et", "Kanıtlanan ihtiyaca göre sade, sağlam ve geliştirilebilir bir ürün ya da sistem kurarız."],
      ["04", "Ölç ve Güçlendir", "Çalışan çözümü ölçer, gereksiz karmaşıklığı azaltır ve gerçek kullanımda kanıtlanan kabiliyetleri yeniden kullanılabilir hale getiririz."],
    ],
  },
  en: {
    code: "02 / APPROACH",
    title: "We understand the right problem first, then build the system it needs.",
    intro:
      "Technology is not the goal. It is a tool we use to solve the right problem, produce reliable outcomes, and create sustainable value.",
    steps: [
      ["01", "Understand the Problem", "We do not expand scope before we understand the need, user behavior, existing solution, and expected outcome."],
      ["02", "Validate", "We test assumptions as early as possible with real usage, behavior, cost, revenue, or other concrete signals."],
      ["03", "Build", "Once the need is validated, we build a focused, robust, and evolvable product or system."],
      ["04", "Measure and Strengthen", "We measure what works, remove unnecessary complexity, and turn proven capabilities into reusable building blocks."],
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
