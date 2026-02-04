import { Link } from "react-router-dom";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <Link to={`/producto/${product.id}`} className="group block">
      <div className="carset-card">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-carset-gray">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.badge && (
              <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider">
                {product.badge}
              </span>
            )}
            {discount && (
              <span className="px-3 py-1 bg-foreground text-background text-xs font-semibold">
                -{discount}%
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            {product.category}
          </span>
          <h3 className="mt-2 font-display text-xl tracking-wide group-hover:text-accent transition-colors">
            {product.name}
          </h3>
          <div className="mt-3 flex items-center gap-3">
            <span className="text-lg font-semibold">
              {product.price.toLocaleString("es-ES")} €
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {product.originalPrice.toLocaleString("es-ES")} €
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
