import { Button } from "@/components/ui/button";
import nikeImg from "@assets/stock_images/fashion_lifestyle_yo_90d77e92.jpg";
import adidasImg from "@assets/stock_images/nike_adidas_athletic_6fcd76d7.jpg";

export default function BrandBanners() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Nike Banner */}
          <div className="group relative aspect-[4/3] overflow-hidden rounded-md hover-elevate active-elevate-2 cursor-pointer" data-testid="banner-nike">
            <img src={nikeImg} alt="Nike Collection" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 absolute inset-0 flex items-end justify-center p-6 sm:p-8">
              <Button variant="outline" className="bg-background/95 backdrop-blur-sm font-bold" data-testid="button-nike-ver-todo">
                VER TODO
              </Button>
            </div>
            <div className="absolute top-6 left-6 z-10">
              <span className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">NIKE</span>
            </div>
          </div>

          {/* Adidas Banner */}
          <div className="group relative aspect-[4/3] overflow-hidden rounded-md hover-elevate active-elevate-2 cursor-pointer" data-testid="banner-adidas">
            <img src={adidasImg} alt="Adidas Collection" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 absolute inset-0 flex items-end justify-center p-6 sm:p-8">
              <Button variant="outline" className="bg-background/95 backdrop-blur-sm font-bold" data-testid="button-adidas-ver-todo">
                VER TODO
              </Button>
            </div>
            <div className="absolute top-6 left-6 z-10">
              <span className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">ADIDAS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
