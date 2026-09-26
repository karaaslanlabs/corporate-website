import Image from "next/image";
import type { Locale } from "@/lib/locale";

const copy = {
  tr: {
    code: "07 / İLETİŞİM",
    title: "Ciddi bir problem, yeni bir teknoloji girişimi veya iş birliği üzerine konuşabiliriz.",
    intro: "Ürünler, yeni teknoloji girişimleri, iş birlikleri ve Karaaslan Labs ile ilgili kurumsal iletişim için:",
    footer: "Ürünler · Sistemler · Yeni Teknoloji Girişimleri",
  },
  en: {
    code: "07 / CONTACT",
    title: "We can talk about a serious problem, a new technology venture, or a meaningful collaboration.",
    intro: "For products, new technology ventures, collaborations, and corporate communication with Karaaslan Labs:",
    footer: "Products · Systems · New Technology Ventures",
  },
} as const;

export function Contact({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <>
      <section className="contact-next" id="iletisim" aria-labelledby="contact-next-title">
        <div className="section-shell contact-next__grid">
          <div>
            <p className="section-code section-code--light">{t.code}</p>
            <h2 id="contact-next-title">{t.title}</h2>
          </div>

          <div className="contact-next__side">
            <p>{t.intro}</p>
            <a className="contact-next__mail" href="mailto:contact@karaaslanlabs.com">
              <span>contact@karaaslanlabs.com</span><b aria-hidden="true">↗</b>
            </a>
            <div className="contact-next__links">
              <a href="https://github.com/karaaslanlabs" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              <a href="https://guvencheck.vercel.app/" target="_blank" rel="noopener noreferrer">GüvenCheck ↗</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-next">
        <Image src="/assets/brand/karaaslan-labs-lockup-reversed.svg" alt="Karaaslan Labs" width={690} height={180} />
        <span>{t.footer}</span>
        <span>© 2026 Karaaslan Labs</span>
      </footer>
    </>
  );
}
