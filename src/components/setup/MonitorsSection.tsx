
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
      imageSrc: "https://images.unsplash.com/photo-1616763355603-b54325c66834?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Monitor className="h-8 w-8 text-twitch" />
    },
    {
      title: "Monitor 2",
      description: "BenQ ZOWIE 144hz | 24 Zoll",
      imageSrc: "https://images.unsplash.com/photo-1494173853739-c21f58b16055?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Monitor className="h-8 w-8 text-twitch" />
    },
    {
      title: "Monitor 3",
      description: "Asus VS248HR 60hz | 24 Zoll",
      imageSrc: "https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Monitor className="h-8 w-8 text-twitch" />
    },
    {
      title: "Monitor 4",
      description: "BenQ GW2480 60hz | 24 Zoll",
      imageSrc: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
            imageSrc={monitor.imageSrc}
            icon={monitor.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default MonitorsSection;
