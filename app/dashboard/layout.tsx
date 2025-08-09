import Navbar from "@/components/common/Navbar";
import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
	const isAuthenticatedUser = await isAuthenticated();

	if (!isAuthenticatedUser) {
		redirect("/sign-in");
	}
	return (
		<div className="root-layout">
			<Navbar />
			{children}
		</div>
	);
};

export default DashboardLayout;
