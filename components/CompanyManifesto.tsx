import Image from "next/image";
import type { Locale } from "@/lib/locale";

const copy = {
  tr: {
    code: "06 / KARAASLAN LABS",
    title: "Karaaslan Labs hakkında",
    lead:
      "Karaaslan Labs, farklı problem alanlarında ürünler, yazılım sistemleri ve teknoloji girişimleri geliştiren bir teknoloji şirketidir.",
    body: [
      "Çalışma alanlarımız tek bir sektörle sınırlı değildir. Yeni bir alanı değerlendirirken kullanıcı ihtiyacını, teknik uygulanabilirliği ve sürdürülebilir iş modelini birlikte ele alırız.",
      "Bir problem doğrulandığında, çözüm için gerekli teknoloji ve çalışma modelini ihtiyaca göre belirler; güvenilir ve sürdürülebilir bir yapı geliştirmeye odaklanırız.",
    ],
  },
  en: {
    code: "06 / KARAASLAN LABS",
    title: "About Karaaslan Labs",
    lead:
      "Karaaslan Labs is a technology company that develops products, software systems, and technology ventures across different problem areas.",
    body: [
      "Our work is not limited to a single industry. When evaluating a new area, we consider user need, technical feasibility, and a sustainable business model together.",
      "Once a problem is validated, we determine the technology and implementation approach needed for the solution and focus on building a reliable, maintainable structure.",
    ],
  },
} as const;

export function CompanyManifesto({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section className="company-story" id="sirket" aria-labelledby="company-story-title">
      <div className="company-story__mark" aria-hidden="true">
        <span />
        <Image src="/assets/brand/karaaslan-labs-mark.svg" alt="" width={128} height={128} />
      </div>
      <div className="company-story__content">
        <p className="section-code section-code--light">{t.code}</p>
        <h2 id="company-story-title">{t.title}</h2>
        <p className="company-story__lead">{t.lead}</p>

        <div className="company-story__body">
          {t.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
