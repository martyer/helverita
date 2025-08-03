import Image from "next/image";
import { VisualizationCard as VisualizationCardType } from "@/types/visualization";

interface VisualizationCardProps {
  card: VisualizationCardType;
  index: number;
  isVisible: boolean;
}

export function VisualizationCard({
  card,
  index,
  isVisible,
}: VisualizationCardProps) {
  return (
    <div
      data-card-id={card.id}
      className={`transform transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="group cursor-pointer">
        <div
          className={`bg-gradient-to-br ${card.color} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105`}
        >
          <div className="bg-white/20 rounded-xl p-4 mb-4 w-fit">
            <Image
              src={card.image}
              alt={card.title}
              width={32}
              height={32}
              className="text-white"
            />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
          <p className="text-white/90 text-sm leading-relaxed">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
}
