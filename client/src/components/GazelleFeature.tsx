import { Button } from "@/components/ui/button";

export default function GazelleFeature() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative aspect-[21/9] sm:aspect-[21/8] md:aspect-[21/7] bg-gradient-to-br from-orange-100 to-amber-200 flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-200/60 via-transparent to-transparent"></div>
        
        <div className="relative z-10 text-center px-4">
          <div className="mb-6">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-2" data-testid="text-gazelle-title">
              Adidas Gazelle
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">Estilo clásico atemporal</p>
          </div>
          <Button variant="outline" className="bg-background/95 backdrop-blur-sm font-bold" data-testid="button-ver-producto">
            VER PRODUCTO
          </Button>
        </div>

        {/* Decorative shoe variations indicator */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2">
          <div className="w-3 h-3 rounded-full bg-foreground/30"></div>
          <div className="w-3 h-3 rounded-full bg-foreground/50"></div>
          <div className="w-3 h-3 rounded-full bg-foreground"></div>
          <div className="w-3 h-3 rounded-full bg-foreground/50"></div>
        </div>
      </div>
    </section>
  );
}
