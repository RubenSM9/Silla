import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroChair from "@/assets/hero-chair.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroChair} 
          alt="Interior de coche deportivo con asiento premium"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 w-1/2 h-1/2 opacity-5">
        <div className="w-full h-full border-l-2 border-b-2 border-foreground rounded-bl-[200px]" />
      </div>
      
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />

      <div className="carset-container relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Diseño inspirado en la ingeniería automovilística
            </span>
          </div>

          {/* Heading */}
          <h1 
            className="carset-heading carset-text-gradient mb-6 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            DONDE EL CONFORT SE ENCUENTRA CON EL RENDIMIENTO
          </h1>

          {/* Subheading */}
          <p 
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Sillas premium diseñadas con la precisión de un asiento deportivo. 
            Ergonomía avanzada, materiales de primera calidad y un diseño que 
            transforma tu espacio de trabajo.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link to="/tienda" className="carset-btn-primary rounded-sm">
              Explorar Colección
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/nosotros" className="carset-btn-outline rounded-sm">
              Nuestra Historia
            </Link>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
