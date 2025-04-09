
import Layout from "@/components/Layout";
import ScheduleCard from "@/components/ScheduleCard";
import { Button } from "@/components/ui/button";
import { Calendar, Bell } from "lucide-react";

const Schedule = () => {
  // Sample schedule data - replace with your actual schedule
  const scheduleItems = [
    {
      day: "Monday",
      time: "8:00 PM - 11:00 PM",
      title: "FPS Monday: Valorant/CS:GO",
      description: "Starting the week with competitive FPS action!",
      isLive: false
    },
    {
      day: "Wednesday",
      time: "7:00 PM - 10:00 PM",
      title: "RPG Wednesday: Elder Scrolls/Fallout",
      description: "Dive into immersive role-playing adventures.",
      isLive: true
    },
    {
      day: "Friday",
      time: "9:00 PM - 1:00 AM",
      title: "Friday Night Gaming: Various Games",
      description: "End the week with a variety of games and chill vibes.",
      isLive: false
    },
    {
      day: "Saturday",
      time: "3:00 PM - 7:00 PM",
      title: "Community Day: Games with Viewers",
      description: "Playing games and interacting with community members.",
      isLive: false
    },
    {
      day: "Sunday",
      time: "5:00 PM - 8:00 PM",
      title: "Strategy Sunday: RTS & 4X Games",
      description: "Strategic gameplay and thoughtful decision-making.",
      isLive: false
    }
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Stream Schedule</h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Check when I'll be live and what content to expect. All times are in Central European Time (CET).
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
                Special Events & Streams
              </h2>
              <p className="text-muted-foreground mb-6">
                Besides my regular schedule, I occasionally host special events, charity streams, and collab sessions with other content creators. Make sure to follow me on social media to stay updated!
              </p>
              <div className="bg-muted/30 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Upcoming Special Event:</h3>
                <p className="text-muted-foreground mb-2">
                  <span className="font-medium">12-Hour Charity Stream</span> - April 15th, 2023 | 12:00 PM - 12:00 AM
                </p>
                <p className="text-sm text-muted-foreground">
                  Supporting mental health awareness with a variety of games, special guests, and amazing giveaways!
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Never Miss a Stream!</h2>
              <p className="text-muted-foreground mb-6">
                Follow me on Twitch and turn on notifications to get alerted when I go live.
              </p>
              <Button size="lg" className="bg-twitch hover:bg-twitch-dark">
                <Bell className="mr-2 h-5 w-5" />
                Get Notified
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Schedule;
