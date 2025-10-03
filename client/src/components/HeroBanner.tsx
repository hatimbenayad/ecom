export default function HeroBanner() {
  return (
    <section className="relative w-full bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
      <div className="relative aspect-[21/9] sm:aspect-[21/8] md:aspect-[21/7] lg:aspect-[21/6] flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-100/40 via-red-100/20 to-transparent"></div>
        
        <div className="relative z-10 text-center px-4">
          <div className="mb-4">
            <span className="text-xl sm:text-2xl md:text-3xl font-light text-muted-foreground">NB</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-2" data-testid="text-hero-title">
            The 740
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">New Balance</p>
        </div>
      </div>
    </section>
  );
}
