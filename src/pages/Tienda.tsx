import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import { products, categories } from "@/data/products";
import { useState } from "react";

const Tienda = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProducts = activeCategory
    ? products.filter((p) => 
        p.category.toLowerCase().includes(activeCategory.toLowerCase())
      )
    : products;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-carset-dark-secondary">
        <div className="carset-container">
          <div className="max-w-2xl">
            <div className="carset-divider mb-4" />
            <h1 className="carset-heading carset-text-gradient mb-4">
              NUESTRA COLECCIÓN
            </h1>
            <p className="text-muted-foreground text-lg">
              Explora nuestra gama completa de sillas premium. Cada modelo está 
              diseñado para ofrecer el máximo confort y estilo.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="carset-section">
        <div className="carset-container">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 text-sm font-medium uppercase tracking-wider rounded-sm transition-all ${
                activeCategory === null
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-sm font-medium uppercase tracking-wider rounded-sm transition-all ${
                  activeCategory === cat.id
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No se encontraron productos en esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Tienda;
