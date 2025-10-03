import heroImage from "@assets/stock_images/nike_adidas_athletic_2c37209f.jpg";

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative aspect-[21/9] sm:aspect-[21/8] md:aspect-[21/7] lg:aspect-[21/6]">
        <img 
          src={heroImage} 
          alt="The 740 New Balance" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <div className="mb-4">
              <span className="text-xl sm:text-2xl md:text-3xl font-light text-white/90">NB</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-2" data-testid="text-hero-title">
              The 740
            </h1>
            <p className="text-sm sm:text-base text-white/80">New Balance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
