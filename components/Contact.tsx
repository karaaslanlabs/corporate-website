import Image from "next/image";

export function Contact() {
  return (
    <>
      <section className="contact-next" id="iletisim" aria-labelledby="contact-next-title">
        <div className="section-shell contact-next__grid">
          <div>
            <p className="section-code section-code--light">07 / İLETİŞİM</p>
            <h2 id="contact-next-title">Ciddi bir problem, teknoloji veya iş birliği üzerinde konuşabiliriz.</h2>
          </div>

          <div className="contact-next__side">
            <p>Ürünler, yeni teknoloji girişimleri, iş birlikleri ve Karaaslan Labs ile ilgili kurumsal iletişim için:</p>
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
        <span>Ürünler · Sistemler · Yeni Teknoloji Girişimleri</span>
        <span>© 2026 Karaaslan Labs</span>
      </footer>
    </>
  );
}
