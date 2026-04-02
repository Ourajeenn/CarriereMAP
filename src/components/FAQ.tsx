import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Sparkles, Send, User, Bot, X } from "lucide-react";

const FAQ = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const faqs = [
        {
            question: "Peut-on utiliser le budget OPCO pour plusieurs formations ?",
            answer: "Oui, dans la plupart des cas. Cela dépend de l'enveloppe annuelle allouée à votre entreprise par votre branche. Nous vous aidons à calculer ce reliquat."
        },
        {
            question: "Quel délai pour recevoir une réponse ?",
            answer: "48-72h en moyenne pour une première analyse CarriereMAP. Les OPCO répondent généralement sous 2 à 4 semaines après dépôt du dossier."
        },
        {
            question: "Faut-il déclarer les formations suivies avant ?",
            answer: "Oui, cela est indispensable. Les compteurs de financement sont souvent annuels ; omettre une formation peut entraîner un refus de prise en charge ultérieur."
        },
        {
            question: "Peut-on refuser une formation proposée par l'OPCO ?",
            answer: "L'OPCO ne propose pas de formation, il finance celles que vous choisissez. Vous êtes libre de changer d'organisme de formation avant la signature de l'accord."
        },
        {
            question: "Et si je suis micro-entrepreneur ?",
            answer: "Les micro-entrepreneurs dépendent du FAF (Fonds d'Assurance Formation) et non des OPCO classiques. Consultez notre page 'Pour qui?' pour les spécificités."
        },
        {
            question: "Combien coûte le service CarriereMAP ?",
            answer: "100% gratuit pour vous. Notre modèle est basé sur des partenariats avec les organismes de formation certifiés Qualiopi."
        },
        {
            question: "Puis-je cumuler plusieurs OPCO ?",
            answer: "Non. Une entreprise est rattachée à un seul OPCO, déterminé par son activité principale (code NAF). En cas d'activités multiples, c'est celle qui génère le plus de CA qui fait foi."
        }
    ];

    return (
        <section className="py-24 bg-white relative" id="faq">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest">
                        <Sparkles className="w-3 h-3" /> Aide Intelligente
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase">Questions <span className="text-primary italic">Stratégiques</span></h2>
                    <p className="text-gray-500 font-medium">Tout ce qu'il faut savoir pour sécuriser vos budgets de formation.</p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-none rounded-2xl px-6 bg-gray-50/50 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md">
                            <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-primary transition-colors py-6 text-lg tracking-tight hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 pb-6 leading-relaxed font-medium">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="mt-16 p-8 bg-gray-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold">Besoin d'une réponse immédiate ?</h3>
                        <p className="text-gray-400">Notre IA est entraînée sur les dernières directives OPCO 2026.</p>
                    </div>
                    <Button
                        onClick={() => setIsChatOpen(true)}
                        className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 font-black uppercase tracking-widest shadow-xl shadow-primary/20"
                    >
                        Lancer le Chat IA
                    </Button>
                </div>
            </div>

            {/* Chatbot Overlay Simulation */}
            {isChatOpen && (
                <div className="fixed bottom-6 right-6 w-full max-w-[400px] h-[500px] z-[100] animate-slide-in">
                    <Card className="h-full flex flex-col shadow-2xl border-none overflow-hidden rounded-3xl">
                        <div className="bg-primary p-4 text-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <Bot className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Assistant CarriereMAP</p>
                                    <p className="text-[10px] opacity-80 uppercase font-black tracking-widest">En ligne</p>
                                </div>
                            </div>
                            <button onClick={() => setIsChatOpen(false)} className="p-2 hover:bg-white/10 rounded-full">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="flex-1 p-4 bg-blue-50/30 overflow-y-auto space-y-4">
                            <div className="flex gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                                    <Bot className="w-4 h-4 text-white" />
                                </div>
                                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 font-medium max-w-[80%]">
                                    Bonjour ! Je suis l'expert IA de CarriereMAP. Posez-moi vos questions sur les budgets OPCO, le CPF ou les barèmes 2026.
                                </div>
                            </div>
                            <div className="flex gap-2 justify-end">
                                <div className="bg-primary p-3 rounded-2xl rounded-tr-none shadow-sm text-sm text-white font-medium max-w-[80%]">
                                    Quel est le plafond de l'OPCO Atlas pour une formation dev ?
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                                    <User className="w-4 h-4 text-gray-500" />
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                                    <Bot className="w-4 h-4 text-white" />
                                </div>
                                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 font-medium max-w-[80%]">
                                    Pour l'OPCO Atlas en 2026, le plafond moyen pour les formations numériques (hors alternance) se situe entre 35€ et 50€ de l'heure. Souhaitez-vous que je vérifie pour un code NAF spécifique ?
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-white border-t flex gap-2">
                            <input
                                type="text"
                                placeholder="Tapez votre question..."
                                className="flex-1 bg-gray-50 border-none rounded-full px-4 text-sm outline-none focus:ring-2 ring-primary/20"
                            />
                            <Button size="icon" className="rounded-full w-10 h-10 bg-primary">
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                    </Card>
                </div>
            )}
        </section>
    );
};

export default FAQ;
