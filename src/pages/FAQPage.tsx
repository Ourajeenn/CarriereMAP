import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

const FAQPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <div className="pt-20">
                <FAQ />
            </div>
            <Footer />
        </div>
    );
};

export default FAQPage;
