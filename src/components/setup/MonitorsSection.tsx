
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
      imageSrc: "https://storage-asset.msi.com/global/picture/image/feature/monitor/Optix-G241/msi-optix-g241-gaming-monitor-wallpaper.jpg",
      icon: <Monitor className="h-8 w-8 text-twitch" />
    },
    {
      title: "Monitor 2",
      description: "BenQ ZOWIE 144hz | 24 Zoll",
      imageSrc: "https://www.benq.com/content/dam/b2c/en/monitors/zowie/e-sports/xl-k-series/xl2411k/gallery/xl2411k-center1.png",
      icon: <Monitor className="h-8 w-8 text-twitch" />
    },
    {
      title: "Monitor 3",
      description: "Asus VS248HR 60hz | 24 Zoll",
      imageSrc: "https://dlcdnwebimgs.asus.com/files/media/9e60bdc3-98a9-429f-9b0b-c8bfd9b9b49d/v1/websites/global/products/9SBm6lFaKA8XbHc5/v1/images/vs248.png",
      icon: <Monitor className="h-8 w-8 text-twitch" />
    },
    {
      title: "Monitor 4",
      description: "BenQ GW2480 60hz | 24 Zoll",
      imageSrc: "https://www.benq.com/content/dam/b2c/en/monitors/gw/gw2480/images/gw2480-img1.jpg",
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
