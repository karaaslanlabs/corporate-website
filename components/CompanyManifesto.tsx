import Image from "next/image";
import type { Locale } from "@/lib/locale";

const copy = {
  tr: {
    code: "07 / KARAASLAN LABS",
    title: "Karaaslan Labs neden var?",
    lead:
      "Gerçek problemlere odaklanarak ürünler, sistemler ve yeni teknoloji girişimleri geliştirmek için.",
    body: [
      "Tek bir sektöre bağlı değiliz; yeni bir alana da yalnızca teknoloji ilginç olduğu için girmiyoruz. Önce gerçek ihtiyacı ve değer sinyalini arıyoruz.",
      "Problem doğrulandığında uygun teknolojiyi, sistemi ve çalışma biçimini kuruyoruz. Gereksiz karmaşıklığı değil, güvenilir sonucu büyütmeye çalışıyoruz.",
      "Bugün bu yaklaşımın görünür örneklerinden biri GüvenCheck. Karaaslan Labs büyüdükçe bu alan gerçek ürünler, araştırmalar ve açık çalışmalarla genişleyecek.",
    ],
  },
  en: {
    code: "07 / KARAASLAN LABS",
    title: "Why does Karaaslan Labs exist?",
    lead:
      "To focus on real problems and build products, systems, and new technology ventures around them.",
    body: [
      "We are not tied to one industry, but we also do not enter a field simply because the technology is interesting. We look for a real need and a credible value signal first.",
      "Once the problem is validated, we build the technology, system, and working model it actually needs. The goal is reliable outcomes, not unnecessary complexity.",
      "GüvenCheck is one visible example of that approach today. As Karaaslan Labs grows, this surface will expand with real products, research, and public work.",
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
