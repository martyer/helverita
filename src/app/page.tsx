"use client";

import { HeroSection } from "@/components/features/hero-section";
import { VisualizationCardsSection } from "@/components/features/visualization-cards-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <HeroSection />
      <VisualizationCardsSection />
      <Footer />
    </div>
  );
}
