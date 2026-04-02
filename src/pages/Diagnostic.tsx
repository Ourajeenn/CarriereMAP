import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    FileText,
    ShieldCheck,
    Zap,
    Building,
    Users,
    Target,
    Banknote,
    Clock,
    Briefcase,
    History
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const steps = [
    { id: "type", title: "Type d'entreprise", icon: Building, options: ["TPE (< 10)", "PME (11-49)", "ETI (50+)", "Auto-entrepreneur"] },
    { id: "effectif", title: "Effectif exact", icon: Users, options: ["1-5", "6-20", "21-50", "51-250", "250+"] },
    { id: "besoin", title: "Besoin principal", icon: Target, options: ["Tech / Digital", "Langues", "Management", "Sécurité / BTP", "Soft Skills"] },
    { id: "budget", title: "Budget estimé", icon: Banknote, options: ["< 2 000€", "2 000€ - 10 000€", "10 000€ - 50 000€", "> 50 000€"] },
    { id: "urgence", title: "Urgence du projet", icon: Clock, options: ["< 3 mois", "3 - 6 mois", "> 6 mois"] },
    { id: "idcc", title: "Secteur IDCC", icon: Briefcase, options: ["Industrie", "BTP", "Assurances", "Commerce", "Agriculture"] },
    { id: "history", title: "Historique", icon: History, options: ["Première demande", "Déjà financé (2025)", "Litige en cours", "Contrat alternance"] }
];

const Diagnostic = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [showResults, setShowResults] = useState(false);
    const { toast } = useToast();

    const handleSelect = (option: string) => {
        setAnswers({ ...answers, [steps[currentStep].id]: option });
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setShowResults(true);
            toast({
                title: "Diagnostic terminé!",
                description: "Votre rapport personnalisé est prêt.",
            });
        }
    };

    const progress = ((currentStep + 1) / steps.length) * 100;

    if (showResults) {
        return (
            <div className="min-h-screen bg-white">
                <Navigation />
                <section className="pt-32 pb-24 container mx-auto px-4 max-w-4xl">
                    <Card className="p-8 md:p-12 border-none shadow-2xl bg-white border-t-8 border-primary relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <FileText className="w-40 h-40" />
                        </div>

                        <div className="text-center mb-12 space-y-4">
                            <Badge className="bg-green-100 text-green-700 mb-4 px-4 py-1 uppercase font-black text-[10px]">Rapport 100% Finalisé</Badge>
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight uppercase">
                                Diagnostic <span className="text-primary italic">CarriereMAP</span>
                            </h1>
                            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Rapport #2026-0042 • {new Date().toLocaleDateString('fr-FR')}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold border-b pb-2">Récapitulatif Profil</h3>
                                <div className="space-y-3">
                                    {Object.entries(answers).map(([key, val]) => (
                                        <div key={key} className="flex justify-between text-sm">
                                            <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">{key}</span>
                                            <span className="font-bold text-gray-900">{val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-blue-50/50 rounded-2xl p-6 space-y-4">
                                <h3 className="font-bold text-primary flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5" /> Analyse des droits
                                </h3>
                                <div className="p-4 bg-white rounded-xl shadow-sm border border-blue-100">
                                    <p className="text-xs text-gray-400 font-bold uppercase mb-2">Estimation Financement</p>
                                    <p className="text-3xl font-black text-gray-900 italic">4 200€ - 12 500€*</p>
                                    <p className="text-[10px] text-gray-400 mt-2">*Basé sur les barèmes {answers.idcc} 2026</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h3 className="text-xl font-bold">Prochaines Étapes Recommandées</h3>
                            <div className="grid gap-4">
                                {[
                                    { title: "Préparer le RIB & Kbis", icon: CheckCircle2 },
                                    { title: "Contacter l'OPCO " + answers.idcc, icon: CheckCircle2 },
                                    { title: "Valider le devis formation", icon: CheckCircle2 }
                                ].map((step, idx) => (
                                    <div key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                                        <step.icon className="w-6 h-6 text-green-500" />
                                        <span className="font-bold text-gray-900">{step.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t flex flex-col md:flex-row gap-4">
                            <Button variant="energy" className="flex-1 h-16 rounded-full font-black uppercase tracking-widest shadow-xl shadow-energy/20">
                                Télécharger mon rapport complet
                            </Button>
                            <Button variant="outline" className="flex-1 h-16 rounded-full font-black uppercase tracking-widest border-gray-200">
                                Parler à un expert (Gratuit)
                            </Button>
                        </div>
                    </Card>
                </section>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-blue-50/10">
            <Navigation />

            <section className="pt-32 pb-24 container mx-auto px-4 max-w-2xl">
                <div className="mb-12 text-center space-y-4">
                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 uppercase">Diagnostic <span className="text-primary italic">Financement</span></h1>
                    <p className="text-gray-500 font-medium">Déterminez vos éligibilités en quelques clics.</p>
                </div>

                <div className="space-y-8">
                    {/* Progress Bar */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                            <span>Étape {currentStep + 1} / {steps.length}</span>
                            <span>{Math.round(progress)}%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-primary transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
                        </div>
                    </div>

                    <Card className="p-8 border-none shadow-xl bg-white rounded-3xl animate-slide-in">
                        <div className="flex flex-col items-center text-center space-y-8">
                            <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center">
                                {(() => {
                                    const Icon = steps[currentStep].icon;
                                    return <Icon className="w-10 h-10 text-primary" />;
                                })()}
                            </div>
                            <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900">
                                {steps[currentStep].title}
                            </h2>
                            <div className="grid w-full gap-4">
                                {steps[currentStep].options.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSelect(option)}
                                        className="w-full p-5 rounded-2xl border-2 border-gray-100 hover:border-primary hover:bg-blue-50/50 transition-all text-left font-bold text-gray-700 flex items-center justify-between group"
                                    >
                                        {option}
                                        <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 flex justify-between">
                            <Button
                                variant="ghost"
                                disabled={currentStep === 0}
                                onClick={() => setCurrentStep(currentStep - 1)}
                                className="text-gray-400 font-bold uppercase tracking-widest text-xs"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" /> Retour
                            </Button>
                        </div>
                    </Card>

                    <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-bold uppercase tracking-wider">
                        <ShieldCheck className="w-4 h-4" /> Analyse Sécurisée & Anonyme
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
        {children}
    </span>
);

export default Diagnostic;
