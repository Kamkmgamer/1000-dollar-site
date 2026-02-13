"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { toast } from "@/components/ui/Toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast("Thank you for subscribing!", "success");
        setEmail("");
      } else {
        toast("Something went wrong. Please try again.", "error");
      }
    } catch {
      toast("Something went wrong. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-ui text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Stay Connected
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-obsidian mb-6">
            Join Our Newsletter
          </h2>
          <div className="w-24 h-px bg-gold mx-auto mb-8" />

          <p className="font-body text-charcoal leading-relaxed mb-8">
            Be the first to know about seasonal menus, special events, and exclusive
            offers. Join our community of food enthusiasts.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 bg-ivory border border-gold/30 rounded-lg font-body text-obsidian placeholder:text-charcoal/50 focus:outline-none focus:border-gold transition-colors"
            />
            <Button type="submit" variant="secondary" disabled={isSubmitting}>
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          <p className="font-ui text-xs text-charcoal/60 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
