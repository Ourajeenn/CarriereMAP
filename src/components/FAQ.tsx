import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    const faqs = [
        {
            question: "C'est quoi un OPCO ?",
            answer: "Un Opérateur de Compétences (OPCO) est un organisme agréé par l'État chargé d'accompagner la formation professionnelle. Il aide les entreprises à financer l'apprentissage et à définir leurs besoins en formation."
        },
        {
            question: "Comment savoir de quel OPCO je dépends ?",
            answer: "Votre OPCO dépend de votre branche d'activité (code NAF/APE). Nous utilisons votre domaine d'activité pour vous orienter automatiquement vers le bon interlocuteur."
        },
        {
            question: "Est-ce que l'accompagnement est vraiment gratuit ?",
            answer: "Oui, notre service d'aiguillage vers les experts et OPCO est 100% gratuit. Nous sommes rémunérés par nos partenaires organismes de formation."
        },
        {
            question: "Puis-je utiliser mon CPF pour une formation en entreprise ?",
            answer: "Absolument. Si la formation est certifiante et inscrite au RNCP, vous pouvez mobiliser vos droits CPF seul ou en co-financement avec votre employeur."
        },
        {
            question: "Quels sont les délais pour obtenir un financement ?",
            answer: "Une fois le dossier complet déposé auprès de votre OPCO, le délai de réponse moyen varie entre 2 et 4 semaines selon les périodes de l'année."
        },
        {
            question: "La VAE est-elle prise en charge par les OPCO ?",
            answer: "Oui, la plupart des OPCO financent l'accompagnement à la VAE pour les salariés. C'est un excellent levier pour valoriser les compétences internes sans frais pour l'employé."
        }
    ];

    return (
        <section className="py-24 bg-white" id="faq">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Questions Fréquentes</h2>
                    <p className="text-gray-500">Tout ce qu'il faut savoir sur le financement de vos formations professionnelles.</p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border rounded-2xl px-6 bg-blue-50/10 hover:bg-white transition-colors duration-200">
                            <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-primary transition-colors py-6 text-lg tracking-tight">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="mt-16 text-center">
                    <p className="text-sm text-gray-400">
                        Vous avez une autre question ?
                        <a href="#contact" className="ml-1 text-primary font-bold hover:underline">Contactez un expert</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
