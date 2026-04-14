import type { Metadata } from "next";
import ContactUsContent from "./ContactUsContent";

export const metadata: Metadata = {
  title:
    "Contact Integrity1 Home Inspections | Schedule Inspection | (561) 565-8513",
  description:
    "Contact Integrity1 Home Inspections to schedule your home inspection in Palm Beach County. Call (561) 565-8513 or book online. Serving Boca Raton, West Palm Beach, Jupiter & surrounding areas.",
};

export default function ContactUsPage() {
  return <ContactUsContent />;
}
