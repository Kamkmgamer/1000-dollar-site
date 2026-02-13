"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Download, Eye, EyeOff } from "lucide-react";
import { AllergenFilter } from "@/components/menu/AllergenFilter";
import { MenuCard, MenuItem } from "@/components/menu/MenuCard";
import { MenuSection } from "@/components/menu/MenuSection";
import { WinePairing } from "@/components/menu/WinePairing";
import { Button } from "@/components/ui/Button";

const menuData: Record<
  string,
  { title: string; description: string; items: MenuItem[] }
> = {
  antipasti: {
    title: "Antipasti",
    description: "Traditional Italian starters to awaken your palate",
    items: [
      {
        id: 1,
        name: "Burrata Pugliese",
        description:
          "Creamy burrata, heirloom tomatoes, fresh basil, aged balsamic reduction",
        price: "$24",
        dietary: ["vegetarian", "gluten-free"],
        isChefRecommendation: true,
      },
      {
        id: 2,
        name: "Carpaccio di Manzo",
        description:
          "Thinly sliced wagyu beef, arugula, shaved parmesan, truffle aioli",
        price: "$28",
        dietary: ["gluten-free"],
      },
      {
        id: 3,
        name: "Calamari Fritti",
        description: "Crispy fried calamari, lemon aioli, marinara sauce",
        price: "$22",
        dietary: [],
      },
      {
        id: 4,
        name: "Bruschetta Trio",
        description:
          "Three toasted crostini: tomato basil, roasted pepper, wild mushroom",
        price: "$18",
        dietary: ["vegetarian"],
      },
      {
        id: 5,
        name: "Insalata Caprese",
        description:
          "Fresh mozzarella, vine-ripened tomatoes, basil, extra virgin olive oil",
        price: "$20",
        dietary: ["vegetarian", "gluten-free"],
      },
    ],
  },
  primi: {
    title: "Primi Piatti",
    description: "Hand-crafted pasta and risotto dishes",
    items: [
      {
        id: 6,
        name: "Truffle Risotto",
        description:
          "Arborio rice, black truffle, aged parmesan, white wine reduction",
        price: "$48",
        dietary: ["vegetarian", "gluten-free"],
        isChefRecommendation: true,
      },
      {
        id: 7,
        name: "Tagliatelle al Ragù",
        description:
          "Fresh egg pasta, slow-cooked Bolognese sauce, aged parmesan",
        price: "$36",
        dietary: [],
      },
      {
        id: 8,
        name: "Lobster Linguine",
        description:
          "Fresh Maine lobster, cherry tomatoes, garlic white wine sauce",
        price: "$58",
        dietary: [],
        isChefRecommendation: true,
      },
      {
        id: 9,
        name: "Cacio e Pepe",
        description: "Tonnarelli pasta, pecorino romano, black pepper",
        price: "$32",
        dietary: ["vegetarian"],
      },
      {
        id: 10,
        name: "Gnocchi alla Sorrentina",
        description:
          "Potato gnocchi, San Marzano tomatoes, mozzarella, fresh basil",
        price: "$34",
        dietary: ["vegetarian"],
      },
    ],
  },
  secondi: {
    title: "Secondi Piatti",
    description: "Main courses featuring the finest proteins",
    items: [
      {
        id: 11,
        name: "Osso Buco",
        description: "Braised veal shanks, gremolata, saffron risotto Milanese",
        price: "$62",
        dietary: ["gluten-free"],
        isChefRecommendation: true,
      },
      {
        id: 12,
        name: "Branzino al Forno",
        description:
          "Whole roasted Mediterranean sea bass, herbs, capers, lemon",
        price: "$54",
        dietary: ["gluten-free", "dairy-free"],
      },
      {
        id: 13,
        name: "Filetto di Manzo",
        description:
          "Prime beef tenderloin, rosemary roasted potatoes, red wine jus",
        price: "$68",
        dietary: ["gluten-free"],
      },
      {
        id: 14,
        name: "Agnello Scottadito",
        description: "Grilled lamb chops, mint chimichurri, roasted vegetables",
        price: "$56",
        dietary: ["gluten-free", "dairy-free"],
      },
      {
        id: 15,
        name: "Pollo alla Parmigiana",
        description: "Breaded chicken breast, tomato sauce, melted mozzarella",
        price: "$42",
        dietary: [],
      },
    ],
  },
  dolci: {
    title: "Dolci",
    description: "Sweet endings to your culinary journey",
    items: [
      {
        id: 16,
        name: "Tiramisu",
        description: "Classic Italian dessert, mascarpone, espresso, cocoa",
        price: "$16",
        dietary: ["vegetarian"],
        isChefRecommendation: true,
      },
      {
        id: 17,
        name: "Panna Cotta",
        description: "Vanilla bean cream, seasonal berry compote",
        price: "$14",
        dietary: ["vegetarian", "gluten-free"],
      },
      {
        id: 18,
        name: "Cannoli Siciliani",
        description:
          "Crispy shells, ricotta cream, pistachios, chocolate chips",
        price: "$14",
        dietary: ["vegetarian"],
      },
      {
        id: 19,
        name: "Affogato",
        description: "Vanilla gelato, hot espresso, amaretti cookies",
        price: "$12",
        dietary: ["vegetarian"],
      },
      {
        id: 20,
        name: "Torta al Cioccolato",
        description:
          "Flourless chocolate cake, whipped cream, raspberry coulis",
        price: "$16",
        dietary: ["vegetarian", "gluten-free"],
      },
    ],
  },
};

const winePairings = [
  {
    name: "Burrata Pugliese",
    wine: "Vermentino di Sardegna DOC",
    vintage: "2022",
  },
  { name: "Truffle Risotto", wine: "Barbaresco DOCG", vintage: "2019" },
  { name: "Osso Buco", wine: "Barolo DOCG", vintage: "2018" },
  { name: "Branzino al Forno", wine: "Pinot Grigio DOC", vintage: "2023" },
  {
    name: "Filetto di Manzo",
    wine: "Brunello di Montalcino DOCG",
    vintage: "2017",
  },
];

export function MenuContent() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showPrices, setShowPrices] = useState(true);

  const filteredMenu = useMemo(() => {
    if (selectedFilters.length === 0) {
      return menuData;
    }

    const filtered: typeof menuData = {};
    for (const [key, section] of Object.entries(menuData)) {
      const filteredItems = section.items.filter((item) =>
        selectedFilters.every((filter) => item.dietary.includes(filter)),
      );
      if (filteredItems.length > 0) {
        filtered[key] = { ...section, items: filteredItems };
      }
    }
    return filtered;
  }, [selectedFilters]);

  return (
    <>
      <section className="relative pt-32 pb-24 bg-obsidian overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1498579150354-977475b7ea0b?q=80&w=2070')`,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-obsidian/50 to-obsidian" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="font-ui text-gold tracking-[0.3em] uppercase text-sm mb-4">
              Culinary Excellence
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-ivory mb-6">
              Our Menu
            </h1>
            <div className="w-24 h-px bg-gold mx-auto mb-8" />
            <p className="font-body text-ivory/80 max-w-2xl mx-auto leading-relaxed">
              Discover our carefully curated selection of contemporary Italian
              dishes, prepared with the finest seasonal ingredients and
              time-honored techniques.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-cream border-b border-gold/20 ">
        <div className="container mx-auto px-6 ">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 ">
            <div className="flex-1 ">
              <p className="font-ui text-xs text-charcoal mb-3 uppercase tracking-wider ">
                Dietary Preferences
              </p>
              <AllergenFilter
                selected={selectedFilters}
                onChange={setSelectedFilters}
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowPrices(!showPrices)}
                className="flex items-center gap-2 px-4 py-2 font-ui text-sm text-charcoal hover:text-burgundy transition-colors"
              >
                {showPrices ? (
                  <>
                    <EyeOff className="w-4 h-4" />
                    Hide Prices
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4" />
                    Show Prices
                  </>
                )}
              </button>

              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-ivory ">
        <div className="container mx-auto px-6 ">
          <div className="grid lg:grid-cols-3 gap-12 ">
            <div className="lg:col-span-2">
              {Object.entries(filteredMenu).map(([key, section]) => (
                <MenuSection
                  key={key}
                  title={section.title}
                  description={section.description}
                >
                  {section.items.map((item, index) => (
                    <MenuCard
                      key={item.id}
                      item={{
                        ...item,
                        price: showPrices ? item.price : "",
                      }}
                      index={index}
                    />
                  ))}
                </MenuSection>
              ))}

              {Object.keys(filteredMenu).length === 0 && (
                <div className="text-center py-16">
                  <p className="font-body text-charcoal">
                    No dishes match your selected filters.
                  </p>
                  <button
                    onClick={() => setSelectedFilters([])}
                    className="mt-4 font-ui text-burgundy hover:text-gold transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-25">
                <WinePairing dishes={winePairings} />

                <div className="mt-8 p-6 bg-burgundy rounded-lg text-ivory">
                  <h4 className="font-heading text-xl mb-4">Private Events</h4>
                  <p className="font-body text-sm text-ivory/80 mb-4">
                    Looking for a custom menu for your special occasion? Our
                    events team can create bespoke menus tailored to your
                    preferences.
                  </p>
                  <Button variant="secondary" size="sm">
                    Inquire Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
