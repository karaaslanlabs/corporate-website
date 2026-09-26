import type { Locale } from "@/lib/locale";

const copy = {
  tr: {
    code: "04 / TEKNOLOJİ",
    title: "Teknoloji yaklaşımımız",
    body:
      "Yazılım, yapay zekâ, otomasyon ve araştırma araçlarını ihtiyaca göre seçeriz. Teknoloji seçiminde güvenilirlik, bakım maliyeti, açıklık ve insan kontrolü gereksinimlerini birlikte değerlendiririz.",
    modules: [
      "Yazılım Mühendisliği",
      "Yapay Zekâ",
      "Otomasyon",
      "Araştırma Sistemleri",
      "Entegrasyon ve Orkestrasyon",
    ],
  },
  en: {
    code: "04 / TECHNOLOGY",
    title: "Our technology approach",
    body:
      "We select software, AI, automation, and research tools according to the need. Technology choices are evaluated in terms of reliability, maintenance cost, transparency, and requirements for human control.",
    modules: [
      "Software Engineering",
      "Artificial Intelligence",
      "Automation",
      "Research Systems",
      "Integration and Orchestration",
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
