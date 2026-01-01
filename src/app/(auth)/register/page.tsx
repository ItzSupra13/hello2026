"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
// import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
//@ts-expect-error: Ignoring type error due to use of a third-party library without types
import validator from "validator";
import { useRouter } from "next/navigation";
type RegisterData = {
	name: string;
	email: string;
	phone: string;
	department: string;
	year: string;
	password: string;
	confirmPassword: string;
};

export default function Register() {
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	// const [user, setUser] = useState(null);

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const {
		register,
		handleSubmit,
		control,
		watch,
		formState: { errors, isValid },
	} = useForm<RegisterData>({
		mode: "onChange",
	});

	const onSubmit = async (data: RegisterData) => {
		// console.log("\nUser Registration Data: ", data);
		setLoading(true);
		console.log("User is being registered...")
		try {
			const response = await fetch('/api/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});

			const result = await response.json();

			if (response.ok) {
				console.log("Registration Successfull! ", result);
				alert("Registration Successful! Redirecting to login page...");
				router.push("/login");
			}
			else {
				console.error("Registration Failed: ", result.error);
				alert(result.error);
			}

		} catch (error) {
			console.error("Error During Registration!! ", error);
		}
		setLoading(false);
	};

	return (
		<div className="ocean-bg flex min-h-screen items-center justify-center px-4 md:px-8 lg:px-16 text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]">

	
			
			<div className="hidden lg:flex flex-col text-center justify-center pt-12 pb-12 w-1/2">
				<h1 className="text-5xl font-extrabold mb-4 leading-tight drop-shadow-xl text-white">
					From dark pits of oblivion to the hallows of glory,
				</h1>
				<h1 className="text-5xl font-extrabold bg-clip-text text-transparent 
	bg-gradient-to-r from-cyan-200 via-blue-300 to-purple-400 animate-pulse drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]">

					Begin this galactic event with a bang!
				</h1>
			</div>
	
			
			<div className="w-full sm:w-96 lg:w-1/2 flex justify-center">
			<Card className="w-full max-w-md shadow-2xl border border-white/30 
	backdrop-blur-2xl bg-white/20 hover:bg-white/30 transition-all duration-500">

					
					<CardHeader>
						<CardTitle className="text-center text-3xl font-extrabold tracking-wide drop-shadow-lg">
							Register
						</CardTitle>
					</CardHeader>
	
					<CardContent>
						<Form {...useForm<RegisterData>()}>
							<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
	
								
								<FormField control={control} name="name" render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input {...field} placeholder="Enter your name"
												className="bg-white/30 text-white placeholder-white/80 border-white/40 focus:border-cyan-300" />
										</FormControl>
										<FormMessage>{errors.name?.message}</FormMessage>
									</FormItem>
								)} />
	
								<FormField control={control} name="email" render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input {...field} type="email" placeholder="Enter your email"
												className="bg-white/30 text-white placeholder-white/80 border-white/40 focus:border-cyan-300" />
										</FormControl>
										<FormMessage>{errors.email?.message}</FormMessage>
									</FormItem>
								)} />
	
								<FormField control={control} name="phone" render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input {...field} placeholder="Enter your phone number"
												className="bg-white/30 text-white placeholder-white/80 border-white/40 focus:border-cyan-300" />
										</FormControl>
										<FormMessage>{errors.phone?.message}</FormMessage>
									</FormItem>
								)} />
	
								<FormField control={control} name="department" render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input {...field} placeholder="Enter your department"
												className="bg-white/30 text-white placeholder-white/80 border-white/40 focus:border-cyan-300" />
										</FormControl>
										<FormMessage>{errors.department?.message}</FormMessage>
									</FormItem>
								)} />
	
								<FormField control={control} name="year" render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input {...field} placeholder="Enter your year"
												className="bg-white/30 text-white placeholder-white/80 border-white/40 focus:border-cyan-300" />
										</FormControl>
										<FormMessage>{errors.year?.message}</FormMessage>
									</FormItem>
								)} />
	
								
								<FormField control={control} name="password" render={({ field }) => (
									<FormItem>
										<FormControl>
											<div className="relative">
												<Input {...field} type={showPassword ? "text" : "password"}
													placeholder="Enter your password"
													className="bg-white/30 text-white placeholder-white/80 border-white/40 focus:border-cyan-300" />
												<button type="button" className="absolute right-2 top-2 opacity-70"
													onClick={() => setShowPassword(!showPassword)}>
													{showPassword ? <AiOutlineEyeInvisible size={20}/> : <AiOutlineEye size={20}/>}
												</button>
											</div>
										</FormControl>
										<FormMessage>{errors.password?.message}</FormMessage>
									</FormItem>
								)} />
	
								<FormField control={control} name="confirmPassword" render={({ field }) => (
									<FormItem>
										<FormControl>
											<div className="relative">
												<Input {...field} type={showConfirmPassword ? "text" : "password"}
													placeholder="Confirm your password"
													className="bg-white/30 text-white placeholder-white/80 border-white/40 focus:border-cyan-300" />
												<button type="button" className="absolute right-2 top-2 opacity-70"
													onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
													{showConfirmPassword ? <AiOutlineEyeInvisible size={20}/> : <AiOutlineEye size={20}/>}
												</button>
											</div>
										</FormControl>
										<FormMessage>{errors.confirmPassword?.message}</FormMessage>
									</FormItem>
								)} />
	
								<Button type="submit"
									className="cursor-pointer w-full font-bold text-lg py-2 hover:scale-[1.03] transition-all"
									disabled={!isValid || loading}>
									{loading ? "Registering..." : "Register"}
								</Button>
							</form>
						</Form>
	
						<p className="mt-4 text-center text-sm">
							Already Registered?{" "}
							<Link href="/login" className="text-cyan-300 hover:underline">Login</Link>
						</p>
					</CardContent>
				</Card>
			</div>
	
		</div>
	);
	
}