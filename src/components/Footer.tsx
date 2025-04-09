
import { Twitch, Youtube, MessageSquare, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background/80 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-gradient">Rqze</h2>
            <p className="text-muted-foreground mt-2">Streame qualitativ hochwertige Inhalte seit 2023</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://twitch.tv/rqze" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-twitch transition-colors"
                aria-label="Twitch"
              >
                <Twitch className="h-6 w-6" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-red-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a 
                href="https://discord.gg/cszAkMrfZp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-indigo-500 transition-colors"
                aria-label="Discord"
              >
                <MessageSquare className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">© 2023 Rqze. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
