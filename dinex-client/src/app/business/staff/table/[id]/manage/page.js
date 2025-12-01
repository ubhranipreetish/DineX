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

        if (!table || !order) {
            router.push('/business/staff/home');
            return;
        }
    }, [table, order, router]);

    const handleMarkAsServed = (itemIndex) => {
        const item = order.items[itemIndex];
        updateItemStatus(order.id, item.id, 'served');
    };

    const handleRemoveItem = (itemIndex) => {
        if (confirm('Remove this item from the order?')) {
            removeItemFromOrder(order.id, itemIndex);
        }
    };

    const handleAddNewItems = () => {
        if (selectedNewItems.length === 0) return;
        addItemsToOrder(order.id, selectedNewItems);
        setSelectedNewItems([]);
        setShowAddItems(false);
    };

    const handleGenerateBill = () => {
        completeOrder(order.id);
        router.push(`/business/staff/table/${tableId}/bill`);
    };

    const handleCancelOrder = () => {
        if (confirm('Are you sure you want to cancel this entire order? This cannot be undone.')) {
            cancelOrder(order.id);
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
                                    Manage Order
                                </h1>
                                <p className="text-sm text-gray-600 mt-1">
                                    Table {table.tableNumber} • Order #{order.id.slice(-6)} • {timeElapsed} min ago
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-600">Current Bill</p>
                            <p className="text-2xl font-bold text-orange-600">₹{bill.total.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left - Order Items */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-3xl shadow-2xl p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Current Order Items</h2>
                            <div className="space-y-4">
                                {order.items.filter(item => item.status !== 'removed').map((item, index) => (
                                    <div key={index} className="bg-gray-50 rounded-2xl p-5 border-2 border-gray-200">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                                                    {getStatusBadge(item.status)}
                                                </div>
                                                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                                <p className="text-lg font-bold text-orange-600 mt-2">
                                                    ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                {item.status === 'preparing' && (
                                                    <button
                                                        onClick={() => handleMarkAsServed(index)}
                                                        className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-colors"
                                                        title="Mark as served"
                                                    >
                                                        <Check className="w-5 h-5" />
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => handleRemoveItem(index)}
                                                    className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-colors"
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
                        <div className="bg-white rounded-3xl shadow-2xl p-6 sticky top-24 space-y-4">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Actions</h2>

                            <button
                                onClick={() => setShowAddItems(!showAddItems)}
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg"
                            >
                                <Plus className="w-5 h-5" />
                                Add More Items
                            </button>

                            <button
                                onClick={handleGenerateBill}
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg"
                            >
                                <Receipt className="w-5 h-5" />
                                Generate Bill
                            </button>

                            <button
                                onClick={handleCancelOrder}
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg"
                            >
                                <X className="w-5 h-5" />
                                Cancel Order
                            </button>

                            {/* Bill Summary */}
                            <div className="border-t-2 border-gray-200 pt-4 mt-6 space-y-2">
                                <h3 className="font-bold text-gray-700 mb-3">Bill Summary</h3>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-semibold">₹{bill.subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">CGST (2.5%)</span>
                                    <span className="font-semibold">₹{bill.cgst.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">SGST (2.5%)</span>
                                    <span className="font-semibold">₹{bill.sgst.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold border-t-2 border-orange-200 pt-3 mt-3">
                                    <span className="text-gray-800">Total</span>
                                    <span className="text-orange-600">₹{bill.total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Items Modal */}
            {showAddItems && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
                        <div className="p-6 border-b-2 border-gray-200">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-gray-800">Add Items to Order</h2>
                                <button
                                    onClick={() => setShowAddItems(false)}
                                    className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <input
                                type="text"
                                placeholder="Search items..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full mt-4 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
                            />
                        </div>
                        <div className="p-6 overflow-y-auto max-h-[60vh]">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {filteredMenuItems.map(item => (
                                    <button
                                        key={item.id}
                                        onClick={() => toggleNewItem(item)}
                                        className="bg-gray-50 hover:bg-orange-50 border-2 border-gray-200 hover:border-orange-300 rounded-2xl p-4 transition-all text-left"
                                    >
                                        <div className="text-3xl mb-2">{item.image}</div>
                                        <h4 className="font-bold text-gray-800 mb-1">{item.name}</h4>
                                        <p className="text-orange-600 font-bold">₹{item.price}</p>
                                        {selectedNewItems.find(i => i.id === item.id) && (
                                            <span className="mt-2 inline-block bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                                {selectedNewItems.find(i => i.id === item.id).quantity} added
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 border-t-2 border-gray-200">
                            <button
                                onClick={handleAddNewItems}
                                disabled={selectedNewItems.length === 0}
                                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all active:scale-95"
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
