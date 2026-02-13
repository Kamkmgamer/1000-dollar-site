"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MenuSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function MenuSection({
  title,
  description,
  children,
  defaultOpen = true,
}: MenuSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gold/20 pb-8 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 group"
      >
        <div className="text-left">
          <h3 className="font-heading text-2xl text-obsidian group-hover:text-burgundy transition-colors">
            {title}
          </h3>
          {description && (
            <p className="font-body text-charcoal text-sm mt-1">{description}</p>
          )}
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-gold text-2xl"
        >
          ▾
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        className="overflow-hidden"
      >
        <div className="grid gap-4 pt-4">{children}</div>
      </motion.div>
    </div>
  );
}
