import { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { MenuContent } from "./MenuContent";

export const metadata: Metadata = {
  title: "Menu | Bella Vista",
  description: "Explore our exquisite menu featuring contemporary Italian cuisine with seasonal ingredients and chef's recommendations.",
};

export default function MenuPage() {
  return (
    <>
      <Navigation />
      <main>
        <MenuContent />
      </main>
      <Footer />
    </>
  );
}
