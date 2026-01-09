"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import ExportButton from "@/components/web/admin/ExportButton";

interface IUser {
    _id: string;
    name: string;
    email: string;
    phone: string;
    year: string;
    department?: string;
    attendance: boolean;
    registeredAt: string;
}

interface Pagination {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export default function ListUsers() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [pagination, setPagination] = useState<Pagination | null>(null);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [attended, setAttended] = useState<"all" | "true" | "false">("all");
    const [department, setDepartment] = useState<string>("all");
    const [page, setPage] = useState(1);

    const limit = 10;

    const DEPARTMENTS = [
        "Architecture",
        "Chemical Engineering",
        "Civil Engineering",
        "Computer Science & Engineering",
        "Construction Engineering",
        "Electrical Engineering",
        "Electronics & Telecommunication Engineering",
        "Food Technology & Biochemical Engineering",
        "Information Technology",
        "Instrumentation & Electronics Engineering",
        "Mechanical Engineering",
        "Metallurgical & Material Engineering",
        "Pharmaceutical Technology",
        "Power Engineering",
        "Printing Engineering",
        "Production Engineering",
        "Others"
    ] as const;

    async function fetchUsers() {
        setLoading(true);

        const params = new URLSearchParams();
        params.set("page", page.toString());
        params.set("limit", limit.toString());
        if (search) params.set("search", search);
        if (attended !== "all") params.set("attended", attended);
        if (department !== "all") params.set("department", department);


        const res = await fetch(`/api/admin/users?${params.toString()}`);
        const data = await res.json();

        setUsers(data.users);
        setPagination(data.pagination);
        setLoading(false);
    }

    useEffect(() => {
        const delay = setTimeout(() => {
            fetchUsers();
        }, search ? 200 : 0); // Only delay if the user is typing

        return () => clearTimeout(delay);
    }, [page, attended, department, search]);

    return (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-6">

            {/* Toolbar */}
            <div className="flex flex-col md:flex-row gap-4 justify-between">
                <Input
                    placeholder="Search name or email"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="md:w-80 bg-black/40 border-white/10 text-white 
             focus-visible:ring-0 focus-visible:ring-offset-0 
             focus-visible:border-white/20 outline-none"
                />
                <Select
                    value={department}
                    onValueChange={(v) => {
                        setPage(1);
                        setDepartment(v);
                    }}
                >
                    <SelectTrigger className="md:w-64 bg-black/40 border-white/10">
                        <SelectValue placeholder="Filter department" />
                    </SelectTrigger>
                    <SelectContent className="max-h-64 overflow-y-auto">
                        <SelectItem value="all">All departments</SelectItem>

                        {DEPARTMENTS.map((dept) => (
                            <SelectItem key={dept} value={dept}>
                                {dept}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select
                    value={attended}
                    onValueChange={(v) => {
                        setPage(1);
                        setAttended(v as any);
                    }}
                >
                    <SelectTrigger className="md:w-48 bg-black/40 border-white/10">
                        <SelectValue placeholder="Filter attendance" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All users</SelectItem>
                        <SelectItem value="true">Attended</SelectItem>
                        <SelectItem value="false">Not attended</SelectItem>
                    </SelectContent>
                </Select>
                <ExportButton
                  search={search}
                  attended={attended}
                  department={department}
                />
            </div>

            {/* Table */}
            <Table>
                <TableHeader>
                    <TableRow className="border-white/20 hover:bg-transparent text-white">
                        <TableHead className="text-white text-base font-semibold">Name</TableHead>
                        <TableHead className="text-white text-base font-semibold">Email</TableHead>
                        <TableHead className="text-white text-base font-semibold">Department</TableHead>
                        <TableHead className="text-white text-base font-semibold">Phone</TableHead>
                        <TableHead className="text-white text-base font-semibold">Year</TableHead>
                        <TableHead className="text-white text-base font-semibold">Status</TableHead>
                        <TableHead className="text-white text-base font-semibold">Registered</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {loading &&
                        Array.from({ length: limit }).map((_, i) => (
                        <TableRow key={`loading-${i}`} className="border-white/5 hover:bg-white/5">
                            <TableCell colSpan={7} className="py-4">
                            <div className="h-[4px] w-full rounded-md bg-white/10 animate-pulse" />
                            </TableCell>
                        </TableRow>
                    ))}

                    {!loading && users.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={6} className="text-center py-8 text-white/50">
                                No users found
                            </TableCell>
                        </TableRow>
                    )}

                    {!loading &&
                        users.map((user) => (
                            <TableRow
                                key={user._id}
                                className="border-white/5 hover:bg-white/5"
                            >
                                <TableCell className="font-medium">
                                    {user.name}
                                </TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.department ?? "-"}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>{user.year}</TableCell>
                                <TableCell>
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs ${user.attendance
                                                ? "bg-green-500/20 text-green-400"
                                                : "bg-gray-500/20 text-gray-400"
                                            }`}
                                    >
                                        {user.attendance ? "Attended" : "Pending"}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    {new Date(user.registeredAt).toLocaleDateString()}
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>

            {pagination && (
                <div className="flex items-center justify-between pt-4">
                    <p className="text-sm text-white/60">
                        Page {pagination.page} of {pagination.totalPages}
                    </p>

                    <div className="flex gap-2">
                        <Button
                            size="sm"
                            disabled={page === 1}
                            onClick={() => setPage((p) => p - 1)}
                        >
                            <ArrowLeft />
                        </Button>
                        <Button
                            size="sm"
                            disabled={page === pagination.totalPages}
                            onClick={() => setPage((p) => p + 1)}
                        >
                            <ArrowRight />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
