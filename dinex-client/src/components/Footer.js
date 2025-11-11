import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F3F4F6] border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-4 lg:px-6 pt-6 pb-3">
        
        {/* ===== DineX Logo & Tagline ===== */}
        <div className="text-center mb-5">
          <Link href="/" className="text-3xl font-bold text-red-600">
            DineX
          </Link>
          <p className="text-gray-600 text-sm mt-2">
            Discover. Dine. Delight. Your favorite restaurants, all in one place.
          </p>
        </div>

        {/* ===== Footer Links Grid ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm mb-5 text-gray-600">
          
          {/* Company */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-gray-800 uppercase">
              Company
            </h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#000000] transition-colors">About DineX</Link></li>
              <li><Link href="/" className="hover:text-[#000000] transition-colors">Careers</Link></li>
              <li><Link href="/" className="hover:text-[#000000] transition-colors">Press & Media</Link></li>
              <li><Link href="/" className="hover:text-[#000000] transition-colors">Partnerships</Link></li>
              <li><Link href="/" className="hover:text-[#000000] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-gray-800 uppercase">
              Explore
            </h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#000000] transition-colors">Top Restaurants</Link></li>
              <li><Link href="/" className="hover:text-[#000000] transition-colors">Cuisines Near You</Link></li>
              <li><Link href="/" className="hover:text-[#000000] transition-colors">Offers & Deals</Link></li>
              <li><Link href="/" className="hover:text-[#000000] transition-colors">Book a Table</Link></li>
              <li><Link href="/" className="hover:text-[#000000] transition-colors">DineX Rewards</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-gray-800 uppercase">
              Support
            </h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#000000] transition-colors">Help Center</Link></li>
              <li><Link href="/" className="hover:text-[#000000] transition-colors">FAQs</Link></li>
              <li><Link href="/" className="hover:text-[#000000] transition-colors">Cancellation Policy</Link></li>
              <li><Link href="/" className="hover:text-[#000000] transition-colors">Report an Issue</Link></li>
              <li><Link href="/" className="hover:text-[#000000] transition-colors">Feedback</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-gray-800 uppercase">
              Legal
            </h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#000000] transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/" className="hover:text-[#000000] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/" className="hover:text-[#000000] transition-colors">Cookie Policy</Link></li>
              <li><Link href="/" className="hover:text-[#000000] transition-colors">Security</Link></li>
              <li><Link href="/" className="hover:text-[#000000] transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-gray-300" />

        {/* ===== Social Icons + App Buttons ===== */}
        <div className="flex flex-wrap items-center justify-between mt-4">
          {/* Social Media */}
          <div className="flex gap-3">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Twitter, label: "Twitter" },
            ].map(({ Icon, label }) => (
              <Link
                href="/"
                key={label}
                className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-400 text-gray-700 hover:text-black hover:border-black transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>

          {/* App Download Buttons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M15.535,3.847C16.429,2.773,16.87,1.393,16.763,0c-1.366,0.144-2.629,0.797-3.535,1.829c-0.895,1.019-1.349,2.351-1.261,3.705C13.352,5.548,14.667,4.926,15.535,3.847z"></path>
                <path d="M18.546,12.763c0.024-1.87,1.004-3.597,2.597-4.576c-1.009-1.442-2.64-2.323-4.399-2.378c-1.851-0.194-3.645,1.107-4.588,1.107c-0.961,0-2.413-1.088-3.977-1.056C6.122,5.927,4.25,7.068,3.249,8.867c-2.131,3.69-0.542,9.114,1.5,12.097c1.022,1.461,2.215,3.092,3.778,3.035c1.529-0.063,2.1-0.975,3.945-0.975c1.828,0,2.364,0.975,3.958,0.938c1.64-0.027,2.674-1.467,3.66-2.942c0.734-1.041,1.299-2.191,1.673-3.408C19.815,16.788,18.548,14.879,18.546,12.763z"></path>
              </svg>
              <div className="text-left">
                <span className="text-[10px] leading-none tracking-tighter">Download on the</span>
                <p className="text-sm font-semibold leading-none">App Store</p>
              </div>
            </button>

            <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="m21.762,9.942L4.67.378c-.721-.466-1.635-.504-2.393-.099-.768.411-1.246,1.208-1.246,2.08v19.282c0,.872.477,1.668,1.246,2.079.755.404,1.668.37,2.393-.098l17.092-9.564c.756-.423,1.207-1.192,1.207-2.058s-.451-1.635-1.207-2.058Z"></path>
              </svg>
              <div className="text-left">
                <span className="text-[10px] leading-none font-light tracking-tighter">GET IT ON</span>
                <p className="text-sm font-semibold leading-none">Google Play</p>
              </div>
            </button>
          </div>
        </div>

        <div className="h-px bg-gray-300 mt-4" />

        {/* ===== Copyright ===== */}
        <div className="text-center text-xs text-gray-500 pt-4">
          <p>
            © 2025 <span className="font-medium text-gray-800">DineX</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
