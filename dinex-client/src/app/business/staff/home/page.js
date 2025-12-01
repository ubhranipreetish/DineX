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

export default function StaffHome() {
  const router = useRouter();
  const [staff, setStaff] = useState(null);
  const { tables, restaurant } = useOrder();
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
  }, [tables, router]);

  const updateStats = () => {
    const free = tables.filter(t => t.status === "free").length;
    const occupied = tables.filter(t => t.status === "occupied").length;
    setStats({ free, occupied, totalOrders: occupied });
  };

  const getTableColor = (status) => {
    switch (status) {
      case "free":
        return "bg-gradient-to-br from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl";
      case "occupied":
        return "bg-gradient-to-br from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white shadow-lg hover:shadow-xl";
      default:
        return "bg-gray-300 text-gray-700";
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

  const currentHour = new Date().getHours();
  const shift = currentHour < 16 ? "Morning" : currentHour < 20 ? "Evening" : "Night";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-gray-50">
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
            {stats.totalOrders > 0 && (
              <button
                onClick={() => router.push("/business/staff/running-orders")}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-xl font-semibold transition-all active:scale-95 shadow-lg hover:shadow-xl text-sm"
              >
                <Receipt className="w-4 h-4" />
                Active Orders ({stats.totalOrders})
              </button>
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
          <div className="bg-white p-8 rounded-3xl shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Table Management</h2>
              <div className="flex gap-4 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded"></div>
                  <span>Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gradient-to-br from-orange-400 to-red-500 rounded"></div>
                  <span>Occupied</span>
                </div>
              </div>
            </div>

            {tables.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🍽️</div>
                <p className="text-gray-400 text-lg">Loading tables...</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {tables.map((table) => (
                  <button
                    key={table.id}
                    onClick={() => handleTableClick(table)}
                    className={`${getTableColor(table.status)} rounded-2xl p-6 transition-all transform hover:scale-105 active:scale-95`}
                  >
                    <div className="text-center">
                      <p className="text-6xl font-bold mb-3">{table.tableNumber}</p>
                      <div className="bg-white bg-opacity-25 backdrop-blur-sm rounded-xl py-2 px-3 mb-2">
                        <p className="text-sm font-bold uppercase tracking-wide">{getStatusText(table.status)}</p>
                      </div>
                      {table.currentBill > 0 && (
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg py-1 px-2 mt-2">
                          <p className="text-sm font-semibold">₹{table.currentBill.toFixed(0)}</p>
                        </div>
                      )}
                      {table.guests > 0 && (
                        <p className="text-xs mt-2 opacity-90">{table.guests} guests</p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}