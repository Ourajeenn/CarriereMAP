import { Briefcase, Zap, Star, Wrench, Heart, Scissors, Sparkles, Smile, Droplets, ChevronRight, Rocket, Truck } from "lucide-react";
import { Button } from "./ui/button";

const categories = [
    { name: "Gestion d entreprise", icon: Briefcase },
    { name: "Electricien", icon: Zap },
    { name: "Caces", icon: Truck },
    { name: "Chef d entreprise", icon: Star },
    { name: "Estheticienne", icon: Heart },
    { name: "Dermopigmentation", icon: Sparkles },
    { name: "Cosmetique", icon: Droplets },
    { name: "Esthetique", icon: Scissors },
    { name: "Blanchiment dentaire", icon: Smile },
    { name: "Epilation", icon: Heart },
];

const ProfessionalFormation = () => {
    return (
        <section className="bg-white text-gray-900 py-20 px-4 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-bl-full rounded-tr-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/50 rounded-tr-full rounded-bl-none translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto max-w-7xl relative z-10 py-8 lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">La formation professionnelle</h2>
                        <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base text-justify">
                            <p>
                                La formation professionnelle permet aux adultes de se former à un métier et de développer de nouvelles compétences tout au long de leur carrière. Quel que soit votre âge, votre niveau d'études ou votre situation, vous pouvez accéder à la formation continue pour atteindre vos objectifs.
                            </p>
                            <p>
                                Selon la FFP (Fédération de la Formation Professionnelle), plus de 17 millions de Français suivent chaque année des formations certifiantes ou diplômantes pour concrétiser un projet professionnel. Il peut s'agir pour eux d'évoluer dans leur poste et obtenir une meilleure rémunération, concrétiser un projet de reconversion professionnelle ou encore créer leur entreprise et devenir auto-entrepreneur. La formation initiale n'est donc plus l'unique moyen pour favoriser son insertion ou évolution professionnelle ! Aujourd'hui, chaque actif (salarié, intérimaire, demandeur d'emploi) peut utiliser son Compte Personnel de Formation (CPF) pour financer totalement ou partiellement la formation de son choix pourvue qu'elle soit inscrite au RNCP (Répertoire National des Certifications Professionnelles).
                            </p>
                        </div>
                        <Button className="mt-8 bg-primary text-white hover:bg-primary/90 rounded-full px-8 h-12 text-base font-semibold transition-all hover:scale-105 shadow-md">
                            Voir toutes les formations professionnelles
                        </Button>
                    </div>

                    {/* Right Column */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Je veux me former</h2>
                        <div className="flex flex-wrap gap-3 mb-8">
                            {categories.map((cat, idx) => (
                                <button key={idx} className="flex items-center gap-3 bg-blue-50 hover:bg-blue-100 transition-colors rounded-full pr-5 pl-2 py-2 border border-blue-100 shadow-sm group">
                                    <div className="w-8 h-8 rounded-full border border-blue-200 flex items-center justify-center bg-white group-hover:bg-primary group-hover:border-primary transition-colors">
                                        <cat.icon className="w-4 h-4 text-primary group-hover:text-white" strokeWidth={2} />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700 group-hover:text-primary">{cat.name}</span>
                                </button>
                            ))}
                        </div>
                        <button className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors border border-primary hover:border-primary/80 rounded px-4 py-2 text-sm uppercase tracking-wide">
                            <ChevronRight className="w-4 h-4" />
                            En voir plus
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="absolute bottom-6 right-6 bg-gray-900/10 hover:bg-gray-900/20 backdrop-blur text-gray-700 rounded px-4 py-2 text-xs font-bold flex items-center gap-2 uppercase tracking-wider transition-colors z-20"
            >
                Haut de page
                <Rocket className="w-4 h-4" />
            </button>
        </section>
    );
};

export default ProfessionalFormation;
