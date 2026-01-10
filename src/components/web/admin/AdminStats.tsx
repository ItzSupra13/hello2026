"use client";
import { Users, UserCheck } from "lucide-react";

interface DashboardStats {
  totals: {
    registered: number;
    attended: number;
  };
  departmentWise: Array<{
    department: string;
    count: number;
  }>;
  registrationsByDay: Array<{
    date: string;
    count: number;
  }>;
}

export default function AdminStats({stats}: {stats: DashboardStats | null}) {

  if (!stats) return null;

  const attendancePercent =
    stats.totals.registered === 0
      ? 0
      : Math.round(
          (stats.totals.attended / stats.totals.registered) * 100
        );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Total Registrations */}
      <div className="bg-[#050505] border border-white/10 p-8 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Users className="w-24 h-24 text-blue-500" />
        </div>

        <div className="relative z-10">
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2">
            Total Registrations
          </p>
          <span className="text-6xl font-mono font-bold text-white">
            {stats.totals.registered.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Attendance */}
      <div className="bg-[#050505] border border-white/10 p-8 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <UserCheck className="w-24 h-24 text-emerald-500" />
        </div>

        <div className="relative z-10">
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2">
            Marked Attendance
          </p>

          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-mono font-bold text-white">
              {stats.totals.attended.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500 font-mono">
              / {stats.totals.registered.toLocaleString()}
            </span>
          </div>

          {/* Sleek progress line */}
          <div className="mt-4 h-[3px] w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all"
              style={{ width: `${attendancePercent}%` }}
            />
          </div>
        </div>
      </div>

    </div>
  );
}
