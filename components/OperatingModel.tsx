"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

const steps = [
  ["01", "Problemi Anla", "İhtiyacı, kullanım davranışını, mevcut çözümü ve beklenen sonucu anlamadan kapsamı büyütmeyiz."],
  ["02", "Kanıtla", "Varsayımları mümkün olduğunca erken; gerçek kullanım, davranış, maliyet, gelir veya başka somut sinyallerle test ederiz."],
  ["03", "İnşa Et", "Kanıtlanan ihtiyaca göre sade, sağlam ve geliştirilebilir bir ürün ya da sistem kurarız."],
  ["04", "Ölç ve Güçlendir", "Çalışan çözümü ölçer, gereksiz karmaşıklığı azaltır ve gerçek kullanımda kanıtlanan kabiliyetleri yeniden kullanılabilir hale getiririz."],
];

export function OperatingModel() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 75%", "end 45%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.3 });

  return (
    <section className="operating-model" id="yaklasim" ref={sectionRef} aria-labelledby="operating-title">
      <div className="section-shell">
        <div className="operating-model__head">
          <p className="section-code">02 / YAKLAŞIM</p>
          <h2 id="operating-title">Önce doğru problemi anlarız, sonra gereken sistemi kurarız.</h2>
          <p>Teknoloji bizim için amaç değil; doğru problemi çözmek, güvenilir sonuç üretmek ve sürdürülebilir değer oluşturmak için kullandığımız bir araçtır.</p>
        </div>

        <div className="operating-model__track" aria-hidden="true">
          <motion.span style={{ scaleX: progress }} />
        </div>

        <div className="operating-model__steps">
          {steps.map(([number, title, body]) => (
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
