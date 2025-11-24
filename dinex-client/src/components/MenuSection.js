"use client";
import { useState } from "react";
import {
  Utensils,
  Coffee,
  Download,
  X,
  Eye,
  FileText
} from "lucide-react";

export default function MenuSection({ restaurant }) {
  const [showMenuViewer, setShowMenuViewer] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  // Menu data
  const menus = [
    {
      id: "food",
      title: "Food Menu",
      icon: <Utensils className="w-6 h-6" />,
      thumbnail: "/menus/food-thumbnail.png",
      pdf: "/menus/food-menu.pdf",
      color: "bg-[#FFF8E7]",
      borderColor: "border-[#E8E1D5]",
      iconBg: "bg-[#5E4633]",
      iconColor: "text-white"
    },
    {
      id: "beverages",
      title: "Beverages Menu",
      icon: <Coffee className="w-6 h-6" />,
      thumbnail: "/menus/beverage-thumbnail.png",
      pdf: "/menus/beverages-menu.pdf",
      color: "bg-[#F3EAD8]",
      borderColor: "border-[#D4C5A9]",
      iconBg: "bg-[#C9A050]",
      iconColor: "text-white"
    },
    {
      id: "bar",
      title: "Bar Menu",
      icon: <Coffee className="w-6 h-6" />,
      thumbnail: "/menus/bar-thumbnail.png",
      pdf: "/menus/bar-menu.pdf",
      color: "bg-[#F3EAD8]",
      borderColor: "border-[#D4C5A9]",
      iconBg: "bg-[#C9A050]",
      iconColor: "text-white"
    },
  ];

  const knownFor = [
    "Fancy Place",
    "Best in Service",
    "Sanitised Service",
    "Best Staff",
    "Great Menu",
    "Food Tastes Great"
  ]

  const paymentInfo = [
    "Cash and Cards accepted",
    "Digital payments accepted"
  ]

  const handleOpenMenu = (menu) => {
    setActiveMenu(menu);
    setShowMenuViewer(true);
  };

  const handleCloseMenu = () => {
    setShowMenuViewer(false);
    setActiveMenu(null);
  };

  return (
    <div className="mt-8 space-y-8">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        {restaurant.name} Menu
      </h2>

      {/* Menu Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className="group relative overflow-hidden rounded-2xl border border-[#E8E1D5] bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            onClick={() => handleOpenMenu(menu)}
          >
            {/* Thumbnail Preview */}
            <div className="relative h-64 overflow-hidden bg-white">
              <img
                src={menu.thumbnail}
                alt={menu.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                <button className="bg-white text-[#4A3F35] px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#F3EAD8] transition-colors cursor-pointer">
                  <Eye className="w-4 h-4" />
                  View Menu
                </button>
              </div>
            </div>

            {/* Menu Title Below Thumbnail */}
            <div className="p-4 text-center bg-[#FFF8E7]">
              <h3 className="text-lg font-bold text-[#4A3F35]">{menu.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* PDF Viewer Modal */}
      {showMenuViewer && activeMenu && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-5xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">

            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg ${activeMenu.iconBg} ${activeMenu.iconColor} flex items-center justify-center`}>
                  {activeMenu.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#4A3F35]">{activeMenu.title}</h3>
                  <p className="text-xs text-[#6B625A]">Viewing PDF</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeMenu.pdf}
                  download
                  className="p-2 text-[#6B625A] hover:bg-[#FFF8E7] hover:text-[#C9A050] rounded-lg transition-colors cursor-pointer"
                  title="Download PDF"
                >
                  <Download className="w-5 h-5" />
                </a>
                <button
                  onClick={handleCloseMenu}
                  className="p-2 text-[#6B625A] hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* PDF Viewer (Iframe) */}
            <div className="flex-1 bg-gray-100 relative">
              <iframe
                src={`${activeMenu.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full"
                title={activeMenu.title}
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-100 bg-white flex justify-between items-center text-sm text-[#6B625A]">
              <span>Use browser controls to zoom</span>
              <a
                href={activeMenu.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A050] hover:underline font-medium flex items-center gap-1"
              >
                Open in new tab <FileText className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 💬 People Say + Cost Section */}
      <section className="border border-gray-200 rounded-xl p-5">
        <h2 className="text-xl text-gray-900 font-semibold mb-2">
          People Say This Place Is Known For
        </h2>
        <p className="text-gray-600 mb-4">
          {knownFor?.length ? knownFor.join(", ") : "No info available."}
        </p>

        <h2 className="text-xl text-gray-900 font-semibold mb-2">Average Cost</h2>
        <p className="text-gray-800">₹{restaurant.priceForTwo} for two</p>
        <p className="text-gray-500">₹395 for a pint of beer (approx.)</p>

        <div className="mt-3 space-y-1">
          {paymentInfo?.length ? (
            paymentInfo.map((info, i) => (
              <p key={i} className="text-gray-700">
                {info}
              </p>
            ))
          ) : (
            <p className="text-gray-500">Payment details not available</p>
          )}
        </div>
      </section>
    </div>
  );
}