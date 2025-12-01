"use client";
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Plus, Check, X, Trash2, Receipt } from 'lucide-react';
import { useOrder } from '../../../context/OrderContext';
import { MENU_ITEMS } from '../../../data/menu-data';
import StaffNavbar from '../../../components/StaffNavbar';

export default function ManageOrderPage() {
    const router = useRouter();
    const params = useParams();
    const tableId = parseInt(params.id);
    const { tables, getOrderByTableId, addItemsToOrder, updateItemStatus, removeItemFromOrder, completeOrder, cancelOrder } = useOrder();

    const [showAddItems, setShowAddItems] = useState(false);
    const [selectedNewItems, setSelectedNewItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const table = tables.find(t => t.id === tableId);
    const order = getOrderByTableId(tableId);

    useEffect(() => {
        const token = localStorage.getItem('staffToken');
        if (!token) {
            router.push('/business/staff/login');
            return;
        }

        if (!table) router.push('/business/staff/home');
        if (!order) return; 

    }, [table, order, router]);

    const handleMarkAsServed = (itemIndex) => {
        const item = order.items[itemIndex];
        updateItemStatus(order.orderId, item.id, 'served');
    };

    const handleRemoveItem = (itemIndex) => {
        if (confirm('Remove this item from the order?')) {
            removeItemFromOrder(order.orderId, itemIndex);
        }
    };

    const handleAddNewItems = () => {
        if (selectedNewItems.length === 0) return;
        addItemsToOrder(order.orderId, selectedNewItems);
        setSelectedNewItems([]);
        setShowAddItems(false);
    };

    const handleGenerateBill = () => {
        completeOrder(order.orderId);
        router.push(`/business/staff/table/${tableId}/bill`);
    };

    const handleCancelOrder = () => {
        if (confirm('Are you sure you want to cancel this entire order? This cannot be undone.')) {
            cancelOrder(order.orderId);
            router.push('/business/staff/home');
        }
    };

    const toggleNewItem = (item) => {
        setSelectedNewItems(prev => {
            const existingIndex = prev.findIndex(i => i.id === item.id);
            if (existingIndex >= 0) {
                const updated = [...prev];
                updated[existingIndex].quantity += 1;
                return updated;
            } else {
                return [...prev, { ...item, quantity: 1 }];
            }
        });
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'preparing':
                return <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">Preparing</span>;
            case 'served':
                return <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">Served</span>;
            case 'removed':
                return <span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full">Removed</span>;
            default:
                return null;
        }
    };

    const calculateBill = () => {
        const activeItems = order.items.filter(item => item.status !== 'removed');
        const subtotal = activeItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const cgst = subtotal * 0.025;
        const sgst = subtotal * 0.025;
        const total = subtotal + cgst + sgst;
        return { subtotal, cgst, sgst, total };
    };

    if (!table || !order) {
        return null;
    }

    const bill = calculateBill();
    const timeElapsed = Math.floor((new Date() - new Date(order.createdAt)) / 60000); // minutes

    const filteredMenuItems = searchQuery
        ? MENU_ITEMS.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : MENU_ITEMS;

    return (
        <div className="min-h-screen bg-[#FFF8E7] text-gray-800">
            {/* Navbar */}
            <StaffNavbar />

            {/* Sub Header */}
            <div className="pt-6 pb-2">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => router.push('/business/staff/home')}
                                className="p-2 hover:bg-amber-100 rounded-xl transition-colors text-amber-600"
                            >
                                <ArrowLeft className="w-6 h-6" />
                            </button>
                            <div>
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                                    Manage Order
                                </h1>
                                <p className="text-sm text-gray-500 mt-1">
                                    Table {table.tableNumber} • Order #{order.orderId.slice(-6)} • {timeElapsed} min ago
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500">Current Bill</p>
                            <p className="text-2xl font-bold text-amber-600">₹{bill.total.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left - Order Items */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-3xl shadow-xl shadow-amber-100/20 p-6 border border-amber-50">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <span className="w-2 h-8 bg-gradient-to-b from-amber-400 to-yellow-500 rounded-full"></span>
                                Current Order Items
                            </h2>
                            <div className="space-y-4">
                                {order.items.filter(item => item.status !== 'removed').map((item, index) => (
                                    <div key={index} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-amber-100 transition-all">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                                                    {getStatusBadge(item.status)}
                                                </div>
                                                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                                                <p className="text-lg font-bold text-amber-600 mt-2">
                                                    ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                {item.status === 'preparing' && (
                                                    <button
                                                        onClick={() => handleMarkAsServed(index)}
                                                        className="p-2 bg-green-50 hover:bg-green-100 text-green-600 rounded-xl transition-colors border border-green-200"
                                                        title="Mark as served"
                                                    >
                                                        <Check className="w-5 h-5" />
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => handleRemoveItem(index)}
                                                    className="p-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl transition-colors border border-red-200"
                                                    title="Remove item"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right - Actions */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-3xl shadow-xl shadow-amber-100/20 p-6 sticky top-24 space-y-4 border border-amber-50">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Actions</h2>

                            <button
                                onClick={() => setShowAddItems(!showAddItems)}
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-200"
                            >
                                <Plus className="w-5 h-5" />
                                Add More Items
                            </button>

                            <button
                                onClick={handleGenerateBill}
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-green-200"
                            >
                                <Receipt className="w-5 h-5" />
                                Generate Bill
                            </button>

                            <button
                                onClick={handleCancelOrder}
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-red-200"
                            >
                                <X className="w-5 h-5" />
                                Cancel Order
                            </button>

                            {/* Bill Summary */}
                            <div className="border-t border-gray-100 pt-4 mt-6 space-y-2">
                                <h3 className="font-bold text-gray-700 mb-3">Bill Summary</h3>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Subtotal</span>
                                    <span className="font-semibold text-gray-800">₹{bill.subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">CGST (2.5%)</span>
                                    <span className="font-semibold text-gray-800">₹{bill.cgst.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">SGST (2.5%)</span>
                                    <span className="font-semibold text-gray-800">₹{bill.sgst.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold border-t border-dashed border-amber-200 pt-3 mt-3">
                                    <span className="text-gray-800">Total</span>
                                    <span className="text-amber-600">₹{bill.total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Items Modal */}
            {showAddItems && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-amber-100">
                        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-gray-800">Add Items to Order</h2>
                                <button
                                    onClick={() => setShowAddItems(false)}
                                    className="p-2 hover:bg-gray-200 rounded-xl transition-colors text-gray-500"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <input
                                type="text"
                                placeholder="Search items..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full mt-4 px-4 py-3 border border-gray-200 rounded-xl focus:border-amber-400 focus:outline-none transition-colors"
                            />
                        </div>
                        <div className="p-6 overflow-y-auto max-h-[60vh]">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {filteredMenuItems.map(item => (
                                    <button
                                        key={item.id}
                                        onClick={() => toggleNewItem(item)}
                                        className="bg-white hover:bg-amber-50 border border-gray-200 hover:border-amber-300 rounded-2xl p-4 transition-all text-left group"
                                    >
                                        <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{item.image}</div>
                                        <h4 className="font-bold text-gray-800 mb-1">{item.name}</h4>
                                        <p className="text-amber-600 font-bold">₹{item.price}</p>
                                        {selectedNewItems.find(i => i.id === item.id) && (
                                            <span className="mt-2 inline-block bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                                                {selectedNewItems.find(i => i.id === item.id).quantity} added
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                            <button
                                onClick={handleAddNewItems}
                                disabled={selectedNewItems.length === 0}
                                className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-amber-200"
                            >
                                Add {selectedNewItems.reduce((sum, item) => sum + item.quantity, 0)} Items
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
