
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
    <div className="min-h-screen bg-black/90 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 md:p-8">
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/f13a16c6-b452-42de-a9c1-2449aae035c0.png" 
            alt="Logo" 
            className="w-20 h-20 mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Rincón del Chupi</h2>
        </div>
        
        <Alert variant="destructive" className="mb-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Verificación de edad</AlertTitle>
          <AlertDescription>
            Debes ser mayor de 18 años para acceder a esta tienda y comprar bebidas alcohólicas.
          </AlertDescription>
        </Alert>
        
        <p className="text-center mb-6 text-gray-600">
          Al hacer clic en "Soy mayor de 18 años", confirmas que tienes la edad legal para consumir bebidas alcohólicas en tu país.
        </p>
        
        <div className="flex flex-col gap-3">
          <Button 
            onClick={handleVerify}
            className="bg-primary hover:bg-primary/90"
          >
            Soy mayor de 18 años
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => window.history.back()}
          >
            Volver
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;
