
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Calendar, Clock, MoreHorizontal, Search } from "lucide-react";

// Sample appointment data
const appointments = [
  {
    id: "APT001",
    patient: "John Cooper",
    dentist: "Dr. Sarah Wilson",
    date: "2023-10-15",
    time: "10:30 AM",
    treatment: "Root Canal",
    status: "confirmed",
  },
  {
    id: "APT002",
    patient: "Emma Williams",
    dentist: "Dr. Michael Chen",
    date: "2023-10-15",
    time: "1:00 PM",
    treatment: "Teeth Cleaning",
    status: "pending",
  },
  {
    id: "APT003",
    patient: "David Johnson",
    dentist: "Dr. Amanda Lee",
    date: "2023-10-15",
    time: "3:15 PM",
    treatment: "Dental Checkup",
    status: "confirmed",
  },
  {
    id: "APT004",
    patient: "Sophie Garcia",
    dentist: "Dr. James Wilson",
    date: "2023-10-16",
    time: "9:00 AM",
    treatment: "Tooth Extraction",
    status: "cancelled",
  },
  {
    id: "APT005",
    patient: "Michael Smith",
    dentist: "Dr. Sarah Wilson",
    date: "2023-10-16",
    time: "11:30 AM",
    treatment: "Dental Filling",
    status: "confirmed",
  },
  {
    id: "APT006",
    patient: "Linda Martinez",
    dentist: "Dr. Michael Chen",
    date: "2023-10-16",
    time: "2:45 PM",
    treatment: "Teeth Whitening",
    status: "pending",
  },
  {
    id: "APT007",
    patient: "Robert Clark",
    dentist: "Dr. Amanda Lee",
    date: "2023-10-17",
    time: "10:00 AM",
    treatment: "Braces Adjustment",
    status: "confirmed",
  },
];

export function AppointmentsList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // Filter appointments based on search query and status
  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = 
      appointment.patient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.dentist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.treatment.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || appointment.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <Card className="shadow-sm animate-fade-up">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">All Appointments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search appointments..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="w-full md:w-[180px]">
            <Select 
              defaultValue="all" 
              onValueChange={(value) => setStatusFilter(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40px]">
                  <Checkbox />
                </TableHead>
                <TableHead>Appointment ID</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Dentist</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Treatment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAppointments.length > 0 ? (
                filteredAppointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell className="font-medium">{appointment.id}</TableCell>
                    <TableCell>{appointment.patient}</TableCell>
                    <TableCell>{appointment.dentist}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-dental-gray" />
                          <span>{appointment.date}</span>
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <Clock className="h-3.5 w-3.5 text-dental-gray" />
                          <span>{appointment.time}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{appointment.treatment}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={
                          appointment.status === "confirmed" ? "default" : 
                          appointment.status === "pending" ? "outline" : "destructive"
                        }
                        className={appointment.status === "confirmed" ? "bg-dental-primary" : ""}
                      >
                        {appointment.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View details</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Reschedule</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Cancel</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                    No appointments found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        
        <div className="mt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </CardContent>
    </Card>
  );
}
