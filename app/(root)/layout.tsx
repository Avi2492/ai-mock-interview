import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const RootLayout = async ({ children }: { children: ReactNode }) => {
	const isAuthenticatedUser = await isAuthenticated();

	if (!isAuthenticatedUser) {
		redirect("/sign-in");
	}
	return <div>{children}</div>;
};

export default RootLayout;
