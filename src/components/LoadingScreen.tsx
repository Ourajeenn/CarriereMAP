import { useEffect, useState } from "react";
import { Briefcase } from "lucide-react";

const LoadingScreen = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-blue-50/50 backdrop-blur-xl">
            <div className="relative">
                {/* Decorative blob decorations for background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[80px] animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-energy/10 rounded-full blur-[60px] animate-bounce duration-[3000ms]" />

                {/* Glassmorphic card */}
                <div className="relative glass p-12 rounded-[2.5rem] border border-white/40 shadow-2xl flex flex-col items-center max-w-sm w-full mx-auto text-center space-y-8 animate-in zoom-in-95 duration-500">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/30 animate-float">
                        <Briefcase className="w-10 h-10 text-white" />
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Carriere<span className="text-primary">MAP</span></h1>
                        <p className="text-gray-500 font-medium text-sm">L'intelligence au service de votre carrière</p>
                    </div>

                    <div className="w-full space-y-4">
                        <div className="h-1.5 w-full bg-gray-200/50 rounded-full overflow-hidden border border-white/20">
                            <div
                                className="h-full bg-primary transition-all duration-300 ease-out"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400">
                            <span>Initialisation</span>
                            <span>{progress}%</span>
                        </div>
                    </div>

                    <div className="text-xs text-gray-400 font-medium">
                        Chargement des solutions OPCO & CPF...
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
