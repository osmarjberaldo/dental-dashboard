
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, TooltipProps } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { valueFormatter } from "@/lib/utils";

// Sample data for the chart
const monthlyData = [
  { name: "Jan", patients: 65, appointments: 40 },
  { name: "Feb", patients: 59, appointments: 45 },
  { name: "Mar", patients: 80, appointments: 60 },
  { name: "Apr", patients: 81, appointments: 55 },
  { name: "May", patients: 56, appointments: 40 },
  { name: "Jun", patients: 55, appointments: 45 },
  { name: "Jul", patients: 40, appointments: 30 },
  { name: "Aug", patients: 70, appointments: 65 },
  { name: "Sep", patients: 60, appointments: 50 },
  { name: "Oct", patients: 75, appointments: 60 },
  { name: "Nov", patients: 85, appointments: 70 },
  { name: "Dec", patients: 90, appointments: 75 },
];

const weeklyData = [
  { name: "Mon", patients: 20, appointments: 15 },
  { name: "Tue", patients: 25, appointments: 20 },
  { name: "Wed", patients: 30, appointments: 25 },
  { name: "Thu", patients: 22, appointments: 18 },
  { name: "Fri", patients: 28, appointments: 23 },
  { name: "Sat", patients: 15, appointments: 10 },
  { name: "Sun", patients: 5, appointments: 2 },
];

const yearlyData = [
  { name: "2020", patients: 800, appointments: 600 },
  { name: "2021", patients: 950, appointments: 750 },
  { name: "2022", patients: 1100, appointments: 900 },
  { name: "2023", patients: 1250, appointments: 1050 },
];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-3 shadow-md rounded-md border">
        <p className="text-sm font-medium">{label}</p>
        <div className="flex flex-col gap-1 mt-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-dental-primary" />
            <p className="text-xs">Patients: {payload[0].value}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-dental-blue" />
            <p className="text-xs">Appointments: {payload[1].value}</p>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export function DashboardChart() {
  const [timeframe, setTimeframe] = useState("monthly");
  
  const data = timeframe === "weekly" 
    ? weeklyData 
    : timeframe === "yearly" 
      ? yearlyData 
      : monthlyData;

  return (
    <Card className="shadow-sm animate-fade-up">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Overview</CardTitle>
            <CardDescription>Patients and appointments metrics</CardDescription>
          </div>
          <Select 
            value={timeframe} 
            onValueChange={setTimeframe}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 10,
                bottom: 5,
              }}
              barGap={8}
            >
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#718096', fontSize: 12 }} 
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#718096', fontSize: 12 }} 
                tickFormatter={valueFormatter} 
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="patients" fill="#00BFA6" radius={[4, 4, 0, 0]} maxBarSize={40} />
              <Bar dataKey="appointments" fill="#3182CE" radius={[4, 4, 0, 0]} maxBarSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
