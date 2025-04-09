
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Twitch, Youtube, Twitter, Instagram } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            
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
                <h2 className="text-2xl font-bold mb-4">Hi, I'm StreamerName!</h2>
                <p className="text-muted-foreground mb-4">
                  Welcome to my streaming hub! I'm a passionate gamer and tech enthusiast who loves sharing my gaming experiences with others. I started streaming in 2020 and have built an amazing community of like-minded gamers.
                </p>
                <p className="text-muted-foreground mb-4">
                  My streams focus on a variety of games including FPS, RPGs, and strategy games. I particularly enjoy games with rich storytelling and immersive worlds that we can explore together.
                </p>
                <p className="text-muted-foreground mb-4">
                  When I'm not streaming, I'm usually tinkering with my PC setup, trying out new games, or hanging out with my community on Discord.
                </p>
                <div className="mt-6">
                  <a 
                    href="https://twitch.tv" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-twitch hover:bg-twitch-dark">
                      <Twitch className="mr-2 h-4 w-4" />
                      Follow on Twitch
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">My Streaming Journey</h2>
              <div className="space-y-6">
                <div className="relative pl-8 pb-6 border-l border-muted">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-twitch"></div>
                  <h3 className="text-xl font-semibold">2020</h3>
                  <p className="text-muted-foreground mt-2">Started streaming casually on weekends, playing mostly indie games and connecting with a small but dedicated audience.</p>
                </div>
                
                <div className="relative pl-8 pb-6 border-l border-muted">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-twitch"></div>
                  <h3 className="text-xl font-semibold">2021</h3>
                  <p className="text-muted-foreground mt-2">Reached Twitch Affiliate status and established a regular streaming schedule. Began focusing on building a community and improving stream quality.</p>
                </div>
                
                <div className="relative pl-8 pb-6 border-l border-muted">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-twitch"></div>
                  <h3 className="text-xl font-semibold">2022</h3>
                  <p className="text-muted-foreground mt-2">Expanded content to include tech reviews and PC building tutorials. Collaborated with other streamers and grew the channel significantly.</p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-twitch"></div>
                  <h3 className="text-xl font-semibold">2023</h3>
                  <p className="text-muted-foreground mt-2">Reached new milestones with 10,000+ followers. Started hosting special community events and giveaways. Continuously improving content and engagement.</p>
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
