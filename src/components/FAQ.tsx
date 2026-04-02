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
    const [messages, setMessages] = useState([
        { role: "bot", content: "Bonjour ! Je suis l'expert IA de CarriereMAP. Posez-moi vos questions sur les budgets OPCO, le CPF ou les barèmes 2026." }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const userMsg = { role: "user", content: inputValue };
        setMessages(prev => [...prev, userMsg]);
        setInputValue("");
        setIsTyping(true);

        // Simulated AI response
        setTimeout(() => {
            let response = "Votre éligibilité semble confirmée. Souhaitez-vous lancer le diagnostic complet ?";
            if (inputValue.toLowerCase().includes("atlas")) response = "L'OPCO Atlas a relevé ses plafonds de 5% pour le numérique en 2026. C'est le moment idéal pour lancer vos projets.";
            if (inputValue.toLowerCase().includes("santé") || inputValue.toLowerCase().includes("sante")) response = "L'OPCO Santé privilégie actuellement les parcours VAE et les formations en management médico-social.";

            setMessages(prev => [...prev, { role: "bot", content: response }]);
            setIsTyping(false);
        }, 1500);
    };

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
                    <p className="text-gray-500 font-medium font-sans">Tout ce qu'il faut savoir pour sécuriser vos budgets de formation.</p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-none rounded-2xl px-6 bg-gray-50/50 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md">
                            <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-primary transition-colors py-6 text-lg tracking-tight hover:no-underline font-sans">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 pb-6 leading-relaxed font-medium font-sans">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="mt-16 p-8 bg-gray-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-2xl">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold font-sans">Besoin d'une réponse immédiate ?</h3>
                        <p className="text-gray-400 font-sans">Notre IA est entraînée sur les dernières directives OPCO 2026.</p>
                    </div>
                    <Button
                        onClick={() => setIsChatOpen(true)}
                        className="bg-primary hover:bg-primary-dark text-white rounded-full px-8 h-14 font-black uppercase tracking-widest shadow-xl shadow-primary/20 transition-all hover:scale-105"
                    >
                        Lancer le Chat IA
                    </Button>
                </div>
            </div>

            {/* Chatbot Overlay */}
            {isChatOpen && (
                <div className="fixed bottom-6 right-6 w-full max-w-[400px] h-[550px] z-[100] animate-slide-in">
                    <Card className="h-full flex flex-col shadow-2xl border-none overflow-hidden rounded-3xl bg-white">
                        <div className="bg-primary p-4 text-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <Bot className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-sm text-white">Assistant IA</p>
                                    <p className="text-[10px] opacity-80 uppercase font-black tracking-widest text-white">Expert Budget 2026</p>
                                </div>
                            </div>
                            <button onClick={() => setIsChatOpen(false)} className="p-2 hover:bg-white/10 rounded-full text-white">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex-1 p-4 bg-blue-50/20 overflow-y-auto space-y-4">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : ""}`}>
                                    {msg.role === "bot" && (
                                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                                            <Bot className="w-4 h-4 text-white" />
                                        </div>
                                    )}
                                    <div className={`p-4 rounded-2xl shadow-sm text-sm font-medium font-sans max-w-[85%] ${msg.role === "user"
                                            ? "bg-primary text-white rounded-tr-none"
                                            : "bg-white text-gray-700 rounded-tl-none border border-blue-100"
                                        }`}>
                                        {msg.content}
                                    </div>
                                    {msg.role === "user" && (
                                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                                            <User className="w-4 h-4 text-gray-500" />
                                        </div>
                                    )}
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                                        <Bot className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-blue-100 shadow-sm">
                                        <div className="flex gap-1">
                                            <div className="w-1 h-1 bg-primary rounded-full animate-bounce" />
                                            <div className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                                            <div className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="p-4 bg-white border-t flex gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                                placeholder="Posez votre question..."
                                className="flex-1 bg-gray-50 border border-gray-100 rounded-full px-5 text-sm h-12 outline-none focus:ring-2 ring-primary/20 transition-all font-sans"
                            />
                            <Button
                                onClick={handleSendMessage}
                                size="icon"
                                className="rounded-full w-12 h-12 bg-primary shadow-lg shadow-primary/20 hover:scale-110 transition-transform"
                            >
                                <Send className="w-4 h-4 text-white" />
                            </Button>
                        </div>
                    </Card>
                </div>
            )}
        </section>
    );
};

export default FAQ;
