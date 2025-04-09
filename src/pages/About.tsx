
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Twitch, Youtube, Twitter, Instagram } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Über mich</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-1">
                <div className="aspect-square rounded-lg overflow-hidden bg-muted mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1633805162226-bab4417a10e8?ixlib=rb-4.0.3" 
                    alt="Streamer Portrait" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center space-x-3">
                  <a 
                    href="https://twitch.tv" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-twitch transition-colors"
                    aria-label="Twitch"
                  >
                    <Twitch className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-red-500 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-blue-400 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-pink-500 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Hallo, ich bin StreamerName!</h2>
                <p className="text-muted-foreground mb-4">
                  Willkommen auf meiner Streaming-Seite! Ich bin ein leidenschaftlicher Gamer und Technik-Enthusiast, der gerne seine Gaming-Erfahrungen mit anderen teilt. Ich habe 2020 mit dem Streaming begonnen und eine großartige Community von gleichgesinnten Gamern aufgebaut.
                </p>
                <p className="text-muted-foreground mb-4">
                  Meine Streams konzentrieren sich auf verschiedene Spiele, darunter FPS, RPGs und Strategiespiele. Besonders genieße ich Spiele mit reichhaltigen Geschichten und immersiven Welten, die wir gemeinsam erkunden können.
                </p>
                <p className="text-muted-foreground mb-4">
                  Wenn ich nicht streame, bastle ich normalerweise an meinem PC-Setup, probiere neue Spiele aus oder hänge mit meiner Community auf Discord ab.
                </p>
                <div className="mt-6">
                  <a 
                    href="https://twitch.tv" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-twitch hover:bg-twitch-dark">
                      <Twitch className="mr-2 h-4 w-4" />
                      Auf Twitch folgen
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Meine Streaming-Reise</h2>
              <div className="space-y-6">
                <div className="relative pl-8 pb-6 border-l border-muted">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-twitch"></div>
                  <h3 className="text-xl font-semibold">2020</h3>
                  <p className="text-muted-foreground mt-2">Begann gelegentlich an Wochenenden zu streamen, spielte hauptsächlich Indie-Spiele und baute Verbindungen zu einem kleinen, aber engagierten Publikum auf.</p>
                </div>
                
                <div className="relative pl-8 pb-6 border-l border-muted">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-twitch"></div>
                  <h3 className="text-xl font-semibold">2021</h3>
                  <p className="text-muted-foreground mt-2">Erreichte den Twitch-Affiliate-Status und etablierte einen regelmäßigen Streaming-Zeitplan. Begann, sich auf den Aufbau einer Community und die Verbesserung der Stream-Qualität zu konzentrieren.</p>
                </div>
                
                <div className="relative pl-8 pb-6 border-l border-muted">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-twitch"></div>
                  <h3 className="text-xl font-semibold">2022</h3>
                  <p className="text-muted-foreground mt-2">Erweiterte die Inhalte um Technik-Reviews und PC-Building-Tutorials. Kollaborierte mit anderen Streamern und ließ den Kanal deutlich wachsen.</p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-twitch"></div>
                  <h3 className="text-xl font-semibold">2023</h3>
                  <p className="text-muted-foreground mt-2">Erreichte neue Meilensteine mit über 10.000 Followern. Begann mit der Durchführung spezieller Community-Events und Giveaways. Kontinuierliche Verbesserung von Inhalten und Engagement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
