"use client";

import { motion } from "framer-motion";
import { Gift, CreditCard, Mail, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";

const giftCardOptions = [
  { amount: "$100", description: "Perfect for a romantic dinner for two" },
  { amount: "$250", description: "Ideal for a special celebration" },
  { amount: "$500", description: "Great for a family gathering" },
  { amount: "$1000", description: "An unforgettable culinary experience" },
];

const features = [
  {
    icon: Gift,
    title: "Physical Gift Cards",
    description:
      "Beautifully designed gift cards presented in an elegant envelope, perfect for gifting in person.",
  },
  {
    icon: Mail,
    title: "Digital Gift Cards",
    description:
      "Instant delivery via email with customizable messages. Perfect for last-minute gifting.",
  },
  {
    icon: CreditCard,
    title: "Custom Amounts",
    description:
      "Choose any amount that fits your budget. Our team will create a personalized card.",
  },
  {
    icon: Clock,
    title: "No Expiration",
    description:
      "Our gift cards never expire, giving recipients the freedom to visit whenever they choose.",
  },
];

export function GiftCardsContent() {
  return (
    <>
      <section className="relative pt-32 pb-24 bg-obsidian overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=2070')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 to-obsidian" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gold/20 rounded-full mb-6"
            >
              <Gift className="w-10 h-10 text-gold" />
            </motion.div>
            <p className="font-ui text-gold tracking-[0.3em] uppercase text-sm mb-4">
              The Perfect Gift
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-ivory mb-6">
              Gift Cards
            </h1>
            <div className="w-24 h-px bg-gold mx-auto mb-8" />
            <p className="font-body text-ivory/80 max-w-2xl mx-auto leading-relaxed">
              Share the gift of an unforgettable dining experience. Bella Vista gift
              cards are perfect for birthdays, anniversaries, holidays, or any special
              occasion.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-ui text-gold tracking-[0.3em] uppercase text-sm mb-4">
              Choose Your Amount
            </p>
            <h2 className="font-heading text-4xl text-obsidian mb-6">
              Gift Card Options
            </h2>
            <div className="w-24 h-px bg-gold mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {giftCardOptions.map((option, index) => (
              <motion.div
                key={option.amount}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group h-full"
              >
                <div className="p-8 bg-cream rounded-lg border border-gold/20 text-center hover:border-gold transition-colors h-full flex flex-col">
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Star className="w-4 h-4 text-gold" />
                  </div>
                  <span className="font-display text-4xl text-gold mb-4 block">
                    {option.amount}
                  </span>
                  <p className="font-body text-sm text-charcoal mt-auto">
                    {option.description}
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
            <p className="font-body text-charcoal mb-4">
              Need a custom amount? We&apos;re happy to accommodate.
            </p>
            <Button variant="outline">Contact Us</Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-obsidian">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-ui text-gold tracking-[0.3em] uppercase text-sm mb-4">
                Options Available
              </p>
              <h2 className="font-heading text-4xl text-ivory mb-6">
                How It Works
              </h2>
              <div className="w-24 h-px bg-gold mb-8" />

              <div className="space-y-6">
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
                      <h4 className="font-heading text-lg text-ivory mb-1">
                        {feature.title}
                      </h4>
                      <p className="font-body text-sm text-ivory/70">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold" />
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-burgundy to-obsidian p-8 flex flex-col items-center justify-center text-center">
                <div className="border-2 border-gold/50 rounded-lg p-6 w-full max-w-sm">
                  <p className="font-display text-2xl text-ivory mb-2">
                    Bella Vista
                  </p>
                  <p className="font-ui text-gold text-xs tracking-[0.3em] uppercase mb-4">
                    Gift Card
                  </p>
                  <div className="h-px bg-gold/30 my-4" />
                  <p className="font-heading text-4xl text-gold">$XXX</p>
                  <p className="font-ui text-xs text-ivory/50 mt-4">
                    No Expiration Date
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="font-ui text-gold tracking-[0.3em] uppercase text-sm mb-4">
              Purchase Today
            </p>
            <h2 className="font-heading text-4xl text-obsidian mb-6">
              Get Your Gift Card
            </h2>
            <div className="w-24 h-px bg-gold mx-auto mb-8" />

            <p className="font-body text-charcoal leading-relaxed mb-8">
              Gift cards can be purchased in person at our restaurant or by calling us
              directly. Digital gift cards can be arranged via phone or email.
            </p>

            <div className="p-8 bg-ivory rounded-lg border border-gold/20 mb-8">
              <p className="font-ui text-sm text-charcoal uppercase tracking-wider mb-4">
                Contact us to purchase
              </p>
              <p className="font-heading text-2xl text-obsidian mb-2">
                (555) 123-4567
              </p>
              <p className="font-body text-charcoal">info@bellavista.com</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary">
                <a href="tel:+15551234567">Call Now</a>
              </Button>
              <Button variant="outline">
                <a href="mailto:gifts@bellavista.com">Email Us</a>
              </Button>
            </div>

            <p className="font-ui text-xs text-charcoal/60 mt-8">
              Gift cards are non-refundable but never expire. Cannot be redeemed for
              cash. Valid for dining only.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
