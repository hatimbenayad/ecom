import hombreImg from "@assets/stock_images/fashion_lifestyle_yo_51a09e31.jpg";
import mujerImg from "@assets/stock_images/fashion_lifestyle_yo_c9cc7599.jpg";
import juniorImg from "@assets/stock_images/fashion_lifestyle_yo_d1eccd28.jpg";

const categories = [
  { id: 1, title: "MEN", image: hombreImg, testId: "category-hombre" },
  { id: 2, title: "WOMEN", image: mujerImg, testId: "category-mujer" },
  { id: 3, title: "JUNIOR", image: juniorImg, testId: "category-junior" },
];

export default function GenderCategories() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
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
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute top-6 left-6 z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg" data-testid={`text-${category.title.toLowerCase()}`}>
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
