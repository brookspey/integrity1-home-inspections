import type { Metadata } from "next";
import { Open_Sans, Libre_Franklin } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  weight: ["100", "400", "900"],
});

export const metadata: Metadata = {
  title:
    "Integrity1 Home Inspections | Palm Beach County Home Inspector | (561) 565-8513",
  description:
    "Certified home inspector serving Palm Beach County, Boca Raton, West Palm Beach, Jupiter & Delray Beach. 4-point, wind mitigation, pre-listing & commercial inspections. 5-star rated. Call (561) 565-8513.",
  icons: {
    icon: [
      { url: "/seo/favicon-32x32.png", sizes: "32x32" },
      { url: "/seo/favicon-192x192.png", sizes: "192x192" },
    ],
    apple: "/seo/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["HomeInspector", "LocalBusiness"],
  name: "Integrity1 Home Inspections LLC",
  url: "https://integrity1homeinspections.com",
  telephone: "(561) 565-8513",
  email: "integrity1homeinspections@gmail.com",
  image: "https://integrity1homeinspections.com/images/Logo.png",
  description:
    "Certified home inspector serving Palm Beach County, FL. Offering home inspections, 4-point inspections, wind mitigation, pre-listing, commercial, pool, and builder's warranty inspections in West Palm Beach, Boca Raton, Jupiter, Delray Beach, Boynton Beach & Wellington.",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Boca Raton",
    addressRegion: "FL",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.3683,
    longitude: -80.1289,
  },
  areaServed: [
    { "@type": "Place", name: "West Palm Beach, FL" },
    { "@type": "Place", name: "Boca Raton, FL" },
    { "@type": "Place", name: "Jupiter, FL" },
    { "@type": "Place", name: "Delray Beach, FL" },
    { "@type": "Place", name: "Boynton Beach, FL" },
    { "@type": "Place", name: "Wellington, FL" },
    { "@type": "Place", name: "Palm Beach County, FL" },
    { "@type": "Place", name: "Broward County, FL" },
    { "@type": "Place", name: "Martin County, FL" },
    { "@type": "Place", name: "St. Lucie County, FL" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "35",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Home Inspection Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Home Inspections",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Buyer's Home Inspection" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "4-Point Inspection" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wind Mitigation Inspection" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "11-Month Builder's Warranty Inspection" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pre-Listing / Seller's Inspection" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Property Inspection" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Visual Pool Inspection" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Maintenance Inspection" } },
        ],
      },
    ],
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${libreFranklin.variable}`}
    >
      <body>
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
