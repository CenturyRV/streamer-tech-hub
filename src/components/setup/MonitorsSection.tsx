
import React from "react";
import PcPartCard from "@/components/PcPartCard";
import SetupHeading from "./SetupHeading";
import { Monitor } from "lucide-react";

const MonitorsSection: React.FC = () => {
  // Monitors data
  const monitors = [
    {
      title: "Monitor 1",
      description: "MSI Optix G241 144hz | 24 Zoll",
      icon: <Monitor className="h-8 w-8 text-twitch" />
    },
    {
      title: "Monitor 2",
      description: "BenQ ZOWIE 144hz | 24 Zoll",
      icon: <Monitor className="h-8 w-8 text-twitch" />
    },
    {
      title: "Monitor 3",
      description: "Asus VS248HR 60hz | 24 Zoll",
      icon: <Monitor className="h-8 w-8 text-twitch" />
    },
    {
      title: "Monitor 4",
      description: "BenQ GW2480 60hz | 24 Zoll",
      icon: <Monitor className="h-8 w-8 text-twitch" />
    }
  ];

  return (
    <div className="mb-16">
      <SetupHeading title="Monitore" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {monitors.map((monitor, index) => (
          <PcPartCard
            key={index}
            title={monitor.title}
            description={monitor.description}
            icon={monitor.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default MonitorsSection;
