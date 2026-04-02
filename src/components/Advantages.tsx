import { ShieldCheck, Zap, HeartHandshake } from "lucide-react";

const Advantages = () => {
    const items = [
        {
            icon: ShieldCheck,
            title: "100% Gratuit",
            description: "Notre service d'aiguillage est entièrement gratuit pour les entreprises et particuliers."
        },
        {
            icon: HeartHandshake,
            title: "Sans engagement",
            description: "Bénéficiez d'une analyse de vos droits OPCO sans aucune obligation contractuelle."
        },
        {
            icon: Zap,
            title: "Rapide & Efficace",
            description: "Obtenez une réponse et un contact expert en moins de 48 heures ouvrées."
        }
    ];

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {items.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center p-8 rounded-3xl bg-blue-50/30 border border-blue-50 transition-all hover:shadow-lg hover:bg-white group">
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                <item.icon className="w-8 h-8 text-primary group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Trust badge indicator */}
            <div className="mt-12 flex justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-100 text-green-700 text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Service Verifié & Conforme RGPD
                </div>
            </div>
        </section>
    );
};

export default Advantages;
