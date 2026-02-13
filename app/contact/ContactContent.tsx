"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ParkingCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { toast } from "@/components/ui/Toast";

const timeSlots = [
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
];

const occasions = [
  "Birthday",
  "Anniversary",
  "Business Dinner",
  "Date Night",
  "Special Occasion",
  "Other",
];

export function ContactContent() {
  const [reservationData, setReservationData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    requests: "",
  });
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleReservation = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reservationData),
      });
      if (response.ok) {
        toast("Reservation request submitted! We'll confirm shortly.", "success");
        setReservationData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          guests: "2",
          occasion: "",
          requests: "",
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

  const handleContact = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...contactData, type: "general" }),
      });
      if (response.ok) {
        toast("Message sent! We'll respond within 24 hours.", "success");
        setContactData({ name: "", email: "", subject: "", message: "" });
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
              Get in Touch
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-ivory mb-6">
              Contact Us
            </h1>
            <div className="w-24 h-px bg-gold mx-auto mb-8" />
            <p className="font-body text-ivory/80 max-w-2xl mx-auto leading-relaxed">
              We&apos;d love to hear from you. Make a reservation, inquire about
              private events, or simply reach out with any questions.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="reservations" className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-ui text-gold tracking-[0.3em] uppercase text-sm mb-4">
              Reserve Your Table
            </p>
            <h2 className="font-heading text-4xl text-obsidian mb-6">
              Make a Reservation
            </h2>
            <div className="w-24 h-px bg-gold mx-auto mb-6" />
            <p className="font-body text-charcoal max-w-xl mx-auto">
              For parties of 8 or more, please contact us directly or visit our
              Private Dining page.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleReservation}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-ivory rounded-lg p-8 shadow-lg border border-gold/10">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-ui text-sm text-charcoal mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={reservationData.name}
                    onChange={(e) =>
                      setReservationData({ ...reservationData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-cream border border-gold/30 rounded-lg font-body text-obsidian focus:outline-none focus:border-gold"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block font-ui text-sm text-charcoal mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={reservationData.email}
                    onChange={(e) =>
                      setReservationData({ ...reservationData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-cream border border-gold/30 rounded-lg font-body text-obsidian focus:outline-none focus:border-gold"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-ui text-sm text-charcoal mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={reservationData.phone}
                    onChange={(e) =>
                      setReservationData({ ...reservationData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-cream border border-gold/30 rounded-lg font-body text-obsidian focus:outline-none focus:border-gold"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block font-ui text-sm text-charcoal mb-2">
                    Number of Guests *
                  </label>
                  <select
                    value={reservationData.guests}
                    onChange={(e) =>
                      setReservationData({ ...reservationData, guests: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-cream border border-gold/30 rounded-lg font-body text-obsidian focus:outline-none focus:border-gold"
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-ui text-sm text-charcoal mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={reservationData.date}
                    onChange={(e) =>
                      setReservationData({ ...reservationData, date: e.target.value })
                    }
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 bg-cream border border-gold/30 rounded-lg font-body text-obsidian focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block font-ui text-sm text-charcoal mb-2">
                    Preferred Time *
                  </label>
                  <select
                    value={reservationData.time}
                    onChange={(e) =>
                      setReservationData({ ...reservationData, time: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-cream border border-gold/30 rounded-lg font-body text-obsidian focus:outline-none focus:border-gold"
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-ui text-sm text-charcoal mb-2">
                  Occasion
                </label>
                <select
                  value={reservationData.occasion}
                  onChange={(e) =>
                    setReservationData({
                      ...reservationData,
                      occasion: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 bg-cream border border-gold/30 rounded-lg font-body text-obsidian focus:outline-none focus:border-gold"
                >
                  <option value="">Select an occasion (optional)</option>
                  {occasions.map((occ) => (
                    <option key={occ} value={occ}>
                      {occ}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-8">
                <label className="block font-ui text-sm text-charcoal mb-2">
                  Special Requests
                </label>
                <textarea
                  rows={3}
                  value={reservationData.requests}
                  onChange={(e) =>
                    setReservationData({
                      ...reservationData,
                      requests: e.target.value,
                    })
                  }
                  placeholder="Dietary restrictions, seating preferences, allergies..."
                  className="w-full px-4 py-3 bg-cream border border-gold/30 rounded-lg font-body text-obsidian focus:outline-none focus:border-gold resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Request Reservation"}
              </Button>

              <p className="font-ui text-xs text-charcoal/60 text-center mt-4">
                We&apos;ll confirm your reservation via email within 2 hours during
                business hours.
              </p>
            </div>
          </motion.form>
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
                Visit Us
              </p>
              <h2 className="font-heading text-4xl text-ivory mb-6">
                Location & Hours
              </h2>
              <div className="w-24 h-px bg-gold mb-8" />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading text-lg text-ivory mb-1">Address</h4>
                    <p className="font-body text-ivory/70">
                      123 Elegance Avenue
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading text-lg text-ivory mb-1">Phone</h4>
                    <a
                      href="tel:+15551234567"
                      className="font-body text-ivory/70 hover:text-gold transition-colors"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading text-lg text-ivory mb-1">Email</h4>
                    <a
                      href="mailto:info@bellavista.com"
                      className="font-body text-ivory/70 hover:text-gold transition-colors"
                    >
                      info@bellavista.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading text-lg text-ivory mb-2">Hours</h4>
                    <div className="font-body text-ivory/70 space-y-1">
                      <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                      <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                      <p>Sunday: 4:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <ParkingCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading text-lg text-ivory mb-1">Parking</h4>
                    <p className="font-body text-ivory/70">
                      Complimentary valet parking available
                      <br />
                      Garage parking on Elegance Ave
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-burgundy/30 rounded-lg">
                <h4 className="font-heading text-ivory mb-2">Dress Code</h4>
                <p className="font-body text-sm text-ivory/70">
                  Smart casual to formal attire. We kindly ask that guests avoid
                  athletic wear, shorts, and flip-flops.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg overflow-hidden h-[400px] lg:h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1629794729765!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bella Vista Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <p className="font-ui text-gold tracking-[0.3em] uppercase text-sm mb-4">
                Questions?
              </p>
              <h2 className="font-heading text-4xl text-obsidian mb-6">
                Send Us a Message
              </h2>
              <div className="w-24 h-px bg-gold mx-auto" />
            </div>

            <form onSubmit={handleContact} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-ui text-sm text-charcoal mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactData.name}
                    onChange={(e) =>
                      setContactData({ ...contactData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-cream border border-gold/30 rounded-lg font-body text-obsidian focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block font-ui text-sm text-charcoal mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={contactData.email}
                    onChange={(e) =>
                      setContactData({ ...contactData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-cream border border-gold/30 rounded-lg font-body text-obsidian focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block font-ui text-sm text-charcoal mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={contactData.subject}
                  onChange={(e) =>
                    setContactData({ ...contactData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-cream border border-gold/30 rounded-lg font-body text-obsidian focus:outline-none focus:border-gold"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label className="block font-ui text-sm text-charcoal mb-2">
                  Message *
                </label>
                <textarea
                  rows={5}
                  required
                  value={contactData.message}
                  onChange={(e) =>
                    setContactData({ ...contactData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-cream border border-gold/30 rounded-lg font-body text-obsidian focus:outline-none focus:border-gold resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
