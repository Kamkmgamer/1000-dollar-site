import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Lora, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bella Vista | Fine Dining Restaurant",
  description: "An exquisite culinary journey featuring contemporary Italian cuisine in an elegant atmosphere. Private dining, chef's table, and unforgettable experiences await.",
  keywords: ["fine dining", "Italian restaurant", "upscale dining", "private dining", "chef's table", "wine pairing"],
  openGraph: {
    title: "Bella Vista | Fine Dining Restaurant",
    description: "An exquisite culinary journey featuring contemporary Italian cuisine",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${playfair.variable} ${lora.variable} ${montserrat.variable} antialiased bg-ivory text-obsidian`}
      >
        {children}
      </body>
    </html>
  );
}
