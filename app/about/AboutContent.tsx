"use client";

import { motion } from "framer-motion";
import { Award, Clock, Users, Heart } from "lucide-react";

const timeline = [
  { year: "1987", event: "Bella Vista founded by the Rossi family in Manhattan" },
  { year: "1995", event: "Awarded first Michelin star" },
  { year: "2003", event: "Expansion to current elegant location" },
  { year: "2012", event: "Executive Chef Marco Benedetti joins the team" },
  { year: "2018", event: "Complete renovation and private dining expansion" },
  { year: "2023", event: "Celebrating 35 years of culinary excellence" },
];

const team = [
  {
    name: "Marco Benedetti",
    role: "Executive Chef",
    bio: "With over 20 years of experience in Michelin-starred kitchens across Italy, Chef Marco brings passion and innovation to every dish.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=400",
  },
  {
    name: "Sofia Carlucci",
    role: "Pastry Chef",
    bio: "Trained in the finest patisseries of Paris and Milan, Sofia creates desserts that are both visually stunning and unforgettable.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=400",
  },
  {
    name: "Antonio Moretti",
    role: "Sommelier",
    bio: "A certified sommelier with an encyclopedic knowledge of Italian wines, Antonio curates our extensive wine cellar.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
  },
  {
    name: "Elena Rossi",
    role: "General Manager",
    bio: "Third-generation owner, Elena continues her family's legacy of warm hospitality and exceptional service.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
  },
];

const awards = [
  { title: "Michelin Star", year: "2023" },
  { title: "Wine Spectator Award of Excellence", year: "2023" },
  { title: "OpenTable Diners' Choice", year: "2023" },
  { title: "Zagat Top Italian Restaurant", year: "2022" },
];

const stats = [
  { icon: Clock, value: "35+", label: "Years of Excellence" },
  { icon: Users, value: "50K+", label: "Happy Guests" },
  { icon: Award, value: "15+", label: "Awards Won" },
  { icon: Heart, value: "100%", label: "Passion" },
];

export function AboutContent() {
  return (
    <>
      <section className="relative pt-32 pb-24 bg-obsidian overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074')`,
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
              Our Story
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-ivory mb-6">
              About Bella Vista
            </h1>
            <div className="w-24 h-px bg-gold mx-auto" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-ui text-gold tracking-[0.3em] uppercase text-sm mb-4">
                Since 1987
              </p>
              <h2 className="font-heading text-4xl text-obsidian mb-6">
                A Legacy of Excellence
              </h2>
              <div className="w-24 h-px bg-gold mb-8" />

              <div className="font-body text-charcoal leading-relaxed space-y-6">
                <p>
                  Bella Vista was born from a dream to bring the authentic flavors of Italy
                  to the heart of New York. Founded by the Rossi family in 1987, our
                  restaurant began as a small trattoria serving family recipes passed down
                  through generations.
                </p>
                <p>
                  Today, we continue that tradition while embracing innovation. Under the
                  guidance of Executive Chef Marco Benedetti, we blend time-honored
                  techniques with contemporary creativity, creating dishes that honor our
                  heritage while surprising the palate.
                </p>
                <p>
                  Every ingredient tells a story. From the sun-ripened tomatoes of San
                  Marzano to the delicate truffles of Alba, we source only the finest
                  products, treating each with the respect it deserves.
                </p>
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
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600"
                  alt="Bella Vista Restaurant"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-burgundy">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-gold mx-auto mb-4" />
                <p className="font-display text-4xl text-ivory mb-2">{stat.value}</p>
                <p className="font-ui text-sm text-ivory/70 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-ui text-gold tracking-[0.3em] uppercase text-sm mb-4">
              Our Journey
            </p>
            <h2 className="font-heading text-4xl text-obsidian mb-6">
              Our History
            </h2>
            <div className="w-24 h-px bg-gold mx-auto" />
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 pb-8 last:pb-0 relative"
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-gold rounded-full" />
                  {index < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-gold/30 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="font-ui text-gold text-lg">{item.year}</span>
                  <p className="font-body text-charcoal mt-1">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-obsidian">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-ui text-gold tracking-[0.3em] uppercase text-sm mb-4">
              Leadership
            </p>
            <h2 className="font-heading text-4xl text-ivory mb-6">
              Meet Our Team
            </h2>
            <div className="w-24 h-px bg-gold mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-lg overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-heading text-xl text-ivory">{member.name}</h3>
                <p className="font-ui text-sm text-gold mb-3">{member.role}</p>
                <p className="font-body text-sm text-ivory/70 leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
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
              Recognition
            </p>
            <h2 className="font-heading text-4xl text-obsidian mb-6">
              Awards & Press
            </h2>
            <div className="w-24 h-px bg-gold mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-cream rounded-lg text-center border border-gold/20"
              >
                <Award className="w-8 h-8 text-gold mx-auto mb-4" />
                <h4 className="font-heading text-lg text-obsidian mb-1">
                  {award.title}
                </h4>
                <p className="font-ui text-sm text-charcoal">{award.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
