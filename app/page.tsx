import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { FeaturedDishes } from "@/components/home/FeaturedDishes";
import { ChefSpecial } from "@/components/home/ChefSpecial";
import { PrivateDiningCTA } from "@/components/home/PrivateDiningCTA";
import { Testimonials } from "@/components/home/Testimonials";
import { Newsletter } from "@/components/home/Newsletter";
import { ToastContainer } from "@/components/ui/Toast";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <FeaturedDishes />
        <ChefSpecial />
        <PrivateDiningCTA />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}
