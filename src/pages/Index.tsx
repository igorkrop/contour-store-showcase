import TopoBackground from "@/components/TopoBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SpecsSection from "@/components/SpecsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="relative min-h-screen bg-background">
    <TopoBackground />
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <SpecsSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
