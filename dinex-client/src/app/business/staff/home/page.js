"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  UtensilsCrossed,
  Receipt,
  Clock,
  ArrowRight
} from "lucide-react";
import { useOrder } from '../context/OrderContext';
import StaffNavbar from '../components/StaffNavbar';
import OrderTabs from '../components/OrderTabs';
import OrderCard from '../components/OrderCard';
import Footer from "@/components/Footer";
import { useNotification } from "@/context/NotificationContext";

export default function StaffHome() {
  const router = useRouter();
  const [staff, setStaff] = useState(null);
  const { tables, restaurant, getActiveOrders, cancelledOrders, getCancelledOrders, deleteOrder } = useOrder();
  const [activeTab, setActiveTab] = useState('running');
  const { showToast, showDialog } = useNotification();
  const [stats, setStats] = useState({
    free: 0,
    occupied: 0,
    totalOrders: 0
  });

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

    // Update stats
    updateStats();

    // Fetch cancelled orders
    getCancelledOrders();
  }, [tables, router]);

  const updateStats = () => {
    const free = tables.filter(t => t.status === "free").length;
    const occupied = tables.filter(t => t.status === "occupied").length;
    setStats({ free, occupied, totalOrders: occupied });
  };

  const getTableColor = (status) => {
    switch (status) {
      case "free":
        return "border-emerald-500 bg-white hover:bg-emerald-50";
      case "occupied":
        return "border-orange-500 bg-white hover:bg-orange-50";
      default:
        return "border-gray-300 bg-gray-50";
    }
  };

  const getStatusTextColor = (status) => {
    switch (status) {
      case "free": return "text-emerald-600";
      case "occupied": return "text-orange-600";
      default: return "text-gray-600";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "free": return "Available";
      case "occupied": return "Occupied";
      default: return "Unknown";
    }
  };

  const handleTableClick = (table) => {
    if (table.status === "free") {
      router.push(`/business/staff/table/${table.id}/order`);
    } else {
      router.push(`/business/staff/table/${table.id}/manage`);
    }
  };

  const handleDeleteOrder = async (orderId) => {
    const confirmed = await showDialog({
      title: "Delete Order",
      message: "Are you sure you want to delete this order? This action cannot be undone.",
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "danger",
    });
    if (confirmed) {
      try {
        await deleteOrder(orderId);
        showToast("Order deleted successfully", "success");
      } catch (error) {
        showToast("Failed to delete order. Please try again.", "error");
      }
    }
  };

  const currentHour = new Date().getHours();
  const shift = currentHour < 16 ? "Morning" : currentHour < 20 ? "Evening" : "Night";

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      {/* NAVBAR */}
      <StaffNavbar />

      <div className="container mx-auto px-6 py-8">
        {/* RESTAURANT NAME - CENTERED */}
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            {restaurant?.restaurantName || "Loading..."}
          </h1>
          <div className="flex items-center justify-center gap-6 text-gray-600">
            <p className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {shift} Shift • {new Date().toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
            <p className="font-semibold">Staff: {staff?.name || "Staff Member"}</p>
          </div>
        </div>

        {/* ORDERS SECTION WITH TABS */}
        <div className="mb-8 bg-white rounded-2xl shadow-lg p-6">
          <OrderTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
            runningCount={getActiveOrders().length}
            cancelledCount={cancelledOrders.length}
          />

          <div className="mt-6">
            {activeTab === 'running' ? (
              getActiveOrders().length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🍽️</div>
                  <p className="text-gray-400 text-lg">No active orders</p>
                  <p className="text-gray-400 text-sm mt-2">All tables are currently free</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getActiveOrders().map(order => (
                    <OrderCard
                      key={order.orderId}
                      order={order}
                      onView={() => router.push(`/business/staff/table/${order.tableNo}/manage`)}
                      showDeleteButton={false}
                    />
                  ))}
                </div>
              )
            ) : (
              cancelledOrders.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">✅</div>
                  <p className="text-gray-400 text-lg">No cancelled orders</p>
                  <p className="text-gray-400 text-sm mt-2">Cancelled orders will appear here</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cancelledOrders.map(order => (
                    <OrderCard
                      key={order.orderId}
                      order={order}
                      onView={() => router.push(`/business/staff/table/${order.tableNo}/manage`)}
                      onDelete={() => handleDeleteOrder(order.orderId)}
                      showDeleteButton={true}
                    />
                  ))}
                </div>
              )
            )}
          </div>
        </div>

        {/* STATS */}
        <div className="mb-8">
          {/* STATS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-emerald-500 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide">Available Tables</p>
                  <p className="text-5xl font-bold text-gray-800 mt-2">{stats.free}</p>
                </div>
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center">
                  <UtensilsCrossed className="w-8 h-8 text-emerald-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide">Occupied</p>
                  <p className="text-5xl font-bold text-gray-800 mt-2">{stats.occupied}</p>
                </div>
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                  <UtensilsCrossed className="w-8 h-8 text-orange-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide">Total Tables</p>
                  <p className="text-5xl font-bold text-gray-800 mt-2">{tables.length}</p>
                </div>
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <Receipt className="w-8 h-8 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          {/* TABLE GRID */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Tables</h2>
              <div className="flex gap-4 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-600">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-600">Occupied</span>
                </div>
              </div>
            </div>

            {tables.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl shadow-lg">
                <div className="text-6xl mb-4">🍽️</div>
                <p className="text-gray-400 text-lg">Loading tables...</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {tables.map((table) => (
                  <button
                    key={table.id}
                    onClick={() => handleTableClick(table)}
                    className={`relative flex flex-col items-center justify-center p-4 rounded-xl border-l-4 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer ${getTableColor(table.status)}`}
                    style={{ minHeight: '100px' }}
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-1">Table {table.tableNumber}</h3>
                    <span className={`text-xs font-bold uppercase tracking-wider ${getStatusTextColor(table.status)}`}>
                      {getStatusText(table.status)}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}