// "use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import Link from "next/link";
// // import { FcGoogle } from "react-icons/fc";
// import { Button } from "@/components/ui/button";
// import {
// 	Form,
// 	FormControl,
// 	FormField,
// 	FormItem,
// 	FormLabel,
// 	FormMessage,
// } from "@/components/ui/form";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// // @ts-expect-error: Ignoring type error due to use of a third-party library without types
// import validator from "validator";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { useRouter } from 'next/navigation';

// type LoginData = {
// 	email: string;
// 	password: string;
// };

// export default function Login() {
// 	const router = useRouter();
// 	const [showPassword, setShowPassword] = useState(false);
// 	const [loading, setLoading] = useState(false);

// 	const {
// 		register,
// 		handleSubmit,
// 		control,
// 		formState: { errors, isValid },
// 	} = useForm<LoginData>({
// 		mode: "onChange",
// 	});

// 	const onSubmit = async (data: LoginData) => {
// 		setLoading(true);
// 		try {
// 			const response = await fetch('/api/login', {
// 				method: 'POST',
// 				headers: { 'Content-Type': 'application/json' },
// 				body: JSON.stringify(data),
// 			});

// 			let result;
// 			const contentType = response.headers.get("content-type");

// 			if (contentType && contentType.includes("application/json")) {
// 				result = await response.json();
// 			} else {
// 				const text = await response.text();
// 				console.warn("Unexpected response type:", contentType, "Response text:", text);
// 				result = { error: "Unexpected response format. Please try again later." };
// 			}

// 			if (response.ok) {
// 				console.log("Login successful:", result);
// 				localStorage.setItem('user', JSON.stringify(result.user));
// 				alert("Login successful! Redirecting to dashboard...");
// 				router.push('/dashboard');
// 			} else {
// 				console.error("Login failed:", result.error);
// 				alert(result.error);
// 			}
// 		} catch (error) {
// 			console.error("Error during login:", error);
// 			alert("Something went wrong. Try again.");
// 		}
// 		setLoading(false);
// 	};


// 	return (
// 		<div className="flex min-h-screen items-center justify-center px-4 md:px-8 lg:px-16 ocean-bg text-white">
// 			<div className="hidden lg:flex flex-col text-center justify-center pt-12 pb-12 w-1/2">
// 				<h1 className="text-5xl font-extrabold mb-4">From dark pits of oblivion to the hallows of glory,</h1>
// 				<h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-blue-300 to-purple-400 animate-pulse drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]">Begin this galactic event with a bang!</h1>
// 			</div>

// 			<div className="w-full sm:w-96 lg:w-1/2 flex justify-center">
// 				<Card className="w-full max-w-md shadow-2xl border border-white/30 
// 	backdrop-blur-2xl bg-white/20 hover:bg-white/30 transition-all duration-500">
// 					<CardHeader>
// 						<CardTitle className="text-center text-3xl font-extrabold tracking-wide drop-shadow-lg">Login</CardTitle>
// 					</CardHeader>
// 					<CardContent>
// 						<Form {...useForm<LoginData>()}>
// 							<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

// 								<FormField
// 									control={control}
// 									name="email"
// 									render={({ field }) => (
// 										<FormItem>
// 											<FormLabel>Email</FormLabel>
// 											<FormControl>
// 												<Input
// 													{...field}
// 													type="email"
// 													placeholder="Enter your email"
// 													{...register("email", {
// 														required: "Email is required",
// 														validate: (value) =>
// 															validator.isEmail(value) || "Invalid email format",
// 													})}
// 													className="bg-white/30 text-black placeholder-white/80 border-white/40 focus:border-cyan-300"
// 												/>
// 											</FormControl>
// 											<FormMessage>{errors.email?.message}</FormMessage>
// 										</FormItem>
// 									)}
// 								/>

// 								<FormField
// 									control={control}
// 									name="password"
// 									render={({ field }) => (
// 										<FormItem>
// 											<FormLabel>Password</FormLabel>
// 											<FormControl>
// 												<div className="relative">
// 													<Input
// 														{...field}
// 														type={showPassword ? "text" : "password"}
// 														placeholder="Enter your password"
// 														{...register("password", {
// 															required: "Password is required",
// 															minLength: { value: 6, message: "Must be at least 6 characters" },
// 														})}
// 														className="bg-white/30 text-black placeholder-white/80 border-white/40 focus:border-cyan-300"
// 													/>
// 													<button
// 														type="button"
// 														className="absolute inset-y-0 right-2 flex items-center text-gray-700 hover:text-gray-800"
// 														onClick={() => setShowPassword(!showPassword)}
// 													>
// 														{showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
// 													</button>
// 												</div>
// 											</FormControl>
// 											<FormMessage>{errors.password?.message}</FormMessage>
// 										</FormItem>
// 									)}
// 								/>

// 								<Button type="submit" className="cursor-pointer w-full" disabled={!isValid || loading}>
// 									{loading ? "Logging in..." : "Login"}
// 								</Button>
// 							</form>
// 						</Form>

// 						{/* <div className="relative flex items-center my-4">
// 							<div className="w-full border-b border-gray-300"></div>
// 							<span className="px-3 text-sm text-gray-500">OR</span>
// 							<div className="w-full border-b border-gray-300"></div>
// 						</div> */}

// 						{/*oauth*/}
// 						{/* <div className="flex mt-4 flex-col gap-3">
// 							<Button variant="outline" className="w-full flex items-center text-black *:justify-center gap-2 cursor-pointer">
// 								<FcGoogle className="text-xl" /> Continue with Google
// 							</Button>
// 						</div> */}

// 						<p className="mt-4 text-center text-sm">
// 							Don&apos;t have an account?{" "}
// 							<Link href="/register" className="text-cyan-900 hover:underline">
// 								Register
// 							</Link>
// 						</p>
// 					</CardContent>
// 				</Card>
// 			</div>
// 		</div>
// 	);
// }

// 


"use client";

import { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Mail, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner"

type LoginData = {
  email: string;
  password: string;
};

const loginSchema: yup.ObjectSchema<LoginData> = yup.object({
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
  } = useForm<LoginData>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginData) => {
  setLoading(true);
  try {
    const res = await fetch("/api/login", {
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
	toast.success("Welcome back", {
  		  description: 'Redirecting to your dashboard...',
	});
    router.push("/dashboard");
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
    "LOGIN PORTAL • WELCOME BACK • JOIN IEEE • ";
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

      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ clipPath: "ellipse(90% 60% at 50% 100%)" }}
      >
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
            Welcome Back
          </h2>
          <p className="text-gray-400">
            Manage your agenda and networking profile.
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
              {loading ? "Logging in..." : "Sign In"}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
            </button>

            <div className="text-center text-sm text-gray-500 mt-2">
              Don&apos;t have an account?
              <Link
                href="/register"
                className="text-white font-bold ml-1 hover:underline"
              >
                Register now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
