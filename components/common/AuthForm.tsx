"use client";

import React, { useState } from "react";
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
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/firebase/client";
import { signIn, signUp } from "@/lib/actions/auth.action";
import { Loader } from "lucide-react";

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
	const [isLoading, setIsLoading] = useState(false);

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			setIsLoading(true);
			if (type === "sign-up") {
				const { name, email, password } = values;

				const userCredentials = await createUserWithEmailAndPassword(
					auth,
					email,
					password,
				);

				const result = await signUp({
					uid: userCredentials.user.uid,
					name: name!,
					email,
					password,
				});

				if (!result?.success) {
					toast.error(result?.message);
					return;
				}
				toast.success("Account Created Success");
				router.push("/sign-in");
				console.log("Sign Up", values);
			} else {
				const { email, password } = values;

				const userCredential = await signInWithEmailAndPassword(
					auth,
					email,
					password,
				);

				const idToken = await userCredential.user.getIdToken();

				if (!idToken) {
					toast.error("Sign in Failed!");
					return;
				}

				await signIn({
					email,
					idToken,
				});

				toast.success("Sign In Success!");
				console.log("Sign In", values);
				router.push("/dashboard");
			}
		} catch (error: any) {
			// console.log(error);
			toast.error("There was an error:" + error);

			// if (error.code) {
			// 	switch (error.code) {
			// 		case "auth/email-already-in-use":
			// 			toast.error("Email is already registered. Try signing in instead.");
			// 			break;
			// 		case "auth/weak-password":
			// 			toast.error("Password is too weak. Use at least 6 characters.");
			// 			break;
			// 		case "auth/invalid-email":
			// 			toast.error("Invalid email address.");
			// 			break;
			// 		case "auth/user-not-found":
			// 			toast.error("No account found with this email.");
			// 			break;
			// 		case "auth/wrong-password":
			// 			toast.error("Incorrect password.");
			// 			break;
			// 		case "auth/too-many-requests":
			// 			toast.error("Too many failed attempts. Please try again later.");
			// 			break;
			// 		case "auth/network-request-failed":
			// 			toast.error("Network error. Please check your connection.");
			// 			break;
			// 		default:
			// 			toast.error(`Authentication error: ${error.message}`);
			// 	}
			// } else {
			// 	toast.error("An unexpected error occurred: " + error.message);
			// }
		} finally {
			setIsLoading(false);
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
							type="password"
						/>

						<Button
							className="btn"
							type="submit"
							disabled={isLoading}>
							{isLoading ? (
								<div className="flex items-center justify-center size-6">
									<Loader className="animate-spin size-6" />
								</div>
							) : (
								<>{isSignIn ? "Sign in" : "Create Account"}</>
							)}
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
