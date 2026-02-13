"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Star, Leaf } from "lucide-react";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  dietary: string[];
  isChefRecommendation?: boolean;
  image?: string;
}

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

export function MenuCard({ item, index }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={cn(
        "group relative p-6 bg-ivory rounded-lg transition-all duration-300 hover:shadow-lg",
        item.isChefRecommendation && "border border-gold"
      )}
    >
      {item.isChefRecommendation && (
        <div className="absolute -top-3 left-6 px-3 py-1 bg-gold text-obsidian font-ui text-xs uppercase tracking-wider rounded-full flex items-center gap-1">
          <Star className="w-3 h-3 fill-obsidian" />
          Chef&apos;s Choice
        </div>
      )}

      <div className="flex justify-between items-start mb-3">
        <h4 className="font-heading text-xl text-obsidian">{item.name}</h4>
        <span className="font-ui text-gold font-semibold text-lg">{item.price}</span>
      </div>

      <p className="font-body text-charcoal text-sm leading-relaxed mb-4">
        {item.description}
      </p>

      {item.dietary.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {item.dietary.map((diet) => (
            <span
              key={diet}
              className="inline-flex items-center gap-1 px-2 py-1 bg-cream text-charcoal font-ui text-xs rounded"
            >
              {diet === "vegetarian" || diet === "vegan" ? (
                <Leaf className="w-3 h-3" />
              ) : null}
              {diet}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
