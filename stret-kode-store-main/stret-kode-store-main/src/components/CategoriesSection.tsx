import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Hoodie",
    count: 120,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
    color: "from-primary/80 to-primary/40",
  },
  {
    id: 2,
    name: "T-Shirt",
    count: 250,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    color: "from-secondary/80 to-secondary/40",
  },
  {
    id: 3,
    name: "Jacket",
    count: 80,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
    color: "from-accent/80 to-accent/40",
  },
  {
    id: 4,
    name: "Pants",
    count: 95,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500",
    color: "from-muted-foreground/50 to-muted-foreground/20",
  },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Kategori
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            PILIH <span className="text-gradient">KATEGORI</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Jelajahi berbagai kategori fashion streetwear favorit kamu
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <img 
                src={category.image} 
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${category.color} group-hover:opacity-90 transition-opacity`} />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform group-hover:translate-y-0 translate-y-2 transition-transform">
                  <p className="text-foreground/80 text-sm mb-1">{category.count}+ Produk</p>
                  <h3 className="font-display text-3xl text-foreground mb-3">{category.name}</h3>
                  <div className="flex items-center gap-2 text-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Lihat Koleksi <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
