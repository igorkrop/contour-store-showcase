import { useState } from "react";
import TopoBackground from "@/components/TopoBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SpecsSection from "@/components/SpecsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import PreOrderDialog from "@/components/PreOrderDialog";

const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background">
      <TopoBackground />
      <Navbar onPreOrder={() => setDialogOpen(true)} />
      <HeroSection />
      <FeaturesSection />
      <SpecsSection />
      <CTASection onPreOrder={() => setDialogOpen(true)} />
      <Footer />
      <PreOrderDialog open={dialogOpen} onOpenChange={setDialogOpen} selectedStyle="Topography" />
    </div>
  );
};

export default Index;
