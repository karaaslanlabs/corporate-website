import type { Locale } from "@/lib/locale";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { GuvenCheckStage } from "@/components/GuvenCheckStage";
import { CapabilitySystem } from "@/components/CapabilitySystem";
import { OperatingModel } from "@/components/OperatingModel";
import { WorkEvidence } from "@/components/WorkEvidence";
import { TechnologySystem } from "@/components/TechnologySystem";
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
        <GuvenCheckStage locale={locale} />
        <CapabilitySystem locale={locale} />
        <OperatingModel locale={locale} />
        <WorkEvidence locale={locale} />
        <TechnologySystem locale={locale} />
        <Principles locale={locale} />
        <CompanyManifesto locale={locale} />
        <Contact locale={locale} />
      </main>
    </>
  );
}
