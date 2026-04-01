import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { GraduationCap, Briefcase } from "lucide-react";

const domainToSectorMap: Record<string, string> = {
    "informatique": "Numérique, Ingénierie & Conseil (Atlas)",
    "developpeur": "Numérique, Ingénierie & Conseil (Atlas)",
    "tech": "Numérique, Ingénierie & Conseil (Atlas)",
    "sante": "Santé, Médico-social (OPCO Santé)",
    "infirmier": "Santé, Médico-social (OPCO Santé)",
    "commerce": "Commerce, Distribution (Opcommerce)",
    "vente": "Commerce, Distribution (Opcommerce)",
    "marketing": "Numérique, Ingénierie & Conseil (Atlas)",
    "construction": "Construction & BTP (Constructys)",
    "batiment": "Construction & BTP (Constructys)",
    "industrie": "Industrie & Métallurgie (OPCO 2i)",
    "agriculture": "Agricole & Alimentaire (OCAPIAT)",
    "alimentation": "Agricole & Alimentaire (OCAPIAT)",
    "boulangerie": "Agricole & Alimentaire (OCAPIAT)",
    "restauration": "Hôtellerie, Restauration (AKTO)",
    "hotel": "Hôtellerie, Restauration (AKTO)",
    "sport": "Sports & Loisirs (AFDAS)",
    "culture": "Culture & Médias (AFDAS)",
};

const getSectorFromDomain = (domain: string) => {
    if (!domain) return null;
    const normalized = domain.toLowerCase().trim();
    for (const [key, value] of Object.entries(domainToSectorMap)) {
        if (normalized.includes(key)) return value;
    }
    return "Analyse en cours par notre conseiller...";
};

const LeadRoutingForm = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [userType, setUserType] = useState<"particulier" | "entreprise">("particulier");
    const [domaine, setDomaine] = useState("");

    const matchedSector = useMemo(() => getSectorFromDomain(domaine), [domaine]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API request
        setTimeout(() => {
            setIsSubmitting(false);
            toast({
                title: "Demande envoyée",
                description: `Un conseiller référent pour votre profil vous rappellera très prochainement.`,
            });
            (e.target as HTMLFormElement).reset();
            setDomaine("");
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-xl border shadow-sm">
            {/* Profil Selection */}
            <div className="flex gap-4 p-1 bg-muted rounded-lg w-full">
                <Button
                    type="button"
                    variant={userType === "particulier" ? "default" : "ghost"}
                    className="flex-1 gap-2 rounded-md transition-all"
                    onClick={() => setUserType("particulier")}
                >
                    <GraduationCap className="w-4 h-4" />
                    Particulier
                </Button>
                <Button
                    type="button"
                    variant={userType === "entreprise" ? "default" : "ghost"}
                    className="flex-1 gap-2 rounded-md transition-all"
                    onClick={() => setUserType("entreprise")}
                >
                    <Briefcase className="w-4 h-4" />
                    Entreprise
                </Button>
            </div>

            <div className="space-y-4">
                {userType === "particulier" ? (
                    <>
                        <div className="space-y-2">
                            <Label htmlFor="domaine">Quel est votre domaine ou métier souhaité ?</Label>
                            <Input
                                id="domaine"
                                required
                                placeholder="ex: Informatique, Vente, Santé..."
                                value={domaine}
                                onChange={(e) => setDomaine(e.target.value)}
                            />
                            {domaine && (
                                <div className="mt-2 p-3 bg-primary/10 text-primary border border-primary/20 rounded-md text-sm transition-all duration-300">
                                    <strong>Secteur / OPCO identifié :</strong> {matchedSector}
                                </div>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="statut">Votre statut actuel</Label>
                            <select
                                id="statut"
                                required
                                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <option value="">Sélectionnez votre statut</option>
                                <option value="etudiant">Étudiant</option>
                                <option value="salarie">Salarié en reconversion</option>
                                <option value="demandeur">Demandeur d'emploi</option>
                            </select>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="space-y-2">
                            <Label htmlFor="secteur">Secteur d'activité principal</Label>
                            <select
                                id="secteur"
                                required
                                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <option value="">Sélectionnez votre secteur</option>
                                <option value="industrie">Industrie & Métallurgie</option>
                                <option value="sante">Santé, Médico-social & Pharmaceutique</option>
                                <option value="commerce">Commerce, Distribution & Services</option>
                                <option value="construction">Construction & BTP</option>
                                <option value="tech">Numérique, Ingénierie & Conseil</option>
                                <option value="autre">Autre secteur</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2 flex-1">
                                <Label htmlFor="entreprise">Nom de l'entreprise</Label>
                                <Input id="entreprise" required placeholder="Votre entreprise" />
                            </div>
                            <div className="space-y-2 flex-1">
                                <Label htmlFor="taille">Taille de l'entreprise</Label>
                                <select
                                    id="taille"
                                    required
                                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <option value="">Effectif</option>
                                    <option value="1-10">Moins de 11 salariés</option>
                                    <option value="11-49">De 11 à 49 salariés</option>
                                    <option value="50-249">De 50 à 249 salariés</option>
                                    <option value="250+">250 salariés+ </option>
                                </select>
                            </div>
                        </div>
                    </>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 flex-1">
                        <Label htmlFor="name">Nom / Prénom</Label>
                        <Input id="name" required placeholder="Jean Dupont" />
                    </div>
                    <div className="space-y-2 flex-1">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input id="phone" type="tel" required placeholder="06 12 34 56 78" />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email de contact</Label>
                    <Input id="email" type="email" required placeholder="contact@domaine.fr" />
                </div>
            </div>

            <Button type="submit" variant="energy" className="w-full h-12 text-lg" disabled={isSubmitting}>
                {isSubmitting ? "Envoi en cours..." : "Être rappelé par un expert"}
            </Button>
            <p className="text-xs text-center text-muted-foreground">
                Vos données sont sécurisées et destinées uniquement à vous mettre en relation avec l'OPCO ou le conseiller adapté.
            </p>
        </form>
    );
};

export default LeadRoutingForm;
