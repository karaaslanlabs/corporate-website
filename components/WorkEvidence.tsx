import Image from "next/image";
import type { Locale } from "@/lib/locale";

const copy = {
  tr: {
    code: "04 / GERÇEK ÇALIŞMALAR",
    title: "Söylediklerimizden önce yaptıklarımız.",
    intro:
      "Güveni iddialarla değil, gerçek ürünler ve görünür çalışmalarla büyütmeyi tercih ediyoruz. Yeni ürünler, araştırmalar ve açık çalışmalar ortaya çıktıkça bu alan genişleyecek.",
    productLabel: "AKTİF ÜRÜN",
    productTitle: "GüvenCheck",
    productBody:
      "Şüpheli dijital içerikleri değerlendirerek riski, nedenini ve şimdi ne yapılması gerektiğini daha anlaşılır hale getirmeyi amaçlayan ürünümüz.",
    productLink: "Ürünü incele",
    publicLabel: "AÇIK GELİŞTİRME",
    publicTitle: "Karaaslan Labs GitHub",
    publicBody:
      "Herkese açık kod depolarımızı ve geliştirme çalışmalarımızı GitHub organizasyonumuz üzerinden görünür tutuyoruz.",
    publicLink: "GitHub’ı aç",
  },
  en: {
    code: "04 / REAL WORK",
    title: "What we build should speak before our claims do.",
    intro:
      "We prefer to earn trust through real products and visible work. This proof layer will grow as more products, research, and public work become visible.",
    productLabel: "ACTIVE PRODUCT",
    productTitle: "GüvenCheck",
    productBody:
      "A product designed to assess suspicious digital content and make the risk, the reason behind it, and the next action easier to understand.",
    productLink: "Explore the product",
    publicLabel: "PUBLIC ENGINEERING",
    publicTitle: "Karaaslan Labs GitHub",
    publicBody:
      "Our public repositories and development work remain visible through the Karaaslan Labs GitHub organization.",
    publicLink: "Open GitHub",
  },
} as const;

function GitHubMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.02-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.64-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.95a9.3 9.3 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.95.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.26 10.26 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  );
}

export function WorkEvidence({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section className="work-evidence" id="calismalar" aria-labelledby="work-evidence-title">
      <div className="section-shell">
        <div className="work-evidence__head">
          <p className="section-code">{t.code}</p>
          <h2 id="work-evidence-title">{t.title}</h2>
          <p>{t.intro}</p>
        </div>
        <div className="work-evidence__grid">
          <article className="evidence-card evidence-card--product">
            <div className="evidence-card__visual">
              <Image
                src="/assets/guvencheck/6.webp"
                alt={locale === "tr" ? "GüvenCheck ürün ekranı" : "GüvenCheck product screen"}
                width={1794}
                height={876}
              />
            </div>
            <div className="evidence-card__copy">
              <span>{t.productLabel}</span>
              <h3>{t.productTitle}</h3>
              <p>{t.productBody}</p>
              <a href="https://guvencheck.vercel.app/" target="_blank" rel="noopener noreferrer">
                {t.productLink} ↗
              </a>
            </div>
          </article>

          <article className="evidence-card evidence-card--github">
            <div className="evidence-card__github-mark"><GitHubMark /></div>
            <div className="evidence-card__copy">
              <span>{t.publicLabel}</span>
              <h3>{t.publicTitle}</h3>
              <p>{t.publicBody}</p>
              <a href="https://github.com/karaaslanlabs" target="_blank" rel="noopener noreferrer">
                {t.publicLink} ↗
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
