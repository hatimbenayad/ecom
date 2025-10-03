import { Button } from "@/components/ui/button";

export default function BrandBanners() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Nike Banner */}
          <div className="group relative aspect-[4/3] overflow-hidden rounded-md hover-elevate active-elevate-2 cursor-pointer" data-testid="banner-nike">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300"></div>
            <div className="absolute inset-0 flex items-end justify-center p-6 sm:p-8">
              <Button variant="outline" className="bg-background/95 backdrop-blur-sm font-bold" data-testid="button-nike-ver-todo">
                VER TODO
              </Button>
            </div>
            <div className="absolute top-6 left-6">
              <span className="text-2xl sm:text-3xl font-bold text-foreground">NIKE</span>
            </div>
          </div>

          {/* Adidas Banner */}
          <div className="group relative aspect-[4/3] overflow-hidden rounded-md hover-elevate active-elevate-2 cursor-pointer" data-testid="banner-adidas">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-red-300"></div>
            <div className="absolute inset-0 flex items-end justify-center p-6 sm:p-8">
              <Button variant="outline" className="bg-background/95 backdrop-blur-sm font-bold" data-testid="button-adidas-ver-todo">
                VER TODO
              </Button>
            </div>
            <div className="absolute top-6 left-6">
              <span className="text-2xl sm:text-3xl font-bold text-foreground">ADIDAS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
