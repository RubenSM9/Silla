import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { featuredProducts } from "@/data/products";

const FeaturedProducts = () => {
  return (
    <section className="carset-section bg-carset-dark-secondary">
      <div className="carset-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="carset-divider mb-4" />
            <h2 className="carset-subheading carset-text-gradient">
              PRODUCTOS DESTACADOS
            </h2>
            <p className="text-muted-foreground mt-2 max-w-lg">
              Nuestra selección de sillas más populares, diseñadas para ofrecer 
              el máximo confort y rendimiento.
            </p>
          </div>
          <Link 
            to="/tienda" 
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors"
          >
            Ver todo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
