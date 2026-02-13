"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Ambiance", "Dishes", "Events", "Kitchen"];

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800",
    alt: "Restaurant interior",
    category: "Ambiance",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800",
    alt: "Fine dining setup",
    category: "Ambiance",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800",
    alt: "Truffle risotto",
    category: "Dishes",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800",
    alt: "Osso buco",
    category: "Dishes",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800",
    alt: "Private dining room",
    category: "Ambiance",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800",
    alt: "Bar area",
    category: "Ambiance",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=800",
    alt: "Chef plating",
    category: "Kitchen",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=800",
    alt: "Lobster linguine",
    category: "Dishes",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800",
    alt: "Elegant table setting",
    category: "Ambiance",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800",
    alt: "Gourmet dish",
    category: "Dishes",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800",
    alt: "Kitchen action",
    category: "Kitchen",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800",
    alt: "Wedding reception",
    category: "Events",
  },
];

export function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage,
    );
    if (direction === "prev") {
      const newIndex =
        currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
      setSelectedImage(filteredImages[newIndex].id);
    } else {
      const newIndex =
        currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
      setSelectedImage(filteredImages[newIndex].id);
    }
  };

  return (
    <>
      <section className="relative pt-32 pb-24 bg-obsidian overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-obsidian/50 to-obsidian" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="font-ui text-gold tracking-[0.3em] uppercase text-sm mb-4">
              Visual Journey
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-ivory mb-6">
              Our Gallery
            </h1>
            <div className="w-24 h-px bg-gold mx-auto mb-8" />
            <p className="font-body text-ivory/80 max-w-2xl mx-auto leading-relaxed">
              Step into the world of Bella Vista through our curated collection
              of images showcasing our cuisine, ambiance, and memorable moments.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-cream sticky top-20 z-20 border-b border-gold/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 font-ui text-sm uppercase tracking-wider transition-all duration-300",
                  activeCategory === category
                    ? "bg-burgundy text-ivory"
                    : "bg-ivory text-charcoal border border-gold/30 hover:border-gold",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-ivory">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative aspect-4/3 cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-obsidian/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <p className="font-heading text-xl text-ivory">
                        {image.alt}
                      </p>
                      <p className="font-ui text-sm text-gold">
                        {image.category}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-obsidian/95 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 text-ivory hover:text-gold transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
              className="absolute left-6 p-3 text-ivory hover:text-gold transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={galleryImages.find((img) => img.id === selectedImage)?.src}
              alt={galleryImages.find((img) => img.id === selectedImage)?.alt}
              className="max-w-[90vw] max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
              className="absolute right-6 p-3 text-ivory hover:text-gold transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
