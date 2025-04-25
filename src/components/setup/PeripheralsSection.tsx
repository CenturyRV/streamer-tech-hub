
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
      icon: <Keyboard className="h-8 w-8 text-twitch" />
    },
    {
      title: "Maus",
      description: "SteelSeries Aerox 5",
      icon: <Mouse className="h-8 w-8 text-twitch" />
    },
    {
      title: "Headset",
      description: "Beyerdynamic 990 Pro",
      icon: <Headphones className="h-8 w-8 text-twitch" />
    },
    {
      title: "Maus Bungee",
      description: "BenQ ZOWIE Camade",
      icon: <Mouse className="h-8 w-8 text-twitch" />
    }
  ];

  return (
    <div>
      <SetupHeading title="Zubehör" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {peripherals.map((peripheral, index) => (
          <PcPartCard
            key={index}
            title={peripheral.title}
            description={peripheral.description}
            icon={peripheral.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default PeripheralsSection;
