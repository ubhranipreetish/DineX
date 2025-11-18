"use client";
import { useState, useEffect, useMemo } from "react";
import { pdfjs } from "react-pdf";   

import {
  Utensils,
  Coffee,
  Download,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  X,
} from "lucide-react";
import dynamic from "next/dynamic";


if (typeof window !== "undefined") {
    pdfjs.GlobalWorkerOptions.workerSrc =
      "https://unpkg.com/pdfjs-dist@5.4.296/legacy/build/pdf.worker.mjs";
  }
  

// Dynamically load PDF components (client-side only)
const Document = dynamic(
    () => import("react-pdf/dist/Document").then((m) => m.default),
    { ssr: false }
  );
  
  const Page = dynamic(
    () => import("react-pdf/dist/Page").then((m) => m.default),
    { ssr: false }
  );


  
  
  
  

export default function MenuSection({restaurant}) {
  const [showMenuViewer, setShowMenuViewer] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [zoom, setZoom] = useState(100);

  const pdfOptions = useMemo(
    () => ({
      cMapUrl: "https://unpkg.com/pdfjs-dist@3.11.174/cmaps/",
      cMapPacked: true,
    }),
    [] 
  );
  

  // Menu data
  const menus = [
    {
      id: "food",
      title: "Food Menu",
      icon: <Utensils className="w-6 h-6" />,
      thumbnail: "/menus/food-thumbnail.jpg",
      pdf: "/menus/food-menu.pdf",
    },
    {
      id: "beverages",
      title: "Beverages Menu",
      icon: <Coffee className="w-6 h-6" />,
      thumbnail: "/menus/beverage-thumbnail.jpg",
      pdf: "/menus/beverages-menu.pdf",
    },
  ];


  const handleOpenMenu = (menuId) => {
    const menu = menus.find((m) => m.id === menuId);
    setActiveMenu(menu);
    setCurrentPage(1);
    setNumPages(null);
    setZoom(100);
    setShowMenuViewer(true);
  };

  const handleCloseMenu = () => {
    setShowMenuViewer(false);
    setActiveMenu(null);
  };

  const handlePdfLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleNextPage = () => {
    if (numPages && currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleZoomIn = () => {
    if (zoom < 150) setZoom(zoom + 10);
  };

  const handleZoomOut = () => {
    if (zoom > 50) setZoom(zoom - 10);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mt-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">{restaurant.name} Menu</h2>
      </div>

      {/* Menu Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menus.map((menu) => (
          <div
            key={menu.id}
            onClick={() => handleOpenMenu(menu.id)}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            {/* Thumbnail Image */}
            <div className="relative h-64 bg-gray-200">
              <img
                src={menu.thumbnail}
                alt={menu.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400x300?text=Menu";
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    {menu.icon}
                  </div>
                  <p className="font-semibold text-lg">View Menu</p>
                  <p className="text-sm">PDF Menu</p>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="text-red-600">{menu.icon}</div>
                  <h3 className="font-bold text-gray-800">{menu.title}</h3>
                </div>
                <span className="text-sm text-gray-500">PDF Menu</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Menu Viewer Modal */}
      {showMenuViewer && activeMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-black bg-opacity-50">
            <div className="text-white">
              <h3 className="text-xl font-semibold">{activeMenu.title}</h3>
              <p className="text-sm text-gray-300">
                Page {currentPage} of {numPages || "…"}
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Zoom Controls */}
              <div className="flex items-center gap-3 bg-gray-800 rounded-lg px-4 py-2 border border-gray-600">
                <button
                  onClick={handleZoomOut}
                  disabled={zoom <= 50}
                  className="text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition p-1 rounded"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                <span className="text-white text-sm font-semibold min-w-[55px] text-center px-2 py-1 bg-gray-700 rounded">
                  {zoom}%
                </span>
                <button
                  onClick={handleZoomIn}
                  disabled={zoom >= 150}
                  className="text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition p-1 rounded"
                  title="Zoom In"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
              </div>

              {/* Download Button */}
              <a
                href={activeMenu.pdf}
                download
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all font-semibold shadow-lg"
              >
                <Download className="w-5 h-5" />
                Download
              </a>

              {/* Close Button */}
              <button
                onClick={handleCloseMenu}
                className="text-white hover:bg-gray-700 transition p-2 rounded-lg"
                title="Close"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
          </div>

          {/* Main PDF Display */}
          <div className="flex-1 flex items-center justify-center p-4 overflow-auto">
            {/* Previous Button */}
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-opacity-30 text-white p-3 rounded-full transition z-10 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* PDF Viewer */}
            <div className="max-w-full max-h-full">
              <Document
                file={activeMenu.pdf}
                onLoadSuccess={handlePdfLoadSuccess}
                options={pdfOptions}
                loading={
                  <div className="text-white text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                    <p>Loading menu...</p>
                  </div>
                }
                error={
                  <div className="text-white text-center p-8 bg-red-900 bg-opacity-50 rounded-lg">
                    <p className="text-lg font-semibold mb-2">Failed to load PDF</p>
                    <p className="text-sm">Please try downloading the menu instead</p>
                  </div>
                }
              >
                <Page
                  pageNumber={currentPage}
                  scale={zoom / 100}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="shadow-2xl"
                />
              </Document>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNextPage}
              disabled={!numPages || currentPage === numPages}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-opacity-30 text-white p-3 rounded-full transition z-10 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Page Navigation Dots */}
          {numPages && (
            <div className="bg-black bg-opacity-50 p-4">
              <div className="flex gap-2 justify-center overflow-x-auto">
                {Array.from({ length: Math.min(numPages, 10) }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                      pageNum === currentPage
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
                {numPages > 10 && (
                  <span className="px-3 py-1 text-gray-400">...</span>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}