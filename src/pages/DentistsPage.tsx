
import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DentistsList } from "@/components/dentists/DentistsList";
import { DentistForm } from "@/components/dentists/DentistForm";

const DentistsPage = () => {
  const [open, setOpen] = useState(false);
  const [editingDentist, setEditingDentist] = useState<any>(null);

  const handleAddNew = () => {
    setEditingDentist(null);
    setOpen(true);
  };

  const handleEdit = (dentist: any) => {
    setEditingDentist(dentist);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingDentist(null);
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dentist Management</h1>
          <p className="text-muted-foreground mt-1">Manage your dental practitioners</p>
        </div>
        <Button 
          onClick={handleAddNew} 
          className="bg-dental-primary hover:bg-dental-primary-dark flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Dentist
        </Button>
      </div>

      <DentistsList onEdit={handleEdit} />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DentistForm 
            dentist={editingDentist} 
            onCancel={handleClose} 
            onSuccess={handleClose}
          />
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default DentistsPage;
