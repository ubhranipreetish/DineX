"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Footer from "@/components/Footer";

export default function BusinessHome() {
    const [activeFeature, setActiveFeature] = useState(0);
    const [isWhyVisible, setIsWhyVisible] = useState(false);
    const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false);
    const whySectionRef = useRef(null);
    const testimonialsSectionRef = useRef(null);

    // Smooth scrolling function
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === whySectionRef.current) {
                            setIsWhyVisible(true);
                        } else if (entry.target === testimonialsSectionRef.current) {
                            setIsTestimonialsVisible(true);
                        }
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (whySectionRef.current) {
            observer.observe(whySectionRef.current);
        }
        if (testimonialsSectionRef.current) {
            observer.observe(testimonialsSectionRef.current);
        }

        return () => {
            if (whySectionRef.current) {
                observer.unobserve(whySectionRef.current);
            }
            if (testimonialsSectionRef.current) {
                observer.unobserve(testimonialsSectionRef.current);
            }
        };
    }, []);

    const features = [
        {
            icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
            title: "Smart Table Management",
            description: "Effortlessly manage table bookings, real-time availability, and optimize seating arrangements with our intelligent system.",
            benefits: ["Real-time table status", "Automated booking confirmations", "Waitlist management", "Table turnover optimization"]
        },
        {
            icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /><circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /></svg>,
            title: "Seamless Order Management",
            description: "Streamline offline orders from table to kitchen with digital tracking, reducing errors and improving service speed.",
            benefits: ["Digital order tracking", "Kitchen display system", "Order modification tracking", "Bill splitting support"]
        },
        {
            icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
            title: "Staff Dashboard",
            description: "Empower your team with role-based access, performance tracking, and real-time communication tools.",
            benefits: ["Role-based permissions", "Performance analytics", "Shift management", "Real-time notifications"]
        },
        {
            icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
            title: "Business Analytics",
            description: "Gain actionable insights with comprehensive reports on sales, customer behavior, and operational efficiency.",
            benefits: ["Revenue analytics", "Customer insights", "Peak hours analysis", "Menu performance tracking"]
        },
        {
            icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
            title: "Integrated Billing",
            description: "Simplify payments with integrated billing, multiple payment methods, and automated invoice generation.",
            benefits: ["Multiple payment options", "Automated invoicing", "Tax calculations", "Transaction history"]
        },
        {
            icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
            title: "Mobile-First Design",
            description: "Manage your restaurant on-the-go with our responsive platform accessible from any device, anywhere.",
            benefits: ["Cross-device sync", "Offline mode support", "Push notifications", "Cloud-based backup"]
        }
    ];

    const testimonials = [
        {
            name: "Rajesh Kumar",
            role: "Owner, The Spice Route",
            location: "Mumbai",
            image: "/images/testimonial-1.jpg",
            rating: 5,
            quote: "DineX transformed our restaurant operations. We've seen a 40% increase in table turnover and our staff is more efficient than ever."
        },
        {
            name: "Priya Sharma",
            role: "Manager, Café Delight",
            location: "Bangalore",
            image: "/images/testimonial-2.jpg",
            rating: 5,
            quote: "The analytics dashboard is a game-changer. We can now make data-driven decisions that have boosted our revenue by 35%."
        },
        {
            name: "Amit Patel",
            role: "Chef & Owner, Fusion Kitchen",
            location: "Delhi",
            image: "/images/testimonial-3.jpg",
            rating: 5,
            quote: "Order management has never been smoother. Kitchen errors reduced by 90% and customer satisfaction is at an all-time high."
        }
    ];

    const whyReasons = [
        {
            icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
            title: "Lightning Fast",
            description: "Our platform is built for speed. Process orders, manage tables, and serve customers faster than ever."
        },
        {
            icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
            title: "Secure & Reliable",
            description: "Bank-grade security with 99.9% uptime ensures your business never stops, and your data stays protected."
        },
        {
            icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
            title: "Easy to Use",
            description: "Intuitive interface designed for restaurants. Your staff can learn it in minutes, not days."
        },
        {
            icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
            title: "Premium Support",
            description: "24/7 dedicated support team ready to help you succeed. We're partners in your growth."
        },
        {
            icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
            title: "Proven Results",
            description: "Join 500+ restaurants already seeing 30-50% improvement in operational efficiency."
        },
        {
            icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
            title: "Always Evolving",
            description: "Regular updates with new features based on real restaurant feedback. We grow with you."
        }
    ];

    return (
        <div className="min-h-screen bg-white text-black">

            {/* ===== HERO SECTION ===== */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF9E8] via-white to-[#FFF5E1]">

                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden opacity-40">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-[#C9A050]/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#F4D483]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                {/* Golden Curves */}
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0,200 C400,100 700,300 1400,150" stroke="#D4AF37" strokeWidth="2" fill="none" />
                    <path d="M0,450 C500,350 900,600 1400,400" stroke="#F0D58C" strokeWidth="2" fill="none" />
                </svg>

                <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
                    {/* DineX Logo */}
                    <div className="mb-8 animate-fade-in">
                        <Image
                            src="/images/logo2.png"
                            alt="DineX Logo"
                            width={200}
                            height={200}
                            className="mx-auto drop-shadow-2xl"
                        />
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-fade-up">
                        <span className="bg-gradient-to-r from-[#C9A050] via-[#F4D483] to-[#C9A050] bg-clip-text text-transparent">
                            Revolutionize
                        </span>
                        <br />
                        Your Restaurant
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-up delay-200">
                        The complete digital solution for modern restaurants. Manage tables, orders, staff & analytics—all in one powerful platform.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-up delay-300">
                        <button
                            onClick={() => scrollToSection('register')}
                            className="px-8 py-4 rounded-xl font-bold text-white text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                            style={{ background: "linear-gradient(135deg, #D4AF37, #FFD700)" }}
                        >
                            Get Started →
                        </button>
                        <button
                            onClick={() => scrollToSection('features')}
                            className="px-8 py-4 rounded-xl font-semibold text-gray-900 bg-white border-2 border-gray-300 hover:border-[#C9A050] text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Explore Features
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-up delay-500">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                            <div className="text-4xl font-bold text-[#C9A050] mb-2">500+</div>
                            <div className="text-sm text-gray-600">Restaurants</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                            <div className="text-4xl font-bold text-[#C9A050] mb-2">50k+</div>
                            <div className="text-sm text-gray-600">Orders Daily</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                            <div className="text-4xl font-bold text-[#C9A050] mb-2">40%</div>
                            <div className="text-sm text-gray-600">Efficiency Boost</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                            <div className="text-4xl font-bold text-[#C9A050] mb-2">24/7</div>
                            <div className="text-sm text-gray-600">Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FEATURES SECTION ===== */}
            <section id="features" className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                            Powerful Features for <span className="text-[#C9A050]">Modern Restaurants</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Everything you need to run your restaurant smoothly, efficiently, and profitably—all in one platform.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#C9A050] shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                                onMouseEnter={() => setActiveFeature(index)}
                            >
                                {/* Icon */}
                                <div className="text-[#C9A050] mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#C9A050] transition-colors">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Benefits List */}
                                <ul className="space-y-2">
                                    {feature.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                            <span className="text-[#C9A050] mt-1">✓</span>
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== WHY DINEX SECTION ===== */}
            <section
                ref={whySectionRef}
                className="relative py-24 px-6 bg-gradient-to-b from-white via-[#FFF9E8] to-white overflow-hidden"
            >
                {/* Background Elements */}
                <div className="absolute top-10 right-10 w-72 h-72 bg-[#C9A050]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#F4D483]/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className={`text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 transition-all ${isWhyVisible ? 'animate-fade-up' : 'opacity-0'}`}>
                            Why Choose <span className="text-[#C9A050]">DineX</span>?
                        </h2>
                        <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all ${isWhyVisible ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
                            We're not just a software provider—we're your partner in restaurant success.
                        </p>
                    </div>

                    {/* Why Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyReasons.map((reason, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#C9A050]/50 ${isWhyVisible ? 'animate-slide-up' : 'opacity-0'
                                    }`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="text-[#C9A050] mb-4">{reason.icon}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS SECTION ===== */}
            <section
                ref={testimonialsSectionRef}
                className="py-24 px-6 bg-white"
            >
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className={`text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 transition-all ${isTestimonialsVisible ? 'animate-fade-up' : 'opacity-0'}`}>
                            Loved by Restaurant <span className="text-[#C9A050]">Owners</span>
                        </h2>
                        <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all ${isTestimonialsVisible ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
                            Don't just take our word for it—hear from restaurant owners who've transformed their business with DineX.
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`bg-gradient-to-br from-white to-[#FFF9E8] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 ${isTestimonialsVisible ? 'animate-slide-up' : 'opacity-0'
                                    }`}
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                                    "{testimonial.quote}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A050] to-[#F4D483] flex items-center justify-center text-white font-bold text-xl">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                                        <div className="text-xs text-gray-500">{testimonial.location}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== REGISTER CTA SECTION ===== */}
            <section id="register" className="relative py-32 px-6 bg-[#FFF8E7] overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/patterns/dots.svg')] opacity-30"></div>
                </div>

                {/* Glow Effects */}
                <div className="absolute top-20 left-20 w-96 h-96 bg-[#C9A050]/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#F4D483]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    {/* Icon */}
                    <div className="inline-block mb-6 animate-bounce">
                        <svg className="w-20 h-20 mx-auto text-[#C9A050]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
                        Ready to Transform Your Restaurant?
                    </h2>

                    {/* Subheading */}
                    <p className="text-xl sm:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
                        Join the DineX revolution and take your restaurant management to the next level.
                    </p>

                    {/* Two CTA Options */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                        {/* Register Your Restaurant */}
                        <div className="bg-white rounded-2xl p-10 shadow-2xl hover:shadow-3xl">
                            <div className="text-[#C9A050] mb-4">
                                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">New Restaurant</h3>
                            <p className="text-gray-600 mb-6">
                                Register your restaurant and start managing tables, orders, and staff digitally.
                            </p>
                            <Link href="/business/register">
                                <button className="w-full py-4 rounded-xl font-bold text-white text-lg shadow-xl hover:shadow-2xl cursor-pointer"
                                    style={{ background: "linear-gradient(135deg, #1F2937, #374151)" }}
                                >
                                    Register Your Restaurant →
                                </button>
                            </Link>
                        </div>

                        {/* Already Registered */}
                        <div className="bg-white rounded-2xl p-10 shadow-2xl hover:shadow-3xl">
                            <div className="text-[#C9A050] mb-4">
                                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Existing User</h3>
                            <p className="text-gray-600 mb-6">
                                Already have an account? Log in to access your restaurant dashboard.
                            </p>
                            <Link href="/business/login">
                                <button className="w-full py-4 rounded-xl font-bold text-white text-lg shadow-xl hover:shadow-2xl cursor-pointer"
                                    style={{ background: "linear-gradient(135deg, #1F2937, #374151)" }}
                                >
                                    Log In →
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Contact Alternative */}
                    <div className="text-gray-700 pt-8 border-t border-gray-300">
                        <p className="text-lg mb-3">Need help or have questions?</p>
                        <a href="tel:+919876543210" className="text-2xl font-bold text-[#C9A050] hover:text-[#D4AF37] hover:underline inline-block mb-2">
                            📞 +91 9876543210
                        </a>
                        <p className="text-gray-600">Our team is here to help you get started</p>
                    </div>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <Footer />
        </div>
    );
}
