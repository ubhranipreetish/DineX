"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Clock, Receipt, Plus, Eye, CheckCircle } from 'lucide-react';
import { useOrder } from '../context/OrderContext';
import StaffNavbar from '../components/StaffNavbar';

export default function RunningOrdersPage() {
    const router = useRouter();
    const { tables, getActiveOrders } = useOrder();

    useEffect(() => {
        const token = localStorage.getItem('staffToken');
        if (!token) {
            router.push('/business/staff/login');
        }
    }, [router]);

    const activeOrders = getActiveOrders();
    const activeTables = tables.filter(t => t.status === 'occupied');

    const getTimeElapsed = (createdAt) => {
        const minutes = Math.floor((new Date() - new Date(createdAt)) / 60000);
        if (minutes < 60) return `${minutes} min`;
        const hours = Math.floor(minutes / 60);
        const remainingMins = minutes % 60;
        return `${hours}h ${remainingMins}m`;
    };

    return (
        <div className="min-h-screen bg-[#FFF8E7] text-gray-800">
            {/* Navbar */}
            <StaffNavbar />

            {/* Sub Header - Removed bottom border/line as requested */}
            <div className="pt-6 pb-2">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => router.push('/business/staff/home')}
                                className="p-2 hover:bg-gray-200 rounded-xl transition-colors text-amber-600"
                            >
                                <ArrowLeft className="w-6 h-6" />
                            </button>
                            <div>
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                                    Running Orders
                                </h1>
                                <p className="text-sm text-gray-500 mt-1">
                                    {activeOrders.length} active {activeOrders.length === 1 ? 'order' : 'orders'}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <p className="text-sm text-gray-500">Total Active</p>
                                <p className="text-2xl font-bold text-amber-600">{activeTables.length}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-8">
                {activeTables.length === 0 ? (
                    <div className="bg-white border border-gray-100 rounded-3xl p-16 text-center shadow-xl shadow-amber-100/50">
                        <div className="text-8xl mb-6 grayscale opacity-30">🍽️</div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">No Active Orders</h2>
                        <p className="text-gray-500 text-lg mb-8">All tables are currently free</p>
                        <button
                            onClick={() => router.push('/business/staff/home')}
                            className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white font-bold px-8 py-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-amber-200"
                        >
                            Go to Home
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activeTables.map(table => {
                            const order = activeOrders.find(o => o.orderId === table.orderId);
                            if (!order) return null;

                            const itemCount = order.items.filter(i => i.status !== 'removed').length;

                            return (
                                <div
                                    key={table.id}
                                    className="bg-white border border-amber-100 rounded-2xl overflow-hidden hover:border-amber-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-100/50 group"
                                >
                                    {/* Card Header */}
                                    <div className="bg-amber-50/50 p-5 border-b border-amber-100 group-hover:bg-amber-50 transition-colors">
                                        <div className="flex items-center justify-between mb-2">
                                            <h2 className="text-2xl font-bold text-gray-800">Table {table.tableNumber}</h2>
                                            <span className="bg-amber-100 text-amber-700 border border-amber-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                                In Progress
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Clock className="w-4 h-4 text-amber-500" />
                                            <span>{getTimeElapsed(order.createdAt)} ago</span>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-5 space-y-4">
                                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm text-gray-500">Order ID</span>
                                                <span className="font-mono font-bold text-sm text-gray-700">#{order.orderId.slice(-6)}</span>
                                            </div>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm text-gray-500">Items</span>
                                                <span className="font-bold text-gray-800">{itemCount}</span>
                                            </div>
                                            <div className="flex items-center justify-between border-t border-gray-200 pt-2 mt-2">
                                                <span className="text-sm text-gray-500">Bill Amount</span>
                                                <span className="text-xl font-bold text-amber-600">₹{table.currentBill.toFixed(2)}</span>
                                            </div>
                                        </div>

                                        {/* Quick Actions */}
                                        <div className="grid grid-cols-2 gap-3">
                                            <button
                                                onClick={() => router.push(`/business/staff/table/${table.id}/manage`)}
                                                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 py-3 rounded-xl font-semibold transition-all active:scale-95 border border-gray-200 shadow-sm"
                                            >
                                                <Eye className="w-4 h-4" />
                                                View
                                            </button>
                                            <button
                                                onClick={() => router.push(`/business/staff/table/${table.id}/bill`)}
                                                className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white py-3 rounded-xl font-bold transition-all active:scale-95 shadow-md shadow-amber-200"
                                            >
                                                <Receipt className="w-4 h-4" />
                                                Bill
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
