import { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact & Reservations | Bella Vista",
  description: "Make a reservation or contact Bella Vista. Find our location, hours, and contact information for the finest Italian dining in New York.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
