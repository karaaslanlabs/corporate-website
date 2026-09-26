import type { Locale } from "@/lib/locale";

const copy = {
  tr: {
    code: "05 / ÇALIŞMA PRENSİPLERİ",
    title: "Çalışma prensiplerimiz",
    items: [
      ["01", "Doğrulamadan ölçeklemeyiz", "Kapsam ve yatırımı, kullanım ve iş sonuçları doğrulandıkça artırırız."],
      ["02", "Gereksiz karmaşıklıktan kaçınırız", "İhtiyaç duymadığımız sistem ve özellikleri sırf mümkün oldukları için eklemeyiz."],
      ["03", "Güvenilirliği baştan ele alırız", "Güvenlik, gizlilik, açıklık ve tutarlılığı tasarım ve geliştirme sürecinin parçası olarak değerlendiririz."],
      ["04", "Öğrenilenleri yeniden kullanırız", "Gerçek çalışmalarda edinilen bilgi ve doğrulanan kabiliyetleri sonraki projelere taşırız."],
    ],
  },
  en: {
    code: "05 / WORKING PRINCIPLES",
    title: "Our working principles",
    items: [
      ["01", "We do not scale before validation", "We increase scope and investment as usage and business outcomes are validated."],
      ["02", "We avoid unnecessary complexity", "We do not add systems or features simply because they are possible."],
      ["03", "We address reliability from the start", "Security, privacy, clarity, and consistency are considered throughout design and development."],
      ["04", "We reuse what we learn", "Knowledge and proven capabilities from real work carry into subsequent projects."],
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
