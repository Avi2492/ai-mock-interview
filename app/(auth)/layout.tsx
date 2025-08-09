import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
	const isAuthenticatedUser = await isAuthenticated();

	if (isAuthenticatedUser) {
		redirect("/dashboard");
	}
	return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
