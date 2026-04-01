import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import ProfessionalFormation from "@/components/ProfessionalFormation";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ServicesGrid />
      <Features />
      <Stats />
      <ProfessionalFormation />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
