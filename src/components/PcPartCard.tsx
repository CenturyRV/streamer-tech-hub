
import { cn } from "@/lib/utils";

interface PcPartCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  className?: string;
}

const PcPartCard = ({ title, description, imageSrc, className }: PcPartCardProps) => {
  return (
    <div className={cn(
      "bg-card rounded-lg overflow-hidden border border-border card-hover",
      className
    )}>
      {imageSrc && (
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
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
