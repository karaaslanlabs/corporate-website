import Image from "next/image";

const modules = [
  ["01", "Yazılım Mühendisliği"],
  ["02", "Yapay Zekâ Destekli Araştırma"],
  ["03", "Otomasyon"],
  ["04", "Orkestrasyon"],
  ["05", "Kanıt Sistemleri"],
  ["06", "Yeniden Kullanılabilir Kabiliyetler"],
];

export function TechnologySystem() {
  return (
    <section className="technology-system" id="teknoloji" aria-labelledby="technology-title">
      <div className="technology-system__visual" aria-hidden="true">
        <div className="technology-system__radar">
          <span className="radar-ring radar-ring--one" />
          <span className="radar-ring radar-ring--two" />
          <span className="radar-ring radar-ring--three" />
          <span className="radar-sweep" />
          <div className="technology-system__core">
            <Image src="/assets/brand/karaaslan-labs-mark.svg" alt="" width={128} height={128} />
          </div>
          {modules.map(([number, label], index) => (
            <span key={number} className={`technology-system__module technology-system__module--${index + 1}`}>
              <small>{number}</small>{label}
            </span>
          ))}
        </div>
      </div>

      <div className="technology-system__copy">
        <p className="section-code section-code--light">03 / TEKNOLOJİ</p>
        <h2 id="technology-title">Yapay zekâ çalışma biçimimizin doğal bir parçası; <span>ama bizi tek başına tanımlamıyor.</span></h2>
        <p>Yapay zekâ, otomasyon ve yazılım mühendisliğini araştırmadan geliştirmeye, analizden operasyona kadar çalışma biçimimizin doğal bir parçası olarak kullanıyoruz.</p>
        <p>Otomasyonu sırf mümkün olduğu için değil, güvenilirliği ve sonucu gerçekten iyileştirdiği yerde kullanıyoruz. İnsan kararı, kontrolü ve görünürlüğü gereken noktalarda koruyoruz.</p>
      </div>
    </section>
  );
}
