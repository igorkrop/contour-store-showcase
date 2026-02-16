import { motion } from "framer-motion";

const Navbar = () => (
  <motion.nav
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 backdrop-blur-md bg-background/70 border-b border-border"
  >
    <span className="font-display text-xl font-bold tracking-tight text-foreground">
      CONTOUR
    </span>
    <div className="flex items-center gap-8">
      <a href="#specs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        Specs
      </a>
      <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        Features
      </a>
      <a
        href="#buy"
        className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2 rounded-md hover:opacity-90 transition-opacity"
      >
        Buy Now
      </a>
    </div>
  </motion.nav>
);

export default Navbar;
