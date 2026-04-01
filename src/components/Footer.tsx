import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const sections = [
    {
      title: "Plateforme",
      links: [
        { label: "Accueil", href: "/" },
        { label: "Test d'orientation", href: "/test" },
        { label: "Formations", href: "/formations" },
        { label: "Mentorat", href: "/mentorat" },
      ],
    },
    {
      title: "Ressources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Guides", href: "/guides" },
        { label: "Événements", href: "/evenements" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "À propos",
      links: [
        { label: "Notre mission", href: "/about" },
        { label: "Partenaires", href: "/partners" },
        { label: "Contact", href: "/contact" },
        { label: "Carrières", href: "/careers" },
      ],
    },
  ];

  return (
    <footer className="glass border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">CarriereMAP</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Votre plateforme d'orientation académique et professionnelle intelligente.
              De la 4ème à la vie active.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg glass hover:bg-primary/10 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass hover:bg-primary/10 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass hover:bg-primary/10 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass hover:bg-primary/10 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-bold text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CarriereMAP. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Confidentialité
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Conditions
            </Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
