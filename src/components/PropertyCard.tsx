import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock, TrendingUp, Users } from "lucide-react";

interface PropertyCardProps {
  title: string;
  location: string;
  totalValue: string;
  tokenized: string;
  investors: number;
  encrypted: boolean;
  exposure?: string;
}

const PropertyCard = ({ 
  title, 
  location, 
  totalValue, 
  tokenized, 
  investors, 
  encrypted,
  exposure 
}: PropertyCardProps) => {
  return (
    <Card className="card-blueprint">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
          {encrypted && (
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
              <Lock className="mr-1 h-3 w-3" />
              Encrypted
            </Badge>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Total Value</p>
            <p className="text-lg font-bold text-blueprint">{totalValue}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Tokenized</p>
            <p className="text-lg font-bold text-accent">{tokenized}</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border/30">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{investors} investors</span>
          </div>
          {exposure && (
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">{exposure}</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;