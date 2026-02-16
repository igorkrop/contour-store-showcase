import { motion } from "framer-motion";

const CTASection = () => (
  <section id="buy" className="relative py-32 px-6 z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto text-center"
    >
      <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
        Ready to Type Different?
      </h2>
      <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
        Limited first run. Ships Q2 2026. Secure yours before it's gone.
      </p>
      <div className="flex flex-col items-center gap-4">
        <span className="text-4xl font-display font-bold text-foreground">$189</span>
        <button className="bg-primary text-primary-foreground px-12 py-4 rounded-md font-semibold text-lg hover:opacity-90 transition-opacity">
          Pre-Order Contour V1
        </button>
        <p className="text-xs text-muted-foreground mt-2">Free shipping worldwide · 1-year warranty</p>
      </div>
    </motion.div>
  </section>
);

export default CTASection;
