import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Building2,
    Users2,
    Briefcase,
    Rocket,
    GraduationCap,
    Building,
    ArrowRight,
    Target
} from "lucide-react";
import { Link } from "react-router-dom";

const segments = [
    {
        icon: Building2,
        title: "TPE (1 - 10 salariés)",
        color: "bg-blue-100",
        sectors: ["Artisanat", "Commerce", "Services"],
        desc: "Optimisez chaque euro de votre budget formation avec un accompagnement ultra-simplifié."
    },
    {
        icon: Users2,
        title: "PME (11 - 50 salariés)",
        color: "bg-teal-100",
        sectors: ["Industrie", "Digital", "Santé"],
        desc: "Structurez votre plan de développement des compétences et activez les leviers OPCO."
    },
    {
        icon: Building,
        title: "ETI (51 - 250 salariés)",
        color: "bg-purple-100",
        sectors: ["Logistique", "Finance", "Ingénierie"],
        desc: "Externalisez la veille sur vos droits de formation et maximisez vos co-financements."
    },
    {
        icon: GraduationCap,
        title: "Formation Continue",
        color: "bg-orange-100",
        sectors: ["Upskilling", "Reconversion", "Certifications"],
        desc: "Validez vos acquis et montez en compétences avec le soutien de votre branche."
    },
    {
        icon: Rocket,
        title: "Créateurs d'entreprise",
        color: "bg-green-100",
        sectors: ["Pré-création", "Lancement", "Management"],
        desc: "Financez les formations essentielles avant ou pendant le lancement de votre projet."
    },
    {
        icon: Briefcase,
        title: "Public & Associations",
        color: "bg-red-100",
        sectors: ["ESMS", "Fédérations", "Écoles"],
        desc: "Règles spéciales et budgets dédiés pour le secteur non-marchand et associatif."
    }
];

const PourQui = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-blue-50/50">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                        <Target className="w-3 h-3" /> Segmentation Précise
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase">
                        Un expert pour chaque <span className="text-primary italic">Structure</span>
                    </h1>
                    <p className="text-lg text-gray-500 leading-relaxed">
                        Le financement de la formation ne suit pas les mêmes règles pour une TPE et une ETI. Nous avons segmenté nos outils pour répondre précisément à vos besoins.
                    </p>
                </div>
            </section>

            {/* Segmentation Cards */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {segments.map((segment, idx) => (
                        <Card key={idx} className="p-8 border-none bg-gray-50/50 hover:bg-white transition-all shadow-sm hover:shadow-2xl group relative overflow-hidden flex flex-col justify-between h-[420px]">
                            <div className="relative z-10">
                                <div className={`w-14 h-14 ${segment.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <segment.icon className="w-7 h-7 text-gray-900" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{segment.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    {segment.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {segment.sectors.map((s, i) => (
                                        <span key={i} className="text-[10px] font-black uppercase tracking-widest bg-white px-2 py-1 rounded border border-gray-100 text-gray-400">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 pt-8">
                                <Button className="w-full justify-between items-center group/btn rounded-xl bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20 transition-all font-black uppercase tracking-widest text-xs h-12 px-6" asChild>
                                    <Link to="/diagnostic">
                                        <span>Consulter le guide</span>
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </div>

                            {/* Decorative background shape */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Card>
                    ))}
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter">"CarriereMAP a permis de sécuriser 45k€ de budget pour notre PME en 48h."</h2>
                        <div className="flex flex-col items-center gap-2">
                            <p className="font-bold uppercase tracking-widest text-primary">Jean-Marc Valois</p>
                            <p className="text-gray-500 text-sm">DRH, Industrie Durable</p>
                        </div>
                        <div className="pt-8 flex justify-center gap-12 grayscale opacity-50">
                            {/* Mock logos */}
                            <div className="text-2xl font-black">LOGOPME</div>
                            <div className="text-2xl font-black">ENTR-SOL</div>
                            <div className="text-2xl font-black">TECH-PRO</div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PourQui;
