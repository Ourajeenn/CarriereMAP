import { TrendingUp, Users, Award, Globe } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Professionnels accompagnés",
      color: "text-primary",
    },
    {
      icon: Award,
      value: "500+",
      label: "Formations certifiantes",
      color: "text-energy",
    },
    {
      icon: Globe,
      value: "40+",
      label: "OPCO & Secteurs couverts",
      color: "text-primary",
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Taux de réussite CPF",
      color: "text-energy",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="glass rounded-3xl p-8 lg:p-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary/10 flex items-center justify-center">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
