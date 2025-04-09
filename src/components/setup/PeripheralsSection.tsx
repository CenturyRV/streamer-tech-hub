
import React from "react";
import PcPartCard from "@/components/PcPartCard";
import SetupHeading from "./SetupHeading";
import { Keyboard, Mouse, Headphones } from "lucide-react";

const PeripheralsSection: React.FC = () => {
  // Peripherals data
  const peripherals = [
    {
      title: "Tastatur",
      description: "SteelSeries Apex 7",
      imageSrc: "https://images.unsplash.com/photo-1595225476071-63e356e1b710?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Keyboard className="h-8 w-8 text-twitch" />
    },
    {
      title: "Maus",
      description: "SteelSeries Aerox 5",
      imageSrc: "https://images.unsplash.com/photo-1618499890638-3f8466d3a5e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Mouse className="h-8 w-8 text-twitch" />
    },
    {
      title: "Headset",
      description: "Beyerdynamic 990 Pro",
      imageSrc: "https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Headphones className="h-8 w-8 text-twitch" />
    },
    {
      title: "Maus Bungee",
      description: "BenQ ZOWIE Camade",
      imageSrc: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Mouse className="h-8 w-8 text-twitch" />
    }
  ];

  return (
    <div>
      <SetupHeading title="Peripheriegeräte" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {peripherals.map((peripheral, index) => (
          <PcPartCard
            key={index}
            title={peripheral.title}
            description={peripheral.description}
            imageSrc={peripheral.imageSrc}
            icon={peripheral.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default PeripheralsSection;
