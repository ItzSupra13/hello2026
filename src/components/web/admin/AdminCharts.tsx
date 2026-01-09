"use client";

import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import { BarChart3 } from "lucide-react";

const COLORS = ["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B", "#EF4444"];

export default function AdminCharts() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchStats() {
      const res = await fetch("/api/admin/stats");
      const json = await res.json();
      setData(json);
  }
  fetchStats();
}, []);


  if (!data) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* PIE */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-6">
        <h3 className="font-semibold mb-4">
          Department-wise Registrations
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data.departmentWise}
              dataKey="count"
              nameKey="department"
              outerRadius={100}
              label
            >
              {data.departmentWise.map((_: any, i: number) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* BAR */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center gap-3 mb-6">
          <BarChart3 className="w-5 h-5 text-gray-400" />
          <h3 className="text-lg font-bold">
            Registrations (Last 30 Days)
          </h3>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.registrationsByDay}>
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#3B82F6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
