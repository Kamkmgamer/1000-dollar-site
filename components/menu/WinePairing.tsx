"use client";

import { motion } from "framer-motion";
import { Wine } from "lucide-react";

interface WinePairingProps {
  dishes: { name: string; wine: string; vintage?: string }[];
}

export function WinePairing({ dishes }: WinePairingProps) {
  return (
    <div className="bg-obsidian rounded-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <Wine className="w-6 h-6 text-gold" />
        <h3 className="font-heading text-2xl text-ivory">Wine Pairings</h3>
      </div>

      <div className="space-y-4">
        {dishes.map((pairing, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4 pb-4 border-b border-gold/20 last:border-0"
          >
            <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
            <div>
              <p className="font-heading text-ivory mb-1">{pairing.name}</p>
              <p className="font-body text-ivory/70 text-sm">
                {pairing.wine}
                {pairing.vintage && (
                  <span className="text-gold ml-2">({pairing.vintage})</span>
                )}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
