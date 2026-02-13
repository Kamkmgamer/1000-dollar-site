import { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | Bella Vista",
  description: "Discover the story of Bella Vista - our history, our chef, and our passionate team dedicated to delivering exceptional fine dining experiences.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
