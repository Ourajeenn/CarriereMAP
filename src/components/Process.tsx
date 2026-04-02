import { MousePointerClick, FileSearch, MessageSquare, CheckCircle2 } from "lucide-react";

const Process = () => {
    const steps = [
        {
            icon: MousePointerClick,
            title: "Saisie rapide",
            desc: "Remplissez notre formulaire en moins de 2 minutes.",
            time: "2 min"
        },
        {
            icon: FileSearch,
            title: "Analyse des droits",
            desc: "Nous identifions vos éligibilités OPCO et CPF.",
            time: "24h"
        },
        {
            icon: MessageSquare,
            title: "Conseil expert",
            desc: "Un interlocuteur dédié vous contacte pour affiner votre projet.",
            time: "Rapide"
        },
        {
            icon: CheckCircle2,
            title: "Validation",
            desc: "Lancement de votre formation avec financement validé.",
            time: "Succès"
        }
    ];

    return (
        <section className="py-24 bg-blue-50/20" id="comment-ca-marche">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Comment ça marche ?</h2>
                    <p className="text-gray-600">Un parcours simplifié pour débloquer vos financements sans tracas administratif.</p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Progress line for desktop */}
                    <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-0.5 bg-gray-200" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center space-y-6 group">
                                <div className="relative">
                                    <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-blue-50 group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                                        <step.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-black w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                        {idx + 1}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-bold text-lg text-gray-900 tracking-tight">{step.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed px-4">{step.desc}</p>
                                    <div className="pt-2">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                                            {step.time}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
