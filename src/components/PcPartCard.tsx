
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PcPartCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  icon?: ReactNode;
  className?: string;
}

const PcPartCard = ({ title, description, imageSrc, icon, className }: PcPartCardProps) => {
  return (
    <div className={cn(
      "bg-card rounded-lg overflow-hidden border border-border card-hover",
      className
    )}>
      {imageSrc && (
        <div className="aspect-video w-full overflow-hidden bg-muted relative">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
          {icon && (
            <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm p-2 rounded-full">
              {icon}
            </div>
          )}
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-muted-foreground mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default PcPartCard;
