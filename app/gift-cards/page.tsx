import { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { GiftCardsContent } from "./GiftCardsContent";

export const metadata: Metadata = {
  title: "Gift Cards | Bella Vista",
  description: "Give the gift of fine dining with Bella Vista gift cards. Perfect for any occasion, available in physical and digital formats.",
};

export default function GiftCardsPage() {
  return (
    <>
      <Navigation />
      <main>
        <GiftCardsContent />
      </main>
      <Footer />
    </>
  );
}
