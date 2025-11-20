"use client";
import Image from "next/image";

export default function HeroSection() {
    const scrollToRestaurants = () => {
        const restaurantsSection = document.getElementById('restaurants-section');
        if (restaurantsSection) {
            restaurantsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/cheers.png"
                    alt="Restaurant ambiance"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/40"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-4 md:px-8 max-w-6xl mx-auto">
                {/* Main Heading with Animation */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in">
                    <span className="bg-gradient-to-r from-[#C9A050] via-[#F4D483] to-[#C9A050] bg-clip-text text-transparent">
                        DineX
                    </span>
                </h1>

                {/* Tagline */}
                <p className="text-xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 animate-slide-up">
                    Discover. Reserve. Dine.
                </p>

                {/* Description */}
                <p className="text-base md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay">
                    Find the perfect dining spot near you and book your table in seconds.
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                    {/* Feature 1 */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                        <div className="text-4xl mb-3">📍</div>
                        <h3 className="text-lg font-bold text-white mb-2">Nearby Restaurants</h3>
                        <p className="text-sm text-gray-300">
                            Discover top-rated restaurants in your area
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                        <div className="text-4xl mb-3">⏰</div>
                        <h3 className="text-lg font-bold text-white mb-2">Easy Booking</h3>
                        <p className="text-sm text-gray-300">
                            Reserve your table at your preferred time slot
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                        <div className="text-4xl mb-3">✨</div>
                        <h3 className="text-lg font-bold text-white mb-2">Premium Experience</h3>
                        <p className="text-sm text-gray-300">
                            Enjoy a seamless dining experience
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <button
                    onClick={scrollToRestaurants}
                    className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#C9A050] to-[#8B6F3E] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-[#C9A050]/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                    Explore Restaurants
                    <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out 0.3s both;
        }

        .animate-slide-up-delay {
          animation: slide-up 1s ease-out 0.5s both;
        }
      `}</style>
        </div>
    );
}
