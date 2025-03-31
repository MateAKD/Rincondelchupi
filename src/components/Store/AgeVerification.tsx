
import React from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

interface AgeVerificationProps {
  onVerify: () => void;
}

const AgeVerification = ({ onVerify }: AgeVerificationProps) => {
  const handleVerify = () => {
    localStorage.setItem("age-verified", "true");
    onVerify();
  };

  return (
    <div className="min-h-screen bg-black/95 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-xl border border-golden/20 shadow-xl p-6 md:p-8 text-white">
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/f13a16c6-b452-42de-a9c1-2449aae035c0.png" 
            alt="Logo" 
            className="w-24 h-24 mx-auto mb-4 drop-shadow-lg"
          />
          <h2 className="text-3xl font-bold text-golden">Rincón del Chupi</h2>
          <p className="text-gray-300 mt-2">Tu tienda de bebidas favorita</p>
        </div>
        
        <Alert variant="destructive" className="mb-6 border border-red-800/50 bg-red-900/20 backdrop-blur-sm">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="text-white">Verificación de edad</AlertTitle>
          <AlertDescription className="text-gray-200">
            Debes ser mayor de 18 años para acceder a esta tienda y comprar bebidas alcohólicas.
          </AlertDescription>
        </Alert>
        
        <p className="text-center mb-6 text-gray-300">
          Al hacer clic en "Soy mayor de 18 años", confirmas que tienes la edad legal para consumir bebidas alcohólicas en tu país.
        </p>
        
        <div className="flex flex-col gap-3">
          <Button 
            onClick={handleVerify}
            className="bg-golden hover:bg-golden/90 text-black font-bold"
          >
            Soy mayor de 18 años
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => window.history.back()}
            className="border-golden/50 text-golden hover:bg-golden/10"
          >
            Volver
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;
