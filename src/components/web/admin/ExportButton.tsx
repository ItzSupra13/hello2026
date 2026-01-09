"use client";

import { Download } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

interface ExportButtonProps {
  search: string;
  attended: "all" | "true" | "false";
  department: string;
}

export default function ExportButton({
  search,
  attended,
  department
}: ExportButtonProps) {
  const handleExport = async () => {
    try {
        const params = new URLSearchParams();

    if (attended !== "all") params.set("attended", attended);
    if (department) params.set("department", department);

    const res = await fetch(`/api/admin/export?${params.toString()}`);

      if (!res.ok) {
        toast.error("Export failed");
        return;
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = `hello-ieee-users-${department}-attended-${attended}.csv`;
      a.click();

      window.URL.revokeObjectURL(url);
      toast.success("Export downloaded");
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <Button
      onClick={handleExport}
      className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition-all text-sm font-bold"
    >
      <Download className="w-4 h-4" />
      Export CSV
    </Button>
  );
}
