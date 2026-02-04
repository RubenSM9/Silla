import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-carset-dark-secondary border-t border-border">
      <div className="carset-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-display text-2xl tracking-wider text-foreground">
                CAR<span className="text-accent">SET</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sillas premium inspiradas en la ingeniería automovilística. 
              Confort, diseño y ergonomía de alto rendimiento.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-display text-lg tracking-wider mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-accent text-sm transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/tienda" className="text-muted-foreground hover:text-accent text-sm transition-colors">
                  Tienda
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-lg tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/aviso-legal" className="text-muted-foreground hover:text-accent text-sm transition-colors">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link to="/privacidad" className="text-muted-foreground hover:text-accent text-sm transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-muted-foreground hover:text-accent text-sm transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link to="/condiciones-venta" className="text-muted-foreground hover:text-accent text-sm transition-colors">
                  Condiciones de Venta
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-display text-lg tracking-wider mb-4"></h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Carset. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground text-xs uppercase tracking-wider">
              Diseño Premium · Confort Superior
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
