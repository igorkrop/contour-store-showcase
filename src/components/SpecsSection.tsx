import { motion } from "framer-motion";

const specs = [
  ["Layout", "75% (84 keys)"],
  ["Case Material", "CNC 6063 Aluminum"],
  ["Plate", "FR4 / Aluminum / PC"],
  ["Mount", "Gasket"],
  ["PCB", "Hot-swap, 5-pin, QMK/VIA"],
  ["Weight", "~1.8 kg assembled"],
  ["Connectivity", "USB-C, detachable"],
  ["Typing Angle", "6°"],
];

const SpecsSection = () => (
  <section id="specs" className="relative py-28 px-6 z-10 topo-pattern-subtle">
    <div className="max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16 text-center"
      >
        Specifications
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="border border-border rounded-lg overflow-hidden"
      >
        {specs.map(([label, value], i) => (
          <div
            key={label}
            className={`flex justify-between items-center px-6 py-4 ${
              i !== specs.length - 1 ? "border-b border-border" : ""
            } ${i % 2 === 0 ? "bg-card" : "bg-background"}`}
          >
            <span className="text-muted-foreground text-sm">{label}</span>
            <span className="text-foreground font-medium text-sm">{value}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SpecsSection;
