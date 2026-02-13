import { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PrivateDiningContent } from "./PrivateDiningContent";

export const metadata: Metadata = {
  title: "Private Dining | Bella Vista",
  description: "Host unforgettable private events at Bella Vista. Elegant private dining rooms for celebrations, corporate events, and special occasions.",
};

export default function PrivateDiningPage() {
  return (
    <>
      <Navigation />
      <main>
        <PrivateDiningContent />
      </main>
      <Footer />
    </>
  );
}
