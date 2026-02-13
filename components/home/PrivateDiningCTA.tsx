"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Wine, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/Button";

const features = [
  {
    icon: Users,
    title: "Private Events",
    description: "Host unforgettable celebrations in our elegant private dining rooms",
  },
  {
    icon: Wine,
    title: "Wine Cellar",
    description: "Over 500 curated wines from the world's finest vineyards",
  },
  {
    icon: UtensilsCrossed,
    title: "Bespoke Menus",
    description: "Custom menus crafted for your special occasions",
  },
];

export function PrivateDiningCTA() {
  return (
    <section className="py-24 bg-ivory relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-ui text-gold tracking-[0.3em] uppercase text-sm mb-4">
              Exclusive Events
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-obsidian mb-6">
              Private Dining
            </h2>
            <div className="w-24 h-px bg-gold mb-8" />

            <p className="font-body text-charcoal leading-relaxed mb-8">
              Elevate your special occasions with our private dining experiences.
              From intimate gatherings to grand celebrations, our dedicated events
              team ensures every detail is perfect.
            </p>

            <div className="grid gap-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-burgundy rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-ivory" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg text-obsidian mb-1">
                      {feature.title}
                    </h4>
                    <p className="font-body text-sm text-charcoal">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="primary">
              <Link href="/private-dining">Learn More</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=400"
                  alt="Private dining room"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=400"
                  alt="Fine dining presentation"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=400"
                  alt="Restaurant interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=400"
                  alt="Elegant dining setup"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
