
import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserList } from "@/components/users/UserList";
import { UserForm } from "@/components/users/UserForm";
import { UserPlus, Search } from "lucide-react";

const UsersPage = () => {
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleAddUser = () => setIsAddingUser(!isAddingUser);

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Manage Users</h1>
        <p className="text-muted-foreground mt-1">
          Add, edit, and manage user accounts in the system.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* User Actions */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold">User Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6">
              <div className="relative w-full sm:max-w-xs">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search users..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button 
                onClick={toggleAddUser}
                className="bg-dental-primary hover:bg-dental-primary-dark"
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Add New User
              </Button>
            </div>

            {isAddingUser ? (
              <UserForm onCancel={toggleAddUser} />
            ) : (
              <UserList searchQuery={searchQuery} />
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default UsersPage;
