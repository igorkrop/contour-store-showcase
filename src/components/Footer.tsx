const Footer = () => (
  <footer className="relative z-10 border-t border-border py-8 px-6">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span>© 2026 Contour Keyboards</span>
      <div className="flex gap-6">
        <a href="#" className="hover:text-foreground transition-colors">Support</a>
        <a href="#" className="hover:text-foreground transition-colors">Shipping</a>
        <a href="#" className="hover:text-foreground transition-colors">Returns</a>
      </div>
    </div>
  </footer>
);

export default Footer;
