import { useState } from "react";
import { Heart, Filter, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams } from "wouter";

// Mock product data - in a real app, this would come from an API
import img1 from "@assets/stock_images/modern_sneakers_shoe_7c2b5a58.jpg";
import img2 from "@assets/stock_images/modern_sneakers_shoe_8445b7f4.jpg";
import img3 from "@assets/stock_images/modern_sneakers_shoe_a56754c4.jpg";
import img4 from "@assets/stock_images/modern_sneakers_shoe_c3d1520a.jpg";
import img5 from "@assets/stock_images/modern_sneakers_shoe_855cdaf4.jpg";
import img6 from "@assets/stock_images/modern_sneakers_shoe_5dd08e16.jpg";
import img7 from "@assets/stock_images/modern_sneakers_shoe_f58ff251.jpg";
import img8 from "@assets/stock_images/modern_sneakers_shoe_c0dc2dca.jpg";
import img9 from "@assets/stock_images/modern_sneakers_shoe_0e59b48f.jpg";
import img10 from "@assets/stock_images/modern_sneakers_shoe_77e78cd9.jpg";

const mockProducts = [
  { id: 1, brand: "New Balance", model: "MR530", price: 120, discountPrice: null, image: img1, category: "sneakers", colors: ["White", "Black", "Gray"], sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45] },
  { id: 2, brand: "Adidas", model: "Gazelle", price: 100, discountPrice: 75, image: img2, category: "sneakers", colors: ["Blue", "White", "Red"], sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45] },
  { id: 3, brand: "Puma", model: "Speedcat", price: 90, discountPrice: null, image: img3, category: "sneakers", colors: ["Black", "White"], sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45] },
  { id: 4, brand: "Nike", model: "Air Force 1", price: 110, discountPrice: 89, image: img4, category: "sneakers", colors: ["White", "Black", "Red"], sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45] },
  { id: 5, brand: "New Balance", model: "530", price: 115, discountPrice: null, image: img5, category: "sneakers", colors: ["Gray", "White"], sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45] },
  { id: 6, brand: "Adidas", model: "Samba", price: 95, discountPrice: null, image: img6, category: "sneakers", colors: ["Black", "White", "Green"], sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45] },
  { id: 7, brand: "Converse", model: "Chuck 70", price: 85, discountPrice: 65, image: img7, category: "converse", colors: ["Black", "White", "Red"], sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45] },
  { id: 8, brand: "Vans", model: "Old Skool", price: 75, discountPrice: null, image: img8, category: "sneakers", colors: ["Black", "White"], sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45] },
  { id: 9, brand: "Nike", model: "Dunk Low", price: 100, discountPrice: 80, image: img9, category: "sneakers", colors: ["White", "Black", "Blue"], sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45] },
  { id: 10, brand: "Adidas", model: "Stan Smith", price: 85, discountPrice: null, image: img10, category: "sneakers", colors: ["White", "Green"], sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45] },
  { id: 11, brand: "Converse", model: "All Star Low", price: 70, discountPrice: 55, image: img1, category: "converse", colors: ["Black", "White", "Red"], sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45] },
  { id: 12, brand: "Nike", model: "Air Max 90", price: 130, discountPrice: null, image: img2, category: "sneakers", colors: ["White", "Black", "Gray"], sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45] },
];

const categoryTitles = {
  sneakers: "SNEAKERS",
  converse: "CONVERSE",
  apparel: "APPAREL",
  sale: "SALE"
};

const brandFilters = ["Nike", "Adidas", "New Balance", "Converse", "Puma", "Vans"];
const colorFilters = ["Black", "White", "Red", "Blue", "Gray", "Green"];
const sizeFilters = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45];

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState("featured");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [showSaleOnly, setShowSaleOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const toggleWishlist = (id: number) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Filter products based on category and filters
  let filteredProducts = mockProducts.filter(product => {
    if (category && category !== 'sale') {
      if (product.category !== category) return false;
    }
    if (category === 'sale' && !product.discountPrice) return false;
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
    if (selectedColors.length > 0 && !product.colors.some(color => selectedColors.includes(color))) return false;
    if (selectedSizes.length > 0 && !product.sizes.some(size => selectedSizes.includes(size))) return false;
    if (showSaleOnly && !product.discountPrice) return false;
    const currentPrice = product.discountPrice || product.price;
    if (currentPrice < priceRange[0] || currentPrice > priceRange[1]) return false;
    return true;
  });

  // Sort products
  if (sortBy === "price-low") {
    filteredProducts.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
  } else if (sortBy === "price-high") {
    filteredProducts.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
  } else if (sortBy === "newest") {
    filteredProducts.sort((a, b) => b.id - a.id);
  }

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const hasMoreProducts = currentPage < totalPages;

  const handleLoadMore = () => {
    if (hasMoreProducts) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setPriceRange([0, 200]);
    setShowSaleOnly(false);
    setCurrentPage(1);
  };

  const activeFiltersCount = selectedBrands.length + selectedColors.length + selectedSizes.length + 
    (showSaleOnly ? 1 : 0) + (priceRange[0] > 0 || priceRange[1] < 200 ? 1 : 0);

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Clear Filters */}
      {activeFiltersCount > 0 && (
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">{activeFiltersCount} filtros activos</span>
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Limpiar todo
          </Button>
        </div>
      )}

      {/* Sale Filter */}
      <div>
        <h4 className="font-medium mb-3">Ofertas</h4>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="sale-only"
            checked={showSaleOnly}
            onCheckedChange={(checked) => setShowSaleOnly(checked as boolean)}
          />
          <label htmlFor="sale-only" className="text-sm">Solo productos en oferta</label>
        </div>
      </div>

      {/* Brand Filter */}
      <div>
        <h4 className="font-medium mb-3">Marca</h4>
        <div className="space-y-2">
          {brandFilters.map(brand => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={`brand-${brand}`}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedBrands(prev => [...prev, brand]);
                  } else {
                    setSelectedBrands(prev => prev.filter(b => b !== brand));
                  }
                }}
              />
              <label htmlFor={`brand-${brand}`} className="text-sm">{brand}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div>
        <h4 className="font-medium mb-3">Color</h4>
        <div className="space-y-2">
          {colorFilters.map(color => (
            <div key={color} className="flex items-center space-x-2">
              <Checkbox
                id={`color-${color}`}
                checked={selectedColors.includes(color)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedColors(prev => [...prev, color]);
                  } else {
                    setSelectedColors(prev => prev.filter(c => c !== color));
                  }
                }}
              />
              <label htmlFor={`color-${color}`} className="text-sm">{color}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div>
        <h4 className="font-medium mb-3">Talla</h4>
        <div className="grid grid-cols-4 gap-2">
          {sizeFilters.map(size => (
            <Button
              key={size}
              variant={selectedSizes.includes(size) ? "default" : "outline"}
              size="sm"
              onClick={() => {
                if (selectedSizes.includes(size)) {
                  setSelectedSizes(prev => prev.filter(s => s !== size));
                } else {
                  setSelectedSizes(prev => [...prev, size]);
                }
              }}
              className="h-8 text-xs"
            >
              {size}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm text-muted-foreground">
              <a href="/" className="hover:text-foreground">Inicio</a>
              <span className="mx-2">/</span>
              <span className="text-foreground">{categoryTitles[category as keyof typeof categoryTitles] || "Categoría"}</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <div className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 uppercase">
              {categoryTitles[category as keyof typeof categoryTitles] || "Productos"}
            </h1>
            <p className="text-center text-muted-foreground mb-8">
              Descubre nuestra selección de {filteredProducts.length} productos
            </p>

            {/* Filters and Sort Bar */}
            <div className="flex items-center justify-between mb-8 gap-4">
              <div className="flex items-center gap-4">
                {/* Mobile Filter Button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden">
                      <Filter className="h-4 w-4 mr-2" />
                      Filtros
                      {activeFiltersCount > 0 && (
                        <Badge variant="destructive" className="ml-2 h-5 w-5 p-0 text-xs">
                          {activeFiltersCount}
                        </Badge>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <SheetHeader>
                      <SheetTitle>Filtros</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterContent />
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Desktop Filter Toggle */}
                <Button variant="outline" className="hidden lg:flex">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                  {activeFiltersCount > 0 && (
                    <Badge variant="destructive" className="ml-2 h-5 w-5 p-0 text-xs">
                      {activeFiltersCount}
                    </Badge>
                  )}
                </Button>
              </div>

              {/* Sort Dropdown */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <ArrowUpDown className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Destacados</SelectItem>
                  <SelectItem value="newest">Más recientes</SelectItem>
                  <SelectItem value="price-low">Precio: menor a mayor</SelectItem>
                  <SelectItem value="price-high">Precio: mayor a menor</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Desktop Sidebar Filters */}
            <div className="hidden lg:block">
              <div className="sticky top-24 bg-card border border-card-border rounded-lg p-6">
                <h3 className="font-bold mb-6 uppercase text-sm">Filtros</h3>
                <FilterContent />
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Active Filters */}
              {activeFiltersCount > 0 && (
                <div className="mb-6 flex flex-wrap gap-2">
                  {selectedBrands.map(brand => (
                    <Badge key={brand} variant="secondary" className="gap-1">
                      {brand}
                      <button 
                        onClick={() => setSelectedBrands(prev => prev.filter(b => b !== brand))}
                        className="ml-1 hover:text-destructive"
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                  {selectedColors.map(color => (
                    <Badge key={color} variant="secondary" className="gap-1">
                      {color}
                      <button 
                        onClick={() => setSelectedColors(prev => prev.filter(c => c !== color))}
                        className="ml-1 hover:text-destructive"
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                  {selectedSizes.map(size => (
                    <Badge key={size} variant="secondary" className="gap-1">
                      Talla {size}
                      <button 
                        onClick={() => setSelectedSizes(prev => prev.filter(s => s !== size))}
                        className="ml-1 hover:text-destructive"
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                  {showSaleOnly && (
                    <Badge variant="secondary" className="gap-1">
                      En oferta
                      <button 
                        onClick={() => setShowSaleOnly(false)}
                        className="ml-1 hover:text-destructive"
                      >
                        ×
                      </button>
                    </Badge>
                  )}
                </div>
              )}

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
                {currentProducts.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="relative aspect-square bg-muted rounded-md mb-3 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={`${product.brand} ${product.model}`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                      <Button
                        size="icon"
                        variant="ghost"
                        className="absolute top-2 right-2 hover-elevate bg-background/80 backdrop-blur-sm"
                        onClick={() => toggleWishlist(product.id)}
                      >
                        <Heart className={`h-5 w-5 ${wishlist.includes(product.id) ? 'fill-primary text-primary' : ''}`} />
                      </Button>
                      {product.discountPrice && (
                        <Badge variant="destructive" className="absolute top-2 left-2">
                          -{Math.round((1 - product.discountPrice / product.price) * 100)}%
                        </Badge>
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
                      <p className="font-medium mb-2">{product.model}</p>
                      <div className="flex items-center gap-2">
                        {product.discountPrice ? (
                          <>
                            <span className="text-muted-foreground line-through text-sm">
                              {product.price},00 €
                            </span>
                            <span className="font-bold text-primary">
                              {product.discountPrice},00 €
                            </span>
                          </>
                        ) : (
                          <span className="font-bold">
                            {product.price},00 €
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More / Pagination */}
              {hasMoreProducts && (
                <div className="text-center">
                  <Button 
                    onClick={handleLoadMore}
                    variant="outline"
                    size="lg"
                    className="font-bold uppercase"
                  >
                    Mostrar más productos
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Brand Description Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 uppercase">
              {categoryTitles[category as keyof typeof categoryTitles] || "Nuestra Selección"}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Descubre la mejor selección de {categoryTitles[category as keyof typeof categoryTitles]?.toLowerCase() || "productos"} 
                de las marcas más exclusivas. Cada producto ha sido cuidadosamente seleccionado por nuestro equipo 
                para ofrecerte la máxima calidad y estilo.
              </p>
              <p>
                Con envío gratuito a partir de 70€ y devoluciones gratuitas en 30 días, 
                comprar nunca había sido tan fácil. Únete a miles de clientes satisfechos 
                que ya confían en nosotros.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}