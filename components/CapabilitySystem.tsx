"use client";

import type { Locale } from "@/lib/locale";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

const capabilityCopy = {
  tr: {
    code: "01 / ÇALIŞMA ALANLARI",
    titleLead: "Tek bir kategoriye değil,",
    titleStrong: "çözmeye değer problemlere odaklanıyoruz.",
    intro:
      "Teknolojiyi belirli bir ürün türüne veya sektöre sıkıştırmıyoruz. Gerçek bir ihtiyaç ve güçlü bir değer potansiyeli gördüğümüzde farklı alanlarda çalışabiliriz; her alanı aynı disiplinle araştırır, doğrular ve geliştiririz.",
    capabilities: [
      {
        index: "01",
        eyebrow: "ÜRÜN / GİRİŞİM",
        title: "Ürünler ve Yeni Girişimler",
        body:
          "Gerçek bir kullanıcı ihtiyacına ve sürdürülebilir bir iş mantığına dayanan yeni ürün ve teknoloji girişimlerini araştırır, doğrular ve geliştiririz.",
      },
      {
        index: "02",
        eyebrow: "YAZILIM / SİSTEM",
        title: "Yazılım ve Sistemler",
        body:
          "Bir problemi güvenilir biçimde çözmek için gereken yazılımı, iş akışını ve teknik sistemi yalnızca gerektiği kadar karmaşık olacak şekilde kurarız.",
      },
      {
        index: "03",
        eyebrow: "YAPAY ZEKÂ / OTOMASYON",
        title: "Yapay Zekâ ve Otomasyon",
        body:
          "Yapay zekâ ve otomasyonu; araştırma, geliştirme, analiz ve operasyon kapasitemizi artıran bir kaldıraç olarak kullanırız.",
      },
      {
        index: "04",
        eyebrow: "ARAŞTIRMA / DOĞRULAMA",
        title: "Araştırma ve Doğrulama",
        body:
          "Büyük yatırım yapmadan önce problemi, kullanıcı ihtiyacını, pazarı, teknik uygulanabilirliği ve gerçek değer sinyallerini mümkün olduğunca doğrularız.",
      },
    ],
  },
  en: {
    code: "01 / FOCUS AREAS",
    titleLead: "We are not tied to a category.",
    titleStrong: "We focus on problems worth solving.",
    intro:
      "We do not confine technology to a particular product type or industry. When we see a real need and strong value potential, we can work across different fields—researching, validating, and building with the same discipline.",
    capabilities: [
      {
        index: "01",
        eyebrow: "PRODUCT / VENTURE",
        title: "Products and New Ventures",
        body:
          "We research, validate, and build new products and technology ventures grounded in real user needs and sustainable business logic.",
      },
      {
        index: "02",
        eyebrow: "SOFTWARE / SYSTEM",
        title: "Software and Systems",
        body:
          "We build the software, workflows, and technical systems required to solve a problem reliably, with no more complexity than the problem actually needs.",
      },
      {
        index: "03",
        eyebrow: "AI / AUTOMATION",
        title: "AI and Automation",
        body:
          "We use AI and automation as leverage to expand our research, development, analysis, and operational capacity.",
      },
      {
        index: "04",
        eyebrow: "RESEARCH / VALIDATION",
        title: "Research and Validation",
        body:
          "Before making a large investment, we validate the problem, user need, market, technical feasibility, and signals of real value as far as possible.",
      },
    ],
  },
} as const;

const visualCopy = {
  tr: {
    lab: "KL / CAPABILITY LAB",
    conceptual: "KAVRAMSAL KARAR MODELİ",
    active: "AKTİF",
    venture: {
      mode: "VENTURE REVIEW",
      columns: ["PROBLEM", "SİNYALLER", "KARAR"],
      sources: ["Kullanıcı ihtiyacı", "Pazar boşluğu", "Operasyonel sorun"],
      signals: ["Talep", "Aciliyet", "Uygulanabilirlik", "Ekonomi"],
      decisions: ["İNŞA ET", "BEKLET", "ELE"],
    },
    systems: {
      mode: "SYSTEM ARCHITECTURE",
      nodes: ["İstemci", "Kimlik", "API", "İşleyiciler", "Veri", "İzleme", "Çıktı"],
      tags: ["İZ", "SENKRON", "SAĞLIK"],
    },
    ai: {
      mode: "AI ORCHESTRATION",
      nodes: ["Girdi", "Sınıflandır", "Model / Ajan", "Kurallar", "İnsan kontrolü", "Çıktı"],
      tools: ["Arama", "Bilgi çekme", "Analiz", "Aksiyon"],
      checks: ["GÜVEN", "FALLBACK", "DOĞRULANDI"],
      controls: ["Kural kontrolü", "Eşik değerlendirme", "İnsan onayı"],
    },
    research: {
      mode: "RESEARCH DECISION",
      headers: ["HİPOTEZ", "KANIT", "KARAR"],
      hypotheses: ["Kullanıcı ihtiyacı güçlü mü?", "Çözüm davranışı değiştiriyor mu?", "Ekonomi taşınabilir mi?"],
      evidence: ["Kullanım sinyali", "Davranış sinyali", "Maliyet sinyali"],
      decisions: ["GO", "HOLD", "KILL"],
      confidence: "KANIT DÜZEYİ",
    },
  },
  en: {
    lab: "KL / CAPABILITY LAB",
    conceptual: "CONCEPTUAL DECISION MODEL",
    active: "ACTIVE",
    venture: {
      mode: "VENTURE REVIEW",
      columns: ["PROBLEM", "SIGNALS", "DECISION"],
      sources: ["User need", "Market gap", "Operational friction"],
      signals: ["Demand", "Urgency", "Feasibility", "Economics"],
      decisions: ["BUILD", "HOLD", "REJECT"],
    },
    systems: {
      mode: "SYSTEM ARCHITECTURE",
      nodes: ["Client", "Auth", "API", "Workers", "Data", "Monitoring", "Output"],
      tags: ["TRACE", "SYNC", "HEALTH"],
    },
    ai: {
      mode: "AI ORCHESTRATION",
      nodes: ["Input", "Classify", "Model / Agent", "Rules", "Human review", "Output"],
      tools: ["Search", "Retrieval", "Analysis", "Action"],
      checks: ["CONFIDENCE", "FALLBACK", "VERIFIED"],
      controls: ["Policy check", "Threshold review", "Human approval"],
    },
    research: {
      mode: "RESEARCH DECISION",
      headers: ["HYPOTHESIS", "EVIDENCE", "DECISION"],
      hypotheses: ["Is the user need strong?", "Does the solution change behavior?", "Can the economics hold?"],
      evidence: ["Usage signal", "Behavior signal", "Cost signal"],
      decisions: ["GO", "HOLD", "KILL"],
      confidence: "EVIDENCE LEVEL",
    },
  },
} as const;

function SurfaceShell({ mode, capability, locale, children }: { mode: string; capability: string; locale: Locale; children: React.ReactNode; }) {
  const t = visualCopy[locale];
  return (
    <div className="lab-surface">
      <div className="lab-surface__grid" />
      <header className="lab-toolbar">
        <div>
          <span className="lab-toolbar__eyebrow">{t.lab}</span>
          <strong>{mode}</strong>
        </div>
        <div className="lab-toolbar__status"><i /><span>{t.active}</span></div>
      </header>
      <div className="lab-surface__content">{children}</div>
      <footer className="lab-surface__footer"><span>{t.conceptual}</span><b>{capability}</b></footer>
    </div>
  );
}

function VentureSurface({ locale }: { locale: Locale }) {
  const t = visualCopy[locale].venture;
  const reduce = useReducedMotion();
  return (
    <SurfaceShell mode={t.mode} capability={t.mode} locale={locale}>
      <div className="venture-board">
        <div className="venture-board__heads">{t.columns.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="venture-board__sources">
          {t.sources.map((item, index) => (
            <motion.div key={item} className="lab-card lab-card--source" initial={reduce ? false : { opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + index * 0.08 }}>
              <i>{String(index + 1).padStart(2, "0")}</i><span>{item}</span>
            </motion.div>
          ))}
        </div>
        <div className="venture-board__signals">
          {t.signals.map((item, index) => (
            <motion.div key={item} className="signal-meter" initial={reduce ? false : { opacity: 0, scaleX: 0.5 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.20 + index * 0.07 }}>
              <div><span>{item}</span><b aria-hidden="true">◆</b></div>
              <i><em style={{ width: ["82%", "74%", "68%", "77%"][index] }} /></i>
            </motion.div>
          ))}
        </div>
        <div className="venture-board__decisions">
          {t.decisions.map((item, index) => (
            <motion.div key={item} className={`decision-chip ${index === 0 ? "decision-chip--active" : ""}`} initial={reduce ? false : { opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.36 + index * 0.08 }}>
              <span>{item}</span><i>{index === 0 ? "●" : "○"}</i>
            </motion.div>
          ))}
        </div>
        <div className="venture-board__flow flow-line flow-line--a" />
        <div className="venture-board__flow flow-line flow-line--b" />
      </div>
    </SurfaceShell>
  );
}

function SystemsSurface({ locale }: { locale: Locale }) {
  const t = visualCopy[locale].systems;
  const reduce = useReducedMotion();
  const positions = ["client", "auth", "api", "workers", "data", "monitoring", "output"];
  return (
    <SurfaceShell mode={t.mode} capability={t.mode} locale={locale}>
      <div className="systems-board">
        <svg className="systems-board__paths" viewBox="0 0 700 430" aria-hidden="true"><path d="M80 215 H235 H355 H500 H620" /><path d="M235 105 V215" /><path d="M355 215 V330" /><path d="M500 330 H355" /></svg>
        {t.nodes.map((item, index) => (
          <motion.div key={item} className={`system-node system-node--${positions[index]}`} initial={reduce ? false : { opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.08 + index * 0.06 }}>
            <small>{String(index + 1).padStart(2, "0")}</small><strong>{item}</strong><i className="system-node__pulse" />
          </motion.div>
        ))}
        <div className="systems-board__packet packet--one" /><div className="systems-board__packet packet--two" />
        <div className="systems-board__tags">{t.tags.map((tag) => <span key={tag}>{tag} ✓</span>)}</div>
      </div>
    </SurfaceShell>
  );
}

function AISurface({ locale }: { locale: Locale }) {
  const t = visualCopy[locale].ai;
  const reduce = useReducedMotion();
  return (
    <SurfaceShell mode={t.mode} capability={t.mode} locale={locale}>
      <div className="ai-board">
        <div className="ai-board__rail" aria-hidden="true" />
        <div className="ai-board__flow">
          {t.nodes.map((item, index) => (
            <motion.div key={item} className={`ai-node ${index === 4 ? "ai-node--human" : ""}`} initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 + index * 0.07 }}>
              <small>{String(index + 1).padStart(2, "0")}</small><strong>{item}</strong>{index < t.nodes.length - 1 && <i aria-hidden="true">→</i>}
            </motion.div>
          ))}
        </div>
        <div className="ai-board__control">{t.controls.map((control, index) => <div key={control}><small>0{index + 1}</small><span>{control}</span><b>{index === 2 ? "✓" : "●"}</b></div>)}</div>
        <div className="ai-board__tools"><span className="ai-board__tools-label">TOOLS</span>{t.tools.map((tool) => <b key={tool}>{tool}</b>)}</div>
        <div className="ai-board__checks">{t.checks.map((check, index) => <span key={check} className={index === 2 ? "is-verified" : ""}><i />{check}</span>)}</div>
      </div>
    </SurfaceShell>
  );
}

function ResearchSurface({ locale }: { locale: Locale }) {
  const t = visualCopy[locale].research;
  const reduce = useReducedMotion();
  return (
    <SurfaceShell mode={t.mode} capability={t.mode} locale={locale}>
      <div className="research-board">
        <div className="research-board__heads">{t.headers.map((header) => <span key={header}>{header}</span>)}</div>
        <div className="research-board__rows">
          {t.hypotheses.map((hypothesis, index) => (
            <motion.div key={hypothesis} className="research-row" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + index * 0.10 }}>
              <div className="research-row__hypothesis"><small>H{index + 1}</small><span>{hypothesis}</span></div>
              <div className="research-row__evidence"><span>{t.evidence[index]}</span><i><em style={{ width: ["84%", "58%", "34%"][index] }} /></i></div>
              <div className={`research-row__decision decision-${index}`}>{t.decisions[index]}</div>
            </motion.div>
          ))}
        </div>
        <div className="research-board__confidence"><span>{t.confidence}</span><div><i /><i /><i /><i /><i /></div><b>MODEL</b></div>
      </div>
    </SurfaceShell>
  );
}

function CapabilityVisual({ active, locale }: { active: number; locale: Locale }) {
  const capability = capabilityCopy[locale].capabilities[active].eyebrow;
  return (
    <div className="capability-visual" aria-label={capability}>
      <AnimatePresence mode="wait">
        <motion.div key={active} className="capability-visual__state" initial={{ opacity: 0, y: 18, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12, scale: 1.01 }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}>
          {active === 0 && <VentureSurface locale={locale} />}
          {active === 1 && <SystemsSurface locale={locale} />}
          {active === 2 && <AISurface locale={locale} />}
          {active === 3 && <ResearchSurface locale={locale} />}
        </motion.div>
      </AnimatePresence>
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

  useEffect(() => {
    if (compact) {
      setActive(0);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.capabilityIndex ?? 0);
        setActive(index);
      },
      { rootMargin: "-32% 0px -38% 0px", threshold: [0, 0.15, 0.35] },
    );

    stepRefs.current.forEach((step) => step && observer.observe(step));
    return () => observer.disconnect();
  }, [compact]);

  return (
    <section className="capability-system" id="alanlar" ref={sectionRef} aria-labelledby="capabilities-title">
      <div className="capability-system__intro">
        <p className="section-code">{t.code}</p>
        <h2 id="capabilities-title">{t.titleLead}<span>{t.titleStrong}</span></h2>
        <p>{t.intro}</p>
      </div>
      <div className="capability-system__body">
        <div className="capability-system__visual-column"><CapabilityVisual active={compact ? 0 : active} locale={locale} /></div>
        <div className="capability-system__steps">
          {t.capabilities.map((item, index) => (
            <article
              key={item.index}
              ref={(node) => { stepRefs.current[index] = node; }}
              data-capability-index={index}
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
