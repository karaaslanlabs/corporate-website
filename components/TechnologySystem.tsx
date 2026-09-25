import Image from "next/image";
import type { Locale } from "@/lib/locale";

const copy = {
  tr: {
    code: "03 / TEKNOLOJİ",
    titleLead: "Yapay zekâ çalışma biçimimizin doğal bir parçası;",
    titleStrong: "ama bizi tek başına tanımlamıyor.",
    body1:
      "Yapay zekâ, otomasyon ve yazılım mühendisliğini araştırmadan geliştirmeye, analizden operasyona kadar çalışma biçimimizin doğal bir parçası olarak kullanıyoruz.",
    body2:
      "Otomasyonu sırf mümkün olduğu için değil, güvenilirliği ve sonucu gerçekten iyileştirdiği yerde kullanıyoruz. İnsan kararı, kontrolü ve görünürlüğü gereken noktalarda koruyoruz.",
    modules: [
      ["01", "Yazılım Mühendisliği"],
      ["02", "Yapay Zekâ Destekli Araştırma"],
      ["03", "Otomasyon"],
      ["04", "Orkestrasyon"],
      ["05", "Kanıt Sistemleri"],
      ["06", "Yeniden Kullanılabilir Kabiliyetler"],
    ],
  },
  en: {
    code: "03 / TECHNOLOGY",
    titleLead: "AI is a natural part of how we work;",
    titleStrong: "but it does not define us on its own.",
    body1:
      "We use AI, automation, and software engineering throughout our work—from research and development to analysis and operations.",
    body2:
      "We use automation where it genuinely improves reliability and outcomes, not simply because it is possible. Human judgment, control, and visibility remain where they matter.",
    modules: [
      ["01", "Software Engineering"],
      ["02", "AI-Assisted Research"],
      ["03", "Automation"],
      ["04", "Orchestration"],
      ["05", "Evidence Systems"],
      ["06", "Reusable Capabilities"],
    ],
  },
} as const;

export function TechnologySystem({ locale }: { locale: Locale }) {
  const t = copy[locale];

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
          {t.modules.map(([number, label], index) => (
            <span
              key={number}
              className={`technology-system__module technology-system__module--${index + 1}`}
            >
              <small>{number}</small>
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="technology-system__copy">
        <p className="section-code section-code--light">{t.code}</p>
        <h2 id="technology-title">
          {t.titleLead} <span>{t.titleStrong}</span>
        </h2>
        <p>{t.body1}</p>
        <p>{t.body2}</p>
      </div>
    </section>
  );
}
