import { useState } from "react";
import ProductCard, { Product } from "./ProductCard";
import { Button } from "@/components/ui/button";

const categories = ["Semua", "Hoodie", "T-Shirt", "Jacket", "Pants"];

const products: Product[] = [
  {
    id: 1,
    name: "Urban Oversized Hoodie",
    price: 450000,
    originalPrice: 550000,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
    category: "Hoodie",
    colors: ["#FFD700", "#FF6B00", "#333333"],
    isNew: true,
    isSale: true,
  },
  {
    id: 2,
    name: "Street Classic T-Shirt",
    price: 199000,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    category: "T-Shirt",
    colors: ["#FFFFFF", "#000000", "#22C55E"],
    isNew: true,
  },
  {
    id: 3,
    name: "Bomber Jacket Premium",
    price: 750000,
    originalPrice: 900000,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
    category: "Jacket",
    colors: ["#1A1A2E", "#FF6B00", "#4A4A4A"],
    isSale: true,
  },
  {
    id: 4,
    name: "Cargo Pants Tactical",
    price: 380000,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500",
    category: "Pants",
    colors: ["#2F4F4F", "#000000", "#8B7355"],
  },
  {
    id: 5,
    name: "Graphic Print Hoodie",
    price: 420000,
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=500",
    category: "Hoodie",
    colors: ["#333333", "#FFFFFF", "#FF6B00"],
  },
  {
    id: 6,
    name: "Vintage Wash Tee",
    price: 175000,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500",
    category: "T-Shirt",
    colors: ["#D4A574", "#808080", "#000000"],
    isNew: true,
  },
  {
    id: 7,
    name: "Windbreaker Sport",
    price: 550000,
    originalPrice: 650000,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500",
    category: "Jacket",
    colors: ["#000000", "#FF6B00", "#FFFFFF"],
    isSale: true,
  },
  {
    id: 8,
    name: "Jogger Pants Slim",
    price: 320000,
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500",
    category: "Pants",
    colors: ["#000000", "#4A4A4A", "#1A1A2E"],
  },
];

interface ProductsSectionProps {
  onAddToCart: (product: Product) => void;
}

const ProductsSection = ({ onAddToCart }: ProductsSectionProps) => {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProducts = activeCategory === "Semua" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Koleksi Kami
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            PRODUK <span className="text-gradient">TERBARU</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Temukan gaya yang sesuai dengan kepribadianmu dari koleksi streetwear premium kami
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Lihat Semua Produk
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
