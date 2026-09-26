import type { Locale } from "@/lib/locale";

const copy = {
  tr: {
    code: "05 / ÇALIŞMA PRENSİPLERİ",
    titleLead: "Güç, iddiadan önce",
    titleStrong: "disiplinden gelir.",
    items: [
      ["01", "Kanıtlamadan ölçeklemeyiz", "Büyümeyi heyecana değil, gerçek kullanım ve iş sonuçlarına dayandırmayı tercih ederiz."],
      ["02", "Yalnızca gerektiği kadar karmaşık", "İhtiyaç duyulmayan sistemi, özelliği veya altyapıyı sırf mümkün olduğu için eklemeyiz."],
      ["03", "Güvenilirlik tasarımın parçasıdır", "Güvenlik, gizlilik, açıklık ve tutarlılığı ürün ve sistem kararlarının tasarım girdisi olarak ele alırız."],
      ["04", "Her döngüde daha yetenekli", "Gerçek işlerde kanıtlanan bilgi, altyapı ve çalışma kabiliyetlerini sonraki işleri daha iyi yapmak için biriktiririz."],
    ],
  },
  en: {
    code: "05 / WORKING PRINCIPLES",
    titleLead: "Strength comes from discipline",
    titleStrong: "before it comes from claims.",
    items: [
      ["01", "We do not scale before we validate", "We prefer to ground growth in real usage and business outcomes rather than momentum or excitement alone."],
      ["02", "Only as complex as necessary", "We do not add systems, features, or infrastructure simply because they are possible."],
      ["03", "Reliability is part of the design", "We treat security, privacy, clarity, and consistency as design inputs for product and system decisions."],
      ["04", "More capable after every cycle", "We retain knowledge, infrastructure, and working capabilities proven in real work so the next project can be stronger."],
    ],
  },
} as const;

export function Principles({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section className="principles-next" aria-labelledby="principles-next-title">
      <div className="section-shell">
        <div className="principles-next__head">
          <p className="section-code">{t.code}</p>
          <h2 id="principles-next-title">
            {t.titleLead} <span>{t.titleStrong}</span>
          </h2>
        </div>

        <div className="principles-next__list">
          {t.items.map(([number, title, body]) => (
            <article key={number}>
              <small>{number}</small>
              <h3>{title}</h3>
              <p>{body}</p>
              <span className="principles-next__arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
