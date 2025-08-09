import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const interSans = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Inwise",
	description: "An AI Powered platform for mock interviews.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className="dark">
			<body className={`${interSans.className} antialiased pattern`}>
				{children}

				<Toaster />
			</body>
		</html>
	);
}

{
	/**
	 *
	 * deepti2suman@gmail.com
	 * !@#qweWSX123
	 */
}
