import type { Metadata } from "next";
import YourReportContent from "./YourReportContent";

export const metadata: Metadata = {
  title: "View Your Home Inspection Report | Integrity1 Home Inspections",
  description:
    "Log in to view your completed home inspection report from Integrity1 Home Inspections. Secure online access to your detailed property inspection findings.",
};

export default function YourReportPage() {
  return <YourReportContent />;
}
