import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
const Footer = () => {
  return <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-3xl text-foreground mb-2">
                SUBSCRIBE <span className="text-primary">NEWSLETTER</span>
              </h3>
              <p className="text-muted-foreground">Dapatkan update koleksi terbaru dan promo eksklusif</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input type="email" placeholder="Email kamu..." className="flex-1 md:w-64 px-4 py-3 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none transition-colors" />
              <Button variant="hero">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-3xl text-primary">STREET</span>
              <span className="font-display text-3xl text-foreground">WEAR</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Destinasi fashion streetwear premium untuk generasi urban yang berani tampil beda.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-4">QUICK LINKS</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#products" className="text-muted-foreground hover:text-primary transition-colors">Produk</a></li>
              <li><a href="#categories" className="text-muted-foreground hover:text-primary transition-colors">Kategori</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sale</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Tentang Kami</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-4">LAYANAN</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pengiriman</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pengembalian</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Panduan Ukuran</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Lacak Pesanan</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-4">KONTAK</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Jl. Jamin Ginting</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+62 82277698088</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">ekasetepu0303@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2024 StreetWear. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;