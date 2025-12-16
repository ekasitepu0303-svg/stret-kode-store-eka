import { useState } from "react";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}
const Navbar = ({
  cartCount,
  onCartClick
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-3xl text-primary tracking-wider">STREET</span>
            <span className="font-display text-3xl text-foreground tracking-wider">kODE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">Produk</a>
            <a href="#categories" className="text-muted-foreground hover:text-primary transition-colors">Kategori</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Tentang</a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" onClick={onCartClick} className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {cartCount}
                </span>}
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors py-2">Home</a>
              <a href="#products" className="text-muted-foreground hover:text-primary transition-colors py-2">Produk</a>
              <a href="#categories" className="text-muted-foreground hover:text-primary transition-colors py-2">Kategori</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors py-2">Tentang</a>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;