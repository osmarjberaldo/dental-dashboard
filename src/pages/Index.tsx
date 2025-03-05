
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { DashboardChart } from "@/components/dashboard/DashboardChart";
import { RecentActivities } from "@/components/dashboard/RecentActivities";
import { UpcomingAppointments } from "@/components/dashboard/UpcomingAppointments";
import { formatCurrency } from "@/lib/utils";
import { Users, Calendar, Activity, DollarSign, ClipboardList } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Good Morning, Admin!</h1>
        <p className="text-muted-foreground mt-1">Here's what's happening today.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6" style={{ 
        "--animation-delay-1": "0s",
        "--animation-delay-2": "0.1s",
        "--animation-delay-3": "0.2s",
        "--animation-delay-4": "0.3s",
      } as React.CSSProperties}>
        <StatCard 
          title="Total Patients" 
          value="200,913" 
          change={{ value: "2,500", type: "increase" }}
          icon={Users}
          iconBgClass="bg-dental-primary/10"
          style={{ animationDelay: "var(--animation-delay-1)" }}
        />
        <StatCard 
          title="Scheduled Appointments" 
          value="5,290" 
          change={{ value: "320", type: "increase" }}
          icon={Calendar}
          iconBgClass="bg-dental-blue/10"
          iconClass="text-dental-blue"
          style={{ animationDelay: "var(--animation-delay-2)" }}
        />
        <StatCard 
          title="Completed Orders" 
          value="2,220" 
          change={{ value: "480", type: "increase" }}
          icon={ClipboardList}
          iconBgClass="bg-dental-secondary/10"
          iconClass="text-dental-secondary"
          style={{ animationDelay: "var(--animation-delay-3)" }}
        />
        <StatCard 
          title="Monthly Revenue" 
          value={formatCurrency(145000)} 
          change={{ value: "12.5%", type: "increase" }}
          icon={DollarSign}
          iconBgClass="bg-emerald-500/10"
          iconClass="text-emerald-500"
          style={{ animationDelay: "var(--animation-delay-4)" }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <DashboardChart />
        </div>
        <div>
          <RecentActivities />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UpcomingAppointments />
        
        <div className="grid grid-cols-1 gap-6">
          <Card className="shadow-sm animate-fade-up">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button className="bg-dental-primary hover:bg-dental-primary-dark flex items-center gap-2 h-auto py-3 justify-start">
                  <Calendar className="h-5 w-5" />
                  <span>New Appointment</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-2 h-auto py-3 justify-start">
                  <Users className="h-5 w-5" />
                  <span>Add Patient</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-2 h-auto py-3 justify-start">
                  <Activity className="h-5 w-5" />
                  <span>View Reports</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-2 h-auto py-3 justify-start">
                  <DollarSign className="h-5 w-5" />
                  <span>Manage Payments</span>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-sm font-medium">Appointment System</span>
                  </div>
                  <Badge variant="default" className="bg-emerald-500 hover:bg-emerald-600">Operational</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-sm font-medium">Payment Processing</span>
                  </div>
                  <Badge variant="default" className="bg-emerald-500 hover:bg-emerald-600">Operational</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-sm font-medium">Notification Services</span>
                  </div>
                  <Badge variant="default" className="bg-emerald-500 hover:bg-emerald-600">Operational</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="text-sm font-medium">Report Generation</span>
                  </div>
                  <Badge variant="outline" className="text-amber-500 border-amber-500">Degraded</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
