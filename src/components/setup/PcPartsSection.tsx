
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
      imageSrc: "https://images.amd.com/is/image/AMD/ryzen-7-7800x3d-pib-1?$496px-wide$",
      icon: <Cpu className="h-8 w-8 text-twitch" />
    },
    {
      title: "GPU",
      description: "ASUS Prime GeForce RTX 5070 Ti OC Edition",
      imageSrc: "https://dlcdnwebimgs.asus.com/gain/AF1E8C67-F6F0-4C4A-B21A-63BD7BC0D55F/w717/h525",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-twitch">
        <path d="M6 8.32a7.43 7.43 0 0 1 0 7.36M9.46 6.21a11.76 11.76 0 0 1 0 11.58M12.91 4.1a15.91 15.91 0 0 1 0 15.8M16.37 2a20.16 20.16 0 0 1 0 20M19.82 0a24.07 24.07 0 0 1 0 24" />
      </svg>
    },
    {
      title: "Motherboard",
      description: "ASRock Pro RS Wifi AMD B850 So.AM5",
      imageSrc: "https://www.asrock.com/mb/photo/B650%20Pro%20RS%20WiFi(L1).png",
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
      imageSrc: "https://www.corsair.com/medias/sys_master/images/images/h56/h09/10113321082910/CMK32GX5M2B5600C36/Gallery/VENGEANCE-RGB-DDR5-BLACK_01/-CMK32GX5M2B5600C36-Gallery-VENGEANCE-RGB-DDR5-BLACK-01.png_1200Wx1200H",
      icon: <MemoryStick className="h-8 w-8 text-twitch" />
    },
    {
      title: "Speicher",
      description: "4TB Crucial P3 Plus M.2",
      imageSrc: "https://m.media-amazon.com/images/I/71ouXzxMy3L._AC_SL1500_.jpg",
      icon: <HardDrive className="h-8 w-8 text-twitch" />
    },
    {
      title: "CPU Kühler",
      description: "Corsair iCUE H150i",
      imageSrc: "https://www.corsair.com/us/en/medias/sys_master/images/images/h22/hbd/9583899131934/base-elite-capellix-white/Gallery/H150i_ELITE_CAPELLIX_WHITE_01/-base-elite-capellix-white-Gallery-H150i-ELITE-CAPELLIX-WHITE-01.png_1200Wx1200H",
      icon: <Fan className="h-8 w-8 text-twitch" />
    },
    {
      title: "Gehäuse",
      description: "Lian Li",
      imageSrc: "https://lian-li.com/wp-content/uploads/2021/10/o11-dynamic-evo-w-cam.jpg",
      icon: <Box className="h-8 w-8 text-twitch" />
    },
    {
      title: "Netzteil",
      description: "1000 Watt Asus ROG-STRIX-1000P-GAMING",
      imageSrc: "https://dlcdnwebimgs.asus.com/gain/e07c58af-c50a-456a-bb58-79f3c13e5c4c/w800/h600",
      icon: <Power className="h-8 w-8 text-twitch" />
    },
    {
      title: "Fans",
      description: "Corsair iCUE QL120 RGB x9",
      imageSrc: "https://www.corsair.com/medias/sys_master/images/images/h86/h72/9674823598110/base-icue-ql120-rgb/Gallery/QL120_RGB_01/-base-icue-ql120-rgb-Gallery-QL120-RGB-01.png_1200Wx1200H",
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
            imageSrc={part.imageSrc}
            icon={part.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default PcPartsSection;
