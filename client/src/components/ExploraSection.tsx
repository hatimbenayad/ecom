import { Button } from "@/components/ui/button";

const categories = [
  { id: 1, title: "Zapatillas", image: "bg-gradient-to-br from-orange-200 to-amber-300", testId: "card-zapatillas" },
  { id: 2, title: "Converse", image: "bg-gradient-to-br from-slate-200 to-slate-300", testId: "card-converse" },
  { id: 3, title: "Apparel", image: "bg-gradient-to-br from-blue-200 to-indigo-300", testId: "card-apparel" },
  { id: 4, title: "Ofertas", image: "bg-gradient-to-br from-green-200 to-emerald-300", testId: "card-ofertas" },
];

export default function ExploraSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 uppercase" data-testid="text-explora">
          EXPLORA
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative aspect-[3/4] overflow-hidden rounded-md hover-elevate active-elevate-2 cursor-pointer"
              data-testid={category.testId}
            >
              <div className={`absolute inset-0 ${category.image} transition-transform duration-300 group-hover:scale-105`}></div>
              <div className="absolute inset-0 flex items-end justify-center p-6">
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
