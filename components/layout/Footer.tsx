"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/private-dining", label: "Private Dining" },
    { href: "/gift-cards", label: "Gift Cards" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Accessibility" },
  ],
};

const socialLinks = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-obsidian text-ivory">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-display text-3xl text-ivory">Bella Vista</span>
              <p className="font-ui text-xs tracking-[0.3em] text-gold uppercase mt-1">
                Fine Dining
              </p>
              <p className="mt-6 text-ivory/70 font-body leading-relaxed">
                An exquisite culinary journey featuring contemporary Italian cuisine in an
                elegant atmosphere.
              </p>
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-gold/30 rounded-full text-ivory hover:text-gold hover:border-gold transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-heading text-xl text-gold mb-6">Navigation</h4>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-ivory/70 hover:text-gold transition-colors font-ui text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-heading text-xl text-gold mb-6">Hours</h4>
              <ul className="space-y-3 text-ivory/70 font-body text-sm">
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-1 text-gold flex-shrink-0" />
                  <div>
                    <p className="text-ivory font-ui">Monday - Thursday</p>
                    <p>5:00 PM - 10:00 PM</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-1 text-gold flex-shrink-0" />
                  <div>
                    <p className="text-ivory font-ui">Friday - Saturday</p>
                    <p>5:00 PM - 11:00 PM</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-1 text-gold flex-shrink-0" />
                  <div>
                    <p className="text-ivory font-ui">Sunday</p>
                    <p>4:00 PM - 9:00 PM</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-heading text-xl text-gold mb-6">Contact</h4>
              <ul className="space-y-4 text-ivory/70 font-body text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-gold flex-shrink-0" />
                  <span>
                    123 Elegance Avenue
                    <br />
                    New York, NY 10001
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  <a
                    href="tel:+15551234567"
                    className="hover:text-gold transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                  <a
                    href="mailto:info@bellavista.com"
                    className="hover:text-gold transition-colors"
                  >
                    info@bellavista.com
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ivory/50 font-ui text-sm">
            &copy; {new Date().getFullYear()} Bella Vista. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-ivory/50 hover:text-gold transition-colors font-ui text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
