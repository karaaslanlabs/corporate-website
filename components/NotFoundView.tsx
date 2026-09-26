import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/locale";

const copy = {
  tr: {
    code: "404 / KARAASLAN LABS",
    title: "Bu sayfa bulunamadı.",
    link: "Ana sayfaya dön",
    href: "/",
  },
  en: {
    code: "404 / KARAASLAN LABS",
    title: "This page could not be found.",
    link: "Return home",
    href: "/en/",
  },
} as const;

export function NotFoundView({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <main className="not-found">
      <div className="not-found__mark">
        <Image src="/assets/brand/karaaslan-labs-mark.svg" alt="" width={128} height={128} />
      </div>
      <p>{t.code}</p>
      <h1>{t.title}</h1>
      <Link href={t.href}>{t.link} ↗</Link>
    </main>
  );
}
