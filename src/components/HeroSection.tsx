import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PreOrderDialog from "@/components/PreOrderDialog";

import keyboardOriginal from "@/assets/contour-v1.png";
import keyboardSunset from "@/assets/keyboard-sunset.png";
import keyboardRetro from "@/assets/keyboard-retro.png";
import keyboardGenger from "@/assets/keyboard-genger.png";
import keyboardMarble from "@/assets/keyboard-marble.png";

const styles = [
  { name: "Topography", img: keyboardOriginal },
  { name: "Sunset Gradient", img: keyboardSunset },
  { name: "Retro Primary", img: keyboardRetro },
  { name: "Genger Edition", img: keyboardGenger },
  { name: "Black Marble", img: keyboardMarble },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const prev = () => setCurrent((c) => (c - 1 + styles.length) % styles.length);
  const next = () => setCurrent((c) => (c + 1) % styles.length);

  return (
    <>
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

        {/* Keyboard carousel */}
        <div className="relative z-10 w-full max-w-3xl flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-0 md:-left-14 z-20 p-2 rounded-full bg-muted/60 hover:bg-muted text-foreground transition-colors"
            aria-label="Previous style"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={styles[current].img}
                alt={`Contour V1 — ${styles[current].name}`}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35 }}
                className="w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
              />
            </AnimatePresence>
          </div>

          <button
            onClick={next}
            className="absolute right-0 md:-right-14 z-20 p-2 rounded-full bg-muted/60 hover:bg-muted text-foreground transition-colors"
            aria-label="Next style"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Style label */}
        <p className="mt-4 text-sm text-muted-foreground z-10 tracking-wide">
          {styles[current].name}
          <span className="ml-3 text-xs text-muted-foreground/60">{current + 1}/{styles.length}</span>
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 z-10 flex flex-col items-center gap-3"
        >
          <span className="text-3xl font-display font-bold text-foreground">€169.99</span>
          <button
            onClick={() => setDialogOpen(true)}
            className="bg-primary text-primary-foreground px-10 py-3 rounded-md font-medium text-base hover:opacity-90 transition-opacity"
          >
            Pre-Order Now
          </button>
        </motion.div>
      </section>

      <PreOrderDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        selectedStyle={styles[current].name}
      />
    </>
  );
};

export default HeroSection;
