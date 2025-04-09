
import Layout from "@/components/Layout";
import PcPartCard from "@/components/PcPartCard";

const Setup = () => {
  // Sample PC parts data - replace with your actual setup
  const pcParts = [
    {
      title: "CPU",
      description: "AMD Ryzen 9 5900X 12-Kern Prozessor",
      imageSrc: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "GPU",
      description: "NVIDIA GeForce RTX 3080 10GB GDDR6X",
      imageSrc: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Motherboard",
      description: "ASUS ROG Strix X570-E Gaming",
      imageSrc: "https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "RAM",
      description: "32GB (4x8GB) Corsair Vengeance RGB Pro 3600MHz",
      imageSrc: "https://images.unsplash.com/photo-1541029071515-d09b89b0d383?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Speicher",
      description: "1TB Samsung 980 Pro NVMe SSD + 2TB Samsung 870 QVO SSD",
      imageSrc: "https://images.unsplash.com/photo-1600348712459-d11d7a7c464c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "CPU Kühler",
      description: "NZXT Kraken X73 360mm AIO Flüssigkeitskühler",
      imageSrc: "https://images.unsplash.com/photo-1587202372583-49330a15584d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Gehäuse",
      description: "Lian Li PC-O11 Dynamic XL",
      imageSrc: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Netzteil",
      description: "Corsair RM850x 850W 80+ Gold Zertifiziert",
      imageSrc: "https://images.unsplash.com/photo-1591488320449-011701e649e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Streaming gear data
  const streamingGear = [
    {
      title: "Mikrofon",
      description: "Shure SM7B Cardioid Dynamisches Mikrofon",
      imageSrc: "https://images.unsplash.com/photo-1583745041008-a2536f66f6f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Kamera",
      description: "Sony Alpha a6400 Spiegellose Kamera",
      imageSrc: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mixer/Audio Interface",
      description: "GoXLR Mini Audio Interface",
      imageSrc: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Beleuchtung",
      description: "Elgato Key Light Air (2x)",
      imageSrc: "https://images.unsplash.com/photo-1533049300-15801f3ede75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Peripherals data
  const peripherals = [
    {
      title: "Tastatur",
      description: "Benutzerdefinierte mechanische Tastatur mit Gateron Switches",
      imageSrc: "https://images.unsplash.com/photo-1563191911-e65f8893f1c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Maus",
      description: "Logitech G Pro X Superlight Wireless",
      imageSrc: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Headset",
      description: "SteelSeries Arctis Pro Wireless",
      imageSrc: "https://images.unsplash.com/photo-1599669454699-e2d7aaf70a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Monitor",
      description: "27\" ASUS ROG Swift PG279QM 240Hz G-SYNC",
      imageSrc: "https://images.unsplash.com/photo-1594805090815-239d33d7e8c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
                  />
                ))}
              </div>
            </div>
            
            {/* Setup Image */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Meine Streaming-Umgebung</h2>
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1598550473359-387936a64d3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
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
