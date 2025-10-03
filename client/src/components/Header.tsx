import { Search, User, Heart, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <a href="/" className="flex-shrink-0" data-testid="link-logo">
              <span className="text-2xl font-bold text-primary">Hatim Demo N2</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-sm font-bold uppercase hover:text-primary transition-colors" data-testid="link-calzado">
              FOOTWEAR
            </a>
            <a href="#" className="text-sm font-bold uppercase hover:text-primary transition-colors" data-testid="link-ropa">
              CLOTHING
            </a>
            <a href="#" className="text-sm font-bold uppercase hover:text-primary transition-colors" data-testid="link-accesorios">
              ACCESSORIES
            </a>
            <a href="#" className="text-sm font-bold uppercase hover:text-primary transition-colors" data-testid="link-marcas">
              BRANDS
            </a>
            <a href="#" className="text-sm font-bold uppercase hover:text-primary transition-colors" data-testid="link-outlet">
              OUTLET
            </a>
          </nav>

          {/* Search & Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:flex items-center relative">
              <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search"
                className="pl-9 w-48 lg:w-64"
                data-testid="input-search"
              />
            </div>
            <Button size="icon" variant="ghost" data-testid="button-search-mobile" className="sm:hidden">
              <Search className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" data-testid="button-account">
              <User className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" data-testid="button-wishlist">
              <Heart className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" data-testid="button-cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 space-y-2 border-t border-border">
            <a href="#" className="block py-2 text-sm font-bold uppercase hover:text-primary transition-colors" data-testid="link-mobile-calzado">
              FOOTWEAR
            </a>
            <a href="#" className="block py-2 text-sm font-bold uppercase hover:text-primary transition-colors" data-testid="link-mobile-ropa">
              CLOTHING
            </a>
            <a href="#" className="block py-2 text-sm font-bold uppercase hover:text-primary transition-colors" data-testid="link-mobile-accesorios">
              ACCESSORIES
            </a>
            <a href="#" className="block py-2 text-sm font-bold uppercase hover:text-primary transition-colors" data-testid="link-mobile-marcas">
              BRANDS
            </a>
            <a href="#" className="block py-2 text-sm font-bold uppercase hover:text-primary transition-colors" data-testid="link-mobile-outlet">
              OUTLET
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
