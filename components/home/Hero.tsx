"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/50 to-obsidian/80 z-10" />
      
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070')`,
        }}
      />

      <div className="absolute inset-0 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, rgba(11,18,21,0.4) 70%)",
          }}
        />
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center flex flex-col items-center justify-center min-h-screen pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-20 h-px bg-gold" />
              <UtensilsCrossed className="w-8 h-8 text-gold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="w-20 h-px bg-gold" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-ui text-gold tracking-[0.4em] uppercase text-sm mb-6"
          >
            Est. 1987
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-ivory mb-6 leading-tight"
          >
            An Unforgettable
            <br />
            <span className="shimmer-text">Culinary Journey</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-body text-lg md:text-xl text-ivory/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Experience contemporary Italian cuisine crafted with passion, served in an
            atmosphere of timeless elegance. Every dish tells a story of tradition and
            innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="primary" size="lg">
              <Link href="/contact#reservations">Reserve Your Table</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-ivory/30 text-ivory hover:bg-ivory hover:text-obsidian">
              <Link href="/menu">Explore Menu</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-auto mb-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-gold" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
