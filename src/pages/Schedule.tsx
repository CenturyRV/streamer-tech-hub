
import Layout from "@/components/Layout";
import ScheduleCard from "@/components/ScheduleCard";
import { Button } from "@/components/ui/button";
import { Calendar, Bell } from "lucide-react";

const Schedule = () => {
  // Sample schedule data - replace with your actual schedule
  const scheduleItems = [
    {
      day: "Montag",
      time: "20:00 - 23:00 Uhr",
      title: "FPS Montag: Valorant/CS:GO",
      description: "Starte die Woche mit actionreichen FPS-Spielen!",
      isLive: false
    },
    {
      day: "Mittwoch",
      time: "19:00 - 22:00 Uhr",
      title: "RPG Mittwoch: Elder Scrolls/Fallout",
      description: "Tauche ein in immersive Rollenspiel-Abenteuer.",
      isLive: true
    },
    {
      day: "Freitag",
      time: "21:00 - 01:00 Uhr",
      title: "Freitag Nacht Gaming: Verschiedene Spiele",
      description: "Beende die Woche mit einer Vielzahl von Spielen und entspannter Atmosphäre.",
      isLive: false
    },
    {
      day: "Samstag",
      time: "15:00 - 19:00 Uhr",
      title: "Community-Tag: Spiele mit Zuschauern",
      description: "Spielen und interagieren mit Community-Mitgliedern.",
      isLive: false
    },
    {
      day: "Sonntag",
      time: "17:00 - 20:00 Uhr",
      title: "Strategie-Sonntag: RTS & 4X Spiele",
      description: "Strategisches Gameplay und durchdachte Entscheidungsfindung.",
      isLive: false
    }
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Stream-Zeitplan</h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Schau nach, wann ich live sein werde und welche Inhalte dich erwarten. Alle Zeiten sind in Mitteleuropäischer Zeit (MEZ).
            </p>
            
            <div className="space-y-4 mb-12">
              {scheduleItems.map((item, index) => (
                <ScheduleCard
                  key={index}
                  day={item.day}
                  time={item.time}
                  title={item.title}
                  description={item.description}
                  isLive={item.isLive}
                />
              ))}
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-twitch" />
                Besondere Events & Streams
              </h2>
              <p className="text-muted-foreground mb-6">
                Neben meinem regulären Zeitplan veranstalte ich gelegentlich spezielle Events, Charity-Streams und Kollaborationen mit anderen Content-Erstellern. Folge mir auf Social Media, um auf dem Laufenden zu bleiben!
              </p>
              <div className="bg-muted/30 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Kommendes Spezial-Event:</h3>
                <p className="text-muted-foreground mb-2">
                  <span className="font-medium">12-Stunden Charity-Stream</span> - 15. April 2023 | 12:00 - 00:00 Uhr
                </p>
                <p className="text-sm text-muted-foreground">
                  Unterstützung des Bewusstseins für psychische Gesundheit mit einer Vielzahl von Spielen, besonderen Gästen und tollen Verlosungen!
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Verpasse keinen Stream!</h2>
              <p className="text-muted-foreground mb-6">
                Folge mir auf Twitch und aktiviere Benachrichtigungen, um informiert zu werden, wenn ich live gehe.
              </p>
              <Button size="lg" className="bg-twitch hover:bg-twitch-dark">
                <Bell className="mr-2 h-5 w-5" />
                Benachrichtigungen aktivieren
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Schedule;
