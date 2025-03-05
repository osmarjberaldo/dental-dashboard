
import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Appointment = {
  id: number;
  patient: {
    name: string;
    image?: string;
    initials: string;
  };
  time: string;
  address: string;
  dentist: string;
  status: "confirmed" | "pending" | "cancelled";
};

const appointments: Appointment[] = [
  {
    id: 1,
    patient: {
      name: "John Cooper",
      initials: "JC",
    },
    time: "10:30 AM - 11:30 AM",
    address: "201 Kufian No.21 Street",
    dentist: "Dr. Sarah Wilson",
    status: "confirmed",
  },
  {
    id: 2,
    patient: {
      name: "Emma Williams",
      initials: "EW",
    },
    time: "1:00 PM - 2:00 PM",
    address: "201 Kufian No.21 Street",
    dentist: "Dr. Michael Chen",
    status: "pending",
  },
  {
    id: 3,
    patient: {
      name: "David Johnson",
      initials: "DJ",
    },
    time: "3:15 PM - 4:15 PM",
    address: "201 Kufian No.21 Street",
    dentist: "Dr. Amanda Lee",
    status: "confirmed",
  },
];

export function UpcomingAppointments() {
  return (
    <Card className="shadow-sm animate-fade-up">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Today's Appointments</CardTitle>
          <Button variant="outline" size="sm" className="h-8">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div 
              key={appointment.id} 
              className="p-4 rounded-lg border border-border hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={appointment.patient.image} />
                    <AvatarFallback className="bg-dental-blue/10 text-dental-blue font-medium">
                      {appointment.patient.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{appointment.patient.name}</p>
                    <p className="text-xs text-muted-foreground">Patient</p>
                  </div>
                </div>
                <Badge 
                  variant={appointment.status === "confirmed" ? "default" : 
                          appointment.status === "pending" ? "outline" : "destructive"}
                  className={appointment.status === "confirmed" ? "bg-dental-primary" : ""}
                >
                  {appointment.status}
                </Badge>
              </div>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-dental-gray" />
                  <span className="text-sm">{appointment.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-dental-gray" />
                  <span className="text-sm">Today</span>
                </div>
              </div>
              
              <div className="mt-2 flex items-start gap-2">
                <MapPin className="h-4 w-4 text-dental-gray mt-0.5" />
                <span className="text-sm">{appointment.address}</span>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm">
                  <span className="text-muted-foreground">Dentist:</span>{" "}
                  <span className="font-medium">{appointment.dentist}</span>
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="h-8">Reschedule</Button>
                  <Button size="sm" className="h-8 bg-dental-primary hover:bg-dental-primary-dark">
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
