
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpIcon, ArrowDownIcon, LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: string;
    type: 'increase' | 'decrease';
  };
  icon: LucideIcon;
  iconClass?: string;
  iconBgClass?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function StatCard({ 
  title, 
  value, 
  change, 
  icon: Icon,
  iconClass,
  iconBgClass = "bg-primary/10",
  className,
  style
}: StatCardProps) {
  return (
    <Card className={cn("shadow-sm animate-fade-up", className)} style={style}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className={cn("p-2 rounded-full", iconBgClass)}>
            <Icon className={cn("h-5 w-5", iconClass)} />
          </div>
        </div>
        <div className="mt-2">
          <h3 className="text-2xl font-bold">{value}</h3>
          
          {change && (
            <div className="flex items-center mt-1">
              {change.type === 'increase' ? (
                <ArrowUpIcon className="h-4 w-4 text-emerald-500 mr-1" />
              ) : (
                <ArrowDownIcon className="h-4 w-4 text-red-500 mr-1" />
              )}
              <span className={cn(
                "text-sm font-medium",
                change.type === 'increase' ? "text-emerald-500" : "text-red-500"
              )}>
                {change.value} {change.type === 'increase' ? 'more' : 'less'}
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
