
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";

interface UserFormProps {
  onCancel: () => void;
  user?: {
    id: string;
    name: string;
    email: string;
    role: string;
    status: string;
  };
}

export function UserForm({ onCancel, user }: UserFormProps) {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [role, setRole] = useState(user?.role || "patient");
  // Fix: Change the type to boolean instead of having an implicit type of true
  const [isActive, setIsActive] = useState<boolean>(user?.status === "active" || true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Add validation here
    if (!name || !email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Here you would normally call an API to save the user
    console.log({
      name,
      email,
      role,
      status: isActive ? "active" : "inactive",
    });

    toast({
      title: "Success",
      description: user ? "User updated successfully" : "User created successfully",
    });

    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
          <Input
            id="name"
            placeholder="Enter full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">User Role</Label>
          <Select value={role} onValueChange={setRole}>
            <SelectTrigger id="role">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Administrator</SelectItem>
              <SelectItem value="dentist">Dentist</SelectItem>
              <SelectItem value="receptionist">Receptionist</SelectItem>
              <SelectItem value="patient">Patient</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <div className="flex items-center space-x-2 pt-2">
            <Switch
              id="status"
              checked={isActive}
              onCheckedChange={setIsActive} 
            />
            <Label htmlFor="status" className="cursor-pointer">
              {isActive ? "Active" : "Inactive"}
            </Label>
          </div>
        </div>
      </div>

      {!user && (
        <div className="space-y-2">
          <Label htmlFor="password">Initial Password <span className="text-red-500">*</span></Label>
          <Input
            id="password"
            type="password"
            placeholder="Set initial password"
            required
          />
          <p className="text-xs text-muted-foreground">
            Users will be prompted to change their password upon first login.
          </p>
        </div>
      )}

      <div className="flex justify-end gap-3 pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button className="bg-dental-primary hover:bg-dental-primary-dark" type="submit">
          {user ? "Update User" : "Create User"}
        </Button>
      </div>
    </form>
  );
}
