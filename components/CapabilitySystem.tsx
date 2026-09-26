"use client";

import type { Locale } from "@/lib/locale";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const capabilityCopy = {
  tr: {
    code: "02 / ÇALIŞMA ALANLARI",
    titleLead: "Tek bir kategoriye değil,",
    titleStrong: "çözmeye değer problemlere odaklanıyoruz.",
    intro: "Teknolojiyi belirli bir ürün türüne veya sektöre sıkıştırmıyoruz. Gerçek bir ihtiyaç ve güçlü bir değer potansiyeli gördüğümüzde farklı alanlarda çalışabiliriz; her alanı aynı disiplinle araştırır, doğrular ve geliştiririz.",
    capabilities: [
      { index: "01", eyebrow: "ÜRÜN / GİRİŞİM", title: "Ürünler ve Yeni Girişimler", body: "Gerçek bir kullanıcı ihtiyacına ve sürdürülebilir bir iş mantığına dayanan yeni ürün ve teknoloji girişimlerini araştırır, doğrular ve geliştiririz." },
      { index: "02", eyebrow: "YAZILIM / SİSTEM", title: "Yazılım ve Sistemler", body: "Bir problemi güvenilir biçimde çözmek için gereken yazılımı, iş akışını ve teknik sistemi yalnızca gerektiği kadar karmaşık olacak şekilde kurarız." },
      { index: "03", eyebrow: "YAPAY ZEKÂ / OTOMASYON", title: "Yapay Zekâ ve Otomasyon", body: "Yapay zekâ ve otomasyonu; araştırma, geliştirme, analiz ve operasyon kapasitemizi artıran bir kaldıraç olarak kullanırız." },
      { index: "04", eyebrow: "ARAŞTIRMA / DOĞRULAMA", title: "Araştırma ve Doğrulama", body: "Büyük yatırım yapmadan önce problemi, kullanıcı ihtiyacını, pazarı, teknik uygulanabilirliği ve gerçek değer sinyallerini mümkün olduğunca doğrularız." },
    ],
  },
  en: {
    code: "02 / FOCUS AREAS",
    titleLead: "We are not tied to a category.",
    titleStrong: "We focus on problems worth solving.",
    intro: "We do not confine technology to a particular product type or industry. When we see a real need and strong value potential, we can work across different fields—researching, validating, and building with the same discipline.",
    capabilities: [
      { index: "01", eyebrow: "PRODUCT / VENTURE", title: "Products and New Ventures", body: "We research, validate, and build new products and technology ventures grounded in real user needs and sustainable business logic." },
      { index: "02", eyebrow: "SOFTWARE / SYSTEM", title: "Software and Systems", body: "We build the software, workflows, and technical systems required to solve a problem reliably, with no more complexity than the problem actually needs." },
      { index: "03", eyebrow: "AI / AUTOMATION", title: "AI and Automation", body: "We use AI and automation as leverage to expand our research, development, analysis, and operational capacity." },
      { index: "04", eyebrow: "RESEARCH / VALIDATION", title: "Research and Validation", body: "Before making a large investment, we validate the problem, user need, market, technical feasibility, and signals of real value as far as possible." },
    ],
  },
} as const;
const visualCopy = {
  tr: {
    lab: "KL / NASIL ÇALIŞIYORUZ",
    footer: "ÖRNEK İŞLEYİŞ",
    active: "GÖRSEL AKIŞ",
    venture: {
      mode: "FİKİRDEN ÜRÜNE",
      stages: ["Gerçek ihtiyacı bul", "Kanıt topla", "Doğruysa geliştir"],
      notes: ["Kullanıcı ihtiyacı", "Talep • Uygulanabilirlik • Ekonomi", "GELİŞTİR"],
      summary: "Sorun → Kanıt → Karar",
    },
    systems: {
      mode: "SİSTEMİN İŞLEYİŞİ",
      main: ["Kullanıcı", "Uygulama", "Sonuç"],
      support: ["Güvenlik", "Veri", "İzleme"],
      summary: "Görünmeyen parçalar birlikte çalışır.",
    },
    ai: {
      mode: "YAPAY ZEKÂ AKIŞI",
      main: ["İstek", "Yapay zekâ", "İnsan kontrolü", "Açık sonuç"],
      tools: ["Arama", "Analiz", "Kurallar"],
      summary: "Anlar → araç kullanır → kontrol edilir → sonuç üretir",
    },
    research: {
      mode: "KANITTAN KARARA",
      question: "Varsayım",
      evidence: ["Kullanım", "Davranış", "Maliyet"],
      decisions: ["DEVAM", "BEKLET", "DURDUR"],
      summary: "Tahmin etmiyoruz; önce kanıt arıyoruz.",
    },
  },
  en: {
    lab: "KL / HOW WE WORK",
    footer: "ILLUSTRATIVE FLOW",
    active: "VISUAL FLOW",
    venture: {
      mode: "FROM IDEA TO PRODUCT",
      stages: ["Find a real need", "Gather evidence", "Build when it holds"],
      notes: ["User need", "Demand • Feasibility • Economics", "BUILD"],
      summary: "Problem → Evidence → Decision",
    },
    systems: {
      mode: "HOW THE SYSTEM WORKS",
      main: ["User", "Application", "Outcome"],
      support: ["Security", "Data", "Monitoring"],
      summary: "Invisible parts work together.",
    },
    ai: {
      mode: "AI WORKFLOW",
      main: ["Request", "AI", "Human review", "Clear outcome"],
      tools: ["Search", "Analysis", "Rules"],
      summary: "Understand → use tools → review → produce",
    },
    research: {
      mode: "FROM EVIDENCE TO DECISION",
      question: "Hypothesis",
      evidence: ["Usage", "Behavior", "Cost"],
      decisions: ["CONTINUE", "HOLD", "STOP"],
      summary: "We look for evidence before we commit.",
    },
  },
} as const;
type IconName = "need" | "evidence" | "product" | "user" | "app" | "result" | "shield" | "data" | "monitor" | "request" | "ai" | "human" | "search" | "question" | "decision";

function VisualIcon({ name }: { name: IconName }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      {name === "need" && <><path {...common} d="M10 12h28v19H23l-8 6v-6h-5z"/><path {...common} d="M17 19h14M17 24h9"/></>}
      {name === "evidence" && <><circle {...common} cx="21" cy="21" r="10"/><path {...common} d="m28.5 28.5 8 8M17 23l3-4 4 2 4-6"/></>}
      {name === "product" && <><rect {...common} x="10" y="10" width="28" height="28" rx="5"/><path {...common} d="M16 17h16M16 23h10M16 29h7"/><path {...common} d="m28 30 3 3 6-7"/></>}
      {name === "user" && <><circle {...common} cx="24" cy="17" r="6"/><path {...common} d="M12 38c2-8 7-12 12-12s10 4 12 12"/></>}
      {name === "app" && <><rect {...common} x="8" y="10" width="32" height="28" rx="5"/><path {...common} d="M8 17h32M14 13.5h.01M19 13.5h.01"/></>}
      {name === "result" && <><rect {...common} x="9" y="12" width="30" height="24" rx="4"/><path {...common} d="m16 25 5 5 11-12"/></>}
      {name === "shield" && <><path {...common} d="M24 7 36 12v9c0 8-5 14-12 20-7-6-12-12-12-20v-9z"/><path {...common} d="m18 23 4 4 8-9"/></>}
      {name === "data" && <><ellipse {...common} cx="24" cy="12" rx="12" ry="5"/><path {...common} d="M12 12v9c0 3 5 5 12 5s12-2 12-5v-9M12 21v9c0 3 5 5 12 5s12-2 12-5v-9"/></>}
      {name === "monitor" && <><path {...common} d="M8 30h8l4-10 6 16 5-11 3 5h6"/><rect {...common} x="7" y="8" width="34" height="32" rx="5"/></>}
      {name === "request" && <><path {...common} d="M9 13h30v20H22l-8 6v-6H9z"/><path {...common} d="M17 20h14M17 25h10"/></>}
      {name === "ai" && <><circle {...common} cx="24" cy="24" r="9"/><path {...common} d="M24 5v6M24 37v6M5 24h6M37 24h6M10.5 10.5l4.2 4.2M33.3 33.3l4.2 4.2M37.5 10.5l-4.2 4.2M14.7 33.3l-4.2 4.2"/><path {...common} d="M20 24h8M24 20v8"/></>}
      {name === "human" && <><circle {...common} cx="24" cy="16" r="6"/><path {...common} d="M12 37c2-8 7-12 12-12s10 4 12 12"/><path {...common} d="m31 30 3 3 6-7"/></>}
      {name === "search" && <><circle {...common} cx="20" cy="20" r="10"/><path {...common} d="m27.5 27.5 9 9"/></>}
      {name === "question" && <><circle {...common} cx="24" cy="24" r="17"/><path {...common} d="M19 18a5 5 0 1 1 8 4c-2 1-3 2-3 5M24 34h.01"/></>}
      {name === "decision" && <><path {...common} d="M10 12h28v24H10z"/><path {...common} d="m16 25 5 5 11-12"/></>}
    </svg>
  );
}
function SurfaceShell({ mode, locale, children }: { mode: string; locale: Locale; children: React.ReactNode }) {
  const t = visualCopy[locale];
  return (
    <div className="story-surface">
      <div className="story-surface__glow" />
      <header className="story-toolbar">
        <div><span>{t.lab}</span><strong>{mode}</strong></div>
        <div className="story-toolbar__status"><i />{t.active}</div>
      </header>
      <div className="story-surface__content">{children}</div>
      <footer className="story-surface__footer"><span>{t.footer}</span><b>{mode}</b></footer>
    </div>
  );
}

function VentureSurface({ locale }: { locale: Locale }) {
  const t = visualCopy[locale].venture;
  const reduce = useReducedMotion();
  const icons: IconName[] = ["need", "evidence", "product"];
  return (
    <SurfaceShell mode={t.mode} locale={locale}>
      <div className="visual-story visual-story--venture">
        {t.stages.map((stage, index) => (
          <motion.div key={stage} className={`visual-stage visual-stage--${index + 1}`} initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .12 }}>
            <div className="visual-stage__icon"><VisualIcon name={icons[index]} /></div>
            <small>0{index + 1}</small><strong>{stage}</strong><span>{t.notes[index]}</span>
            {index < 2 && <i className="visual-story__arrow" aria-hidden="true">→</i>}
          </motion.div>
        ))}
        <div className="venture-signal-cloud" aria-hidden="true"><i /><i /><i /><i /></div>
        <p className="visual-story__summary">{t.summary}</p>
      </div>
    </SurfaceShell>
  );
}
function SystemsSurface({ locale }: { locale: Locale }) {
  const t = visualCopy[locale].systems;
  const reduce = useReducedMotion();
  return (
    <SurfaceShell mode={t.mode} locale={locale}>
      <div className="visual-story visual-story--systems">
        <div className="systems-main-flow">
          {["user", "app", "result"].map((name, index) => (
            <motion.div key={name} className={`system-story-card system-story-card--${index + 1}`} initial={reduce ? false : { opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * .1 }}>
              <div className="system-story-card__icon"><VisualIcon name={name as IconName} /></div>
              <strong>{t.main[index]}</strong>
              {index < 2 && <i aria-hidden="true">→</i>}
            </motion.div>
          ))}
        </div>
        <div className="systems-support-flow">
          {["shield", "data", "monitor"].map((name, index) => (
            <div className="support-node" key={name}><VisualIcon name={name as IconName} /><span>{t.support[index]}</span></div>
          ))}
        </div>
        <div className="systems-connector systems-connector--a" /><div className="systems-connector systems-connector--b" /><div className="systems-connector systems-connector--c" />
        <p className="visual-story__summary">{t.summary}</p>
      </div>
    </SurfaceShell>
  );
}

function AISurface({ locale }: { locale: Locale }) {
  const t = visualCopy[locale].ai;
  const reduce = useReducedMotion();
  const icons: IconName[] = ["request", "ai", "human", "result"];
  return (
    <SurfaceShell mode={t.mode} locale={locale}>
      <div className="visual-story visual-story--ai">
        <div className="ai-main-flow">
          {t.main.map((label, index) => (
            <motion.div key={label} className={`ai-story-card ai-story-card--${index + 1}`} initial={reduce ? false : { opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .1 }}>
              <div className="ai-story-card__icon"><VisualIcon name={icons[index]} /></div><strong>{label}</strong>
              {index < 3 && <i aria-hidden="true">→</i>}
            </motion.div>
          ))}
        </div>
        <div className="ai-tool-orbit"><span><VisualIcon name="search" /></span>{t.tools.map((tool) => <b key={tool}>{tool}</b>)}</div>
        <p className="visual-story__summary">{t.summary}</p>
      </div>
    </SurfaceShell>
  );
}
function ResearchSurface({ locale }: { locale: Locale }) {
  const t = visualCopy[locale].research;
  const reduce = useReducedMotion();
  return (
    <SurfaceShell mode={t.mode} locale={locale}>
      <div className="visual-story visual-story--research">
        <motion.div className="research-question" initial={reduce ? false : { opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }}>
          <div className="research-question__icon"><VisualIcon name="question" /></div><small>01</small><strong>{t.question}</strong>
        </motion.div>
        <div className="research-lens" aria-hidden="true"><VisualIcon name="evidence" /><i /><i /><i /></div>
        <div className="research-evidence-stack">
          {t.evidence.map((item, index) => <div key={item}><span>{item}</span><i><em style={{ width: ["82%", "58%", "36%"][index] }} /></i></div>)}
        </div>
        <div className="research-decisions">
          {t.decisions.map((decision, index) => <motion.div key={decision} className={`research-decision research-decision--${index + 1}`} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18 + index * .08 }}><VisualIcon name="decision" /><span>{decision}</span></motion.div>)}
        </div>
        <p className="visual-story__summary">{t.summary}</p>
      </div>
    </SurfaceShell>
  );
}

function CapabilityVisual({ active, locale }: { active: number; locale: Locale }) {
  const surfaces = [
    <VentureSurface key="venture" locale={locale} />,
    <SystemsSurface key="systems" locale={locale} />,
    <AISurface key="ai" locale={locale} />,
    <ResearchSurface key="research" locale={locale} />,
  ];

  return (
    <div className="capability-visual">
      {surfaces.map((surface, index) => (
        <div
          key={index}
          className={`capability-visual__panel ${index === active ? "is-active" : ""}`}
          aria-hidden={index === active ? undefined : true}
        >
          {surface}
        </div>
      ))}
    </div>
  );
}
export function CapabilitySystem({ locale }: { locale: Locale }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [compact, setCompact] = useState(false);
  const t = capabilityCopy[locale];

  useEffect(() => {
    const media = window.matchMedia("(max-width: 900px)");
    const sync = () => setCompact(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const activeRef = useRef(0);

  useEffect(() => {
    if (compact) {
      activeRef.current = 0;
      setActive(0);
      return;
    }

    let frame = 0;
    const syncActiveStep = () => {
      frame = 0;
      const targetY = window.innerHeight * 0.46;
      const current = activeRef.current;
      let bestIndex = current;
      let bestDistance = Number.POSITIVE_INFINITY;
      let currentDistance = Number.POSITIVE_INFINITY;

      stepRefs.current.forEach((step, index) => {
        if (!step) return;
        const rect = step.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - targetY);
        if (index === current) currentDistance = distance;
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = index;
        }
      });

      const hysteresis = 44;
      if (bestIndex !== current && bestDistance + hysteresis < currentDistance) {
        activeRef.current = bestIndex;
        setActive(bestIndex);
      }
    };

    const scheduleSync = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(syncActiveStep);
    };

    syncActiveStep();
    window.addEventListener("scroll", scheduleSync, { passive: true });
    window.addEventListener("resize", scheduleSync);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleSync);
      window.removeEventListener("resize", scheduleSync);
    };
  }, [compact]);

  return (
    <section className="capability-system" id="alanlar" ref={sectionRef} aria-labelledby="capabilities-title">
      <div className="capability-system__intro"><p className="section-code">{t.code}</p><h2 id="capabilities-title">{t.titleLead}<span>{t.titleStrong}</span></h2><p>{t.intro}</p></div>
      <div className="capability-system__body">
        <div className="capability-system__visual-column"><CapabilityVisual active={compact ? 0 : active} locale={locale} /></div>
        <div className="capability-system__steps">
          {t.capabilities.map((item, index) => (
            <article key={item.index} ref={(node) => { stepRefs.current[index] = node; }} data-capability-index={index} className={`capability-step ${index === active ? "capability-step--active" : ""}`}>
              <div className="capability-step__number">{item.index}</div><p className="capability-step__eyebrow">{item.eyebrow}</p><h3>{item.title}</h3><p className="capability-step__body">{item.body}</p><div className="capability-step__rule"><span /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
