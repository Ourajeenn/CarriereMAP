import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import Autoplay from "embla-carousel-autoplay";

const domainToSectorMap: Record<string, string> = {
  "informatique": "Numérique, Ingénierie & Conseil (Atlas)",
  "developpeur": "Numérique, Ingénierie & Conseil (Atlas)",
  "tech": "Numérique, Ingénierie & Conseil (Atlas)",
  "sante": "Santé, Médico-social (OPCO Santé)",
  "infirmier": "Santé, Médico-social (OPCO Santé)",
  "commerce": "Commerce, Distribution (Opcommerce)",
  "vente": "Commerce, Distribution (Opcommerce)",
  "marketing": "Numérique, Ingénierie & Conseil (Atlas)",
  "construction": "Construction & BTP (Constructys)",
  "batiment": "Construction & BTP (Constructys)",
  "industrie": "Industrie & Métallurgie (OPCO 2i)",
  "agriculture": "Agricole & Alimentaire (OCAPIAT)",
  "alimentation": "Agricole & Alimentaire (OCAPIAT)",
  "boulangerie": "Agricole & Alimentaire (OCAPIAT)",
  "restauration": "Hôtellerie, Restauration (AKTO)",
  "hotel": "Hôtellerie, Restauration (AKTO)",
  "sport": "Sports & Loisirs (AFDAS)",
  "culture": "Culture & Médias (AFDAS)",
};

const getSectorFromDomain = (domain: string) => {
  if (!domain) return null;
  const normalized = domain.toLowerCase().trim();
  for (const [key, value] of Object.entries(domainToSectorMap)) {
    if (normalized.includes(key)) return value;
  }
  return null;
};

const Hero = () => {
  const [domaine, setDomaine] = useState("");
  const matchedSector = useMemo(() => getSectorFromDomain(domaine), [domaine]);

  return (
    <section className="relative pt-32 pb-40 lg:pt-48 lg:pb-64 bg-[#3B24D9] text-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
              <span className="text-[#00E5A3]">De votre domaine à votre OPCO,</span>
              <br />
              et forcément le bon accompagnement.
            </h1>

            <div className="flex flex-col space-y-4 max-w-xl mt-12">
              <div className="flex flex-col gap-2">
                <div className="bg-white rounded-lg px-4 py-4 text-gray-900 flex items-center shadow-lg h-16 w-full">
                  <input
                    type="text"
                    value={domaine}
                    onChange={(e) => setDomaine(e.target.value)}
                    placeholder="Diplôme, métier, domaine..."
                    className="w-full bg-transparent border-none outline-none focus:ring-0 text-lg placeholder:text-gray-500 font-medium"
                  />
                </div>
                <div className="flex gap-2 w-full">
                  <div className="bg-white rounded-lg px-4 py-4 text-gray-900 flex items-center shadow-lg h-16 relative flex-1">
                    <input
                      type="text"
                      placeholder="Secteur ou OPCO identifié ?"
                      value={matchedSector || ""}
                      readOnly
                      className="w-full bg-transparent border-none outline-none focus:ring-0 text-lg placeholder:text-gray-500 font-medium text-ellipsis overflow-hidden"
                    />
                    {!matchedSector && domaine && (
                      <span className="absolute right-4 text-sm text-gray-400">Recherche...</span>
                    )}
                  </div>
                  <Button
                    onClick={() => {
                      const contactSection = document.getElementById("contact");
                      if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-16 h-16 bg-[#00E5A3] hover:bg-[#00E5A3]/90 rounded-lg flex items-center justify-center shrink-0 shadow-lg transition-transform hover:scale-105"
                  >
                    <Search className="w-8 h-8 text-[#3B24D9]" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="particulier"
                  defaultChecked
                  className="w-5 h-5 rounded-[4px] border-2 border-white/40 bg-transparent text-[#00E5A3] focus:ring-[#00E5A3] focus:ring-offset-0 focus:ring-2 appearance-none checked:bg-[#00E5A3] checked:border-[#00E5A3] relative after:content-['✓'] after:absolute after:text-[#3B24D9] after:text-xs after:font-bold after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 checked:after:opacity-100 transition-colors"
                />
                <label htmlFor="particulier" className="text-base font-medium cursor-pointer">
                  Finançable CPF / OPCO
                </label>
              </div>
            </div>
          </div>

          <div className="relative animate-float hidden lg:block">
            <div className="glass rounded-3xl p-6 bg-white/10 backdrop-blur-md shadow-2xl border border-white/10">
              <Carousel
                className="w-full"
                opts={{ loop: true }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                    stopOnInteraction: false,
                  }),
                ]}
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img src={carousel1} alt="Professionnels" className="w-full h-full object-cover" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img src={carousel2} alt="Mentorat" className="w-full h-full object-cover" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img src={carousel3} alt="Réussite" className="w-full h-full object-cover" />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-white/20 hover:bg-white/40 border-none text-white backdrop-blur-md" />
                <CarouselNext className="right-2 bg-white/20 hover:bg-white/40 border-none text-white backdrop-blur-md" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave at bottom */}
      <div className="absolute bottom-[-1px] left-0 right-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[160px] lg:h-[220px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.55,30.2,109.81,59.2,166.4,72.4,218.44,84.54,272.5,65.34,321.39,56.44Z"
            className="fill-background"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
