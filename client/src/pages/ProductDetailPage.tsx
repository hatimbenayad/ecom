import { useState } from "react";
import { Heart, Minus, Plus, ShoppingCart, Star, ChevronLeft, ChevronRight, Truck, RotateCcw, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
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

const mockProduct = {
  id: 1,
  brand: "New Balance",
  model: "MR530",
  price: 120,
  discountPrice: null,
  rating: 4.5,
  reviewCount: 127,
  description: "Las New Balance MR530 combinan el estilo retro con tecnología moderna. Perfectas para el uso diario, ofrecen comodidad excepcional y un diseño versátil que combina con cualquier outfit.",
  features: [
    "Suela de goma duradera",
    "Parte superior de cuero y malla",
    "Amortiguación ENCAP",
    "Diseño inspirado en los 90"
  ],
  colors: [
    { name: "White/Gray", code: "#f5f5f5", available: true },
    { name: "Black/Red", code: "#000000", available: true },
    { name: "Navy/White", code: "#1e3a8a", available: false },
  ],
  sizes: [
    { size: 36, available: false },
    { size: 37, available: true },
    { size: 38, available: true },
    { size: 39, available: true },
    { size: 40, available: true },
    { size: 41, available: true },
    { size: 42, available: true },
    { size: 43, available: true },
    { size: 44, available: false },
    { size: 45, available: true },
  ],
  images: [img1, img2, img3, img4],
  stock: 15
};

const relatedProducts = [
  { id: 2, brand: "Adidas", model: "Gazelle", price: 100, discountPrice: 75, image: img5 },
  { id: 3, brand: "Puma", model: "Speedcat", price: 90, discountPrice: null, image: img6 },
  { id: 4, brand: "Nike", model: "Air Force 1", price: 110, discountPrice: 89, image: img7 },
  { id: 5, brand: "Vans", model: "Old Skool", price: 75, discountPrice: null, image: img8 },
];

const completeYourLook = [
  { id: 11, brand: "Nike", model: "Tech Fleece Hoodie", price: 85, discountPrice: null, image: img2, category: "apparel" },
  { id: 12, brand: "Adidas", model: "3-Stripes Track Pants", price: 65, discountPrice: 45, image: img3, category: "apparel" },
  { id: 13, brand: "New Balance", model: "Classic Cap", price: 35, discountPrice: null, image: img4, category: "accessories" },
  { id: 14, brand: "Nike", model: "Everyday Crew Socks", price: 15, discountPrice: null, image: img5, category: "accessories" },
];

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [selectedColor, setSelectedColor] = useState(mockProduct.colors[0]);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Por favor, selecciona una talla");
      return;
    }
    // Add to cart logic here
    console.log("Added to cart:", { id, selectedColor, selectedSize, quantity });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % mockProduct.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + mockProduct.images.length) % mockProduct.images.length);
  };

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
              <a href="/category/sneakers" className="hover:text-foreground">Sneakers</a>
              <span className="mx-2">/</span>
              <span className="text-foreground">{mockProduct.brand} {mockProduct.model}</span>
            </nav>
          </div>
        </div>

        {/* Product Detail */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            {/* Product Images */}
            <div className="mb-8 lg:mb-0">
              <div className="relative">
                {/* Main Image */}
                <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4">
                  <img 
                    src={mockProduct.images[currentImageIndex]} 
                    alt={`${mockProduct.brand} ${mockProduct.model}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  {/* Wishlist Button */}
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-primary text-primary' : ''}`} />
                  </Button>
                </div>

                {/* Thumbnail Images */}
                <div className="grid grid-cols-4 gap-2">
                  {mockProduct.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`aspect-square bg-muted rounded-md overflow-hidden border-2 transition-colors ${
                        currentImageIndex === index ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">{mockProduct.brand}</p>
                <h1 className="text-3xl font-bold mb-4">{mockProduct.model}</h1>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(mockProduct.rating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {mockProduct.rating} ({mockProduct.reviewCount} reseñas)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  {mockProduct.discountPrice ? (
                    <>
                      <span className="text-2xl font-bold text-primary">
                        {mockProduct.discountPrice},00 €
                      </span>
                      <span className="text-lg text-muted-foreground line-through">
                        {mockProduct.price},00 €
                      </span>
                      <Badge variant="destructive">
                        -{Math.round((1 - mockProduct.discountPrice / mockProduct.price) * 100)}%
                      </Badge>
                    </>
                  ) : (
                    <span className="text-2xl font-bold">
                      {mockProduct.price},00 €
                    </span>
                  )}
                </div>

                {/* Stock Status */}
                {mockProduct.stock < 5 && (
                  <p className="text-sm text-destructive mb-4">
                    ¡Solo quedan {mockProduct.stock} unidades!
                  </p>
                )}
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Color: {selectedColor.name}</h3>
                <div className="flex gap-2">
                  {mockProduct.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => color.available && setSelectedColor(color)}
                      disabled={!color.available}
                      className={`w-10 h-10 rounded-full border-2 transition-colors ${
                        selectedColor.name === color.name
                          ? 'border-primary ring-2 ring-primary/20'
                          : 'border-border'
                      } ${!color.available ? 'opacity-50 cursor-not-allowed' : 'hover:border-primary'}`}
                      style={{ backgroundColor: color.code }}
                    >
                      {!color.available && (
                        <div className="w-full h-full rounded-full flex items-center justify-center">
                          <div className="w-0.5 h-6 bg-destructive rotate-45"></div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Talla</h3>
                <div className="grid grid-cols-5 gap-2">
                  {mockProduct.sizes.map((sizeObj) => (
                    <Button
                      key={sizeObj.size}
                      variant={selectedSize === sizeObj.size ? "default" : "outline"}
                      disabled={!sizeObj.available}
                      onClick={() => setSelectedSize(sizeObj.size)}
                      className="h-12"
                    >
                      {sizeObj.size}
                    </Button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  <a href="#" className="underline hover:no-underline">Guía de tallas</a>
                </p>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Cantidad</h3>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.min(mockProduct.stock, quantity + 1))}
                    disabled={quantity >= mockProduct.stock}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="mb-8">
                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="w-full font-bold uppercase mb-3"
                  disabled={!selectedSize}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Añadir al carrito
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Envío gratuito a partir de 70€ • Devoluciones gratuitas en 30 días
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-muted-foreground" />
                  <span>Envío gratuito a partir de 70€</span>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="h-5 w-5 text-muted-foreground" />
                  <span>Devoluciones gratuitas en 30 días</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  <span>2 años de garantía</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Descripción</TabsTrigger>
                <TabsTrigger value="details">Detalles</TabsTrigger>
                <TabsTrigger value="shipping">Envío y devoluciones</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="space-y-4 mt-6">
                <p className="text-muted-foreground leading-relaxed">
                  {mockProduct.description}
                </p>
                <div>
                  <h4 className="font-medium mb-2">Características principales:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {mockProduct.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="details" className="space-y-4 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Especificaciones</h4>
                    <dl className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Marca:</dt>
                        <dd>{mockProduct.brand}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Modelo:</dt>
                        <dd>{mockProduct.model}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Tipo:</dt>
                        <dd>Sneakers casual</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Género:</dt>
                        <dd>Unisex</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Materiales</h4>
                    <dl className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Parte superior:</dt>
                        <dd>Cuero y malla</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Suela:</dt>
                        <dd>Goma duradera</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Forro:</dt>
                        <dd>Textil</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="shipping" className="space-y-6 mt-6">
                <div>
                  <h4 className="font-medium mb-3">Envíos</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Envío gratuito a partir de 70€</li>
                    <li>• Entrega en 2-4 días laborables</li>
                    <li>• Envío express disponible (24-48h)</li>
                    <li>• Seguimiento incluido en todos los envíos</li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium mb-3">Devoluciones</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Devoluciones gratuitas en 30 días</li>
                    <li>• Producto en perfecto estado original</li>
                    <li>• Etiquetas originales incluidas</li>
                    <li>• Proceso de devolución online simple</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Complete Your Look */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 uppercase">
              Completa tu look
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {completeYourLook.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="relative aspect-square bg-background rounded-md mb-3 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={`${product.brand} ${product.model}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-2 right-2 hover-elevate bg-background/80 backdrop-blur-sm"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    {product.discountPrice && (
                      <Badge variant="destructive" className="absolute top-2 left-2">
                        -{Math.round((1 - product.discountPrice / product.price) * 100)}%
                      </Badge>
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{product.brand}</p>
                    <p className="font-medium mb-2 text-sm">{product.model}</p>
                    <div className="flex items-center gap-2">
                      {product.discountPrice ? (
                        <>
                          <span className="text-muted-foreground line-through text-xs">
                            {product.price},00 €
                          </span>
                          <span className="font-bold text-primary text-sm">
                            {product.discountPrice},00 €
                          </span>
                        </>
                      ) : (
                        <span className="font-bold text-sm">
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

        {/* You Might Also Like */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 uppercase">
              También te puede gustar
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((product) => (
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
                    >
                      <Heart className="h-4 w-4" />
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}