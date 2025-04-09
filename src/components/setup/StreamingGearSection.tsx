
import React from "react";
import PcPartCard from "@/components/PcPartCard";
import SetupHeading from "./SetupHeading";
import { Mic, Camera, Headphones } from "lucide-react";

const StreamingGearSection: React.FC = () => {
  // Streaming gear data
  const streamingGear = [
    {
      title: "Mikrofon",
      description: "Shure SM7B",
      imageSrc: "https://products.shureweb.eu/shure_product_db/product_main_images/files/811/original/sm7b_top_transparent.png",
      icon: <Mic className="h-8 w-8 text-twitch" />
    },
    {
      title: "Kamera",
      description: "Sony Alpha 6400 & Sigma 16mm Objektiv",
      imageSrc: "https://www.sony.de/image/bc1f4e13505378673763ae8b5608fd82?fmt=png-alpha&wid=720",
      icon: <Camera className="h-8 w-8 text-twitch" />
    },
    {
      title: "Mixer",
      description: "TC Helicon GoXLR",
      imageSrc: "https://www.tchelicon.com/dw/image/v2/AAYQ_PRD/on/demandware.static/-/Sites-tchelicon-master-catalog/default/dw742f62aa/images/tchelicon/p0cqk_top.jpg",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-twitch">
        <path d="M2 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4" />
        <rect x="2" y="10" width="8" height="8" rx="2" />
        <path d="m17 13 1 1v4" />
        <path d="M11 6v4" />
        <path d="m13 7 2-2" />
        <path d="M13 9 15 11" />
      </svg>
    },
    {
      title: "Mikrofonhalterung",
      description: "LogiLink AA0127",
      imageSrc: "https://www.logilink.com/media/image/thumbnail/AA0127_c85f8c1ed767382_720x600.jpg",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-twitch">
        <path d="M12 2v8" />
        <path d="m4.93 10.93 1.41 1.41" />
        <path d="M2 18h2" />
        <path d="M20 18h2" />
        <path d="m19.07 10.93-1.41 1.41" />
        <path d="M22 22H2" />
        <path d="M8 6h8" />
        <path d="M16 18a4 4 0 0 0-8 0" />
      </svg>
    }
  ];

  return (
    <div className="mb-16">
      <SetupHeading title="Streaming-Ausrüstung" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {streamingGear.map((gear, index) => (
          <PcPartCard
            key={index}
            title={gear.title}
            description={gear.description}
            imageSrc={gear.imageSrc}
            icon={gear.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default StreamingGearSection;
