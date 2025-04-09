
import Layout from "@/components/Layout";
import PcPartCard from "@/components/PcPartCard";
import { Cpu, Monitor, HardDrive, MemoryStick, Fan, Box, Power, Mic, Camera, Headphones, Keyboard, Mouse } from "lucide-react";

const Setup = () => {
  // Updated PC parts data with user's specific hardware
  const pcParts = [
    {
      title: "CPU",
      description: "AMD Ryzen 7 9800X3D",
      imageSrc: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Cpu className="h-8 w-8 text-twitch" />
    },
    {
      title: "GPU",
      description: "ASUS Prime GeForce RTX 5070 Ti OC Edition",
      imageSrc: "https://images.unsplash.com/photo-1591405351990-4726e331f141?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-twitch">
        <path d="M6 8.32a7.43 7.43 0 0 1 0 7.36M9.46 6.21a11.76 11.76 0 0 1 0 11.58M12.91 4.1a15.91 15.91 0 0 1 0 15.8M16.37 2a20.16 20.16 0 0 1 0 20M19.82 0a24.07 24.07 0 0 1 0 24" />
      </svg>
    },
    {
      title: "Motherboard",
      description: "ASRock Pro RS Wifi AMD B850 So.AM5",
      imageSrc: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      imageSrc: "https://images.unsplash.com/photo-1562976540-1502c2145186?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <MemoryStick className="h-8 w-8 text-twitch" />
    },
    {
      title: "Speicher",
      description: "4TB Crucial P3 Plus M.2",
      imageSrc: "https://images.unsplash.com/photo-1517500913938-5f57b5f5efbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <HardDrive className="h-8 w-8 text-twitch" />
    },
    {
      title: "CPU Kühler",
      description: "Corsair iCUE H150i",
      imageSrc: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Fan className="h-8 w-8 text-twitch" />
    },
    {
      title: "Gehäuse",
      description: "Lian Li",
      imageSrc: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Box className="h-8 w-8 text-twitch" />
    },
    {
      title: "Netzteil",
      description: "1000 Watt Asus ROG-STRIX-1000P-GAMING",
      imageSrc: "https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Power className="h-8 w-8 text-twitch" />
    },
    {
      title: "Fans",
      description: "Corsair iCUE QL120 RGB x9",
      imageSrc: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Fan className="h-8 w-8 text-twitch" />
    }
  ];

  // Updated streaming gear data
  const streamingGear = [
    {
      title: "Mikrofon",
      description: "Shure SM7B",
      imageSrc: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Mic className="h-8 w-8 text-twitch" />
    },
    {
      title: "Kamera",
      description: "Sony Alpha 6400 & Sigma 16mm Objektiv",
      imageSrc: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Camera className="h-8 w-8 text-twitch" />
    },
    {
      title: "Mixer",
      description: "TC Helicon GoXLR",
      imageSrc: "https://images.unsplash.com/photo-1563330232-57114bb0823c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      imageSrc: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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

  // Updated peripherals data
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
      imageSrc: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Headphones className="h-8 w-8 text-twitch" />
    },
    {
      title: "Maus Bungee",
      description: "BenQ ZOWIE Camade",
      imageSrc: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Mouse className="h-8 w-8 text-twitch" />
    }
  ];
  
  // Monitor data
  const monitors = [
    {
      title: "Monitor 1",
      description: "MSI Optix G241 144hz | 24 Zoll",
      imageSrc: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Monitor className="h-8 w-8 text-twitch" />
    },
    {
      title: "Monitor 2",
      description: "BenQ ZOWIE 144hz | 24 Zoll",
      imageSrc: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Monitor className="h-8 w-8 text-twitch" />
    },
    {
      title: "Monitor 3",
      description: "Asus VS248HR 60hz | 24 Zoll",
      imageSrc: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Monitor className="h-8 w-8 text-twitch" />
    },
    {
      title: "Monitor 4",
      description: "BenQ GW2480 60hz | 24 Zoll",
      imageSrc: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Monitor className="h-8 w-8 text-twitch" />
    }
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">RQZE - SETUP | Stand: 14.03.2025</h1>
            <p className="text-muted-foreground mb-12 text-lg">
              Hier ist die gesamte Hardware, die ich verwende, um meine Inhalte zu erstellen und in höchster Qualität zu streamen.
            </p>
            
            {/* PC Showcase */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="h-1 w-16 bg-twitch"></div>
                <h2 className="text-2xl font-bold mx-4">PC-Komponenten</h2>
                <div className="h-1 flex-grow bg-twitch/20"></div>
              </div>
              
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
            
            {/* Monitors */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="h-1 w-16 bg-twitch"></div>
                <h2 className="text-2xl font-bold mx-4">Monitore</h2>
                <div className="h-1 flex-grow bg-twitch/20"></div>
              </div>
              
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
            
            {/* Streaming Gear */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="h-1 w-16 bg-twitch"></div>
                <h2 className="text-2xl font-bold mx-4">Streaming-Ausrüstung</h2>
                <div className="h-1 flex-grow bg-twitch/20"></div>
              </div>
              
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
            
            {/* Peripherals */}
            <div>
              <div className="flex items-center mb-8">
                <div className="h-1 w-16 bg-twitch"></div>
                <h2 className="text-2xl font-bold mx-4">Peripheriegeräte</h2>
                <div className="h-1 flex-grow bg-twitch/20"></div>
              </div>
              
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Setup;
