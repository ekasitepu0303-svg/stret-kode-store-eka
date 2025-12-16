import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  colors: string[];
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
              NEW
            </span>
          )}
          {product.isSale && (
            <span className="px-3 py-1 bg-destructive text-destructive-foreground text-xs font-semibold rounded-full">
              SALE
            </span>
          )}
        </div>

        {/* Like Button */}
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
        >
          <Heart className={`h-5 w-5 transition-colors ${isLiked ? 'fill-destructive text-destructive' : 'text-muted-foreground'}`} />
        </button>

        {/* Quick Add */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button 
            variant="hero" 
            className="w-full"
            onClick={() => onAddToCart(product)}
          >
            <ShoppingCart className="h-4 w-4" />
            Tambah ke Keranjang
          </Button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.category}</p>
        <h3 className="font-semibold text-foreground mb-2 line-clamp-1">{product.name}</h3>
        
        {/* Colors */}
        <div className="flex gap-2 mb-3">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-5 h-5 rounded-full border-2 transition-all ${
                selectedColor === color ? 'border-primary scale-110' : 'border-transparent'
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-display text-xl text-primary">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
