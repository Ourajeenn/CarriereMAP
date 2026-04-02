import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    BookOpen,
    Search,
    ArrowUpRight,
    Filter,
    Newspaper
} from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
    {
        title: "OPCO Santé 2026 : Guide complet pour les cabinets dentaires",
        excerpt: "Comment optimiser le financement de vos formations obligatoires en radioprotection et hygiène.",
        category: "Santé",
        date: "Mars 2026",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "Financer une formation en cybersécurité avec l'OPCO Atlas",
        excerpt: "Les leviers financiers pour protéger votre PME contre les cybermenaces en mobilisant vos budgets.",
        category: "Numérique",
        date: "Février 2026",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "OPCO BTP : Comment accéder au CPF entreprise ?",
        excerpt: "Découvrez comment combiner les budgets conventionnels et le CPF de vos salariés dans le bâtiment.",
        category: "BTP",
        date: "Janvier 2026",
        image: "https://images.unsplash.com/photo-1531834351306-69632303ce1a?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "Reconversion professionnelle : les aides 2026",
        excerpt: "Panorama complet des dispositifs de financement pour changer de métier avec l'appui de votre branche.",
        category: "RH",
        date: "Décembre 2025",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400"
    }
];

const Blog = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            <section className="pt-32 pb-20 bg-blue-50/30">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest">
                                <Newspaper className="w-3 h-3" /> Blog & Ressources
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black uppercase text-gray-900 tracking-tight">Expertise <span className="text-primary italic">Formation</span></h1>
                            <p className="text-gray-500 font-medium max-w-xl">Décryptages, guides pratiques et actualités sur le financement de la montée en compétences.</p>
                        </div>
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Rechercher un article..."
                                className="w-full pl-12 pr-4 h-14 bg-white rounded-2xl border-none shadow-xl shadow-blue-500/5 text-sm focus:ring-2 ring-primary/20"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-16">
                        {["Tous", "Santé", "BTP", "Numérique", "RH", "Industrie", "Comptabilité"].map((cat) => (
                            <button key={cat} className="px-6 py-2 rounded-full border border-gray-100 bg-white text-xs font-bold text-gray-500 hover:text-primary hover:border-primary transition-all">
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {blogPosts.map((post, idx) => (
                            <Link key={idx} to="/diagnostic" className="group">
                                <Card className="border-none bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 rounded-3xl h-full flex flex-col">
                                    <div className="h-64 overflow-hidden relative">
                                        <div className="absolute top-4 left-4 z-10">
                                            <Badge className="bg-primary text-white border-none px-3 py-1 font-black uppercase tracking-widest text-[9px]">
                                                {post.category}
                                            </Badge>
                                        </div>
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                                        <div className="space-y-4">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{post.date}</p>
                                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                        </div>
                                        <div className="pt-6 flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all">
                                            Lire l'article <ArrowUpRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <Button variant="outline" className="rounded-full h-14 px-10 font-black uppercase tracking-widest border-gray-200">
                            Afficher plus d'articles
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
        {children}
    </span>
);

export default Blog;
