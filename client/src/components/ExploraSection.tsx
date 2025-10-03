import { Button } from "@/components/ui/button";
import zapatillasImg from "@assets/stock_images/nike_adidas_athletic_ae6996a3.jpg";
import converseImg from "@assets/stock_images/modern_sneakers_shoe_77e78cd9.jpg";
import apparelImg from "@assets/stock_images/fashion_lifestyle_yo_349b6ece.jpg";
import ofertasImg from "@assets/stock_images/modern_sneakers_shoe_0e59b48f.jpg";

const categories = [
  { id: 1, title: "Sneakers", image: zapatillasImg, testId: "card-zapatillas" },
  { id: 2, title: "Converse", image: converseImg, testId: "card-converse" },
  { id: 3, title: "Apparel", image: apparelImg, testId: "card-apparel" },
  { id: 4, title: "Sale", image: ofertasImg, testId: "card-ofertas" },
];

export default function ExploraSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 uppercase" data-testid="text-explora">
          EXPLORE
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative aspect-[3/4] overflow-hidden rounded-md hover-elevate active-elevate-2 cursor-pointer"
              data-testid={category.testId}
            >
              <img 
                src={category.image} 
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 absolute inset-0 flex items-end justify-center p-6">
                <Button variant="secondary" className="font-bold" data-testid={`button-${category.title.toLowerCase()}`}>
                  {category.title}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
