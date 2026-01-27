"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "./globals.css";
import Footer from "@/components/Footer";

export default function Home() {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isEcosystemVisible, setIsEcosystemVisible] = useState(false);
  const aboutSectionRef = useRef(null);
  const ecosystemSectionRef = useRef(null);

  // Warmup the backend to prevent cold starts on Render
  useEffect(() => {
    const warmupBackend = async () => {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/warmup`);
      } catch (error) {
        // Silently fail - warmup is a best-effort operation
        console.log("Backend warmup call completed");
      }
    };
    warmupBackend();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === aboutSectionRef.current) {
              setIsAboutVisible(true);
            } else if (entry.target === ecosystemSectionRef.current) {
              setIsEcosystemVisible(true);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }
    if (ecosystemSectionRef.current) {
      observer.observe(ecosystemSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
      if (ecosystemSectionRef.current) {
        observer.unobserve(ecosystemSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">

      {/* ===== HERO SECTION WITH VIDEO BACKGROUND ===== */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dzlge3iut/video/upload/v1764503566/hero-video_hdxkkv.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

        {/* Content at Bottom */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6 pb-24">

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-[#C9A050] via-[#F4D483] to-[#C9A050] bg-clip-text text-transparent">
              DineX
            </span>
          </h1>

          {/* Subheading */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 drop-shadow-md
                    bg-gradient-to-r from-[#E6C98C] via-[#F3DFA7] to-[#E6C98C] bg-clip-text text-transparent"
          >
            Seamless Dining. Smarter Restaurants.
          </h2>

          {/* Description */}
          <p
            className="text-base sm:text-lg md:text-xl max-w-2xl mb-8 leading-relaxed drop-shadow-md 
                    bg-gradient-to-r from-white/90 via-[#F4E7C7] to-white/90 bg-clip-text text-transparent"
          >
            The all-in-one platform for effortless booking
            <br />
            and smarter restaurant operations.
          </p>


          {/* App Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#"
              className="flex items-center gap-3 bg-black/80 hover:bg-black text-white px-6 py-3 border border-white rounded-lg transition-all shadow-xl hover:shadow-2xl"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 bg-black/80 hover:bg-black text-white px-6 py-3 border border-white rounded-lg transition-all shadow-xl hover:shadow-2xl"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </a>
          </div>

        </div>
      </section>

      {/* ===== FULL-SCREEN ABOUT SECTION ===== */}
      <section
        ref={aboutSectionRef}
        className="relative min-h-screen w-full bg-white overflow-hidden flex items-center justify-center px-6"
      >

        {/* Golden Curve Lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0,200 C400,100 700,300 1200,150" stroke="#D4AF37" strokeWidth="2" fill="none" />
          <path d="M0,450 C500,350 900,600 1400,400" stroke="#E5C158" strokeWidth="1.5" fill="none" />
        </svg>

        {/* Floating Food Images */}
        <img
          src="/images/burger.png"
          className={`hidden md:block absolute left-10 top-1/4 w-40 drop-shadow-2xl transition-all ${isAboutVisible ? 'animate-slide-left' : 'opacity-0'
            }`}
          alt="burger"
        />
        <img
          src="/images/momos.png"
          className={`hidden md:block absolute right-16 top-12 w-40 drop-shadow-2xl transition-all ${isAboutVisible ? 'animate-slide-right-top' : 'opacity-0'
            }`}
          alt="momos"
        />
        <img
          src="/images/pizza.png"
          className={`hidden md:block absolute right-10 bottom-12 w-40 drop-shadow-2xl transition-all ${isAboutVisible ? 'animate-slide-right' : 'opacity-0'
            }`}
          alt="pizza"
        />

        {/* Main Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Better dining for <span className="text-[#C9A050]">more people</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            We’re transforming the way India dines —
            helping customers experience effortless table bookings,
            <br />
            and empowering restaurants with smart offline-order management.
          </p>

          {/* Stats Box */}
          <div className="mt-16 max-w-4xl mx-auto bg-white shadow-xl rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row justify-between items-center gap-10">

            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">480+</p>
              <p className="text-gray-500 text-sm">Restaurants onboarded</p>
            </div>

            <div className="hidden sm:block h-10 w-px bg-gray-200"></div>

            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">47k+</p>
              <p className="text-gray-500 text-sm">Tables booked</p>
            </div>

            <div className="hidden sm:block h-10 w-px bg-gray-200"></div>

            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">9.6k+</p>
              <p className="text-gray-500 text-sm">Offline orders processed</p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== PREMIUM FULL-SCREEN ECOSYSTEM SECTION ===== */}
      <section
        ref={ecosystemSectionRef}
        className="relative min-h-screen w-full bg-white overflow-hidden flex items-center justify-center px-6 py-24"
      >

        {/* Golden Background Mesh */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF9E8] via-white to-[#FFF9E8] opacity-70 pointer-events-none"></div>

        {/* Golden Curved Lines - Top & Bottom Bookends */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.35] pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,80 C300,30 700,90 1400,50" stroke="#D4AF37" strokeWidth="2" fill="none" />
          <path d="M0,800 C400,730 900,830 1400,750" stroke="#F0D58C" strokeWidth="2" fill="none" />
        </svg>

        {/* Soft Glow Circles - Moved Up */}
        <div className="absolute top-0 left-20 w-72 h-72 bg-[#C9A050]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-24 w-96 h-96 bg-[#F4D483]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          {/* Heading */}
          <h2 className={`text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 transition-all ${isEcosystemVisible ? 'animate-fade-up' : 'opacity-0'
            }`}>
            The <span className="text-[#C9A050]">DineX</span> Ecosystem
          </h2>

          <p className={`text-lg text-gray-600 max-w-3xl mx-auto mb-10 transition-all ${isEcosystemVisible ? 'animate-fade-up delay-200' : 'opacity-0'
            }`}>
            A unified dining ecosystem connecting diners and restaurants through discovery, experience,
            and smart digital empowerment — all under one seamless platform.
          </p>

          {/* Ecosystem Cards */}
          {/* Ecosystem Editorial List */}
          <div className="flex flex-col mt-4 border-t border-gray-200/60">

            {/* Item 1 - Discovery */}
            <div className={`group flex flex-col md:flex-row items-center justify-between py-8 border-b border-gray-200/60 hover:bg-gray-50/50 transition-colors duration-500 cursor-default ${isEcosystemVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <div className="flex items-center gap-6 md:gap-12">
                <span className="text-6xl sm:text-8xl font-thin font-mono text-[#C9A050] opacity-80 leading-none">01</span>
                <h3 className="text-3xl sm:text-4xl font-serif font-medium text-gray-900">Discovery</h3>
              </div>
              <p className="mt-4 md:mt-0 text-base sm:text-lg text-gray-500 max-w-sm md:text-right font-light leading-relaxed">
                Find restaurants near you that are open and accepting bookings.
              </p>
            </div>

            {/* Item 2 - Experience */}
            <div className={`group flex flex-col md:flex-row items-center justify-between py-8 border-b border-gray-200/60 hover:bg-gray-50/50 transition-colors duration-500 cursor-default delay-100 ${isEcosystemVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <div className="flex items-center gap-6 md:gap-12">
                <span className="text-6xl sm:text-8xl font-thin font-mono text-[#C9A050] opacity-80 leading-none">02</span>
                <h3 className="text-3xl sm:text-4xl font-serif font-medium text-gray-900">Experience</h3>
              </div>
              <p className="mt-4 md:mt-0 text-base sm:text-lg text-gray-500 max-w-sm md:text-right font-light leading-relaxed">
                Book tables in advance and avoid waiting.
              </p>
            </div>

            {/* Item 3 - Empowerment */}
            <div className={`group flex flex-col md:flex-row items-center justify-between py-8 border-b border-gray-200/60 hover:bg-gray-50/50 transition-colors duration-500 cursor-default delay-200 ${isEcosystemVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <div className="flex items-center gap-6 md:gap-12">
                <span className="text-6xl sm:text-8xl font-thin font-mono text-[#C9A050] opacity-80 leading-none">03</span>
                <h3 className="text-3xl sm:text-4xl font-serif font-medium text-gray-900">Empowerment</h3>
              </div>
              <p className="mt-4 md:mt-0 text-base sm:text-lg text-gray-500 max-w-sm md:text-right font-light leading-relaxed">
                Restaurants manage tables, orders, and customers from one dashboard.
              </p>

            </div>

          </div>
        </div>
      </section>



      {/* ===== PRODUCT FEATURE SECTION (ZIG-ZAG) ===== */}
      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">

          {/* feature 1: Customer App (Image Left, Text Right) */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative group">
              <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-md border border-gray-200 group-hover:shadow-xl group-hover:border-[#C9A050]/30 transition-all duration-500 bg-white">
                <Image
                  src="/images/dinex-product.png"
                  alt="DineX Customer App"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#D4AF37]/10 rounded-full blur-2xl -z-10"></div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-4xl sm:text-5xl font-bold text-[#D4AF37]">
                  DineX
                </h3>
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold tracking-wide uppercase">
                  Live
                </span>
              </div>

              <h4 className="text-2xl font-serif text-gray-900 mb-6 font-medium">
                Dining made simple.
              </h4>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Discover restaurants, explore menus, check live availability, and book tables instantly — all from your phone. No more calling ahead or waiting in lines.
              </p>

              <ul className="space-y-4 mb-10">
                {['Instant Table Booking', 'Menus, Reviews & Offers', 'Real-Time Availability'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C9A050]/20 flex items-center justify-center text-[#C9A050] text-sm">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/customer/home">
                <button className="flex items-center gap-3 px-8 py-3 rounded-full bg-[#C9A050] text-white text-lg font-semibold shadow-lg hover:shadow-xl hover:bg-[#B0892F] hover:-translate-y-1 transition-all group">
                  Explore DineX
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </Link>
            </div>
          </div>

          {/* feature 2: Business App (Text Left, Image Right) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative group">
              <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-md border border-gray-200 group-hover:shadow-xl group-hover:border-[#C9A050]/30 transition-all duration-500 bg-white">
                <Image
                  src="/images/dinex-business-product.png"
                  alt="DineX Business Dashboard"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#D4AF37]/10 rounded-full blur-2xl -z-10"></div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-4xl sm:text-5xl font-bold text-[#D4AF37]">
                  DineX <span className="text-gray-900 font-serif font-normal italic opacity-80">for Business</span>
                </h3>
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold tracking-wide uppercase">
                  Live
                </span>
              </div>

              <h4 className="text-2xl font-serif text-gray-900 mb-6 font-medium">
                Powering smart restaurants.
              </h4>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                A complete offline-order management solution for restaurants. Manage tables, orders, billing, staff, and insights from one powerful dashboard.
              </p>

              <ul className="space-y-4 mb-10 text-left">
                {['Table & Order Management', 'Staff Dashboard', 'Real-Time Analytics'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C9A050]/20 flex items-center justify-center text-[#C9A050] text-sm">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex">
                <Link href="/business/home">
                  <button className="flex items-center gap-3 px-8 py-3 rounded-full bg-[#C9A050] text-white text-lg font-semibold shadow-lg hover:shadow-xl hover:bg-[#B0892F] hover:-translate-y-1 transition-all group">
                    Explore Business Portal
                    <span className="group-hover:-translate-x-1 transition-transform ">→</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ====== FOOTER ====== */}
      <Footer />
    </div>
  );
}
