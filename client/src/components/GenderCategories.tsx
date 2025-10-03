const categories = [
  { id: 1, title: "HOMBRE", gradient: "from-slate-700 to-slate-900", testId: "category-hombre" },
  { id: 2, title: "MUJER", gradient: "from-blue-100 to-blue-200", testId: "category-mujer" },
  { id: 3, title: "JUNIOR", gradient: "from-orange-200 to-orange-300", testId: "category-junior" },
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
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} transition-transform duration-300 group-hover:scale-105`}></div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              <div className="absolute top-6 left-6">
                <h3 className={`text-2xl sm:text-3xl font-bold ${category.id === 1 ? 'text-white' : 'text-foreground'}`} data-testid={`text-${category.title.toLowerCase()}`}>
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
