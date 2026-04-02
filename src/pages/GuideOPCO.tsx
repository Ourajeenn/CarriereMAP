import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    BookOpen,
    CheckCircle2,
    Download,
    HelpCircle,
    Info,
    Calendar,
    Layers,
    ArrowRight
} from "lucide-react";

const opcoList = [
    { name: "Atlas", sector: "Numérique, Ingénierie, Conseil", logo: "AT" },
    { name: "AFDAS", sector: "Culture, Médias, Sport", logo: "AF" },
    { name: "AKTO", sector: "Hôtellerie, Restauration", logo: "AK" },
    { name: "OCAPIAT", sector: "Agriculture, Alimentaire", logo: "OC" },
    { name: "OPCO 2i", sector: "Industrie, Métallurgie", logo: "2i" },
    { name: "Constructys", sector: "Bâtiment, Travaux Publics", logo: "CO" },
    { name: "OPCOMMERCE", sector: "Commerce, Distribution", logo: "OP" },
    { name: "OPCO Santé", sector: "Santé, Médico-social", logo: "SA" },
    { name: "Uniformation", sector: "Cohésion Sociale", logo: "UN" },
    { name: "OPCO Mobilités", sector: "Transport, Logistique", logo: "MO" }
];

const GuideOPCO = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-blue-50/50 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <Badge className="bg-primary/10 text-primary border-primary/20 mb-6 uppercase tracking-widest font-black text-[10px] px-3 py-1">
                            Espace Éducatif
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                            Tout comprendre <br />aux <span className="text-primary italic">OPCO</span> en 2026
                        </h1>
                        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                            Le guide ultime pour maîtriser vos financements de formation. De la définition technique aux barèmes de prise en charge par branche.
                        </p>
                        <Button variant="energy" className="rounded-full px-8 h-12 shadow-lg shadow-energy/20 font-bold">
                            <Download className="w-4 h-4 mr-2" /> Télécharger le PDF (Gratuit)
                        </Button>
                    </div>
                </div>
            </section>

            {/* Definition Section */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-3 text-primary font-black uppercase tracking-widest text-xs">
                            <Layers className="w-5 h-5" /> Qu'est-ce qu'un OPCO ?
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            L'Opérateur de Compétences : Votre pilier formation
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Un OPCO est un organisme agréé par l'État qui a pour mission d'aider les entreprises de moins de 50 salariés à financer la formation de leurs employés. Il accompagne également les branches professionnelles dans la définition de leurs besoins.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Financement des contrats d'apprentissage",
                                "Aide à l'élaboration de la gestion prévisionnelle des emplois",
                                "Accompagnement de proximité des TPE/PME",
                                "Appui technique aux branches professionnelles"
                            ].map((item, id) => (
                                <li key={id} className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-blue-50/50 rounded-3xl p-8 border border-blue-100 shadow-inner">
                        <div className="bg-white rounded-2xl p-6 shadow-xl space-y-4">
                            <div className="flex items-center gap-3 text-primary">
                                <Info className="w-6 h-6" />
                                <span className="font-bold uppercase tracking-widest text-sm">Bon à savoir</span>
                            </div>
                            <p className="text-gray-600 italic">
                                "Chaque entreprise appartient obligatoirement à un OPCO. Ce choix n'est pas libre : il est déterminé par l'activité principale (code NAF) de la société."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The 11 OPCOs Grid */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">LES 11 OPCO MAJEURS</h2>
                        <p className="text-gray-500">Cliquez sur un OPCO pour découvrir ses barèmes spécifiques.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {opcoList.map((opco, idx) => (
                            <Card
                                key={idx}
                                onClick={() => {
                                    document.getElementById('comparison-table')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="p-6 hover:shadow-2xl transition-all cursor-pointer border-none bg-white group hover:-translate-y-2 border-b-2 border-transparent hover:border-primary active:scale-95"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary font-black mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    {opco.logo}
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1 font-sans">{opco.name}</h3>
                                <p className="text-xs text-gray-500 font-medium font-sans">{opco.sector}</p>
                                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-primary font-black text-[10px] uppercase tracking-widest group-hover:text-primary-dark transition-colors">
                                    Consulter barèmes <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-24 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Tableau Comparatif des Prises en Charge</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">Estimation moyenne des plafonds par type de formation (Données 2025-2026).</p>
                </div>

                <div id="comparison-table" className="overflow-x-auto rounded-3xl border border-gray-100 shadow-2xl">
                    <table className="w-full text-left">
                        <thead className="bg-gray-900 text-white text-xs font-black uppercase tracking-widest">
                            <tr>
                                <th className="px-8 py-5">Type de Formation</th>
                                <th className="px-8 py-5">Plafond Horaire</th>
                                <th className="px-8 py-5">Frais Annexes</th>
                                <th className="px-8 py-5">Délai Traitement</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { type: "Technique / Métier", plafond: "25€ - 45€ / h", frais: "100% (Repas/Déplacement)", delai: "15 jours" },
                                { type: "Management / Soft Skills", plafond: "15€ - 30€ / h", frais: "50% (Forfait)", delai: "21 jours" },
                                { type: "VAE (Accompagnement)", plafond: "Forfait 2000€", frais: "Inclus", delai: "7 jours" },
                                { type: "Bilan de Compétences", plafond: "Forfait 1500€", frais: "Non", delai: "10 jours" }
                            ].map((row, idx) => (
                                <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                                    <td className="px-8 py-6 font-bold text-gray-900">{row.type}</td>
                                    <td className="px-8 py-6 text-primary font-black uppercase text-xs">{row.plafond}</td>
                                    <td className="px-8 py-6 text-gray-600">{row.frais}</td>
                                    <td className="px-8 py-6">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 text-[10px] font-black rounded-full uppercase">
                                            <Calendar className="w-3 h-3" /> {row.delai}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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

export default GuideOPCO;
