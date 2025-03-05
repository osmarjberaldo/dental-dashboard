
import { Calendar, Clock, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Activity = {
  id: number;
  user: {
    name: string;
    image?: string;
    initials: string;
  };
  action: string;
  target: string;
  time: string;
  type: "appointment" | "patient" | "dentist" | "payment";
};

const activities: Activity[] = [
  {
    id: 1,
    user: {
      name: "John Doe",
      initials: "JD",
    },
    action: "scheduled an appointment with",
    target: "Dr. Sarah Wilson",
    time: "5 minutes ago",
    type: "appointment",
  },
  {
    id: 2,
    user: {
      name: "Emily Johnson",
      initials: "EJ",
    },
    action: "completed treatment for",
    target: "Root Canal",
    time: "30 minutes ago",
    type: "patient",
  },
  {
    id: 3,
    user: {
      name: "Dr. Michael Chen",
      initials: "MC",
    },
    action: "updated the record of",
    target: "Jason Smith",
    time: "1 hour ago",
    type: "dentist",
  },
  {
    id: 4,
    user: {
      name: "Lisa Brown",
      initials: "LB",
    },
    action: "made a payment for",
    target: "Teeth Whitening",
    time: "2 hours ago",
    type: "payment",
  },
  {
    id: 5,
    user: {
      name: "Robert Garcia",
      initials: "RG",
    },
    action: "cancelled appointment with",
    target: "Dr. Amanda Lee",
    time: "3 hours ago",
    type: "appointment",
  },
];

function getActivityIcon(type: Activity["type"]) {
  switch (type) {
    case "appointment":
      return <Calendar className="h-4 w-4 text-dental-blue" />;
    case "patient":
      return <User className="h-4 w-4 text-dental-primary" />;
    case "dentist":
      return <User className="h-4 w-4 text-purple-500" />;
    case "payment":
      return <Clock className="h-4 w-4 text-amber-500" />;
    default:
      return null;
  }
}

export function RecentActivities() {
  return (
    <Card className="shadow-sm animate-fade-up">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <div className="relative">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={activity.user.image} />
                  <AvatarFallback className="bg-dental-gray/10 text-dental-gray font-medium">
                    {activity.user.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 rounded-full bg-white p-0.5">
                  <div className="rounded-full p-1 bg-gray-100">
                    {getActivityIcon(activity.type)}
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium">{activity.user.name}</span>{" "}
                  <span className="text-muted-foreground">{activity.action}</span>{" "}
                  <span className="font-medium">{activity.target}</span>
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
