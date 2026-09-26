import type { Locale } from "@/lib/locale";

const copy = {
  tr: {
    code: "05 / TEKNOLOJİ",
    title: "Teknoloji bizim için amaç değil, kaldıraçtır.",
    body:
      "Yazılım, yapay zekâ, otomasyon ve araştırma sistemlerini yalnızca probleme gerçek bir avantaj sağladıkları yerde kullanıyoruz. Gereken yerde insan kararı ve kontrolü sistemin içinde kalır.",
    modules: [
      "Yazılım Mühendisliği",
      "Yapay Zekâ",
      "Otomasyon",
      "Araştırma Sistemleri",
      "Orkestrasyon",
    ],
  },
  en: {
    code: "05 / TECHNOLOGY",
    title: "Technology is leverage, not the objective.",
    body:
      "We use software, AI, automation, and research systems where they create a real advantage for the problem at hand. Human judgment and control remain inside the system where they matter.",
    modules: [
      "Software Engineering",
      "Artificial Intelligence",
      "Automation",
      "Research Systems",
      "Orchestration",
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
