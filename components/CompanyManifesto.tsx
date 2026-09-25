import Image from "next/image";

export function CompanyManifesto() {
  return (
    <section className="company-manifesto" id="sirket" aria-labelledby="company-manifesto-title">
      <div className="company-manifesto__mark" aria-hidden="true">
        <span />
        <Image src="/assets/brand/karaaslan-labs-mark.svg" alt="" width={128} height={128} />
      </div>

      <div className="company-manifesto__content">
        <p className="section-code section-code--light">06 / KARAASLAN LABS</p>
        <h2 id="company-manifesto-title">Tek bir ürün, sektör veya teknoloji trendiyle <span>tanımlanmıyoruz.</span></h2>

        <div className="company-manifesto__body">
          <p>Karaaslan Labs, gerçek problemleri teknolojiyle çözen; ürünler, sistemler ve yeni girişimler geliştiren bir teknoloji şirketidir.</p>
          <p>Bugün yazılım, yapay zekâ, otomasyon, araştırma ve ürün geliştirme kabiliyetlerini birlikte kullanıyoruz. Yarın güçlü bir problem başka bir teknoloji veya sektördeyse, alanı değil prensipleri sabit tutarız.</p>
          <p>Amacımız daha fazla teknoloji kullanmak değil; daha doğru problemleri seçmek, daha güvenilir çözümler geliştirmek ve her çalışma döngüsünde şirketin üretme kapasitesini artırmaktır.</p>
        </div>
      </div>
    </section>
  );
}
