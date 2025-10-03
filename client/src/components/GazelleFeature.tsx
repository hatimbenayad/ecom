import { Button } from "@/components/ui/button";
import gazelleImg from "@assets/stock_images/nike_adidas_athletic_0a277d09.jpg";

export default function GazelleFeature() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative aspect-[21/9] sm:aspect-[21/8] md:aspect-[21/7]">
        <img src={gazelleImg} alt="Adidas Gazelle" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <div className="mb-6">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2" data-testid="text-gazelle-title">
                Adidas Gazelle
              </h3>
              <p className="text-sm sm:text-base text-white/80 mb-6">Timeless classic style</p>
            </div>
            <Button variant="outline" className="bg-background/95 backdrop-blur-sm font-bold" data-testid="button-ver-producto">
              VIEW PRODUCT
            </Button>
          </div>
        </div>

        {/* Decorative shoe variations indicator */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 z-10">
          <div className="w-3 h-3 rounded-full bg-white/40"></div>
          <div className="w-3 h-3 rounded-full bg-white/60"></div>
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <div className="w-3 h-3 rounded-full bg-white/60"></div>
        </div>
      </div>
    </section>
  );
}
