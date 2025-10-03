import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 uppercase" data-testid="text-unete">
          JOIN US!
        </h2>
        <p className="text-lg mb-6" data-testid="text-newsletter-subtitle">
          Discover new arrivals, trends and offers with our newsletter!
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
            data-testid="input-newsletter-email"
          />
          <Button type="submit" className="font-bold" data-testid="button-suscribirme">
            Subscribe
          </Button>
        </form>
        
        <p className="text-sm text-muted-foreground mb-2" data-testid="text-discount-offer">
          Get 10% off your first purchase!
        </p>
        <p className="text-xs text-muted-foreground">
          Valid on non-discounted products*
        </p>
      </div>
    </section>
  );
}
