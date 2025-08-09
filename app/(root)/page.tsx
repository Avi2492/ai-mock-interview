/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import {
	ChevronRight,
	Brain,
	Users,
	Target,
	CheckCircle,
	Star,
	ArrowRight,
	Menu,
	X,
	Zap,
	Shield,
	BarChart3,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [displayText, setDisplayText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

	const phrases = [
		"Smart AI Interviews",
		"Unbiased Hiring",
		"Efficient Screening",
		"Data-Driven Decisions",
	];

	useEffect(() => {
		const currentPhrase = phrases[currentPhraseIndex];
		const typingSpeed = isDeleting ? 50 : 100;
		const pauseTime = isDeleting ? 1000 : 2000;

		const timer = setTimeout(() => {
			if (!isDeleting && currentIndex < currentPhrase.length) {
				setDisplayText(currentPhrase.substring(0, currentIndex + 1));
				setCurrentIndex(currentIndex + 1);
			} else if (isDeleting && currentIndex > 0) {
				setDisplayText(currentPhrase.substring(0, currentIndex - 1));
				setCurrentIndex(currentIndex - 1);
			} else if (!isDeleting && currentIndex === currentPhrase.length) {
				setTimeout(() => setIsDeleting(true), pauseTime);
			} else if (isDeleting && currentIndex === 0) {
				setIsDeleting(false);
				setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
			}
		}, typingSpeed);

		return () => clearTimeout(timer);
	}, [currentIndex, isDeleting, currentPhraseIndex, phrases]);

	const features = [
		{
			icon: <Brain className="w-8 h-8 text-blue-400" />,
			title: "AI-Powered Assessment",
			description:
				"Advanced algorithms analyze candidate responses, body language, and communication skills in real-time.",
		},
		{
			icon: <Users className="w-8 h-8 text-green-400" />,
			title: "Seamless Experience",
			description:
				"Intuitive interface for both recruiters and candidates with automated scheduling and notifications.",
		},
		{
			icon: <Target className="w-8 h-8 text-purple-400" />,
			title: "Precision Matching",
			description:
				"Match candidates to roles with 95% accuracy using our proprietary skill assessment engine.",
		},
		{
			icon: <Shield className="w-8 h-8 text-orange-400" />,
			title: "Bias-Free Hiring",
			description:
				"Eliminate unconscious bias with objective, data-driven candidate evaluations.",
		},
		{
			icon: <Zap className="w-8 h-8 text-yellow-400" />,
			title: "Lightning Fast",
			description:
				"Reduce hiring time by 70% with automated screening and instant candidate rankings.",
		},
		{
			icon: <BarChart3 className="w-8 h-8 text-pink-400" />,
			title: "Analytics Dashboard",
			description:
				"Comprehensive insights and reporting to optimize your hiring process continuously.",
		},
	];

	const testimonials = [
		{
			name: "Sarah Chen",
			role: "Head of Talent",
			company: "TechCorp",
			rating: 5,
			text: "Inwise transformed our hiring process. We've reduced time-to-hire by 60% while improving candidate quality significantly.",
		},
		{
			name: "Michael Rodriguez",
			role: "Recruitment Manager",
			company: "StartupXYZ",
			rating: 5,
			text: "The AI insights are incredibly accurate. We've made better hiring decisions and our team satisfaction has increased dramatically.",
		},
		{
			name: "Emily Watson",
			role: "People Operations",
			company: "GlobalTech",
			rating: 5,
			text: "Finally, a platform that understands modern hiring needs. The automation features are game-changing for our team.",
		},
	];

	const pricingPlans = [
		{
			name: "Starter",
			price: "$49",
			period: "per month",
			features: [
				"Up to 50 interviews/month",
				"Basic AI analysis",
				"Email support",
				"Standard templates",
				"Basic reporting",
			],
		},
		{
			name: "Professional",
			price: "$149",
			period: "per month",
			features: [
				"Up to 200 interviews/month",
				"Advanced AI insights",
				"Priority support",
				"Custom templates",
				"Advanced analytics",
				"Integration support",
			],
			popular: true,
		},
		{
			name: "Enterprise",
			price: "Custom",
			period: "contact us",
			features: [
				"Unlimited interviews",
				"Full AI suite",
				"Dedicated support",
				"White-label options",
				"Custom integrations",
				"Advanced security",
			],
		},
	];

	return (
		<>
			<div className="min-h-screen bg-gray-900 text-white">
				{/* Navigation */}
				

				{/* Hero Section */}
				<section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto">
						<div className="text-center">
							<div className="mb-8">
								<h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
									Revolutionize Hiring with <br />
									<span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
										{displayText}
										<span className="animate-pulse">|</span>
									</span>
								</h1>
								<p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
									Transform your recruitment process with AI-powered interviews
									that deliver unbiased insights, faster decisions, and better
									candidate experiences.
								</p>
							</div>

							<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
								<button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
									Start Free Trial
									<ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
								</button>
								<button className="px-8 py-4 border-2 border-gray-600 hover:border-gray-500 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gray-800">
									Watch Demo
								</button>
							</div>

							<div className="mt-12 flex justify-center items-center space-x-8 text-sm text-gray-400">
								<div className="flex items-center space-x-2">
									<CheckCircle className="w-5 h-5 text-green-400" />
									<span>No credit card required</span>
								</div>
								<div className="flex items-center space-x-2">
									<CheckCircle className="w-5 h-5 text-green-400" />
									<span>14-day free trial</span>
								</div>
								<div className="flex items-center space-x-2">
									<CheckCircle className="w-5 h-5 text-green-400" />
									<span>Setup in 5 minutes</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section
					id="features"
					className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl sm:text-4xl font-bold mb-4">
								Powerful Features for Modern Hiring
							</h2>
							<p className="text-xl text-gray-300 max-w-3xl mx-auto">
								Everything you need to streamline your interview process and
								make better hiring decisions
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{features.map((feature, index) => (
								<div
									key={index}
									className="group bg-gray-800 hover:bg-gray-750 p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-gray-600">
									<div className="mb-6">{feature.icon}</div>
									<h3 className="text-xl font-semibold mb-4">
										{feature.title}
									</h3>
									<p className="text-gray-300 leading-relaxed">
										{feature.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Stats Section */}
				<section className="py-20 px-4 sm:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
							<div className="text-center">
								<div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
								<div className="text-gray-300">Accuracy Rate</div>
							</div>
							<div className="text-center">
								<div className="text-4xl font-bold text-green-400 mb-2">
									70%
								</div>
								<div className="text-gray-300">Time Saved</div>
							</div>
							<div className="text-center">
								<div className="text-4xl font-bold text-purple-400 mb-2">
									10K+
								</div>
								<div className="text-gray-300">Interviews</div>
							</div>
							<div className="text-center">
								<div className="text-4xl font-bold text-orange-400 mb-2">
									500+
								</div>
								<div className="text-gray-300">Companies</div>
							</div>
						</div>
					</div>
				</section>

				{/* Testimonials Section */}
				<section
					id="testimonials"
					className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl sm:text-4xl font-bold mb-4">
								Trusted by Leading Companies
							</h2>
							<p className="text-xl text-gray-300">
								See what our customers say about transforming their hiring
								process
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{testimonials.map((testimonial, index) => (
								<div
									key={index}
									className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
									<div className="flex mb-4">
										{[...Array(testimonial.rating)].map((_, i) => (
											<Star
												key={i}
												className="w-5 h-5 text-yellow-400 fill-current"
											/>
										))}
									</div>
									<p className="text-gray-300 mb-6 italic">
										"{testimonial.text}"
									</p>
									<div>
										<div className="font-semibold">{testimonial.name}</div>
										<div className="text-sm text-gray-400">
											{testimonial.role}, {testimonial.company}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Pricing Section */}
				<section
					id="pricing"
					className="py-20 px-4 sm:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl sm:text-4xl font-bold mb-4">
								Simple, Transparent Pricing
							</h2>
							<p className="text-xl text-gray-300">
								Choose the plan that fits your hiring needs
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{pricingPlans.map((plan, index) => (
								<div
									key={index}
									className={`relative bg-gray-800 p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
										plan.popular
											? "border-blue-500 shadow-lg shadow-blue-500/20"
											: "border-gray-700"
									}`}>
									{plan.popular && (
										<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
											<span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
												Most Popular
											</span>
										</div>
									)}

									<div className="text-center mb-8">
										<h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
										<div className="mb-2">
											<span className="text-4xl font-bold">{plan.price}</span>
											<span className="text-gray-400 ml-2">{plan.period}</span>
										</div>
									</div>

									<ul className="space-y-4 mb-8">
										{plan.features.map((feature, featureIndex) => (
											<li
												key={featureIndex}
												className="flex items-center">
												<CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
												<span className="text-gray-300">{feature}</span>
											</li>
										))}
									</ul>

									<button
										className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
											plan.popular
												? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
												: "bg-gray-700 hover:bg-gray-600 text-white"
										}`}>
										{plan.name === "Enterprise"
											? "Contact Sales"
											: "Get Started"}
									</button>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl sm:text-4xl font-bold mb-6">
							Ready to Transform Your Hiring Process?
						</h2>
						<p className="text-xl text-gray-300 mb-8">
							Join thousands of companies already using Inwise to make better
							hiring decisions
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
								Start Your Free Trial
								<ChevronRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
							</button>
							<button className="px-8 py-4 border-2 border-gray-600 hover:border-gray-500 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gray-800">
								Schedule Demo
							</button>
						</div>
					</div>
				</section>

				{/* Footer */}
				<footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-gray-800">
					<div className="max-w-7xl mx-auto">
						<div className="flex flex-col md:flex-row justify-between items-center">
							<div className="flex items-center space-x-2 mb-4 md:mb-0">
								<div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
									<Brain className="w-5 h-5 text-white" />
								</div>
								<span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
									Inwise
								</span>
							</div>
							<div className="text-gray-400 text-sm">
								© 2025 Inwise. All rights reserved.
							</div>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ol md:flex-row justify-between items-center">
							<div className="flex items-center space-x-2 mb-4 md:mb-0">
								<div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
									<Brain className="w-5 h-5 text-white" />
								</div>
								<span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
									Inwise
								</span>
							</div>
							<div className="text-gray-400 text-sm">
								© 2025 Inwise. All rights reserved.
							</div>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}
