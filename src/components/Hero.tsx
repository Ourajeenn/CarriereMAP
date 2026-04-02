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
    <section className="relative pt-32 pb-40 lg:pt-48 lg:pb-64 bg-blue-50/50 text-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/50 backdrop-blur-sm rounded-full border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              ✓ Gratuit • Sans engagement
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[42px] font-black mb-6 leading-tight tracking-tight text-gray-900 uppercase">
              Identifier votre <span className="text-primary italic">OPCO</span> et financez <br className="hidden md:block" /> vos formations professionnelles
            </h1>

            <p className="text-lg md:text-[18px] text-gray-500 mb-10 max-w-xl leading-relaxed">
              L'aiguillage intelligent qui transforme votre secteur d'activité en solution de financement concrète. Simple, rapide et 100% conforme.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 rounded-full text-lg shadow-xl shadow-primary/20 transition-all hover:scale-105"
              >
                Identifier mon OPCO
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById("comment-ca-marche")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-white/50 hover:bg-white text-gray-700 font-bold h-14 px-8 rounded-full text-lg border-gray-200"
              >
                En savoir plus
              </Button>
            </div>

            <div className="flex flex-col space-y-4 max-w-xl mt-12 bg-white/40 p-6 rounded-3xl backdrop-blur-sm border border-white/60 shadow-inner">
              <div className="flex flex-col gap-2">
                <div className="bg-white rounded-xl px-4 py-4 text-gray-900 flex items-center shadow-lg border border-blue-100 h-16 w-full group focus-within:ring-2 ring-primary/20 transition-all">
                  <input
                    type="text"
                    value={domaine}
                    onChange={(e) => setDomaine(e.target.value)}
                    placeholder="Votre métier ou domaine..."
                    className="w-full bg-transparent border-none outline-none focus:ring-0 text-lg placeholder:text-gray-400 font-bold"
                  />
                </div>
                <div className="flex gap-2 w-full">
                  <div className="bg-white rounded-xl px-4 py-4 text-gray-900 flex items-center shadow-lg border border-blue-100 h-16 relative flex-1 group focus-within:ring-2 ring-primary/20 transition-all">
                    <input
                      type="text"
                      placeholder="Secteur ou OPCO..."
                      value={matchedSector || ""}
                      readOnly
                      className="w-full bg-transparent border-none outline-none focus:ring-0 text-lg placeholder:text-gray-400 font-bold text-ellipsis overflow-hidden text-primary"
                    />
                    {!matchedSector && domaine && (
                      <span className="absolute right-4 text-[10px] font-black uppercase text-gray-300 animate-pulse">Analyse...</span>
                    )}
                  </div>
                  <Button
                    onClick={() => {
                      const contactSection = document.getElementById("contact");
                      if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-16 h-16 bg-gray-900 hover:bg-gray-800 rounded-xl flex items-center justify-center shrink-0 shadow-lg transition-transform hover:scale-105"
                  >
                    <Search className="w-8 h-8 text-white" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="particulier"
                  defaultChecked
                  className="w-5 h-5 rounded-md border-2 border-primary/40 bg-white text-primary focus:ring-primary focus:ring-offset-0 focus:ring-2 appearance-none checked:bg-primary checked:border-primary relative after:content-['✓'] after:absolute after:text-white after:text-xs after:font-bold after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 checked:after:opacity-100 transition-colors cursor-pointer"
                />
                <label htmlFor="particulier" className="text-sm font-bold cursor-pointer text-gray-600 uppercase tracking-wide">
                  Accès Financement CPF / OPCO
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
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group">
                      <img src={carousel1} alt="Professionnels" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                        <p className="text-white font-bold text-lg leading-tight">Optimisez votre budget formation avec les OPCO</p>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group">
                      <img src={carousel2} alt="Mentorat" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                        <p className="text-white font-bold text-lg leading-tight">Transformez votre expérience en diplôme d'État (VAE)</p>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group">
                      <img src={carousel3} alt="Réussite" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                        <p className="text-white font-bold text-lg leading-tight">Un accompagnement sur-mesure pour votre réussite</p>
                      </div>
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
