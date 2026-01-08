// "use client";

// import { useEffect, useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Scanner } from "@yudiel/react-qr-scanner";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";

// export default function Dashboard() {
//     interface User {
//         attendance: boolean;
//         name: string;
//         email: string;
//         phone: string;
//         department: string;
//         year: string;
//     }

//     const [user, setUser] = useState<User | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [verifyingScan, setVerifyingScan] = useState(false); // New state for API call loading
//     const [isScanning, setIsScanning] = useState(false);
//     const [scanError, setScanError] = useState<string | null>(null); // Replaces qrResult
//     const router = useRouter();

//     const handleLogout = async () => {
//         try {
//           await fetch("/api/logout", { method: "POST" });
//           toast.success("Logged out successfully!")
//           router.replace("/login");
//         } catch {
//           alert("Logout failed. Please try again.");
//         }
//     };

//     // Fetch user data
//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const res = await fetch("/api/user");
//                 const data = await res.json();
//                 setUser(data);
//             } catch (error) {
//                 console.error("Error fetching user:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchUser();
//     }, []);

//     // Handle the scan result
//     const handleScan = (result: any) => {
//         if (!result) return;

//         // The library returns an array of results, usually we just want the first one
//         const rawValue = result[0]?.rawValue;

//         if (rawValue) {
//             setIsScanning(false); // Close camera immediately
//             setScanError(null);   // Clear previous errors

//             if (user?.email) {
//                 const qrDataWithUserEmail = JSON.stringify({
//                     secretKey: rawValue,
//                     userEmail: user.email
//                 });
//                 markAttendance(qrDataWithUserEmail);
//             } else {
//                 setScanError("User data missing, cannot mark attendance.");
//             }
//         }
//     };

//     async function markAttendance(qrData: string) {
//         setVerifyingScan(true);
//         try {
//             const res = await fetch("/api/mark-attendance", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ qrData }),
//             });

//             const data = await res.json();

//             if (res.ok && data.success) {
//                 // SUCCESS: Update local user state immediately!
//                 // This triggers the UI to switch to "Attendance Marked Successfully" view
//                 setUser(prev => prev ? ({ ...prev, attendance: true }) : null);
//                 alert(data.message);
//             } else {
//                 // FAILURE: Show error
//                 setScanError(data.error || "Invalid QR Code. Please try again.");
//             }
//         } catch (error) {
//             console.error("Error marking attendance:", error);
//             setScanError("Network error. Please try again.");
//         } finally {
//             setVerifyingScan(false);
//         }
//     }

//     return (
//         <div className="ocean-bg text-black justify-items-center text-center p-8 min-h-screen">
//             <div className="text-2xl md:text-4xl lg:text-5xl items-center mt-20 font-extrabold">
//                 Dashboard
//             </div>
//             <div className="flex justify-end w-full max-w-5xl mt-4">
//                 <button
//                   onClick={handleLogout}
//                   className="border border-white px-4 py-2 rounded-lg font-semibold hover:bg-white/10 transition-all"
//                 >
//                   Logout
//                 </button>
//             </div>

//             {loading ? (
//                 <div className="flex flex-col gap-4 font-bold text-xl sm:text-2xl items-center mt-20">
//                     Loading...
//                 </div>
//             ) : user ? (
//                 <div className="mt-6 text-lg w-full flex flex-col items-center">
//                     Your Registered Data is:
//                     <Card className="w-full max-w-md shadow-md backdrop-blur-3xl mt-2 p-6 bg-transparent border-1 border-white">
//                         <div className="text-left space-y-2">
//                             <p><strong>Name:</strong> {user.name}</p>
//                             <p><strong>Email:</strong> {user.email}</p>
//                             <p><strong>Phone:</strong> {user.phone}</p>
//                             <p><strong>Department:</strong> {user.department}</p>
//                             <p><strong>Year:</strong> {user.year}</p>
//                             <p className="text-gray-800 text-sm">
//                                 A Confirmation Email has been sent. Please check your inbox or spam.
//                             </p>
//                         </div>
//                     </Card>

//                     {/* Change Password Button */}
//                     <button
//                         className="mt-6 bg-transparent font-bold border border-white py-2 px-6 rounded-lg hover:bg-white/10 transition-all"
//                         onClick={() => {
//                             const newPassword = prompt("Enter your new password:");
//                             if (newPassword) {
//                                 if (newPassword.length < 6) {
//                                     alert("Password must be at least 6 characters.");
//                                     return;
//                                 }
//                                 fetch("/api/change-password", {
//                                     method: "POST",
//                                     headers: { "Content-Type": "application/json" },
//                                     body: JSON.stringify({ password: newPassword }),
//                                 }).then(async (res) => {
//                                     if (res.ok) alert("Password changed successfully!");
//                                     else alert("Failed to change password.");
//                                 });
//                             }
//                         }}
//                     >
//                         Change Password
//                     </button>

//                     {!user.attendance ? (
//                         <div className="mt-5 w-full max-w-md flex flex-col items-center">
//                             {!isScanning ? (
//                                 <>
//                                     <button
//                                         className="border-1 font-bold py-3 px-8 rounded-lg hover:bg-cyan-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
//                                         onClick={() => {
//                                             setScanError(null);
//                                             setIsScanning(true);
//                                         }}
//                                         disabled={verifyingScan}
//                                     >
//                                         {verifyingScan ? "Verifying..." : "Scan QR to Mark Attendance"}
//                                     </button>

//                                     {/* Show Error Message if scan failed */}
//                                     {scanError && (
//                                         <div className="mt-4 p-3 bg-red-500/20 border border-red-500 text-red-800 rounded-lg flex flex-col items-center">
//                                             <span className="font-bold"> {scanError}</span>
//                                         </div>
//                                     )}
//                                 </>
//                             ) : (
//                                 <div className="w-full border-2 border-cyan-400 rounded-xl overflow-hidden relative">
//                                     <Scanner
//                                         onScan={handleScan}
//                                         onError={(error) => console.log(error)}
//                                         components={{
//                                             finder: true,
//                                         }}
//                                         styles={{
//                                             container: { height: "300px" }
//                                         }}
//                                     />
//                                     <button
//                                         className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-red-500/80 text-white px-4 py-1 rounded-full text-sm hover:bg-red-600"
//                                         onClick={() => setIsScanning(false)}
//                                     >
//                                         Close Camera
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                     ) : (
//                         <div>
//                             <div className="mt-8 p-4 bg-green-800/20 border border-green-500 text-green-900 rounded-xl font-bold text-xl ">
//                                 Attendance Marked Successfully!
//                             </div>
//                             <p className="text-gray-800 text-sm pt-5"> 
//                                 A Mail confirming your attendance has been sent. Please keep it safe for lunch.
//                             </p>
//                         </div>
//                     )}
//                 </div>
//             ) : (
//                 <div className="mt-20 text-red-400 font-bold">User not found</div>
//             )}
//         </div>
//     );
// }


"use client";

import { useEffect, useState, useRef } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  User,
  Mail,
  Phone,
  Building,
  Calendar,
  LogOut,
  KeyRound,
  Lightbulb,
  QrCode,
  ShieldCheck,
  University
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Dashboard() {
  interface UserType {
    attendance: boolean;
    name: string;
    email: string;
    phone: string;
    department: string;
    year: string;
    university: string;
  }

  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  const [verifyingScan, setVerifyingScan] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanError, setScanError] = useState<string | null>(null);

  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const router = useRouter();

  /* ---------------- Fetch User ---------------- */
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/user");
        const data = await res.json();
        setUser(data);
      } catch (e) {
        console.error("Error fetching user:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  /* ---------------- Handle Password Submit ---------------- */
async function handleSubmit() {
    if (password.length < 6) {
      setError("Password must be at least 6 characters.")
      return
    }

    setLoading(true)
    setError("")

    const res = await fetch("/api/change-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    })

    setLoading(false)

    if (res.ok) {
      setPassword("")
      setOpen(false)
      toast.success("Password changed successfully!")
    } else {
      setError("Failed to change password. Try again.")
    }
  }

  /* ---------------- Animations ---------------- */
  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%"
          }
        }
      );
    }
  }, []);

  /* ---------------- Logout ---------------- */
  const handleLogout = async () => {
    try {
      await fetch("/api/logout", { method: "POST" });
      toast.success("Logged out successfully!");
      router.replace("/login");
    } catch {
      toast.error("Logout failed. Please try again.");
    }
  };

  /* ---------------- QR Attendance Logic ---------------- */
  const handleScan = (result: any) => {
    if (!result) return;

    const rawValue = result[0]?.rawValue;
    if (!rawValue) return;

    setIsScanning(false);
    setScanError(null);

    if (!user?.email) {
      setScanError("User data missing, cannot mark attendance.");
      return;
    }

    const qrDataWithUserEmail = JSON.stringify({
      secretKey: rawValue,
      userEmail: user.email
    });

    markAttendance(qrDataWithUserEmail);
  };

  async function markAttendance(qrData: string) {
    setVerifyingScan(true);

    try {
      const res = await fetch("/api/mark-attendance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ qrData })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setUser(prev => (prev ? { ...prev, attendance: true } : null));
        toast.success(data.message);
      } else {
        setScanError(data.error || "Invalid QR Code. Please try again.");
      }
    } catch {
      setScanError("Network error. Please try again.");
    } finally {
      setVerifyingScan(false);
    }
  }

  /* ---------------- UI Data Map ---------------- */
  const profileData = user
    ? [
        { label: "Name", value: user.name, icon: User },
        { label: "Email", value: user.email, icon: Mail },
        { label: "Phone", value: user.phone, icon: Phone },
        { label: "University", value: user.university, icon: University },
        { label: "Department", value: user.department, icon: Building },
        { label: "Year", value: user.year, icon: Calendar }
      ]
    : [];

  /* ========================================================= */

  return (
    <section
      ref={containerRef}
      className="bg-black text-white py-6 px-6 md:px-12 min-h-screen relative z-20 border-t border-white/5"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full max-h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10" ref={contentRef}>
        {/* ---------------- HEADER ---------------- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 pb-8 border-b border-white/10">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">
              Dashboard
            </h2>

            {!loading && user && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-gray-400 font-mono text-sm tracking-wide">
                  STATUS: {user.attendance ? "ATTENDED" : "REGISTERED"}
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Change password */}
            <button
                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 hover:bg-white/5 hover:border-white/20 text-sm font-bold tracking-wide transition-all duration-300 group"
                onClick={() => setOpen(true)}
            >
                <KeyRound className="w-4 h-4 text-gray-500 group-hover:text-white" />
                <span>Change password</span>
            </button>
            {/* Dialog */}
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogContent className="bg-black/90 border-white/10">
                <DialogHeader>
                  <DialogTitle>Change password</DialogTitle>
                  <DialogDescription>
                    Choose a strong, memorable password.
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Enter new password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />

                  {error && (
                    <p className="text-sm text-red-400">{error}</p>
                  )}
                </div>
              
                <DialogFooter>
                  <Button
                    variant="ghost"
                    onClick={() => setOpen(false)}
                    disabled={loading}
                  >
                    Cancel
                  </Button>
              
                  <Button
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Update password"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-red-500/20 text-red-400 hover:bg-red-500/10 hover:border-red-500/30 text-sm font-bold tracking-wide transition-all duration-300"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* ---------------- CONTENT GRID ---------------- */}
        {loading ? (
          <div className="text-center mt-20 text-xl font-bold opacity-80">
            Loading...
          </div>
        ) : !user ? (
          <div className="mt-20 text-red-400 font-bold text-center">
            User not found
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ---------- LEFT PROFILE CARD ---------- */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#050505] border border-white/10 rounded-2xl p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-colors duration-500 shadow-2xl">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Attendee Profile</h3>
                    <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">
                      Please find below your Registered Data
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
                  {profileData.map((item, i) => (
                    <div key={i} className="flex flex-col gap-3 group/item">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
                        <item.icon className="w-3 h-3 text-[#3B82F6]" />
                        {item.label}
                      </span>

                      <span className="text-lg md:text-xl font-mono border-b border-white/10 pb-2">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Confirmation tip */}
                <div className="my-5 p-5 rounded-xl bg-gradient-to-r from-blue-900/10 to-transparent border border-blue-500/10 flex gap-4">
                    <div className="w-8 h-8 shrink-0 flex items-center justify-center bg-blue-500/20 rounded-full animate-pulse">
                      <Lightbulb className="w-4 h-4 text-blue-400" />
                    </div>
                    <p className="text-sm text-blue-200/70 leading-relaxed">
                      A confirmation email has been sent to your registered email.
                      Check your inbox or spam folder.
                    </p>
                </div>
              </div>
            </div>

            {/* ---------- RIGHT QR SECTION ---------- */}
            <div className="flex flex-col h-full">
              {!user.attendance ? (
                <div className="bg-[#050505] border border-white/10 rounded-2xl p-8 text-center relative group">
                  <div className="flex flex-col items-center py-6">
                    <div className="w-24 h-24 border border-white/10 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.1)] mb-6">
                      <QrCode className="w-10 h-10" />
                    </div>

                    <h3 className="text-xl font-bold mb-2">
                      Quick Check-in
                    </h3>

                    <p className="text-gray-500 text-sm mb-6">
                      Scan the venue QR code to verify your attendance.
                    </p>

                    {!isScanning ? (
                      <>
                        <button
                          disabled={verifyingScan}
                          onClick={() => {
                            setScanError(null);
                            setIsScanning(true);
                          }}
                          className="w-full py-4 bg-[#3B82F6] hover:bg-[#2563EB] rounded-xl font-bold tracking-wide shadow-[0_0_25px_rgba(59,130,246,0.4)] active:scale-95 transition-all"
                        >
                          {verifyingScan
                            ? "Verifying..."
                            : "Scan QR to Mark Attendance"}
                        </button>

                        {scanError && (
                          <div className="mt-4 p-3 border border-red-500 text-red-400 rounded-lg">
                            {scanError}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="mt-4 border border-blue-500/40 rounded-xl overflow-hidden relative">
                        <Scanner
                          onScan={handleScan}
                          onError={e => console.log(e)}
                          styles={{ container: { height: "300px" } }}
                        />
                        <button
                          onClick={() => setIsScanning(false)}
                          className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-red-500/80 text-white px-4 py-1 rounded-full text-sm"
                        >
                          Close Camera
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-green-900/10 border border-green-500 rounded-2xl p-6 font-bold text-center text-green-300">
                  Attendance Marked Successfully!
                  <p className="text-xs mt-2 opacity-70">
                    Confirmation mail sent. Keep it for lunch access.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
