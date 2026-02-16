import { motion } from "framer-motion";

const features = [
  {
    title: "CNC Aluminum Case",
    description: "6063 aluminum, anodized black finish with topographic engravings across the top bezel.",
  },
  {
    title: "Rotary Encoder",
    description: "Precision machined brass knob with detented scroll — volume, zoom, or anything you map.",
  },
  {
    title: "Gasket Mount",
    description: "Silicone gasket dampening for a soft, even typing feel with zero case ping.",
  },
  {
    title: "Hot-Swap PCB",
    description: "5-pin hot-swap sockets. South-facing LEDs. QMK/VIA compatible out of the box.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => (
  <section id="features" className="relative py-28 px-6 z-10">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16 text-center"
      >
        Engineered Details
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={item}
            className="bg-card border border-border rounded-lg p-8 hover:border-muted-foreground/30 transition-colors"
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              {f.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FeaturesSection;
