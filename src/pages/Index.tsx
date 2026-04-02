import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import ServicesGrid from "@/components/ServicesGrid";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import ProfessionalFormation from "@/components/ProfessionalFormation";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Advantages />
      <ServicesGrid />
      <Process />
      <Stats />
      <ProfessionalFormation />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
