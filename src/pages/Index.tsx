
import { Button } from "@/components/ui/button";
import { ArrowRight, Twitch } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-twitch/20 via-background to-background"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Willkommen auf meiner <span className="text-gradient">Streaming</span> Seite
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Begleite mich auf meiner Gaming-Reise, während ich die neuesten Spiele streame und mit einer fantastischen Community interagiere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://twitch.tv/rqze" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-twitch hover:bg-twitch-dark">
                  <Twitch className="mr-2 h-5 w-5" />
                  Live zusehen
                </Button>
              </a>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Über mich
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Was ich mache</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 text-center border border-border card-hover">
              <div className="w-16 h-16 bg-twitch/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Twitch className="h-8 w-8 text-twitch" />
              </div>
              <h3 className="text-xl font-bold mb-2">Live-Streaming</h3>
              <p className="text-muted-foreground">
                Aktive GTA Roleplay Streams, Valorant Matches und viele andere spannende Games für euch!
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 text-center border border-border card-hover">
              <div className="w-16 h-16 bg-twitch/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-twitch">
                  <rect x="2" y="6" width="20" height="12" rx="2" />
                  <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                  <path d="M17.4 9a4 4 0 0 0 0 6" />
                  <path d="M19.7 7.7a8 8 0 0 1 0 8.6" />
                  <path d="M6.6 9a4 4 0 0 1 0 6" />
                  <path d="M4.3 7.7a8 8 0 0 0 0 8.6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Gaming</h3>
              <p className="text-muted-foreground">
                Entdecke das Neueste in Gaming und Spielewelt.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 text-center border border-border card-hover">
              <div className="w-16 h-16 bg-twitch/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-twitch">
                  <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" />
                  <path d="M15 3v6h6" />
                  <path d="M10 16s.8 1 2 1c1.3 0 2-1 2-1" />
                  <path d="M8 13h0" />
                  <path d="M16 13h0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-muted-foreground">
                Aufbau einer freundlichen und inklusiven Gemeinschaft von Gamern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Streams */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Neueste Streams</h2>
          <div className="aspect-video w-full max-w-4xl mx-auto bg-muted rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-muted-foreground">Hier wäre ein Twitch-Stream eingebunden</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a 
              href="https://twitch.tv/rqze" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                Mehr Streams ansehen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-twitch/10 to-twitch-dark/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bereit, dem Stream beizutreten?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Folge mir auf Twitch, um benachrichtigt zu werden, wenn ich live gehe, und tritt unserer tollen Community bei!
          </p>
          <a 
            href="https://twitch.tv/rqze" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-twitch hover:bg-twitch-dark">
              <Twitch className="mr-2 h-5 w-5" />
              Auf Twitch folgen
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
