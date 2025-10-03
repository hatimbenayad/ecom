import { Button } from "@/components/ui/button";

export default function ConverseCollection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Left: Image with text overlay */}
          <div className="relative aspect-[4/5] bg-gradient-to-br from-red-100 to-pink-200 rounded-md overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-6xl sm:text-7xl md:text-8xl font-light text-white/90" style={{ fontFamily: 'cursive' }} data-testid="text-love-chuck">
                LOVE Chuck
              </h3>
            </div>
          </div>

          {/* Right: Product card */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-2">CONVERSE</p>
              <h4 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-chuck-title">
                Chuck 70 Classic High Top
              </h4>
              <p className="text-2xl font-bold mb-6" data-testid="text-chuck-price">95,00 €</p>
            </div>
            <div>
              <Button className="font-bold" data-testid="button-ver-coleccion">
                VER COLECCIÓN
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
