import { Sparkles } from "lucide-react";
import LeadRoutingForm from "./LeadRoutingForm";

const CTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="glass rounded-3xl p-8 lg:p-16 text-center space-y-8" id="contact">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-energy" />
            <span className="text-sm font-medium">Transmission vers le bon interlocuteur</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold max-w-3xl mx-auto">
            Prêt à structurer votre <span className="gradient-text">demande OPCO</span> ?
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Précisez si vous êtes une entreprise ou un particulier et saisissez votre domaine. Un spécialiste de votre secteur viendra analyser vos besoins en un rien de temps.
          </p>

          <div className="max-w-xl mx-auto pt-4 text-left">
            <LeadRoutingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
