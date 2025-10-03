import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface Product {
  id: number;
  brand: string;
  model: string;
  price: number;
  discountPrice?: number | null;
  image: string;
}

interface ProductCardProps {
  product: Product;
  isWishlisted?: boolean;
  onWishlistToggle?: (id: number) => void;
  size?: "default" | "small";
  className?: string;
}

export default function ProductCard({ 
  product, 
  isWishlisted = false, 
  onWishlistToggle,
  size = "default",
  className = ""
}: ProductCardProps) {
  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onWishlistToggle?.(product.id);
  };

  const discountPercentage = product.discountPrice 
    ? Math.round((1 - product.discountPrice / product.price) * 100)
    : 0;

  const textSizes = size === "small" 
    ? { brand: "text-xs", model: "text-sm", price: "text-sm" }
    : { brand: "text-sm", model: "text-base", price: "text-base" };

  return (
    <div className={`group relative ${className}`}>
      <a href={`/product/${product.id}`} className="block">
        <div className="relative aspect-square bg-muted rounded-md mb-3 overflow-hidden">
          <img 
            src={product.image} 
            alt={`${product.brand} ${product.model}`} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            loading="lazy"
          />
          
          {/* Wishlist Button */}
          {onWishlistToggle && (
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-2 right-2 hover-elevate bg-background/80 backdrop-blur-sm z-10"
              onClick={handleWishlistClick}
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-primary text-primary' : ''}`} />
            </Button>
          )}
          
          {/* Discount Badge */}
          {product.discountPrice && (
            <Badge variant="destructive" className="absolute top-2 left-2">
              -{discountPercentage}%
            </Badge>
          )}
        </div>
        
        <div>
          <p className={`text-muted-foreground mb-1 ${textSizes.brand}`}>
            {product.brand}
          </p>
          <p className={`font-medium mb-2 group-hover:text-primary transition-colors ${textSizes.model}`}>
            {product.model}
          </p>
          <div className="flex items-center gap-2">
            {product.discountPrice ? (
              <>
                <span className={`text-muted-foreground line-through ${size === "small" ? "text-xs" : "text-sm"}`}>
                  {product.price},00 €
                </span>
                <span className={`font-bold text-primary ${textSizes.price}`}>
                  {product.discountPrice},00 €
                </span>
              </>
            ) : (
              <span className={`font-bold ${textSizes.price}`}>
                {product.price},00 €
              </span>
            )}
          </div>
        </div>
      </a>
    </div>
  );
}