import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ExploraSection from "@/components/ExploraSection";
import BrandBanners from "@/components/BrandBanners";
import ProductGrid from "@/components/ProductGrid";
import GazelleFeature from "@/components/GazelleFeature";
import GenderCategories from "@/components/GenderCategories";
import ConverseCollection from "@/components/ConverseCollection";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <ExploraSection />
        <BrandBanners />
        <ProductGrid />
        <GazelleFeature />
        <GenderCategories />
        <ConverseCollection />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
}
