import Layout from "@/components/Layout";
import PcPartCard from "@/components/PcPartCard";
import { Cpu, Monitor, HardDrive, MemoryStick, Fan, Box, Power, Mic, Camera, Headphones, Keyboard, Mouse } from "lucide-react";

const Setup = () => {
  // Sample PC parts data with improved images and icons
  const pcParts = [
    {
      title: "CPU",
      description: "AMD Ryzen 9 5900X 12-Kern Prozessor",
      imageSrc: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Cpu className="h-8 w-8 text-twitch" />
    },
    {
      title: "GPU",
      description: "NVIDIA GeForce RTX 3080 10GB GDDR6X",
      imageSrc: "https://images.unsplash.com/photo-1591405351990-4726e331f141?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-twitch">
        <path d="M6 8.32a7.43 7.43 0 0 1 0 7.36M9.46 6.21a11.76 11.76 0 0 1 0 11.58M12.91 4.1a15.91 15.91 0 0 1 0 15.8M16.37 2a20.16 20.16 0 0 1 0 20M19.82 0a24.07 24.07 0 0 1 0 24" />
      </svg>
    },
    {
      title: "Motherboard",
      description: "ASUS ROG Strix X570-E Gaming",
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
      description: "32GB (4x8GB) Corsair Vengeance RGB Pro 3600MHz",
      imageSrc: "https://images.unsplash.com/photo-1562976540-1502c2145186?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <MemoryStick className="h-8 w-8 text-twitch" />
    },
    {
      title: "Speicher",
      description: "1TB Samsung 980 Pro NVMe SSD + 2TB Samsung 870 QVO SSD",
      imageSrc: "https://images.unsplash.com/photo-1517500913938-5f57b5f5efbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <HardDrive className="h-8 w-8 text-twitch" />
    },
    {
      title: "CPU Kühler",
      description: "NZXT Kraken X73 360mm AIO Flüssigkeitskühler",
      imageSrc: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Fan className="h-8 w-8 text-twitch" />
    },
    {
      title: "Gehäuse",
      description: "Lian Li PC-O11 Dynamic XL",
      imageSrc: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Box className="h-8 w-8 text-twitch" />
    },
    {
      title: "Netzteil",
      description: "Corsair RM850x 850W 80+ Gold Zertifiziert",
      imageSrc: "https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Power className="h-8 w-8 text-twitch" />
    }
  ];

  // Streaming gear data with better images
  const streamingGear = [
    {
      title: "Mikrofon",
      description: "Shure SM7B Cardioid Dynamisches Mikrofon",
      imageSrc: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Mic className="h-8 w-8 text-twitch" />
    },
    {
      title: "Kamera",
      description: "Sony Alpha a6400 Spiegellose Kamera",
      imageSrc: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Camera className="h-8 w-8 text-twitch" />
    },
    {
      title: "Mixer/Audio Interface",
      description: "GoXLR Mini Audio Interface",
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
      title: "Beleuchtung",
      description: "Elgato Key Light Air (2x)",
      imageSrc: "https://images.unsplash.com/photo-1503143899608-db73face9376?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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

  // Peripherals data with better images
  const peripherals = [
    {
      title: "Tastatur",
      description: "Benutzerdefinierte mechanische Tastatur mit Gateron Switches",
      imageSrc: "https://images.unsplash.com/photo-1631129019208-84ab65b544c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Keyboard className="h-8 w-8 text-twitch" />
    },
    {
      title: "Maus",
      description: "Logitech G Pro X Superlight Wireless",
      imageSrc: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Mouse className="h-8 w-8 text-twitch" />
    },
    {
      title: "Headset",
      description: "SteelSeries Arctis Pro Wireless",
      imageSrc: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Headphones className="h-8 w-8 text-twitch" />
    },
    {
      title: "Monitor",
      description: "27\" ASUS ROG Swift PG279QM 240Hz G-SYNC",
      imageSrc: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Monitor className="h-8 w-8 text-twitch" />
    }
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mein Streaming-Setup</h1>
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            
            {/* Setup Image */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Meine Streaming-Umgebung</h2>
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1596443686812-2f45229eebc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Komplettes Setup" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-muted-foreground mt-4 text-center">
                Mein komplettes Streaming-Setup - hier passiert der ganze Zauber!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Setup;
