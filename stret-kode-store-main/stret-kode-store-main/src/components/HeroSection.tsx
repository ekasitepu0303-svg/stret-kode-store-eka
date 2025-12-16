import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBanner} 
          alt="Streetwear Collection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6 animate-slide-up">
            Koleksi Terbaru 2024
          </span>
          
          <h1 className="font-display text-6xl md:text-8xl leading-none mb-6 animate-slide-up delay-100">
            <span className="text-foreground">URBAN</span>
            <br />
            <span className="text-gradient">STREETWEAR</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg animate-slide-up delay-200">
            Ekspresikan gaya unikmu dengan koleksi streetwear premium kami. Dari hoodie hingga t-shirt, temukan fashion yang berbicara untukmu.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-300">
            <Button variant="hero" size="xl">
              Belanja Sekarang
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="xl">
              Lihat Koleksi
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 animate-slide-up delay-400">
            <div>
              <span className="font-display text-4xl text-primary">500+</span>
              <p className="text-muted-foreground text-sm">Produk</p>
            </div>
            <div>
              <span className="font-display text-4xl text-secondary">10K+</span>
              <p className="text-muted-foreground text-sm">Customer</p>
            </div>
            <div>
              <span className="font-display text-4xl text-accent">4.9</span>
              <p className="text-muted-foreground text-sm">Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block animate-float">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl" />
      </div>
    </section>
  );
};

export default HeroSection;
