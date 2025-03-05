
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { AppointmentsList } from "@/components/appointments/AppointmentsList";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { AddAppointmentForm } from "@/components/appointments/AddAppointmentForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const AppointmentsPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Appointments</h1>
          <p className="text-muted-foreground mt-1">Manage all appointments from this page</p>
        </div>
        <Button 
          onClick={() => setOpen(true)} 
          className="bg-dental-primary hover:bg-dental-primary-dark flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          New Appointment
        </Button>
      </div>

      <AppointmentsList />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <AddAppointmentForm onSuccess={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default AppointmentsPage;
