import type { Locale } from "@/lib/locale";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CapabilitySystem } from "@/components/CapabilitySystem";
import { OperatingModel } from "@/components/OperatingModel";
import { TechnologySystem } from "@/components/TechnologySystem";
import { GuvenCheckStage } from "@/components/GuvenCheckStage";
import { Principles } from "@/components/Principles";
import { CompanyManifesto } from "@/components/CompanyManifesto";
import { Contact } from "@/components/Contact";
import { ScrollProgress } from "@/components/ScrollProgress";

export function HomeExperience({ locale }: { locale: Locale }) {
  return (
    <>
      <a className="skip-link" href="#main">
        {locale === "tr" ? "İçeriğe geç" : "Skip to content"}
      </a>
      <ScrollProgress />
      <Navigation locale={locale} />
      <main id="main">
        <Hero locale={locale} />
        <CapabilitySystem locale={locale} />
        <OperatingModel locale={locale} />
        <TechnologySystem locale={locale} />
        <GuvenCheckStage locale={locale} />
        <Principles locale={locale} />
        <CompanyManifesto locale={locale} />
        <Contact locale={locale} />
      </main>
    </>
  );
}
