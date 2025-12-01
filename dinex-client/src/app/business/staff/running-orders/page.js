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

    const getStatusColor = (status) => {
        if (status === 'occupied') {
            return 'bg-gradient-to-br from-orange-400 to-orange-500';
        }
        return 'bg-gray-300';
    };

    const getStatusText = (status) => {
        if (status === 'occupied') {
            return 'In Progress';
        }
        return 'Unknown';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-gray-50">
            {/* Navbar */}
            <StaffNavbar />

            {/* Sub Header */}
            <div className="bg-white shadow-md border-b-2 border-orange-200">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => router.push('/business/staff/home')}
                                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                            >
                                <ArrowLeft className="w-6 h-6 text-gray-700" />
                            </button>
                            <div>
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                    Running Orders
                                </h1>
                                <p className="text-sm text-gray-600 mt-1">
                                    {activeOrders.length} active {activeOrders.length === 1 ? 'order' : 'orders'}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <p className="text-sm text-gray-600">Total Active</p>
                                <p className="text-2xl font-bold text-orange-600">{activeTables.length}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-8">
                {activeTables.length === 0 ? (
                    <div className="bg-white rounded-3xl shadow-2xl p-16 text-center">
                        <div className="text-8xl mb-6">🍽️</div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">No Active Orders</h2>
                        <p className="text-gray-600 text-lg mb-8">All tables are currently free</p>
                        <button
                            onClick={() => router.push('/business/staff/home')}
                            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-4 rounded-xl transition-all active:scale-95 shadow-lg"
                        >
                            Go to Home
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activeTables.map(table => {
                            const order = activeOrders.find(o => o.id === table.orderId);
                            if (!order) return null;

                            const itemCount = order.items.filter(i => i.status !== 'removed').length;

                            return (
                                <div
                                    key={table.id}
                                    className={`${getStatusColor(table.status)} text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 overflow-hidden`}
                                >
                                    {/* Card Header */}
                                    <div className="bg-white bg-opacity-20 backdrop-blur-sm p-5 border-b border-white border-opacity-30">
                                        <div className="flex items-center justify-between mb-2">
                                            <h2 className="text-3xl font-bold">Table {table.tableNumber}</h2>
                                            <span className="bg-white bg-opacity-30 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">
                                                {getStatusText(table.status)}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm opacity-90">
                                            <Clock className="w-4 h-4" />
                                            <span>{getTimeElapsed(order.createdAt)} ago</span>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-5 space-y-4">
                                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm opacity-90">Order ID</span>
                                                <span className="font-mono font-bold text-sm">#{order.id.slice(-6)}</span>
                                            </div>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm opacity-90">Items</span>
                                                <span className="font-bold">{itemCount}</span>
                                            </div>
                                            <div className="flex items-center justify-between border-t border-white border-opacity-30 pt-2 mt-2">
                                                <span className="text-sm opacity-90">Bill Amount</span>
                                                <span className="text-xl font-bold">₹{table.currentBill.toFixed(2)}</span>
                                            </div>
                                        </div>

                                        {/* Quick Actions */}
                                        <div className="grid grid-cols-2 gap-2">
                                            <button
                                                onClick={() => router.push(`/business/staff/table/${table.id}/manage`)}
                                                className="flex items-center justify-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm py-3 rounded-xl font-semibold transition-all active:scale-95"
                                            >
                                                <Eye className="w-4 h-4" />
                                                View
                                            </button>
                                            <button
                                                onClick={() => router.push(`/business/staff/table/${table.id}/bill`)}
                                                className="flex items-center justify-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm py-3 rounded-xl font-semibold transition-all active:scale-95"
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
