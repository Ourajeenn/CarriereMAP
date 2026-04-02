import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50/30">
      <div className="text-center space-y-4">
        <h1 className="text-8xl font-black text-primary/20">404</h1>
        <div className="space-y-2">
          <p className="text-2xl font-bold text-gray-900">Page non trouvée</p>
          <p className="text-gray-500 max-w-xs mx-auto">
            L'interlocuteur ou la solution que vous cherchez n'est pas à cette adresse.
          </p>
        </div>
        <div className="pt-4">
          <a href="/" className="inline-flex items-center justify-center bg-primary text-white rounded-full px-8 py-3 font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20">
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
