
import React from "react";
import PcPartCard from "@/components/PcPartCard";
import SetupHeading from "./SetupHeading";
import { Cpu, HardDrive, MemoryStick, Fan, Box, Power } from "lucide-react";

const PcPartsSection: React.FC = () => {
  // PC parts data
  const pcParts = [
    {
      title: "CPU",
      description: "AMD Ryzen 7 9800X3D",
      icon: <Cpu className="h-8 w-8 text-twitch" />
    },
    {
      title: "GPU",
      description: "ASUS Prime GeForce RTX 5070 Ti OC Edition",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-twitch">
        <path d="M6 8.32a7.43 7.43 0 0 1 0 7.36M9.46 6.21a11.76 11.76 0 0 1 0 11.58M12.91 4.1a15.91 15.91 0 0 1 0 15.8M16.37 2a20.16 20.16 0 0 1 0 20M19.82 0a24.07 24.07 0 0 1 0 24" />
      </svg>
    },
    {
      title: "Motherboard",
      description: "ASRock Pro RS Wifi AMD B850 So.AM5",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-twitch">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M15 2v2" />
        <path d="M15 20v2" />
        <path d="M2 15h2" />
        <path d="M20 15h2" />
      </svg>
    },
    {
      title: "RAM",
      description: "64GB (4x16GB) Corsair Vengeance RGB DDR5",
      icon: <MemoryStick className="h-8 w-8 text-twitch" />
    },
    {
      title: "Speicher",
      description: "4TB Crucial P3 Plus M.2",
      icon: <HardDrive className="h-8 w-8 text-twitch" />
    },
    {
      title: "CPU Kühler",
      description: "Corsair iCUE H150i",
      icon: <Fan className="h-8 w-8 text-twitch" />
    },
    {
      title: "Gehäuse",
      description: "Lian Li",
      icon: <Box className="h-8 w-8 text-twitch" />
    },
    {
      title: "Netzteil",
      description: "1000 Watt Asus ROG-STRIX-1000P-GAMING",
      icon: <Power className="h-8 w-8 text-twitch" />
    },
    {
      title: "Fans",
      description: "Corsair iCUE QL120 RGB x9",
      icon: <Fan className="h-8 w-8 text-twitch" />
    }
  ];

  return (
    <div className="mb-16">
      <SetupHeading title="PC-Komponenten" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pcParts.map((part, index) => (
          <PcPartCard
            key={index}
            title={part.title}
            description={part.description}
            icon={part.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default PcPartsSection;
