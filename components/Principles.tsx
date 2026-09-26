import type { Locale } from "@/lib/locale";

const copy = {
  tr: {
    code: "06 / ÇALIŞMA PRENSİPLERİ",
    title: "Bizi hızdan önce disiplin tanımlar.",
    items: [
      ["01", "Kanıtlamadan ölçeklemeyiz", "Büyümeyi gerçek kullanım ve iş sonuçlarına dayandırırız."],
      ["02", "Yalnızca gerektiği kadar karmaşık", "İhtiyaç olmayan sistemi sırf mümkün olduğu için eklemeyiz."],
      ["03", "Güvenilirlik tasarımın parçasıdır", "Güvenlik, gizlilik, açıklık ve tutarlılığı baştan ele alırız."],
      ["04", "Her döngüde daha yetenekli", "Kanıtlanan bilgi ve kabiliyetleri sonraki işe taşırız."],
    ],
  },
  en: {
    code: "06 / WORKING PRINCIPLES",
    title: "Discipline matters before speed does.",
    items: [
      ["01", "We do not scale before we validate", "Growth should be grounded in real usage and business outcomes."],
      ["02", "Only as complex as necessary", "We do not add systems simply because they are possible."],
      ["03", "Reliability is part of the design", "Security, privacy, clarity, and consistency start with the design."],
      ["04", "More capable after every cycle", "Proven knowledge and capabilities carry into the next piece of work."],
    ],
  },
} as const;

export function Principles({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section className="principles-compact" aria-labelledby="principles-next-title">
      <div className="section-shell">
        <div className="principles-compact__head">
          <p className="section-code">{t.code}</p>
          <h2 id="principles-next-title">{t.title}</h2>
        </div>

        <div className="principles-compact__grid">
          {t.items.map(([number, title, body]) => (
            <article key={number}>
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
