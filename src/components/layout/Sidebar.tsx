
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  UserCog, 
  FileBarChart, 
  Bell, 
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type NavItem = {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Manage Users",
    href: "/users",
    icon: Users,
  },
  {
    title: "Appointments",
    href: "/appointments",
    icon: Calendar,
  },
  {
    title: "Dentist Management",
    href: "/dentists",
    icon: UserCog,
  },
  {
    title: "Patient Records",
    href: "/patients",
    icon: Users,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: FileBarChart,
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  
  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div 
      className={cn(
        "flex flex-col h-screen bg-white border-r border-border transition-all duration-300 ease-in-out",
        collapsed ? "w-[72px]" : "w-[240px]"
      )}
    >
      <div className="flex items-center py-6 px-4">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-dental-primary flex items-center justify-center">
              <span className="text-white font-semibold">DC</span>
            </div>
            <h1 className="text-xl font-semibold text-dental-primary">DentalCare</h1>
          </div>
        )}
        {collapsed && (
          <div className="w-10 h-10 mx-auto rounded-full bg-dental-primary flex items-center justify-center">
            <span className="text-white font-semibold">DC</span>
          </div>
        )}
      </div>
      
      <div className="flex-1 py-6 overflow-y-auto hide-scrollbar">
        <nav className="px-2 space-y-1">
          <TooltipProvider delayDuration={0}>
            {navItems.map((item) => (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center py-3 px-3 rounded-lg transition-all duration-200",
                      location.pathname === item.href
                        ? "bg-dental-primary text-white"
                        : "text-gray-600 hover:bg-gray-100",
                      collapsed ? "justify-center" : "justify-start"
                    )}
                  >
                    <item.icon className={cn("flex-shrink-0", collapsed ? "w-6 h-6" : "w-5 h-5 mr-3")} />
                    {!collapsed && <span className="font-medium">{item.title}</span>}
                  </Link>
                </TooltipTrigger>
                {collapsed && (
                  <TooltipContent side="right" className="ml-2">
                    {item.title}
                  </TooltipContent>
                )}
              </Tooltip>
            ))}
          </TooltipProvider>
        </nav>
      </div>
      
      <div className="p-4 border-t border-border">
        <div className="flex flex-col gap-2">
          <Link
            to="/settings"
            className={cn(
              "flex items-center py-3 px-3 rounded-lg transition-all duration-200 text-gray-600 hover:bg-gray-100",
              location.pathname === "/settings" && "bg-gray-100",
              collapsed ? "justify-center" : "justify-start"
            )}
          >
            <Settings className={cn("flex-shrink-0", collapsed ? "w-6 h-6" : "w-5 h-5 mr-3")} />
            {!collapsed && <span className="font-medium">Settings</span>}
          </Link>
          
          <button
            onClick={toggleSidebar}
            className="flex items-center py-3 px-3 rounded-lg transition-all duration-200 text-gray-600 hover:bg-gray-100"
          >
            {collapsed ? (
              <ChevronRight className="w-6 h-6" />
            ) : (
              <>
                <ChevronLeft className="w-5 h-5 mr-3" />
                <span className="font-medium">Collapse</span>
              </>
            )}
          </button>
          
          <button
            className={cn(
              "flex items-center py-3 px-3 rounded-lg transition-all duration-200 text-red-600 hover:bg-red-50",
              collapsed ? "justify-center" : "justify-start"
            )}
          >
            <LogOut className={cn("flex-shrink-0", collapsed ? "w-6 h-6" : "w-5 h-5 mr-3")} />
            {!collapsed && <span className="font-medium">Log Out</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
