# $1,000 Restaurant Website - "Upscale Restaurant"

## Project Overview

**Budget**: $1,000
**Target**: Premium dining establishment
**Development Time**: 24-40 hours
**Best For**: Fine dining, upscale establishments, serious brand presence

---

## Technical Specifications

### Stack
- **Frontend**: Next.js 14+ (App Router)
- **Backend**: Next.js API Routes + tRPC (optional)
- **Database**: PostgreSQL (Vercel Postgres or Supabase)
- **CMS**: Sanity (paid tier) or Strapi
- **Auth**: None (admin uses CMS dashboard)
- **Hosting**: Vercel Pro
- **Email**: Resend
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Analytics**: Vercel Analytics + Google Analytics 4

### File Structure
```
one_thousand_dollar_site/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── menu/
│   │   ├── page.tsx
│   │   └── [category]/
│   │       └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── gallery/
│   │   └── page.tsx
│   ├── private-dining/
│   │   └── page.tsx              # Private events
│   ├── gift-cards/
│   │   └── page.tsx              # Gift card info
│   ├── contact/
│   │   └── page.tsx
│   ├── api/
│   │   ├── contact/route.ts
│   │   ├── reservation/route.ts
│   │   ├── newsletter/route.ts
│   │   └── trpc/[trpc]/route.ts
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── PageTransition.tsx
│   │   └── ScrollProgress.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── FeaturedDishes.tsx
│   │   ├── ChefSpecial.tsx
│   │   ├── PrivateDiningCTA.tsx
│   │   └── Newsletter.tsx
│   ├── menu/
│   │   ├── MenuSection.tsx
│   │   ├── MenuCard.tsx
│   │   ├── AllergenFilter.tsx
│   │   └── WinePairing.tsx
│   ├── reservations/
│   │   ├── BookingForm.tsx
│   │   ├── Calendar.tsx
│   │   ├── TimeSlots.tsx
│   │   └── GuestCount.tsx
│   ├── private-dining/
│   │   ├── RoomCard.tsx
│   │   └── InquiryForm.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Modal.tsx
│       ├── DatePicker.tsx
│       ├── Toast.tsx
│       └── Loading.tsx
├── lib/
│   ├── sanity.ts
│   ├── db.ts                      # Database client
│   ├── email.ts
│   ├── analytics.ts
│   └── utils.ts
├── sanity/
│   └── schemas/
├── db/
│   └── schema.ts                  # Database schema
├── public/
│   └── images/
├── package.json
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## Pages

### 1. Home Page (`/`)
1. Hero - Full-screen video background or image slider
2. Chef's Tasting Menu highlight
3. Featured Dishes carousel
4. Private Dining teaser
5. Testimonials with video reviews
6. Newsletter + reservation CTA

### 2. Menu Page (`/menu`)
- Full menu with allergen filtering
- Wine pairing suggestions
- Dietary preference filters
- "Chef's Recommendations" section
- Download PDF option
- Prices toggle (optional for fine dining)

### 3. About Page (`/about`)
- Restaurant history with timeline
- Chef biography
- Farm/ingredient sourcing story
- Team section with detailed bios
- Press/awards section

### 4. Gallery Page (`/gallery`)
- Categorized galleries
- Full-screen lightbox
- Behind-the-scenes content
- Video integration

### 5. Private Dining (`/private-dining`)
- Room options with capacity
- Photos of private spaces
- Sample menus
- Inquiry form
- Contact for events coordinator

### 6. Gift Cards (`/gift-cards`)
- Gift card information
- Purchase link (redirect to third-party or form)
- Physical/digital options

### 7. Contact Page (`/contact`)
- Real-time reservation system
- General contact form
- Interactive map with directions
- Parking information
- Dress code policy

---

## Design Specifications

### Luxury Brand Identity
```css
/* Premium Color Palette */
--color-ivory: #FFFFF0;
--color-champagne: #F7E7CE;
--color-gold: #D4AF37;
--color-burgundy: #800020;
--color-navy: #000080;
--color-charcoal: #36454F;
--color-obsidian: #0B1215;

/* Design System */
--font-display: 'Cormorant Garamond', serif;
--font-heading: 'Playfair Display', serif;
--font-body: 'Lora', serif;
--font-ui: 'Montserrat', sans-serif;

/* Luxury Spacing */
--space-section: 120px;
--container-narrow: 960px;
--container-wide: 1440px;
```

### Micro-interactions
```typescript
// Button hover effect
const buttonVariants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.02,
    boxShadow: "0 10px 30px rgba(139, 38, 53, 0.3)"
  },
  tap: { scale: 0.98 }
};

// Card hover
const cardVariants = {
  rest: { y: 0 },
  hover: { 
    y: -10,
    transition: { type: "spring", stiffness: 400 }
  }
};

// Image reveal
const imageReveal = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: { 
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};
```

---

## Features

### Must Have
- [ ] 7+ pages
- [ ] Full CMS integration
- [ ] Real-time reservation integration (OpenTable/Resy embed OR custom)
- [ ] Allergen filtering on menu
- [ ] Private dining inquiry form
- [ ] Gift card information page
- [ ] Micro-interactions throughout
- [ ] Video support (hero, gallery)
- [ ] Analytics integration
- [ ] Performance optimized (< 1s LCP)
- [ ] Premium typography
- [ ] Full accessibility (AA+)

### Nice to Have
- [ ] Dark mode
- [ ] Multiple language support
- [ ] Accessibility menu
- [ ] Sound/music toggle (for ambience)
- [ ] Chef's table booking
- [ ] Wine list with pairing

### Must NOT Have
- [ ] NO customer accounts
- [ ] NO payment processing (use third-party)
- [ ] NO online ordering
- [ ] NO loyalty program

---

## Database Schema

### Reservations Table
```typescript
// db/schema.ts
export const reservations = pgTable('reservations', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  date: date('date').notNull(),
  time: varchar('time', { length: 10 }).notNull(),
  guests: integer('guests').notNull(),
  occasion: varchar('occasion', { length: 100 }),
  specialRequests: text('special_requests'),
  status: varchar('status', { 
    default: 'pending',
    enum: ['pending', 'confirmed', 'cancelled', 'completed']
  }),
  createdAt: timestamp('created_at').defaultNow(),
});
```

### Newsletter Table
```typescript
export const newsletterSignups = pgTable('newsletter_signups', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  source: varchar('source', { length: 50 }),
  createdAt: timestamp('created_at').defaultNow(),
});
```

---

## Reservation System

### Third-Party Integration (OpenTable/Resy)
```tsx
// components/reservations/OpenTableWidget.tsx
export function OpenTableWidget() {
  return (
    <div className="opentable-widget">
      <script 
        type="text/javascript" 
        src="//www.opentable.com/widget/reservation/loader?rid=YOUR_RESTAURANT_ID"
      />
    </div>
  );
}
```

### OR Custom Booking Form
```tsx
// components/reservations/BookingForm.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface BookingFormProps {
  onSubmit: (data: BookingData) => Promise<void>;
}

export function BookingForm({ onSubmit }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Partial<BookingData>>({});
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="booking-form"
    >
      {step === 1 && (
        <DateTimeStep 
          data={data} 
          onChange={(d) => setData({ ...data, ...d })}
          onNext={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <DetailsStep 
          data={data}
          onChange={(d) => setData({ ...data, ...d })}
          onBack={() => setStep(1)}
          onSubmit={onSubmit}
        />
      )}
    </motion.div>
  );
}
```

---

## Allergen Filter

### Implementation
```tsx
// components/menu/AllergenFilter.tsx
const ALLERGENS = [
  { id: 'gluten', label: 'Gluten-Free', icon: '🌾' },
  { id: 'dairy', label: 'Dairy-Free', icon: '🥛' },
  { id: 'nuts', label: 'Nut-Free', icon: '🥜' },
  { id: 'shellfish', label: 'Shellfish-Free', icon: '🦐' },
  { id: 'vegetarian', label: 'Vegetarian', icon: '🥬' },
  { id: 'vegan', label: 'Vegan', icon: '🌱' },
];

export function AllergenFilter({ onChange }: { onChange: (filters: string[]) => void }) {
  const [selected, setSelected] = useState<string[]>([]);
  
  const toggle = (id: string) => {
    const newSelected = selected.includes(id)
      ? selected.filter(s => s !== id)
      : [...selected, id];
    setSelected(newSelected);
    onChange(newSelected);
  };
  
  return (
    <div className="flex flex-wrap gap-2">
      {ALLERGENS.map(allergen => (
        <button
          key={allergen.id}
          onClick={() => toggle(allergen.id)}
          className={cn(
            "px-4 py-2 rounded-full border transition-all",
            selected.includes(allergen.id)
              ? "bg-primary text-white border-primary"
              : "bg-white text-gray-700 border-gray-200"
          )}
        >
          <span className="mr-2">{allergen.icon}</span>
          {allergen.label}
        </button>
      ))}
    </div>
  );
}
```

---

## Private Dining Section

### Room Cards
```tsx
// components/private-dining/RoomCard.tsx
interface RoomCardProps {
  name: string;
  capacity: string;
  description: string;
  image: string;
  features: string[];
}

export function RoomCard({ name, capacity, description, image, features }: RoomCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-lg"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-2xl font-heading">{name}</h3>
        <p className="text-sm text-gray-500 mb-2">Capacity: {capacity}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="flex flex-wrap gap-2">
          {features.map(f => (
            <li key={f} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
```

---

## Performance Requirements

### Target Metrics
- **Lighthouse Performance**: 95+
- **Lighthouse Accessibility**: 100
- **First Contentful Paint**: < 1s
- **Largest Contentful Paint**: < 1.5s
- **Cumulative Layout Shift**: < 0.05
- **Time to Interactive**: < 2s

### Advanced Optimizations
- [ ] Edge Functions for reservations
- [ ] Image CDN (Vercel Image or Cloudinary)
- [ ] Font preloading with fallbacks
- [ ] Critical CSS extraction
- [ ] Resource hints (preconnect, prefetch)
- [ ] Streaming SSR for slow content

### Edge Runtime for Reservations
```typescript
// app/api/reservation/route.ts
export const runtime = 'edge';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Quick validation
  if (!data.email || !data.date) {
    return new Response('Invalid data', { status: 400 });
  }
  
  // Store in KV or send to booking service
  // ...
  
  return Response.json({ success: true });
}
```

---

## Analytics Integration

### Vercel Analytics
```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Custom Event Tracking
```typescript
// lib/analytics.ts
export function trackEvent(event: string, data?: Record<string, any>) {
  // Vercel Analytics
  if (window.va) {
    window.va('track', event, data);
  }
  
  // Google Analytics
  if (window.gtag) {
    window.gtag('event', event, data);
  }
}

// Usage
trackEvent('reservation_started', { guests: 4 });
trackEvent('menu_filter_used', { filter: 'vegetarian' });
```

---

## SEO Requirements

### Extended Schema
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Restaurant",
      "name": "Bella Italia",
      "servesCuisine": "Italian",
      "priceRange": "$$$",
      "acceptsReservations": "True",
      "hasMenu": {
        "@type": "Menu",
        "hasMenuSection": [...]
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "#organization",
      "name": "Bella Italia",
      "address": {...},
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.7128",
        "longitude": "-74.0060"
      }
    },
    {
      "@type": "WebSite",
      "url": "https://bellaitalia.com",
      "potentialAction": {
        "@type": "ReserveAction",
        "target": "https://bellaitalia.com/reservations"
      }
    }
  ]
}
```

---

## Implementation Checklist

### Phase 1: Setup
- [ ] Initialize Next.js with TypeScript
- [ ] Set up PostgreSQL (Vercel Postgres or Supabase)
- [ ] Configure Sanity CMS
- [ ] Set up Framer Motion
- [ ] Configure analytics

### Phase 2: Database & CMS
- [ ] Create database schema
- [ ] Create CMS schemas
- [ ] Set up migrations
- [ ] Populate content

### Phase 3: Core Features
- [ ] Build reservation system
- [ ] Build allergen filter
- [ ] Build private dining section
- [ ] Build gift card page

### Phase 4: Design & Animations
- [ ] Implement luxury design
- [ ] Add micro-interactions
- [ ] Implement scroll animations
- [ ] Add page transitions

### Phase 5: Integration
- [ ] Connect all forms
- [ ] Set up email templates
- [ ] Test reservation flow
- [ ] Configure analytics events

### Phase 6: Launch
- [ ] Performance audit
- [ ] Accessibility audit
- [ ] Security review
- [ ] Deploy and configure domain

---

## Comparison to $700 Tier

| Feature | $700 | $1,000 |
|---------|------|--------|
| Pages | 6 | 7+ |
| Database | No | PostgreSQL |
| Allergen Filter | No | Yes |
| Private Dining | No | Full section |
| Gift Cards | No | Info page |
| Analytics | Basic | Full GA4 + Vercel |
| Performance | ~90 | ~95 |
| Design | Professional | Luxury |

---

## Notes for Developers

This tier introduces:
- Real database for reservations
- Third-party integrations (OpenTable/Resy)
- Advanced filtering (allergens)
- Full analytics implementation
- Premium design aesthetics

Focus on polish and user experience. Every interaction should feel intentional and refined.
