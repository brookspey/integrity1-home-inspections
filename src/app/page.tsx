import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { TrustSection } from "@/components/TrustSection";
import { ThreeQuestionsSection } from "@/components/ThreeQuestionsSection";
import { PillarsSection } from "@/components/PillarsSection";
import { AreaOfOperationSection } from "@/components/AreaOfOperationSection";

export const metadata: Metadata = {
  openGraph: {
    title: "Palm Beach County Home Inspector",
    description:
      "Certified home inspector serving Palm Beach County. 4-point, wind mitigation, pre-listing & commercial inspections. 5-star rated.",
    url: "https://integrity1-home-inspections.vercel.app",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ThreeQuestionsSection />
      <PillarsSection />
      <AreaOfOperationSection />
    </>
  );
}
