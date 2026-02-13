"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featuredDishes = [
  {
    id: 1,
    name: "Truffle Risotto",
    description: "Arborio rice, black truffle, aged parmesan, white wine reduction",
    price: "$48",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=500",
  },
  {
    id: 2,
    name: "Osso Buco",
    description: "Braised veal shanks, gremolata, saffron risotto Milanese",
    price: "$62",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500",
  },
  {
    id: 3,
    name: "Lobster Linguine",
    description: "Fresh Maine lobster, cherry tomatoes, garlic white wine sauce",
    price: "$58",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=500",
  },
  {
    id: 4,
    name: "Branzino al Forno",
    description: "Whole roasted Mediterranean sea bass, herbs, capers, lemon",
    price: "$54",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=500",
  },
];

export function FeaturedDishes() {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-ui text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Culinary Excellence
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-obsidian mb-6">
            Featured Dishes
          </h2>
          <div className="w-24 h-px bg-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-ivory rounded-lg overflow-hidden shadow-lg luxury-shadow hover:luxury-shadow-dark transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading text-xl text-obsidian">{dish.name}</h3>
                  <span className="font-ui text-gold font-semibold">{dish.price}</span>
                </div>
                <p className="font-body text-sm text-charcoal leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 font-ui text-burgundy hover:text-gold transition-colors group"
          >
            <span className="tracking-wider uppercase">View Full Menu</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
