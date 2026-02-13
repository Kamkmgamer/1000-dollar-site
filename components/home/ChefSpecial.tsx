"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function ChefSpecial() {
  return (
    <section className="py-24 bg-obsidian relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold" />
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=600"
                alt="Chef's Tasting Menu"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-ivory"
          >
            <p className="font-ui text-gold tracking-[0.3em] uppercase text-sm mb-4">
              Exclusive Experience
            </p>
            <h2 className="font-heading text-4xl md:text-5xl mb-6">
              Chef&apos;s Tasting Menu
            </h2>
            <div className="w-24 h-px bg-gold mb-8" />

            <p className="font-body text-ivory/80 leading-relaxed mb-6">
              Embark on a seven-course culinary journey curated by our Executive Chef.
              Each course is paired with premium wines, creating a harmonious symphony
              of flavors that showcase the finest seasonal ingredients.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span className="font-body text-ivory/80">7-course seasonal menu</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span className="font-body text-ivory/80">Premium wine pairings</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span className="font-body text-ivory/80">2.5-hour experience</span>
              </div>
            </div>

            <div className="flex items-baseline gap-2 mb-8">
              <span className="font-ui text-gold text-3xl">$185</span>
              <span className="font-body text-ivory/60">per person</span>
            </div>

            <Button variant="secondary">
              <Link href="/contact#reservations">Reserve Experience</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
