"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import FormFeild from "./FormFeild";
import { useRouter } from "next/navigation";

// const formSchema = z.object({
// 	username: z.string().min(2).max(50),
// 	email: z.string().min(6),
// 	password: z.string(),
// });

const authFormSchema = (type: FormType) => {
	return z.object({
		name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
		email: z.string().email(),
		password: z.string().min(3),
	});
};

const AuthForm = ({ type }: { type: FormType }) => {
	const router = useRouter();
	const formSchema = authFormSchema(type);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			if (type === "sign-up") {
				toast.success("Account Created Success");
				router.push("/sign-in");
				console.log("Sign Up", values);
			} else {
				toast.success("Sign In Success!");
				console.log("Sign In", values);
				router.push("/dashboard");
			}
		} catch (error) {
			console.log(error);
			toast.error("There was an error:" + error);
		}
	}

	const isSignIn = type === "sign-in";

	return (
		<div className="card-border lg:min-w-[566px] mt-10 mb-10">
			<div className="flex flex-col gap-6 card py-14 px-10">
				<div className="flex flex-row gap-2 justify-center">
					<Image
						src={"/logo.svg"}
						alt="logo"
						height={32}
						width={32}
					/>
					<h2 className="text-primary-100">InWise</h2>
				</div>

				<h3 className="text-center">Practice Job Interviews with AI</h3>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="w-full space-y-6 mt-4 form">
						{!isSignIn && (
							<FormFeild
								control={form.control}
								name={"name"}
								label="Name"
								placeholder="Your Name"
							/>
						)}
						<FormFeild
							control={form.control}
							name={"email"}
							label="Email"
							placeholder="Your Email"
						/>
						<FormFeild
							control={form.control}
							name={"password"}
							label="Password"
							placeholder="Your Password"
						/>

						<Button
							className="btn"
							type="submit">
							{isSignIn ? "Sign in" : "Create Account"}
						</Button>
					</form>
				</Form>

				<p className="text-center">
					{isSignIn ? "No Account Yet" : "Have an Account"}{" "}
					<Link
						href={!isSignIn ? "/sign-in" : "sign-up"}
						className="font-bold text-user-primary ml-1">
						{!isSignIn ? "Sign in" : "Sign Up"}
					</Link>
				</p>
			</div>
		</div>
	);
};

export default AuthForm;
