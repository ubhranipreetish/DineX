"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Clock,
  Eye,
  Receipt,
  X,
  Trash2,
  CheckCircle,
  ClipboardList // Better icon for cancelled orders
} from "lucide-react";
import { useOrder } from '../context/OrderContext';
import StaffNavbar from '../components/StaffNavbar';
import Footer from "@/components/Footer";
import { useNotification } from "@/context/NotificationContext";

export default function StaffHome() {
  const router = useRouter();
  const [staff, setStaff] = useState(null);
  const { tables, restaurant, cancelledOrders, getCancelledOrders, deleteOrder } = useOrder();
  const { showToast, showDialog } = useNotification();
  const [showCancelledSheet, setShowCancelledSheet] = useState(false);

  useEffect(() => {
    // Check auth
    const token = localStorage.getItem("staffToken");
    if (!token) {
      router.push("/business/staff/login");
      return;
    }

    // Load staff data
    const storedStaff = localStorage.getItem("staffUser");
    if (storedStaff) {
      try {
        setStaff(JSON.parse(storedStaff));
      } catch (e) {
        console.error("Error parsing staff data:", e);
      }
    }

    getCancelledOrders();
  }, [tables, router]);

  const handleTableClick = (table) => {
    if (table.status === "free") {
      router.push(`/business/staff/table/${table.id}/order`);
    } else if (table.status === "occupied") {
      router.push(`/business/staff/table/${table.id}/order`);
    } else if (table.status === "bill-pending") {
      router.push(`/business/staff/table/${table.id}/bill`);
    }
  };

  const handleViewOrder = (e, tableId) => {
    e.stopPropagation();
    router.push(`/business/staff/table/${tableId}/order`);
  };

  const handleDeleteCancelledOrder = async (orderId) => {
    const confirmed = await showDialog({
      title: "Delete Record",
      message: "Permanently delete this cancelled order record?",
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "danger",
    });
    if (confirmed) {
      await deleteOrder(orderId);
      showToast("Record deleted", "success");
    }
  };

  const currentHour = new Date().getHours();
  const shift = currentHour < 16 ? "Morning" : currentHour < 20 ? "Evening" : "Night";

  return (
    <div className="min-h-screen bg-white pb-24 relative">
      {/* NAVBAR */}
      <StaffNavbar />

      <div className="container mx-auto px-4 py-8">
        {/* HEADER - RESTORED LAYOUT */}
        <div className="flex flex-col mb-8 text-center relative">
          {/* Centered Restaurant Name & Staff */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold bg-black bg-clip-text text-transparent mb-4">
              {restaurant?.restaurantName || "DineX"}
            </h1>
            <div className="flex items-center justify-center gap-6 text-gray-500">
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {shift} Shift • {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
              </p>
              <p className="font-semibold text-amber-600">Staff: {staff?.name || "Member"}</p>
            </div>
          </div>

          {/* Bottom Row: Tables Check + Legends + Cancelled Button */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-gray-100 pb-4">
            {/* Left: Heading */}
            <div className="text-left">
              <h2 className="text-3xl font-bold text-gray-900">Tables</h2>
              <p className="text-sm text-gray-500">Manage floor status</p>
            </div>

            {/* Right: Legends & Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowCancelledSheet(true)}
                className="mr-4 flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-lg font-medium transition-colors border border-gray-200"
              >
                <ClipboardList className="w-4 h-4" />
                <span className="hidden sm:inline">Cancelled</span>
                <span className="bg-gray-200 px-1.5 rounded text-xs ml-1">{cancelledOrders.length}</span>
              </button>

              <div className="flex gap-2 text-xs font-semibold">
                <div className="flex items-center gap-1.5 bg-green-50 px-3 py-1.5 rounded-lg border border-green-100 text-green-700">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                  Vacant
                </div>
                <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-100 text-amber-700">
                  <div className="w-2.5 h-2.5 bg-amber-500 rounded-full"></div>
                  Occupied
                </div>
                <div className="flex items-center gap-1.5 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 text-blue-700">
                  <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                  Bill Ready
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TABLES GRID */}
        {tables.length === 0 ? (
          <div className="text-center py-20">
            <div className="animate-spin w-12 h-12 border-4 border-[#C9A050] border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-500">Loading tables...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
            {tables.map((table) => {
              // DETERMINE CARD STYLE BASED ON STATUS
              let cardStyle = "";
              let content = null;

              if (table.status === 'free') {
                // 🟢 1. VACANT (Stronger Colors)
                cardStyle = "bg-[#F0FDF4] border-[#16A34A] hover:bg-[#DCFCE7] shadow-sm hover:shadow-green-100";
                content = (
                  <div className="flex flex-col items-center justify-center h-full">
                    <span className="text-4xl font-extrabold text-[#15803D]">{table.tableNumber}</span>
                    <span className="text-xs font-bold text-[#15803D]/70 mt-1 uppercase tracking-wider">Vacant</span>
                  </div>
                );
              } else if (table.status === 'occupied') {
                // 🟠 2. OCCUPIED (Stronger Colors)
                cardStyle = "bg-[#FFF7ED] border-[#EA580C] hover:bg-[#FFEDD5] shadow-sm hover:shadow-orange-100";
                content = (
                  <div className="flex flex-col justify-between h-full w-full">
                    <div className="flex justify-between items-start">
                      <span className="text-2xl font-extrabold text-[#C2410C]">{table.tableNumber}</span>
                      {/* Eye Icon for View */}
                      <button
                        onClick={(e) => handleViewOrder(e, table.id)}
                        className="p-1.5 bg-white rounded-full text-[#EA580C] shadow-sm hover:scale-110 transition-all cursor-pointer"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="mt-2">
                      <p className="text-[10px] text-[#9A3412]/70 font-bold uppercase tracking-wide">Current Bill</p>
                      <p className="text-xl font-extrabold text-[#C2410C]">₹{table.currentBill}</p>
                    </div>
                  </div>
                );
              } else if (table.status === 'bill-pending') {
                // 🔵 3. BILL GENERATED (Stronger Colors)
                cardStyle = "bg-[#EFF6FF] border-[#2563EB] hover:bg-[#DBEAFE] shadow-sm hover:shadow-blue-100";
                content = (
                  <div className="flex flex-col justify-between h-full w-full">
                    <div className="flex justify-between items-start">
                      <span className="text-2xl font-extrabold text-[#1E40AF]">{table.tableNumber}</span>
                      <div className="p-1.5 bg-white rounded-full text-[#2563EB] shadow-sm">
                        <Receipt className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-[10px] text-[#1E40AF]/70 font-bold uppercase tracking-wide">Bill Amount</p>
                      <p className="text-xl font-extrabold text-[#1E40AF]">₹{table.currentBill}</p>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={table.id}
                  onClick={() => handleTableClick(table)}
                  className={`relative h-40 rounded-2xl border-2 transition-all cursor-pointer p-4 transform hover:-translate-y-1 active:scale-95 ${cardStyle}`}
                >
                  {content}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* CANCELLED ORDERS SHEET (Overlay) */}
      {showCancelledSheet && (
        <div className="fixed top-[88px] bottom-0 left-0 right-0 z-40 flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] transition-opacity"
            onClick={() => setShowCancelledSheet(false)}
          ></div>

          {/* Side Panel (Right) */}
          <div className="bg-white w-full max-w-md h-full shadow-2xl z-50 flex flex-col animate-slide-left border-l border-gray-100">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Cancelled Orders</h2>
                <p className="text-sm text-gray-500">History of voided transactions</p>
              </div>
              <button
                onClick={() => setShowCancelledSheet(false)}
                className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 bg-gray-50/30">
              {cancelledOrders.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 opacity-60">
                  <ClipboardList className="w-16 h-16 mb-4" strokeWidth={1.5} />
                  <p className="text-lg font-medium">No cancelled orders</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cancelledOrders.map((order, i) => (
                    <div key={order.orderId} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group">
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-400"></div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Cancelled</span>
                            <span className="text-xs text-gray-400 font-medium max-w-[150px] truncate" title={order.orderId}>#{order.orderId.slice(-6)}</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900">Table {order.tableNo}</h3>
                          <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {new Date(order.createdAt).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}
                          </p>
                        </div>
                        <button
                          onClick={() => handleDeleteCancelledOrder(order.orderId)}
                          className="opacity-0 group-hover:opacity-100 p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                          title="Permanently Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Items Summary */}
                      <div className="mt-3 mb-3">
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {order.items?.map(item => `${item.quantity}x ${item.name}`).join(', ') || "No items"}
                        </p>
                      </div>

                      <div className="flex justify-between items-end border-t border-gray-50 pt-3 mt-2">
                        <div className="text-sm text-gray-500 font-medium">
                          Total Bill
                        </div>
                        <div className="text-xl font-bold text-gray-800">
                          ₹{order.totalAmount}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}