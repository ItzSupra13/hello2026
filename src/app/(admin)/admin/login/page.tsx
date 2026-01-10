"use client";

import { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner"

type AdminLoginData = {
  email: string;
  password: string;
};

const loginSchema: yup.ObjectSchema<AdminLoginData> = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Must be at least 6 characters")
    .required("Password is required"),
});

export default function Login() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [pathD, setPathD] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const TEXT_GAP = 20;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AdminLoginData>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: AdminLoginData) => {
  setLoading(true);
  try {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    let result: any = {};
    try {
      result = await res.json();
    } catch {
      result.error = "Invalid server response";
    }

    if (res.ok) {
    if (result?.user) {
        localStorage.setItem("user", JSON.stringify(result.user));
    }
    toast.success("Welcome back Admin", {
          description: 'Redirecting to your dashboard...',
    });
    router.push("/admin/dashboard");
    return;
    }
    const message =
    result?.error ||
    (res.status === 401 && "Incorrect email or password") ||
    (res.status === 422 && "Invalid form submission") ||
    "Login failed";
        toast.error("Login failed.", {
        description: message
        })

  } catch (err) {
    console.error("Login error:", err);
    toast.error("Network error",{
      description: "Could not connect to server. Please try again.",
    });

  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    const updatePath = () => {
      if (!formRef.current || !sectionRef.current) return;

      const section = sectionRef.current.getBoundingClientRect();
      const form = formRef.current.getBoundingClientRect();

      const x = form.left - section.left - TEXT_GAP;
      const y = form.top - section.top - TEXT_GAP;
      const w = form.width + TEXT_GAP * 2;
      const h = form.height + TEXT_GAP * 2;

      setPathD(
        `M ${x} ${y} L ${x + w} ${y} L ${x + w} ${y + h} L ${x} ${y + h} Z`
      );
    };

    updatePath();

    const ro = new ResizeObserver(updatePath);
    if (sectionRef.current) ro.observe(sectionRef.current);
    if (formRef.current) ro.observe(formRef.current);

    window.addEventListener("resize", updatePath);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updatePath);
    };
  }, []);

  const borderText =
    "ADMIN PORTAL • WELCOME BACK ADMIN • WASSUP • ";
  const repeatedText = borderText.repeat(25);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center py-2 px-4 md:px-12 overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-black to-black opacity-60"></div>

        <svg
          width="100%"
          height="100%"
          className="overflow-visible absolute inset-0 hidden md:block"
        >
          <defs>
            <path id="login-path-base" d={pathD} fill="none" />
          </defs>
          <text className="font-mono font-medium text-sm tracking-[0.2em] fill-[#3B82F6]">
            <textPath href="#login-path-base">{repeatedText}</textPath>
          </text>
        </svg>
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none [clip-path:ellipse(90%_60%_at_50%_100%)]">
        <div className="absolute inset-0 bg-[#3B82F6]"></div>
        <div className="absolute inset-0 hidden md:block">
          <svg width="100%" height="100%" className="overflow-visible">
            <defs>
              <path id="login-path-contrast" d={pathD} fill="none" />
            </defs>
            <text className="font-mono font-medium text-sm tracking-[0.2em] fill-white">
              <textPath href="#login-path-contrast">{repeatedText}</textPath>
            </text>
          </svg>
        </div>
      </div>

      <div className="relative z-20 w-full max-w-lg mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Welcome Back Admin
          </h2>
          <p className="text-gray-400">
            Manage your Admin Dashboard
          </p>
        </div>

        <div
          ref={formRef}
          className="bg-[#050505] border border-white/10 rounded-xl p-8 md:p-12 shadow-2xl"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Email Address
              </label>

              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-white" />

                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-white"
                  {...register("email")}
                />
              </div>

              {errors.email && (
                <p className="text-xs text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Password
              </label>

              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-white" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-10 text-white placeholder-gray-600 focus:outline-none focus:border-white"
                  {...register("password")}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              {errors.password && (
                <p className="text-xs text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={!isValid || loading}
              className="group mt-4 w-full bg-white text-black hover:bg-gray-200 py-4 rounded-lg font-bold text-lg uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Log In"}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
