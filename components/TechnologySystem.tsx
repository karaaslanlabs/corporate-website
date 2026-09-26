import type { Locale } from "@/lib/locale";

const copy = {
  tr: {
    code: "04 / TEKNOLOJİ",
    title: "Teknoloji yaklaşımımız",
    body:
      "Yazılım, yapay zekâ, otomasyon ve araştırma araçlarını ihtiyaca göre seçeriz. Teknoloji seçiminde güvenilirlik, bakım maliyeti, açıklık ve insan kontrolü gereksinimlerini birlikte değerlendiririz.",
    modules: [
      "Yazılım mühendisliği",
      "Yapay zekâ",
      "Otomasyon",
      "Araştırma sistemleri",
      "Entegrasyon ve orkestrasyon",
    ],
  },
  en: {
    code: "04 / TECHNOLOGY",
    title: "Our technology approach",
    body:
      "We select software, AI, automation, and research tools according to the need. We evaluate technology choices in terms of reliability, maintenance cost, transparency, and the need for human oversight.",
    modules: [
      "Software engineering",
      "Artificial intelligence",
      "Automation",
      "Research systems",
      "Integration and orchestration",
    ],
  },
} as const;

export function TechnologySystem({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section className="technology-compact" id="teknoloji" aria-labelledby="technology-title">
      <div className="section-shell technology-compact__grid">
        <div className="technology-compact__title">
          <p className="section-code section-code--light">{t.code}</p>
          <h2 id="technology-title">{t.title}</h2>
        </div>

        <div className="technology-compact__body">
          <p>{t.body}</p>
          <div className="technology-compact__modules" aria-label={locale === "tr" ? "Teknoloji kabiliyetleri" : "Technology capabilities"}>
            {t.modules.map((module, index) => (
              <span key={module}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                {module}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
