import type { Metadata } from "next";
import YourReportContent from "./YourReportContent";

export const metadata: Metadata = {
  title: "View Your Home Inspection Report",
  description:
    "Log in to view your completed home inspection report. Secure online access to your detailed property inspection findings.",
  openGraph: {
    title: "View Your Home Inspection Report",
    description:
      "Log in to view your completed home inspection report. Secure online access to your detailed property inspection findings.",
    url: "https://integrity1-home-inspections.vercel.app/your-report",
  },
};

export default function YourReportPage() {
  return <YourReportContent />;
}
