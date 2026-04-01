import { GraduationCap, Briefcase, Globe, MessageSquare, Users, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "1. Laissez vos coordonnées",
      description: "Le formulaire prend quelques minutes, choisissez votre secteur et indiquez comment vous joindre.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Users,
      title: "2. Échangez avec un expert",
      description: "Un conseiller dédié à votre secteur d'activité vous rappelle pour comprendre votre besoin.",
      color: "text-energy",
      bgColor: "bg-energy/10",
    },
    {
      icon: Briefcase,
      title: "3. Un plan d'action clair",
      description: "Vous repartez avec les prochaines étapes concrètes pour financer vos plans de formation.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="comment-ca-marche">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Comment ça <span className="gradient-text">se passe</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Laissez-nous vous guider vers le financement adapté à votre secteur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 space-y-4 hover:scale-105 transition-transform cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
