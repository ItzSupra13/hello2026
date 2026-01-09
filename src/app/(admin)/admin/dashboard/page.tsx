"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { RotateCw, LogOut } from "lucide-react";

import AdminStats from "@/components/web/admin/AdminStats";
import AdminCharts from "@/components/web/admin/AdminCharts";
import ListUsers from "@/components/web/admin/ListUsers";

export default function AdminDashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      toast.success("Logged out successfully");
      router.replace("/login");
    } catch {
      toast.error("Logout failed");
    }
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 py-8">
      <div className="max-w-[1200px] mx-auto space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between border-b border-white/10 pb-6 gap-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              Admin Dashboard
            </h1>
            <p className="text-white/60">
              Hello IEEE 2026
            </p>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={() => router.refresh()}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 
                         hover:bg-white/5 hover:border-white/20 
                         text-sm font-bold tracking-wide transition-all duration-300"
            >
              <RotateCw className="w-4 h-4 text-gray-400" />
              Refresh
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl 
                         border border-red-500/20 text-red-400 
                         hover:bg-red-500/10 hover:border-red-500/30 
                         text-sm font-bold tracking-wide transition-all duration-300"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
        <AdminStats />
        <AdminCharts />
        <ListUsers />
      </div>
    </section>
  );
}
