"use client";
import { useState, useEffect, useMemo } from "react";

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
  
  
  
  

export default function MenuSection({restaurant}) {
  const [showMenuViewer, setShowMenuViewer] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [zoom, setZoom] = useState(100);


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

    </div>
  );
}