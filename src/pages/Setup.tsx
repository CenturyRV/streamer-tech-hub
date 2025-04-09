
import Layout from "@/components/Layout";
import PcPartsSection from "@/components/setup/PcPartsSection";
import MonitorsSection from "@/components/setup/MonitorsSection";
import StreamingGearSection from "@/components/setup/StreamingGearSection";
import PeripheralsSection from "@/components/setup/PeripheralsSection";

const Setup = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">RQZE - SETUP | Stand: 14.03.2025</h1>
            <p className="text-muted-foreground mb-12 text-lg">
              Hier ist die gesamte Hardware, die ich verwende, um meine Inhalte zu erstellen und in höchster Qualität zu streamen.
            </p>
            
            {/* PC Parts Section */}
            <PcPartsSection />
            
            {/* Monitors Section */}
            <MonitorsSection />
            
            {/* Streaming Gear Section */}
            <StreamingGearSection />
            
            {/* Peripherals Section */}
            <PeripheralsSection />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Setup;
