
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
      imageSrc: "https://images.unsplash.com/photo-1631129019208-84ab65b544c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Keyboard className="h-8 w-8 text-twitch" />
    },
    {
      title: "Maus",
      description: "SteelSeries Aerox 5",
      imageSrc: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Mouse className="h-8 w-8 text-twitch" />
    },
    {
      title: "Headset",
      description: "Beyerdynamic 990 Pro",
      imageSrc: "https://images.unsplash.com/photo-1618066375782-18f24cb89a92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Headphones className="h-8 w-8 text-twitch" />
    },
    {
      title: "Maus Bungee",
      description: "BenQ ZOWIE Camade",
      imageSrc: "https://images.unsplash.com/photo-1563297006-0cc581eb2e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
