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

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">İçeriğe geç</a>
      <ScrollProgress />
      <Navigation />
      <main id="main">
        <Hero />
        <CapabilitySystem />
        <OperatingModel />
        <TechnologySystem />
        <GuvenCheckStage />
        <Principles />
        <CompanyManifesto />
        <Contact />
      </main>
    </>
  );
}
