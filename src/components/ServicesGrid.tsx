import { useState } from "react";
import { CreditCard, FileSignature, GraduationCap, Puzzle, Laptop, Target, X, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const servicesData = {
    cpf: {
        title: "Formez-vous grâce à votre CPF !",
        shortDesc: "Jusqu'à 100% de financement pour votre formation.",
        longDesc: "Le Compte Personnel de Formation (CPF) permet d'acquérir des droits à la formation mobilisables tout au long de sa vie professionnelle. Utilisez-le pour financer une formation certifiante et évoluer dans votre domaine d'activité. Nous vous accompagnons dans le montage et l'optimisation de votre dossier auprès des organismes concernés.",
        icon: CreditCard
    },
    vae: {
        title: "VAE : obtenez un diplôme grâce à votre expérience",
        shortDesc: "Transformez votre expérience en diplôme officiel reconnu par l'État.",
        longDesc: "La Validation des Acquis de l'Expérience (VAE) est une mesure qui permet à toute personne, quels que soient son âge, son niveau d'études ou son statut, de faire valider les acquis de son expérience pour obtenir une certification professionnelle. Valorisez vos années de travail sans retourner sur les bancs de l'école !",
        icon: FileSignature
    },
    pro: {
        title: "Les formations professionnelles",
        shortDesc: "Développez vos compétences pour évoluer dans votre carrière.",
        longDesc: "Déployez votre potentiel grâce à des formations ciblées. Que vous souhaitiez changer de métier, monter en compétences ou vous adapter aux nouvelles technologies, nous vous aidons à trouver la formation adéquate et le financement OPCO correspondant à votre secteur.",
        icon: Puzzle
    },
    alternance: {
        title: "Les formations en alternance",
        shortDesc: "Alliez pratique en entreprise et enseignements théoriques.",
        longDesc: "L'alternance permet de se former à un métier en intégrant la vie d'une entreprise. C'est l'opportunité d'acquérir une expérience professionnelle solide tout en préparant un diplôme reconnu. Les coûts sont généralement pris en charge par l'entreprise et son OPCO.",
        icon: GraduationCap
    },
    ligne: {
        title: "Formations en ligne (e-learning)",
        shortDesc: "Apprenez d'où vous voulez, à votre propre rythme.",
        longDesc: "Profitez de la flexibilité de l'e-learning. Nos parcours partenaires en ligne s'adaptent à vos disponibilités. Cette solution est idéale pour les professionnels en poste ou en reconversion qui souhaitent concilier leur emploi du temps avec un projet d'évolution.",
        icon: Laptop
    },
    bilan: {
        title: "Bilan de compétences",
        shortDesc: "Faites le point sur votre carrière pour mieux rebondir.",
        longDesc: "Le bilan de compétences permet d'analyser vos compétences professionnelles et personnelles, ainsi que vos aptitudes et vos motivations. Il est l'outil indispensable pour définir un projet professionnel cohérent ou construire un nouveau projet de formation avant de solliciter des financements.",
        icon: Target
    }
};

const ServicesGrid = () => {
    const [activeModal, setActiveModal] = useState<keyof typeof servicesData | null>(null);

    const handleScrollToContact = () => {
        setActiveModal(null);
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <section className="relative z-20 -mt-20 lg:-mt-32 px-4 pb-20">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-4 max-w-7xl mx-auto items-stretch">

                        {/* Column 1: CPF */}
                        <div
                            onClick={() => setActiveModal("cpf")}
                            className="bg-white rounded-[1rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 lg:w-[28%] flex flex-col items-center text-center cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="text-[#3B24D9] mb-6 mt-4">
                                <CreditCard className="w-12 h-12 stroke-[1.5]" />
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 mb-3">{servicesData.cpf.title}</h3>
                            <p className="text-gray-500 text-sm mb-6 flex-1 leading-relaxed">{servicesData.cpf.shortDesc}</p>
                            <Button className="w-full bg-[#3B24D9] hover:bg-[#3B24D9]/90 text-white rounded-full h-12 text-base">
                                En savoir plus
                            </Button>
                        </div>

                        {/* Middle Column (Masonry) */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">

                            {/* Inner Left Col */}
                            <div className="flex flex-col gap-4">
                                <div
                                    onClick={() => setActiveModal("vae")}
                                    className="bg-white rounded-[1rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 flex-1 flex flex-col items-center justify-center text-center cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="text-[#3B24D9] mb-3">
                                        <FileSignature className="w-10 h-10 stroke-[1.5]" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-[15px] mb-2">{servicesData.vae.title}</h3>
                                    <p className="text-gray-500 text-xs line-clamp-2">{servicesData.vae.shortDesc}</p>
                                </div>
                                <div
                                    onClick={() => setActiveModal("pro")}
                                    className="bg-white rounded-[1rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 min-h-[180px] flex flex-col items-center justify-center text-center cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="text-[#3B24D9] mb-3">
                                        <Puzzle className="w-10 h-10 stroke-[1.5]" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-[15px] mb-2">{servicesData.pro.title}</h3>
                                    <p className="text-gray-500 text-xs line-clamp-2">{servicesData.pro.shortDesc}</p>
                                </div>
                            </div>

                            {/* Inner Right Col */}
                            <div className="flex flex-col gap-4">
                                <div
                                    onClick={() => setActiveModal("alternance")}
                                    className="bg-white rounded-[1rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 min-h-[180px] flex flex-col items-center justify-center text-center cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="text-[#3B24D9] mb-3">
                                        <GraduationCap className="w-10 h-10 stroke-[1.5]" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-[15px] mb-2">{servicesData.alternance.title}</h3>
                                    <p className="text-gray-500 text-xs line-clamp-2">{servicesData.alternance.shortDesc}</p>
                                </div>
                                <div
                                    onClick={() => setActiveModal("ligne")}
                                    className="bg-white rounded-[1rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 flex-1 flex flex-col items-center justify-center text-center cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="text-[#3B24D9] mb-3">
                                        <Laptop className="w-10 h-10 stroke-[1.5]" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-[15px] mb-2">{servicesData.ligne.title}</h3>
                                    <p className="text-gray-500 text-xs line-clamp-2">{servicesData.ligne.shortDesc}</p>
                                </div>
                            </div>

                        </div>

                        {/* Column 3: Bilan */}
                        <div
                            onClick={() => setActiveModal("bilan")}
                            className="bg-white rounded-[1rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 lg:w-[28%] flex flex-col items-center text-center cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="text-[#331DB3] mb-6 mt-4">
                                <Target className="w-12 h-12 stroke-[1.5]" />
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 mb-3">{servicesData.bilan.title}</h3>
                            <p className="text-gray-500 text-sm mb-6 flex-1 leading-relaxed">{servicesData.bilan.shortDesc}</p>
                            <Button className="w-full bg-[#331DB3] hover:bg-[#331DB3]/90 text-white rounded-full h-12 text-base">
                                En savoir plus
                            </Button>
                        </div>

                    </div>
                </div>
            </section>

            {/* Modal Overlay */}
            {activeModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setActiveModal(null)}>
                    <div
                        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 md:p-8 relative animate-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setActiveModal(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="text-[#331DB3] mb-5 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                            {servicesData[activeModal].icon && (() => {
                                const Icon = servicesData[activeModal].icon;
                                return <Icon className="w-8 h-8 stroke-[1.5]" />;
                            })()}
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                            {servicesData[activeModal].title}
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-8">
                            {servicesData[activeModal].longDesc}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button
                                onClick={handleScrollToContact}
                                className="w-full bg-[#331DB3] hover:bg-[#331DB3]/90 text-white rounded-full h-12"
                            >
                                Je souhaite un accompagnement <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ServicesGrid;
