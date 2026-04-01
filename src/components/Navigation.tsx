import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, GraduationCap, Briefcase, Globe, MessageSquare, Users, Calendar, BookOpen, School, Video, Award } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: Home, label: "Accueil", href: "/" },
    { icon: BookOpen, label: "Comment ça marche", href: "#comment-ca-marche" },
    { icon: Briefcase, label: "Secteurs accompagnés", href: "#secteurs" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="CarriereMAP" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/auth">
              <Button variant="outline" className="gap-2">
                <Users className="w-4 h-4" />
                Espace Conseiller
              </Button>
            </Link>
            <Button variant="energy" className="gap-2" asChild>
              <a href="#contact">
                <MessageSquare className="w-4 h-4" />
                Être rappelé
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2 animate-slide-in">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
            <div className="flex flex-col gap-2 px-4 pt-4">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/auth">Espace Conseiller</Link>
              </Button>
              <Button className="w-full bg-gradient-primary hover:opacity-90" asChild>
                <a href="#contact">Être rappelé</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
