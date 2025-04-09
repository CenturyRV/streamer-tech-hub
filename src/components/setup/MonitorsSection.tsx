
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
      imageSrc: "https://asset.msi.com/resize/image/global/product/product_16099774086233ca3057cb04cc7d3cee9e6dfa7a8c.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
      icon: <Monitor className="h-8 w-8 text-twitch" />
    },
    {
      title: "Monitor 2",
      description: "BenQ ZOWIE 144hz | 24 Zoll",
      imageSrc: "https://www.benq.com/content/dam/b2c/en/monitors/zowie/xl2411k/gallery/xl2411k-g1-side.jpg",
      icon: <Monitor className="h-8 w-8 text-twitch" />
    },
    {
      title: "Monitor 3",
      description: "Asus VS248HR 60hz | 24 Zoll",
      imageSrc: "https://dlcdnwebimgs.asus.com/gain/E77577E4-9B29-40B7-B0F6-C45DB05B9243/w717/h525",
      icon: <Monitor className="h-8 w-8 text-twitch" />
    },
    {
      title: "Monitor 4",
      description: "BenQ GW2480 60hz | 24 Zoll",
      imageSrc: "https://www.benq.com/content/dam/b2c/en/monitors/gw/gw2480/product-gallery/GW2480-65-F-B-02.jpg",
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
