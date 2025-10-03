import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

//todo: remove mock functionality
const products = [
  { id: 1, brand: "New Balance", model: "MR530", price: 120, discountPrice: null, testId: "product-nb-530" },
  { id: 2, brand: "Adidas", model: "Gazelle", price: 100, discountPrice: 75, testId: "product-gazelle" },
  { id: 3, brand: "Puma", model: "Speedcat", price: 90, discountPrice: null, testId: "product-speedcat" },
  { id: 4, brand: "Nike", model: "Air Force 1", price: 110, discountPrice: 89, testId: "product-af1" },
  { id: 5, brand: "New Balance", model: "530", price: 115, discountPrice: null, testId: "product-nb-530-2" },
  { id: 6, brand: "Adidas", model: "Samba", price: 95, discountPrice: null, testId: "product-samba" },
  { id: 7, brand: "Converse", model: "Chuck 70", price: 85, discountPrice: 65, testId: "product-chuck" },
  { id: 8, brand: "Vans", model: "Old Skool", price: 75, discountPrice: null, testId: "product-vans" },
];

export default function ProductGrid() {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 uppercase" data-testid="text-lo-mas-top">
          LO MÁS TOP
        </h2>
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-sm text-muted-foreground uppercase tracking-wide">
            NB 530 • GAZELLE • SPEEDCAT • AIR FORCE ONE
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative" data-testid={product.testId}>
              <div className="relative aspect-square bg-muted rounded-md mb-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl font-bold text-slate-300">{product.brand[0]}</span>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 hover-elevate"
                  onClick={() => toggleWishlist(product.id)}
                  data-testid={`button-wishlist-${product.id}`}
                >
                  <Heart className={`h-5 w-5 ${wishlist.includes(product.id) ? 'fill-primary text-primary' : ''}`} />
                </Button>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1" data-testid={`text-brand-${product.id}`}>{product.brand}</p>
                <p className="font-medium mb-2" data-testid={`text-model-${product.id}`}>{product.model}</p>
                <div className="flex items-center gap-2">
                  {product.discountPrice ? (
                    <>
                      <span className="text-primary line-through text-sm" data-testid={`text-old-price-${product.id}`}>
                        {product.price},00 €
                      </span>
                      <span className="font-bold" data-testid={`text-price-${product.id}`}>
                        {product.discountPrice},00 €
                      </span>
                    </>
                  ) : (
                    <span className="font-bold" data-testid={`text-price-${product.id}`}>
                      {product.price},00 €
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
