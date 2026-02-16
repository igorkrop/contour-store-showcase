import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface PreOrderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedStyle: string;
}

const PreOrderDialog = ({ open, onOpenChange, selectedStyle }: PreOrderDialogProps) => {
  const [form, setForm] = useState({ name: "", email: "", address: "", country: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = (val: boolean) => {
    onOpenChange(val);
    if (!val) {
      setSubmitted(false);
      setForm({ name: "", email: "", address: "", country: "" });
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Pre-Order Contour V1</DialogTitle>
          <DialogDescription>
            Style: <span className="text-foreground font-medium">{selectedStyle}</span>
          </DialogDescription>
        </DialogHeader>

        {/* Specs summary */}
        <div className="grid grid-cols-2 gap-3 text-sm border border-border rounded-md p-4 bg-muted/30">
          <div><span className="text-muted-foreground">Layout:</span> <span className="text-foreground">75%</span></div>
          <div><span className="text-muted-foreground">Case:</span> <span className="text-foreground">CNC Aluminum</span></div>
          <div><span className="text-muted-foreground">Mount:</span> <span className="text-foreground">Gasket</span></div>
          <div><span className="text-muted-foreground">PCB:</span> <span className="text-foreground">Hot-swap</span></div>
          <div><span className="text-muted-foreground">Connectivity:</span> <span className="text-foreground">USB-C / BT 5.1</span></div>
          <div><span className="text-muted-foreground">Weight:</span> <span className="text-foreground">~1.6 kg</span></div>
        </div>

        <p className="text-xl font-display font-bold text-foreground text-center">€169.99</p>

        {submitted ? (
          <div className="text-center py-6">
            <p className="text-foreground font-semibold text-lg">Thank you!</p>
            <p className="text-muted-foreground text-sm mt-1">Your pre-order has been received.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              required
              type="text"
              placeholder="Full Name"
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-3 py-2 rounded-md bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              required
              type="email"
              placeholder="Email"
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-3 py-2 rounded-md bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              required
              type="text"
              placeholder="Shipping Address"
              maxLength={300}
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="w-full px-3 py-2 rounded-md bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              required
              type="text"
              placeholder="Country"
              maxLength={100}
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
              className="w-full px-3 py-2 rounded-md bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
            >
              Confirm Pre-Order — €169.99
            </button>
            <p className="text-xs text-muted-foreground text-center">Free shipping worldwide · 1-year warranty</p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PreOrderDialog;
