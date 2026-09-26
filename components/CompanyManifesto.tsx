import Image from "next/image";
import type { Locale } from "@/lib/locale";

const copy = {
  tr: {
    code: "06 / KARAASLAN LABS",
    titleLead: "Tek bir ürün, sektör veya teknoloji trendiyle",
    titleStrong: "tanımlanmıyoruz.",
    body: [
      "Karaaslan Labs, gerçek problemleri teknolojiyle çözen; ürünler, sistemler ve yeni girişimler geliştiren bir teknoloji şirketidir.",
      "Bugün yazılım, yapay zekâ, otomasyon, araştırma ve ürün geliştirme kabiliyetlerini birlikte kullanıyoruz. Yarın anlamlı bir problem başka bir teknoloji ya da sektörde karşımıza çıkarsa, alanı değil prensiplerimizi sabit tutarız.",
      "Amacımız daha fazla teknoloji kullanmak değil; daha doğru problemleri seçmek, daha güvenilir çözümler geliştirmek ve her çalışma döngüsünde üretme kapasitemizi artırmaktır.",
    ],
  },
  en: {
    code: "06 / KARAASLAN LABS",
    titleLead: "We are not defined by a single product, industry,",
    titleStrong: "or technology trend.",
    body: [
      "Karaaslan Labs is a technology company that solves real problems through technology and builds products, systems, and new ventures.",
      "Today we combine software, AI, automation, research, and product development capabilities. If a meaningful problem appears in another technology or industry tomorrow, we keep our principles fixed—not the category.",
      "Our goal is not to use more technology. It is to choose better problems, build more reliable solutions, and increase the company’s ability to create with every working cycle.",
    ],
  },
} as const;

export function CompanyManifesto({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section className="company-manifesto" id="sirket" aria-labelledby="company-manifesto-title">
      <div className="company-manifesto__mark" aria-hidden="true">
        <span />
        <Image src="/assets/brand/karaaslan-labs-mark.svg" alt="" width={128} height={128} />
      </div>

      <div className="company-manifesto__content">
        <p className="section-code section-code--light">{t.code}</p>
        <h2 id="company-manifesto-title">
          {t.titleLead} <span>{t.titleStrong}</span>
        </h2>

        <div className="company-manifesto__body">
          {t.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}
