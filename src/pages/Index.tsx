import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeatureGrid />
      <Footer />
    </div>
  );
};

export default Index;
