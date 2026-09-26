import Image from "next/image";
import type { Locale } from "@/lib/locale";

const copy = {
  tr: {
    code: "07 / İLETİŞİM",
    title: "Karaaslan Labs ile iletişim",
    intro: "Kurumsal iletişim ve iş birliği talepleri için:",
    footer: "Ürünler · Sistemler · Teknoloji Girişimleri",
  },
  en: {
    code: "07 / CONTACT",
    title: "Contact Karaaslan Labs",
    intro: "For corporate enquiries and collaboration requests:",
    footer: "Products · Systems · Technology Ventures",
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
              <a href="https://guvencheck.vercel.app/" target="_blank" rel="noopener noreferrer">GüvenCheck ↗</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-next">
        <Image
          src="/assets/brand/karaaslan-labs-lockup-reversed.svg"
          alt="Karaaslan Labs"
          width={690}
          height={180}
        />
        <span>{t.footer}</span>
        <span>© 2026 Karaaslan Labs</span>
      </footer>
    </>
  );
}
