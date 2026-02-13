"use client";

import { cn } from "@/lib/utils";

const allergens = [
  { id: "gluten-free", label: "Gluten-Free", abbr: "GF" },
  { id: "dairy-free", label: "Dairy-Free", abbr: "DF" },
  { id: "nut-free", label: "Nut-Free", abbr: "NF" },
  { id: "shellfish-free", label: "Shellfish-Free", abbr: "SF" },
  { id: "vegetarian", label: "Vegetarian", abbr: "V" },
  { id: "vegan", label: "Vegan", abbr: "VG" },
];

interface AllergenFilterProps {
  selected: string[];
  onChange: (filters: string[]) => void;
}

export function AllergenFilter({ selected, onChange }: AllergenFilterProps) {
  const toggle = (id: string) => {
    const newSelected = selected.includes(id)
      ? selected.filter((s) => s !== id)
      : [...selected, id];
    onChange(newSelected);
  };

  return (
    <div className="flex flex-wrap gap-3">
      {allergens.map((allergen) => (
        <button
          key={allergen.id}
          onClick={() => toggle(allergen.id)}
          className={cn(
            "px-4 py-2 rounded-full border font-ui text-sm transition-all duration-300",
            selected.includes(allergen.id)
              ? "bg-burgundy text-ivory border-burgundy"
              : "bg-ivory text-charcoal border-gold/30 hover:border-gold"
          )}
        >
          <span className="mr-2 font-bold">{allergen.abbr}</span>
          {allergen.label}
        </button>
      ))}
    </div>
  );
}
