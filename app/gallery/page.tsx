import { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { GalleryContent } from "./GalleryContent";

export const metadata: Metadata = {
  title: "Gallery | Bella Vista",
  description: "Explore our gallery featuring the elegant ambiance, exquisite dishes, and memorable moments at Bella Vista.",
};

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <main>
        <GalleryContent />
      </main>
      <Footer />
    </>
  );
}
