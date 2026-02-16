import { motion } from "framer-motion";
import keyboardImg from "@/assets/contour-v1.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-center mb-12 z-10"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
        Introducing
      </p>
      <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight text-foreground mb-4">
        Contour V1
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto">
        Precision-milled. Topography-inspired. Built for those who demand more.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative z-10 w-full max-w-3xl"
    >
      <img
        src={keyboardImg}
        alt="Contour V1 Keyboard"
        className="w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
      />
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="mt-12 z-10 flex flex-col items-center gap-3"
    >
      <span className="text-3xl font-display font-bold text-foreground">$189</span>
      <a
        href="#buy"
        className="bg-primary text-primary-foreground px-10 py-3 rounded-md font-medium text-base hover:opacity-90 transition-opacity"
      >
        Pre-Order Now
      </a>
    </motion.div>
  </section>
);

export default HeroSection;
