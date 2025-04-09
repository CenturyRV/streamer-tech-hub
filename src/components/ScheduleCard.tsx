
import { cn } from "@/lib/utils";

interface ScheduleCardProps {
  day: string;
  time: string;
  title: string;
  description?: string;
  isLive?: boolean;
  className?: string;
}

const ScheduleCard = ({ 
  day, 
  time, 
  title, 
  description, 
  isLive = false,
  className 
}: ScheduleCardProps) => {
  return (
    <div className={cn(
      "bg-card rounded-lg p-4 border border-border relative card-hover",
      isLive && "border-twitch",
      className
    )}>
      {isLive && (
        <div className="absolute top-2 right-2 flex items-center">
          <span className="h-2 w-2 rounded-full bg-red-500 mr-1 animate-pulse"></span>
          <span className="text-xs text-red-500 font-medium">LIVE</span>
        </div>
      )}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">{day}</span>
            <span className="text-sm font-medium text-foreground">{time}</span>
          </div>
          <h3 className="text-lg font-semibold mt-1">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
