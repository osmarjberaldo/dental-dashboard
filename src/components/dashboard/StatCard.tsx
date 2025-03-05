
import { cn } from "@/lib/utils";
import { Icon } from "lucide-react";
import { CSSProperties } from "react";

type StatCardProps = {
  title: string;
  value: string | number;
  change?: {
    value: string | number;
    type: "increase" | "decrease";
  };
  icon: Icon;
  iconClass?: string;
  iconBgClass?: string;
  valueSuffix?: string;
  className?: string;
  style?: CSSProperties;
};

export function StatCard({
  title,
  value,
  change,
  icon: Icon,
  iconClass,
  iconBgClass = "bg-dental-primary/10",
  valueSuffix,
  className,
  style,
}: StatCardProps) {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl p-6 shadow-sm border border-border animate-fade-up card-hover",
        className
      )}
      style={style}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="mt-2 flex items-baseline">
            <h3 className="text-2xl font-bold">{value}</h3>
            {valueSuffix && <span className="ml-1 text-sm text-muted-foreground">{valueSuffix}</span>}
          </div>
          {change && (
            <div className="mt-1">
              <span className={cn(
                "text-xs font-medium",
                change.type === "increase" ? "text-emerald-600" : "text-red-600"
              )}>
                {change.type === "increase" ? "+" : "-"}
                {change.value}
              </span>
              <span className="ml-1 text-xs text-muted-foreground">from last month</span>
            </div>
          )}
        </div>
        <div className={cn("p-3 rounded-full", iconBgClass)}>
          <Icon className={cn("h-5 w-5 text-dental-primary", iconClass)} />
        </div>
      </div>
    </div>
  );
}
