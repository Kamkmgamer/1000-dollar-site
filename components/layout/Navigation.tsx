"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const moreNavLinks = [
  { href: "/private-dining", label: "Private Dining" },
  { href: "/gift-cards", label: "Gift Cards" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-more-dropdown]')) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-ivory/95 backdrop-blur-md shadow-lg py-3"
            : "bg-obsidian/85 backdrop-blur-md py-5"
        )}
      >
        <nav className="container mx-auto px-6 flex items-start justify-between">
          <Link href="/" className="group relative z-10 self-start">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex flex-col items-start"
            >
              <span className={cn(
                "font-display text-2xl md:text-3xl lg:text-4xl tracking-wide whitespace-nowrap transition-colors duration-500",
                isScrolled ? "text-obsidian" : "text-ivory"
              )}>
                Bella Vista
              </span>
              <span className="font-ui text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase">
                Fine Dining
              </span>
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-start gap-8 pt-1">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-ui text-sm tracking-wider uppercase transition-colors relative group",
                  pathname === link.href
                    ? "text-gold"
                    : isScrolled
                      ? "text-charcoal hover:text-gold"
                      : "text-ivory/90 hover:text-gold"
                )}
              >
                {link.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-gold"
                  initial={{ width: 0 }}
                  animate={{ width: pathname === link.href ? "100%" : 0 }}
                  whileHover={{ width: "100%" }}
                />
              </Link>
            ))}

            <div className="relative" data-more-dropdown>
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className={cn(
                  "font-ui text-sm tracking-wider uppercase transition-colors relative group flex items-center gap-1",
                  isScrolled
                    ? "text-charcoal hover:text-gold"
                    : "text-ivory/90 hover:text-gold"
                )}
              >
                More
                <ChevronDown className={`w-4 h-4 transition-transform ${isMoreOpen ? "rotate-180" : ""}`} />
              </button>

              {isMoreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-ivory rounded-lg shadow-xl py-2 z-50"
                >
                  {moreNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "block px-4 py-2 font-ui text-sm tracking-wider uppercase transition-colors",
                        pathname === link.href
                          ? "text-gold bg-gold/10"
                          : "text-charcoal hover:text-gold hover:bg-gold/5"
                      )}
                      onClick={() => setIsMoreOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          <div className="hidden lg:flex items-start gap-4 pt-1">
            <a
              href="tel:+15551234567"
              className={cn(
                "flex items-center gap-2 font-ui text-sm transition-colors pt-1",
                isScrolled
                  ? "text-charcoal hover:text-gold"
                  : "text-ivory/90 hover:text-gold"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </a>
            <Link
              href="/contact#reservations"
              className="px-6 py-2 bg-burgundy text-ivory font-ui text-sm tracking-wider uppercase rounded hover:bg-burgundy-light transition-colors whitespace-nowrap"
            >
              Reserve
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={cn(
              "lg:hidden p-2 transition-colors duration-500 self-start",
              isScrolled ? "text-obsidian" : "text-ivory"
            )}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-obsidian/95 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-12">
                <span className="font-display text-3xl text-ivory">Bella Vista</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-ivory"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {[...mainNavLinks, ...moreNavLinks].map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "font-heading text-2xl py-2 transition-colors",
                        pathname === link.href
                          ? "text-gold"
                          : "text-ivory hover:text-gold"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto">
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 text-ivory mb-6"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-ui">(555) 123-4567</span>
                </a>
                <Link
                  href="/contact#reservations"
                  className="block w-full py-4 bg-gold text-obsidian font-ui text-center tracking-wider uppercase rounded"
                >
                  Make a Reservation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
