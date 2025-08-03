import { useRef } from "react";
import { visualizationCards } from "@/lib/data";
import { VisualizationCard } from "./visualization-card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function VisualizationCardsSection() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const visibleCards = useIntersectionObserver();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-6">
            Explore Our Visualizations
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Dive into our collection of powerful data visualization tools
            designed to help you understand and present your data effectively.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {visualizationCards.map((card, index) => (
            <VisualizationCard
              key={card.id}
              card={card}
              index={index}
              isVisible={visibleCards.has(card.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
