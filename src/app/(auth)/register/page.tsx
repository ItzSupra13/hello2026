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
// 	FormMessage,
// } from "@/components/ui/form";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { useRouter } from "next/navigation";
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from "@/components/ui/select"

// type RegisterData = {
// 	name: string;
// 	email: string;
// 	phone: string;
// 	department: string;
// 	year: string;
// 	password: string;
// 	confirmPassword: string;
// };

// const DEPARTMENTS = [
// 	"Architecture",
// 	"Chemical Engineering",
// 	"Civil Engineering",
// 	"Computer Science & Engineering",
// 	"Construction Engineering",
// 	"Electrical Engineering",
// 	"Electronics & Telecommunication Engineering",
// 	"Food Technology & Biochemical Engineering",
// 	"Information Technology",
// 	"Instrumentation & Electronics Engineering",
// 	"Mechanical Engineering",
// 	"Metallurgical & Material Engineering",
// 	"Pharmaceutical Technology",
// 	"Power Engineering",
// 	"Printing Engineering",
// 	"Production Engineering",
// ] as const;

// export default function Register() {
// 	const [loading, setLoading] = useState(false);
// 	const router = useRouter();
// 	// const [user, setUser] = useState(null);

// 	const [showPassword, setShowPassword] = useState(false);

// 	const {
// 		// register,
// 		handleSubmit,
// 		control,
// 		watch,
// 		formState: { errors, isValid },
// 	} = useForm<RegisterData>({
// 		mode: "onChange",
// 	});

// 	const onSubmit = async (data: RegisterData) => {
// 		// console.log("\nUser Registration Data: ", data);
// 		setLoading(true);
// 		console.log("User is being registered...")
// 		try {
// 			const response = await fetch('/api/register', {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json'
// 				},
// 				body: JSON.stringify(data)
// 			});

// 			const result = await response.json();

// 			if (response.ok) {
// 				console.log("Registration Successfull! ", result);
// 				alert("Registration Successful! Redirecting to login page...");
// 				router.push("/login");
// 			}
// 			else {
// 				console.error("Registration Failed: ", result.error);
// 				alert(result.error);
// 			}

// 		} catch (error) {
// 			console.error("Error During Registration!! ", error);
// 		}
// 		setLoading(false);
// 	};

// 	return (
// 		<div className="ocean-bg flex min-h-screen items-center justify-center px-4 md:px-8 lg:px-16 text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]">
// 			<div className="hidden lg:flex flex-col text-center justify-center pt-12 pb-12 w-1/2">
// 				<h1 className="text-5xl font-extrabold mb-4 leading-tight drop-shadow-xl text-white">
// 					From dark pits of oblivion to the hallows of glory,
// 				</h1>
// 				<h1 className="text-5xl font-extrabold bg-clip-text text-transparent 
// 	bg-gradient-to-r from-cyan-200 via-blue-300 to-purple-400 animate-pulse drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]">

// 					Begin this galactic event with a bang!
// 				</h1>
// 			</div>


// 			<div className="w-full sm:w-96 lg:w-1/2 flex justify-center">
// 				<Card className="w-full max-w-md shadow-2xl border border-white/30 
// 	backdrop-blur-2xl bg-white/20 hover:bg-white/30 transition-all duration-500 text-black">
// 					<CardHeader>
// 						<CardTitle className="text-center text-3xl font-extrabold tracking-wide drop-shadow-lg">
// 							Register
// 						</CardTitle>
// 					</CardHeader>

// 					<CardContent>
// 						<Form {...useForm<RegisterData>()}>
// 							<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-black">


// 								<FormField control={control} name="name" render={({ field }) => (
// 									<FormItem>
// 										<FormControl>
// 											<Input {...field} placeholder="Enter your name"
// 												className="bg-white/30 text-black placeholder-white/80 border-white/40 focus:border-cyan-300" />
// 										</FormControl>
// 										<FormMessage>{errors.name?.message}</FormMessage>
// 									</FormItem>
// 								)} />

// 								<FormField control={control} name="email" render={({ field }) => (
// 									<FormItem>
// 										<FormControl>
// 											<Input {...field} type="email" placeholder="Enter your email"
// 												className="bg-white/30 text-black placeholder-white/80 border-white/40 focus:border-cyan-300" />
// 										</FormControl>
// 										<FormMessage>{errors.email?.message}</FormMessage>
// 									</FormItem>
// 								)} />

// 								<FormField control={control} name="phone" render={({ field }) => (
// 									<FormItem>
// 										<FormControl>
// 											<Input {...field}
// 												type="tel"
// 												placeholder="Enter your phone number"
// 												className="bg-white/30 text-black placeholder-white/80 border-white/40 focus:border-cyan-300" />
// 										</FormControl>
// 										<FormMessage>{errors.phone?.message}</FormMessage>
// 									</FormItem>
// 								)} />

// 								<FormField
// 									control={control}
// 									name="department"
// 									render={({ field }) => (
// 										<FormItem>
// 											{/* Optional: Add a Label if needed <FormLabel>Department</FormLabel> */}
// 											<Select onValueChange={field.onChange} defaultValue={field.value}>
// 												<FormControl>
// 													<SelectTrigger className="bg-white/30 text-black border-white/40 focus:ring-cyan-300 focus:ring-offset-0 w-full">
// 														<SelectValue placeholder="Select your department" className="placeholder-white/80" />
// 													</SelectTrigger>
// 												</FormControl>
// 												<SelectContent>
// 													{DEPARTMENTS.map((dept) => (
// 														<SelectItem key={dept} value={dept}>
// 															{dept}
// 														</SelectItem>
// 													))}
// 												</SelectContent>
// 											</Select>
// 											<FormMessage>{errors.department?.message}</FormMessage>
// 										</FormItem>
// 									)}
// 								/>

// 								<FormField control={control} name="year" render={({ field }) => (
// 									<FormItem>
// 										<FormControl>
// 											<Input {...field}
// 												type="tel"
// 												placeholder="Enter your year of graduation"
// 												className="bg-white/30 text-black placeholder-white/80 border-white/40 focus:border-cyan-300" />
// 										</FormControl>
// 										<FormMessage>{errors.year?.message}</FormMessage>
// 									</FormItem>
// 								)} />


// 								<FormField control={control} name="password" render={({ field }) => (
// 									<FormItem>
// 										<FormControl>
// 											<div className="relative">
// 												<Input {...field} type={showPassword ? "text" : "password"}
// 													placeholder="Enter your password"
// 													className="bg-white/30 text-black placeholder-white/80 border-white/40 focus:border-cyan-300" />
// 												<button type="button" className="absolute right-2 top-2 opacity-70"
// 													onClick={() => setShowPassword(!showPassword)}>
// 													{showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
// 												</button>
// 											</div>
// 										</FormControl>
// 										<FormMessage>{errors.password?.message}</FormMessage>
// 									</FormItem>
// 								)} />

// 								<FormField
// 									control={control}
// 									name="confirmPassword"
// 									rules={{
// 										validate: (value) => value === watch("password") || "Passwords do not match"
// 									}}
// 									render={({ field }) => (
// 										<FormItem>
// 											<FormControl>
// 												<div className="relative">
// 													<Input {...field} type={"password"}
// 														placeholder="Confirm your password"
// 														className="bg-white/30 text-black placeholder-white/80 border-white/40 focus:border-cyan-300" />
// 												</div>
// 											</FormControl>
// 											<FormMessage>{errors.confirmPassword?.message}</FormMessage>
// 										</FormItem>
// 									)} />

// 								<Button type="submit"
// 									className="cursor-pointer w-full font-bold text-lg py-2 hover:scale-[1.03] transition-all"
// 									disabled={!isValid || loading}>
// 									{loading ? "Registering..." : "Register"}
// 								</Button>
// 							</form>
// 						</Form>

// 						<p className="mt-4 text-center text-sm">
// 							Already Registered?{" "}
// 							<Link href="/login" className="text-cyan-800 hover:underline">Login</Link>
// 						</p>
// 					</CardContent>
// 				</Card>
// 			</div>

// 		</div>
// 	);

// }



"use client";

import { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner"

import { ArrowRight, User, Mail, Building } from "lucide-react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Link from "next/link";

type RegisterData = {
  name: string;
  email: string;
  phone: string;
  university: string;
  department: string;
  year: string;
  password: string;
  confirmPassword: string;
};

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

/* Yup Schema */
const schema: yup.ObjectSchema<RegisterData> = yup.object({
  name: yup
    .string()
    .trim()
    .required("Name is required"),

  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit phone number")
    .required("Phone is required"),

    university: yup
    .string()
    .trim()
    .required("University/College is required"),

  department: yup
    .string()
    .oneOf([...DEPARTMENTS], "Select a valid department")
    .required("Department is required"),

  year: yup
    .string()
    .matches(/^202[4-9]{1}$/, "Enter a valid year between 2024 and 2029")
    .required("Year is required"),

  password: yup
    .string()
    .min(6, "Must be at least 6 characters")
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm your password")
}).required();


export default function Register() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [pathD, setPathD] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const TEXT_GAP = 20;

  // Animated path
  useEffect(() => {
    const updatePath = () => {
      if (!formRef.current || !sectionRef.current) return;

      const s = sectionRef.current.getBoundingClientRect();
      const f = formRef.current.getBoundingClientRect();

      const x = f.left - s.left - TEXT_GAP;
      const y = f.top - s.top - TEXT_GAP;
      const w = f.width + TEXT_GAP * 2;
      const h = f.height + TEXT_GAP * 2;

      setPathD(`M ${x} ${y} L ${x + w} ${y} L ${x + w} ${y + h} L ${x} ${y + h} Z`);
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

  // react-hook-form + yup
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<RegisterData>({
    resolver: yupResolver(schema),
    mode: "onChange"
  });

  // submit -> backend
  const onSubmit = async (data: RegisterData) => {
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      //   const result = await res.json();
      if (res.ok) {
        toast.success("Registration successful! Redirecting to dashboard…")
        router.push("/dashboard");
      } else {
        toast.error("Registration failed. Try submitting again")
      }
    } catch (e) {
      console.error(e);
      toast.error("Server error. Try again.")
    }

    setLoading(false);
  };

  const borderText =
    "REGISTER FOR HELLO IEEE 2026 • SECURE YOUR SPOT • JOIN IEEE • ";
  const repeatedText = borderText.repeat(20);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center py-12 px-4 md:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 hidden md:block">
        <svg width="100%" height="100%" className="overflow-visible">
          <defs>
            <path id="reg-path-base" d={pathD} fill="none" />
          </defs>
          <text className="font-mono font-bold text-sm tracking-[0.1em] fill-[#3B82F6]">
            <textPath href="#reg-path-base">{repeatedText}</textPath>
          </text>
        </svg>
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none [clip-path:ellipse(90%_60%_at_50%_100%)]">
        <div className="absolute inset-0 bg-[#3B82F6]" />
        <div className="absolute inset-0 hidden md:block">
          <svg width="100%" height="100%">
            <defs>
              <path id="reg-path-contrast" d={pathD} fill="none" />
            </defs>
            <text className="font-mono font-bold text-sm tracking-[0.1em] fill-white">
              <textPath href="#reg-path-contrast">{repeatedText}</textPath>
            </text>
          </svg>
        </div>
      </div>

      <div className="relative z-20 text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Secure Your Spot
        </h2>
        <p className="text-gray-400">Join 1,000+ innovators in Kolkata.</p>
      </div>

      <div ref={formRef} className="relative z-30 w-full max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#050505] border border-white/10 rounded-xl p-8 md:p-12 shadow-2xl flex flex-col gap-6"
        >
          {/* NAME */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                {...register("name")}
                className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 focus:border-[#3B82F6]"
                placeholder="John Doe"
              />
            </div>
            <p className="text-red-400 text-sm">{errors.name?.message}</p>
          </div>

          {/* EMAIL */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="email"
                {...register("email")}
                className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 focus:border-[#3B82F6]"
                placeholder="john@example.com"
              />
            </div>
            <p className="text-red-400 text-sm">{errors.email?.message}</p>
          </div>

         {/* NAME */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
              University / College
            </label>
            <div className="relative">
              <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                {...register("university")}
                className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 focus:border-[#3B82F6]"
                placeholder="College"
              />
            </div>
            <p className="text-red-400 text-sm">{errors.name?.message}</p>
          </div>

          {/* DEPARTMENT */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Department
            </label>
            <select
              {...register("department")}
              defaultValue=""
              className="w-full bg-white/5 border border-white/10 rounded-lg py-4 px-4 text-white focus:border-[#3B82F6]"
            >
              <option value="" disabled className="text-black">
                Select your department
              </option>
              {DEPARTMENTS.map(d => (
                <option key={d} value={d} className="text-black">
                  {d}
                </option>
              ))}
            </select>
            <p className="text-red-400 text-sm">{errors.department?.message}</p>
          </div>

          {/* PHONE */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Phone
            </label>
            <input
              {...register("phone")}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-4 px-4 focus:border-[#3B82F6]"
              placeholder="XXXXXXXXXX"
            />
            <p className="text-red-400 text-sm">{errors.phone?.message}</p>
          </div>

          {/* YEAR */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Year of Graduation
            </label>
            <input
              {...register("year")}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-4 px-4 focus:border-[#3B82F6]"
              placeholder="2026"
            />
            <p className="text-red-400 text-sm">{errors.year?.message}</p>
          </div>

          {/* PASSWORD */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className="w-full bg-white/5 border border-white/10 rounded-lg py-4 px-4 focus:border-[#3B82F6]"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(v => !v)}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
            <p className="text-red-400 text-sm">{errors.password?.message}</p>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Confirm Password
            </label>
            <input
              type="password"
              {...register("confirmPassword")}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-4 px-4 focus:border-[#3B82F6]"
              placeholder="Re-enter password"
            />
            <p className="text-red-400 text-sm">
              {errors.confirmPassword?.message}
            </p>
          </div>

          <button
            type="submit"
            disabled={!isValid || loading}
            className="mt-4 flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-blue-500 transition-all font-bold py-4 rounded-lg disabled:opacity-60"
          >
            {loading ? "Registering..." : "Register"}
            <ArrowRight className="w-5 h-5" />
          </button>
          <div className="text-center text-sm text-gray-500 mt-2">
            Have an account?
            <Link
              href="/login"
              className="text-white font-bold ml-1 hover:underline"
            >
              Log in
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
