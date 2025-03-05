
import { useState } from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Pencil, MoreVertical, Trash2, UserX, UserCheck, Star, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";

// Mock data for dentists
const mockDentists = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@dentalcare.com",
    specialization: "Orthodontist",
    yearsOfExperience: 8,
    status: "active",
    patients: 42,
    rating: 4.8,
    availability: "Mon, Wed, Fri",
    avatar: "",
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    email: "michael.chen@dentalcare.com",
    specialization: "Periodontist",
    yearsOfExperience: 12,
    status: "active",
    patients: 35,
    rating: 4.7,
    availability: "Tue, Thu, Sat",
    avatar: "",
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    email: "emily.rodriguez@dentalcare.com",
    specialization: "Pediatric Dentist",
    yearsOfExperience: 6,
    status: "active",
    patients: 58,
    rating: 4.9,
    availability: "Mon-Fri",
    avatar: "",
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    email: "james.wilson@dentalcare.com",
    specialization: "Oral Surgeon",
    yearsOfExperience: 15,
    status: "inactive",
    patients: 27,
    rating: 4.6,
    availability: "Wed, Thu, Fri",
    avatar: "",
  },
  {
    id: "5",
    name: "Dr. Sophia Lee",
    email: "sophia.lee@dentalcare.com",
    specialization: "Endodontist",
    yearsOfExperience: 10,
    status: "active",
    patients: 31,
    rating: 4.5,
    availability: "Mon, Tue, Wed",
    avatar: "",
  },
];

interface DentistsListProps {
  onEdit: (dentist: any) => void;
}

export function DentistsList({ onEdit }: DentistsListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter dentists based on search query
  const filteredDentists = searchQuery
    ? mockDentists.filter(
        (dentist) =>
          dentist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dentist.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dentist.specialization.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockDentists;

  const handleDelete = (id: string) => {
    toast.success("Dentist deleted successfully", {
      description: "The dentist has been removed from the system."
    });
  };

  const handleStatusChange = (id: string, newStatus: string) => {
    toast.success(`Dentist ${newStatus === 'active' ? 'activated' : 'deactivated'} successfully`);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Input
          placeholder="Search dentists..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            Export
          </Button>
          <Button variant="outline" size="sm">
            Filter
          </Button>
        </div>
      </div>

      <Card className="border-0 shadow-none">
        <CardContent className="p-0">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Dentist</TableHead>
                  <TableHead>Specialization</TableHead>
                  <TableHead>Experience</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Patients</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Availability</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDentists.map((dentist) => (
                  <TableRow key={dentist.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={dentist.avatar} alt={dentist.name} />
                          <AvatarFallback className="bg-dental-primary/10 text-dental-primary">
                            {dentist.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{dentist.name}</p>
                          <p className="text-sm text-muted-foreground">{dentist.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="capitalize">
                        {dentist.specialization}
                      </Badge>
                    </TableCell>
                    <TableCell>{dentist.yearsOfExperience} years</TableCell>
                    <TableCell>
                      <Badge variant={dentist.status === "active" ? "default" : "outline"} 
                        className={dentist.status === "active" ? "bg-emerald-500 hover:bg-emerald-600" : ""}>
                        {dentist.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{dentist.patients}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span>{dentist.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 text-muted-foreground" />
                        <span className="text-sm">{dentist.availability}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => onEdit(dentist)}>
                            <Pencil className="mr-2 h-4 w-4" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Calendar className="mr-2 h-4 w-4" /> View Schedule
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => 
                            handleStatusChange(dentist.id, dentist.status === "active" ? "inactive" : "active")
                          }>
                            {dentist.status === "active" ? (
                              <>
                                <UserX className="mr-2 h-4 w-4" /> Deactivate
                              </>
                            ) : (
                              <>
                                <UserCheck className="mr-2 h-4 w-4" /> Activate
                              </>
                            )}
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            className="text-destructive focus:text-destructive"
                            onClick={() => handleDelete(dentist.id)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
                {filteredDentists.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={8} className="h-24 text-center">
                      No dentists found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
