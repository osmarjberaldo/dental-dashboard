
import { useState } from "react";
import { Bell, Search, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function Header() {
  const [searchValue, setSearchValue] = useState("");
  
  return (
    <header className="w-full px-6 py-4 bg-white border-b border-border flex items-center justify-between">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-dental-secondary">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, Admin</p>
      </div>
      
      <div className="relative max-w-md w-full mx-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input 
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search patients, dentists, appointments..." 
          className="pl-10 bg-gray-50 focus:bg-white border-muted" 
        />
      </div>
      
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Bell className="h-5 w-5 text-gray-600" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-red-500">
                3
              </Badge>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {[1, 2, 3].map((i) => (
              <DropdownMenuItem key={i} className="cursor-pointer py-3">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-dental-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bell className="h-5 w-5 text-dental-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-sm">New appointment request</p>
                    <p className="text-muted-foreground text-xs">John Doe requested a new appointment for tooth cleaning</p>
                    <p className="text-xs text-dental-gray">5 minutes ago</p>
                  </div>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 outline-none">
              <Avatar className="h-9 w-9">
                <AvatarImage src="" />
                <AvatarFallback className="bg-dental-blue text-white">AD</AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
