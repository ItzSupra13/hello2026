"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Dashboard() {
    interface User {
        attendance: boolean;
        name: string;
        email: string;
        phone: string;
        department: string;
        year: string;
    }

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [verifyingScan, setVerifyingScan] = useState(false); // New state for API call loading
    const [isScanning, setIsScanning] = useState(false);
    const [scanError, setScanError] = useState<string | null>(null); // Replaces qrResult
    const router = useRouter();

    const handleLogout = async () => {
        try {
          await fetch("/api/logout", { method: "POST" });
          toast.success("Logged out successfully!")
          router.replace("/login");
        } catch {
          alert("Logout failed. Please try again.");
        }
    };

    // Fetch user data
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch("/api/user");
                const data = await res.json();
                setUser(data);
            } catch (error) {
                console.error("Error fetching user:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    // Handle the scan result
    const handleScan = (result: any) => {
        if (!result) return;

        // The library returns an array of results, usually we just want the first one
        const rawValue = result[0]?.rawValue;

        if (rawValue) {
            setIsScanning(false); // Close camera immediately
            setScanError(null);   // Clear previous errors

            if (user?.email) {
                const qrDataWithUserEmail = JSON.stringify({
                    secretKey: rawValue,
                    userEmail: user.email
                });
                markAttendance(qrDataWithUserEmail);
            } else {
                setScanError("User data missing, cannot mark attendance.");
            }
        }
    };

    async function markAttendance(qrData: string) {
        setVerifyingScan(true);
        try {
            const res = await fetch("/api/mark-attendance", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ qrData }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                // SUCCESS: Update local user state immediately!
                // This triggers the UI to switch to "Attendance Marked Successfully" view
                setUser(prev => prev ? ({ ...prev, attendance: true }) : null);
                alert(data.message);
            } else {
                // FAILURE: Show error
                setScanError(data.error || "Invalid QR Code. Please try again.");
            }
        } catch (error) {
            console.error("Error marking attendance:", error);
            setScanError("Network error. Please try again.");
        } finally {
            setVerifyingScan(false);
        }
    }

    return (
        <div className="ocean-bg text-black justify-items-center text-center p-8 min-h-screen">
            <div className="text-2xl md:text-4xl lg:text-5xl items-center mt-20 font-extrabold">
                Dashboard
            </div>
            <div className="flex justify-end w-full max-w-5xl mt-4">
                <button
                  onClick={handleLogout}
                  className="border border-white px-4 py-2 rounded-lg font-semibold hover:bg-white/10 transition-all"
                >
                  Logout
                </button>
            </div>

            {loading ? (
                <div className="flex flex-col gap-4 font-bold text-xl sm:text-2xl items-center mt-20">
                    Loading...
                </div>
            ) : user ? (
                <div className="mt-6 text-lg w-full flex flex-col items-center">
                    Your Registered Data is:
                    <Card className="w-full max-w-md shadow-md backdrop-blur-3xl mt-2 p-6 bg-transparent border-1 border-white">
                        <div className="text-left space-y-2">
                            <p><strong>Name:</strong> {user.name}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Phone:</strong> {user.phone}</p>
                            <p><strong>Department:</strong> {user.department}</p>
                            <p><strong>Year:</strong> {user.year}</p>
                            <p className="text-gray-800 text-sm">
                                A Confirmation Email has been sent. Please check your inbox or spam.
                            </p>
                        </div>
                    </Card>

                    {/* Change Password Button */}
                    <button
                        className="mt-6 bg-transparent font-bold border border-white py-2 px-6 rounded-lg hover:bg-white/10 transition-all"
                        onClick={() => {
                            const newPassword = prompt("Enter your new password:");
                            if (newPassword) {
                                if (newPassword.length < 6) {
                                    alert("Password must be at least 6 characters.");
                                    return;
                                }
                                fetch("/api/change-password", {
                                    method: "POST",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify({ password: newPassword }),
                                }).then(async (res) => {
                                    if (res.ok) alert("Password changed successfully!");
                                    else alert("Failed to change password.");
                                });
                            }
                        }}
                    >
                        Change Password
                    </button>

                    {!user.attendance ? (
                        <div className="mt-5 w-full max-w-md flex flex-col items-center">
                            {!isScanning ? (
                                <>
                                    <button
                                        className="border-1 font-bold py-3 px-8 rounded-lg hover:bg-cyan-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                        onClick={() => {
                                            setScanError(null);
                                            setIsScanning(true);
                                        }}
                                        disabled={verifyingScan}
                                    >
                                        {verifyingScan ? "Verifying..." : "Scan QR to Mark Attendance"}
                                    </button>

                                    {/* Show Error Message if scan failed */}
                                    {scanError && (
                                        <div className="mt-4 p-3 bg-red-500/20 border border-red-500 text-red-800 rounded-lg flex flex-col items-center">
                                            <span className="font-bold"> {scanError}</span>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="w-full border-2 border-cyan-400 rounded-xl overflow-hidden relative">
                                    <Scanner
                                        onScan={handleScan}
                                        onError={(error) => console.log(error)}
                                        components={{
                                            finder: true,
                                        }}
                                        styles={{
                                            container: { height: "300px" }
                                        }}
                                    />
                                    <button
                                        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-red-500/80 text-white px-4 py-1 rounded-full text-sm hover:bg-red-600"
                                        onClick={() => setIsScanning(false)}
                                    >
                                        Close Camera
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div>
                            <div className="mt-8 p-4 bg-green-800/20 border border-green-500 text-green-900 rounded-xl font-bold text-xl ">
                                Attendance Marked Successfully!
                            </div>
                            <p className="text-gray-800 text-sm pt-5"> 
                                A Mail confirming your attendance has been sent. Please keep it safe for lunch.
                            </p>
                        </div>
                    )}
                </div>
            ) : (
                <div className="mt-20 text-red-400 font-bold">User not found</div>
            )}
        </div>
    );
}
