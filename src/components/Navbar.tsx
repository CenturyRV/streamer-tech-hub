
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Twitch } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Twitch className="h-6 w-6 text-twitch" />
            <span className="text-xl font-bold text-gradient">Rqze</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
              Startseite
            </Link>
            <Link to="/setup" className="text-foreground/80 hover:text-foreground transition-colors">
              Setup
            </Link>
            <a 
              href="https://twitch.tv/rqze" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2"
            >
              <Button className="bg-twitch hover:bg-twitch-dark">
                <Twitch className="mr-2 h-4 w-4" />
                Live zusehen
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-foreground"
            aria-label="Menü umschalten"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 mt-2">
            <Link 
              to="/" 
              className="block text-foreground/80 hover:text-foreground py-2 transition-colors"
              onClick={toggleMenu}
            >
              Startseite
            </Link>
            <Link 
              to="/setup" 
              className="block text-foreground/80 hover:text-foreground py-2 transition-colors"
              onClick={toggleMenu}
            >
              Setup
            </Link>
            <a 
              href="https://twitch.tv/rqze" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
              onClick={toggleMenu}
            >
              <Button className="w-full bg-twitch hover:bg-twitch-dark">
                <Twitch className="mr-2 h-4 w-4" />
                Live zusehen
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

