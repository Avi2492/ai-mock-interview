import InterviewCard from "@/components/common/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardPage = () => {
	return (
		<div className="root-layout">
			<nav>
				<Link
					href={"/"}
					className="flex items-center gap-2">
					<Image
						src={"/logo.svg"}
						alt="logo"
						width={38}
						height={38}
					/>
					<h2 className="text-primary-100">Inwise</h2>
				</Link>
			</nav>
			<section className="card-cta">
				<div className="flex flex-col gap-6 max-w-lg">
					<h2>Get Interview Ready with AI-Powered Practice & feedback</h2>
					<p className="text-lg">
						Practice on real interview questions & get instant feedback
					</p>

					<Button
						asChild
						className="btn-primary max-sm:w-full">
						<Link href={"/interview"}>Start an Interview</Link>
					</Button>
				</div>

				<Image
					src={"/robot.png"}
					width={400}
					height={400}
					className="max-sm:hidden"
					alt="robot"
				/>
			</section>

			<section className="flex flex-col gap-6 mt-8">
				<h2>Your Interviews</h2>
				<div className="interviews-section">
					{/* <p>You {"haven't"} taken an interviews yet</p> */}
					{dummyInterviews.map((interview) => (
						<InterviewCard
							{...interview}
							key={interview.id}
						/>
					))}
				</div>
			</section>

			<section className="flex flex-col gap-6 mt-8">
				<h2>Take an interview</h2>
				<div className="interviews-section">
					{dummyInterviews.map((interview) => (
						<InterviewCard
							{...interview}
							key={interview.id}
						/>
					))}
					{/* <p>There are no interviews available</p> */}
				</div>
			</section>
		</div>
	);
};

export default DashboardPage;
