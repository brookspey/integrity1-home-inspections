import type { Metadata } from "next";
import ContactUsContent from "./ContactUsContent";

export const metadata: Metadata = {
  title: "Contact Us | Schedule Your Home Inspection | (561) 565-8513",
  description:
    "Schedule your home inspection in Palm Beach County. Call (561) 565-8513 or book online. Serving Boca Raton, West Palm Beach, Jupiter & more.",
  openGraph: {
    title: "Contact Us | Schedule Your Home Inspection | (561) 565-8513",
    description:
      "Schedule your home inspection in Palm Beach County. Call (561) 565-8513 or book online. Serving Boca Raton, West Palm Beach, Jupiter & more.",
    url: "https://integrity1-home-inspections.vercel.app/contact-us",
  },
};

export default function ContactUsPage() {
  return <ContactUsContent />;
}
