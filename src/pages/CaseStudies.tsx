import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Quote,
    TrendingUp,
    Clock,
    CircleDollarSign,
    ArrowRight,
    Play
} from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
    {
        logo: "🏗️ CONST-PRO",
        title: "Sécurisation de 85k€ pour un plan de formation BTP",
        problem: "Problème de trésorerie pour former 25 techniciens sur de nouvelles normes RGE.",
        solution: "Aiguillage vers Constructys + Montage du dossier prioritaire.",
        result: "87.5% de prise en charge validée en 4 semaines.",
        roi: "+15% de CA sur les chantiers énergie",
        color: "border-orange-500"
    },
    {
        logo: "💻 TECH-GLOBAL",
        title: "Upskilling massif de 50 développeurs en IA",
        problem: "Besoin de reconversion interne rapide pour éviter les licenciements économiques.",
        solution: "Action Collective Atlas + Financement FNE Formation.",
        result: "100% de financement sécurisé (0€ à charge entreprise).",
        roi: "Délai de mise sur le marché réduit de 3 mois",
        color: "border-blue-500"
    },
    {
        logo: "🏥 CLINIC-SUD",
        title: "Accompagnement VAE pour 12 aides-soignantes",
        problem: "Turnover élevé et manque de reconnaissance des compétences terrain.",
        solution: "Mobilisation de l'OPCO Santé sur un parcours VAE collectif.",
        result: "12 diplômes obtenus, turnover réduit de 40%.",
        roi: "Économie de recrutement estimée à 50k€",
        color: "border-green-500"
    }
];

const CaseStudies = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            <section className="pt-32 pb-20 bg-gray-900 text-white">
                <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase">Résultats <span className="text-primary">Réels</span></h1>
                    <p className="text-xl text-gray-400 font-medium">Découvrez comment nous aidons les PME à transformer leurs contraintes de formation en opportunités de croissance.</p>
                </div>
            </section>

            <section className="py-24 container mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, idx) => (
                        <Card key={idx} className={`p-8 border-t-8 ${study.color} shadow-2xl bg-white rounded-3xl flex flex-col justify-between h-full`}>
                            <div className="space-y-6">
                                <div className="text-2xl font-black text-gray-300 mb-4">{study.logo}</div>
                                <h3 className="text-xl font-bold text-gray-900 leading-tight">{study.title}</h3>

                                <div className="space-y-4">
                                    <div className="p-4 bg-gray-50 rounded-xl">
                                        <p className="text-[10px] font-black uppercase text-gray-400 mb-1">Le Défi</p>
                                        <p className="text-sm text-gray-600 font-medium">{study.problem}</p>
                                    </div>
                                    <div className="p-4 bg-blue-50 rounded-xl">
                                        <p className="text-[10px] font-black uppercase text-primary mb-1">Notre Action</p>
                                        <p className="text-sm text-gray-600 font-medium">{study.solution}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 mt-8 border-t border-gray-100 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-green-500" />
                                    <span className="font-black text-gray-900 italic uppercase tracking-tighter">{study.roi}</span>
                                </div>
                                <Button size="icon" variant="ghost" className="rounded-full group/btn">
                                    <Play className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* CTA Final */}
            <section className="pb-24 container mx-auto px-4">
                <Card className="bg-primary p-12 rounded-3xl text-center text-white relative overflow-hidden">
                    <div className="relative z-10 space-y-6">
                        <h2 className="text-3xl md:text-5xl font-black uppercase">Votre réussite est la suivante</h2>
                        <p className="text-white/80 font-medium max-w-2xl mx-auto">Rejoignez les 450+ entreprises qui nous font confiance pour leur stratégie de financement.</p>
                        <Button variant="outline" className="bg-white text-primary hover:bg-white/90 rounded-full h-14 px-10 font-black uppercase tracking-widest border-none shadow-xl" asChild>
                            <Link to="/diagnostic">Lancer mon diagnostic</Link>
                        </Button>
                    </div>
                    {/* Decorative abstract shape */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl" />
                </Card>
            </section>

            <Footer />
        </div>
    );
};

export default CaseStudies;
