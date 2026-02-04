import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroChair from "@/assets/hero-chair.jpg";

const About = () => {
  return (
    <section className="carset-section bg-carset-dark-secondary overflow-hidden">
      <div className="carset-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <div className="carset-divider mb-4" />
            <h2 className="carset-subheading carset-text-gradient mb-6">
              LA INGENIERÍA AUTOMOVILÍSTICA EN TU ESPACIO
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              En Carset fusionamos la precisión del diseño automovilístico con la 
              funcionalidad del mobiliario de oficina. Cada silla es el resultado de 
              años de investigación en ergonomía y materiales premium.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nos inspiramos en los asientos deportivos de alta gama: soporte lumbar 
              ajustable, materiales transpirables y acabados que combinan cuero 
              sintético con fibra de carbono.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Espuma de alta densidad con memoria",
                "Estructura de acero reforzado",
                "Mecanismos de ajuste profesionales",
                "Diseño inspirado en cockpits deportivos"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <Link 
              to="/nosotros" 
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-accent hover:text-foreground transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-carset-gray">
              <img 
                src={heroChair} 
                alt="Interior de coche deportivo Carset"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-accent/30 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
