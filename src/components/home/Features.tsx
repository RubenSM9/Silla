import { Shield, Truck, Award, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Garantía 2 Años",
    description: "Garantía legal completa en todos nuestros productos. Tu confianza, nuestra prioridad.",
  },
  {
    icon: Truck,
    title: "Envío",
    description: "Envío con Reserva Habla conmigo por walapop",
  },
  {
    icon: Award,
    title: "Calidad Premium",
    description: "Materiales de primera calidad inspirados en la industria automovilística.",
  },
  {
    icon: Headphones,
    title: "Soporte Experto",
    description: "Atención personalizada para ayudarte a elegir la silla perfecta.",
  },
];

const Features = () => {
  return (
    <section className="carset-section">
      <div className="carset-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-lg bg-secondary flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl tracking-wide mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
