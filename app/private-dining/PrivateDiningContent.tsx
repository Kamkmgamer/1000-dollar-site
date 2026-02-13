"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Calendar, Wine, UtensilsCrossed, Camera } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { toast } from "@/components/ui/Toast";

const rooms = [
  {
    id: 1,
    name: "The Wine Room",
    capacity: "8-12 guests",
    description: "An intimate space surrounded by our finest vintages, perfect for special celebrations.",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=600",
    features: ["Climate-controlled wine storage", "Custom wine pairings", "Audio system"],
  },
  {
    id: 2,
    name: "The Garden Terrace",
    capacity: "20-40 guests",
    description: "An elegant indoor-outdoor space with natural light and garden views.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=600",
    features: ["Natural lighting", "Garden views", "Flexible seating"],
  },
  {
    id: 3,
    name: "The Grand Salon",
    capacity: "50-80 guests",
    description: "Our largest private space, ideal for weddings, galas, and corporate events.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600",
    features: ["Dance floor", "AV equipment", "Bridal suite access"],
  },
];

const sampleMenus = [
  {
    name: "Celebration Menu",
    price: "$125 per person",
    courses: ["Seasonal Antipasti", "Choice of Primi", "Choice of Secondi", "Dolci Selection"],
  },
  {
    name: "Executive Menu",
    price: "$95 per person",
    courses: ["Antipasti Platter", "Pasta Course", "Entrée Selection", "Chef's Dessert"],
  },
  {
    name: "Chef's Tasting",
    price: "$185 per person",
    courses: ["7 Courses", "Wine Pairings", "Chef Introduction", "Custom Menu Card"],
  },
];

export function PrivateDiningContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    room: "",
    occasion: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "private-dining" }),
      });
      if (response.ok) {
        toast("Thank you! We'll contact you within 24 hours.", "success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          guests: "",
          room: "",
          occasion: "",
          message: "",
        });
      } else {
        toast("Something went wrong. Please try again.", "error");
      }
    } catch {
      toast("Something went wrong. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative pt-32 pb-24 bg-obsidian overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 to-obsidian" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="font-ui text-gold tracking-[0.3em] uppercase text-sm mb-4">
              Exclusive Events
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-ivory mb-6">
              Private Dining
            </h1>
            <div className="w-24 h-px bg-gold mx-auto mb-8" />
            <p className="font-body text-ivory/80 max-w-2xl mx-auto leading-relaxed">
              Create unforgettable memories in our elegant private dining spaces.
              From intimate celebrations to grand events, our dedicated team ensures
              every detail is perfect.
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
              Our Spaces
            </p>
            <h2 className="font-heading text-4xl text-obsidian mb-6">
              Private Dining Rooms
            </h2>
            <div className="w-24 h-px bg-gold mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-cream rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl text-obsidian mb-1">
                    {room.name}
                  </h3>
                  <p className="font-ui text-sm text-gold mb-4">{room.capacity}</p>
                  <p className="font-body text-charcoal text-sm mb-4">
                    {room.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {room.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-ivory text-charcoal font-ui text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-obsidian">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-ui text-gold tracking-[0.3em] uppercase text-sm mb-4">
                What We Offer
              </p>
              <h2 className="font-heading text-4xl text-ivory mb-6">
                Event Services
              </h2>
              <div className="w-24 h-px bg-gold mb-8" />

              <div className="space-y-6">
                {[
                  {
                    icon: UtensilsCrossed,
                    title: "Custom Menus",
                    description:
                      "Our chef will create a bespoke menu tailored to your preferences and dietary requirements.",
                  },
                  {
                    icon: Wine,
                    title: "Wine Pairings",
                    description:
                      "Expert sommelier-curated wine selections to complement your menu perfectly.",
                  },
                  {
                    icon: Camera,
                    title: "Photography",
                    description:
                      "Professional photography packages available to capture your special moments.",
                  },
                  {
                    icon: Calendar,
                    title: "Event Planning",
                    description:
                      "Dedicated event coordinator to assist with every detail of your celebration.",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-burgundy rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-ivory" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg text-ivory mb-1">
                        {service.title}
                      </h4>
                      <p className="font-body text-sm text-ivory/70">
                        {service.description}
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
            >
              <p className="font-ui text-gold tracking-[0.3em] uppercase text-sm mb-4">
                Sample Menus
              </p>
              <h2 className="font-heading text-4xl text-ivory mb-6">
                Menu Options
              </h2>
              <div className="w-24 h-px bg-gold mb-8" />

              <div className="space-y-6">
                {sampleMenus.map((menu, index) => (
                  <motion.div
                    key={menu.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-charcoal/30 rounded-lg border border-gold/20"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-heading text-xl text-ivory">{menu.name}</h4>
                      <span className="font-ui text-gold">{menu.price}</span>
                    </div>
                    <ul className="space-y-2">
                      {menu.courses.map((course) => (
                        <li
                          key={course}
                          className="flex items-center gap-2 font-body text-sm text-ivory/70"
                        >
                          <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                          {course}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="inquiry" className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <p className="font-ui text-gold tracking-[0.3em] uppercase text-sm mb-4">
                Book Your Event
              </p>
              <h2 className="font-heading text-4xl text-obsidian mb-6">
                Inquiry Form
              </h2>
              <div className="w-24 h-px bg-gold mx-auto" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-ui text-sm text-charcoal mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-ivory border border-gold/30 rounded-lg font-body text-obsidian focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block font-ui text-sm text-charcoal mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-ivory border border-gold/30 rounded-lg font-body text-obsidian focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-ui text-sm text-charcoal mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-ivory border border-gold/30 rounded-lg font-body text-obsidian focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block font-ui text-sm text-charcoal mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-ivory border border-gold/30 rounded-lg font-body text-obsidian focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-ui text-sm text-charcoal mb-2">
                    Number of Guests *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({ ...formData, guests: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-ivory border border-gold/30 rounded-lg font-body text-obsidian focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block font-ui text-sm text-charcoal mb-2">
                    Preferred Room
                  </label>
                  <select
                    value={formData.room}
                    onChange={(e) =>
                      setFormData({ ...formData, room: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-ivory border border-gold/30 rounded-lg font-body text-obsidian focus:outline-none focus:border-gold"
                  >
                    <option value="">Select a room</option>
                    {rooms.map((room) => (
                      <option key={room.id} value={room.name}>
                        {room.name} ({room.capacity})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-ui text-sm text-charcoal mb-2">
                  Occasion
                </label>
                <select
                  value={formData.occasion}
                  onChange={(e) =>
                    setFormData({ ...formData, occasion: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-ivory border border-gold/30 rounded-lg font-body text-obsidian focus:outline-none focus:border-gold"
                >
                  <option value="">Select occasion</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="wedding">Wedding Rehearsal</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block font-ui text-sm text-charcoal mb-2">
                  Additional Details
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about your event, dietary requirements, or special requests..."
                  className="w-full px-4 py-3 bg-ivory border border-gold/30 rounded-lg font-body text-obsidian focus:outline-none focus:border-gold resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
