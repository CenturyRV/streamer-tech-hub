
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
      imageSrc: "https://media.steelseriescdn.com/thumbs/catalogue/products/01079-apex-7/bf16dcd993364ab593ddd2c4b31be0f3.png.500x400_q100_crop-fit_optimize.png",
      icon: <Keyboard className="h-8 w-8 text-twitch" />
    },
    {
      title: "Maus",
      description: "SteelSeries Aerox 5",
      imageSrc: "https://media.steelseriescdn.com/thumbs/catalogue/products/01610-aerox-5/f5664568af824e2186b160c47c2aeb40.png.500x400_q100_crop-fit_optimize.png",
      icon: <Mouse className="h-8 w-8 text-twitch" />
    },
    {
      title: "Headset",
      description: "Beyerdynamic 990 Pro",
      imageSrc: "https://www.beyerdynamic.de/media/catalog/product/cache/77884763962f6cd9ba4fea7fe03d0612/d/t/dt_990_pro_1_2.jpg",
      icon: <Headphones className="h-8 w-8 text-twitch" />
    },
    {
      title: "Maus Bungee",
      description: "BenQ ZOWIE Camade",
      imageSrc: "https://zowie.benq.com/content/dam/game/en/product/accessory/camade-ii/camade-II-xl-side.png",
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
