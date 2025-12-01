"use client";
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Download, CheckCircle } from 'lucide-react';
import { useOrder } from '../../../context/OrderContext';

export default function BillPage() {
    const router = useRouter();
    const params = useParams();
    const tableId = parseInt(params.id);
    const { tables, getOrderByTableId, markAsPaid, restaurant } = useOrder();
    const [isProcessing, setIsProcessing] = useState(false);

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

    const calculateBill = () => {
        if (!order) return { subtotal: 0, cgst: 0, sgst: 0, total: 0, items: [] };

        const activeItems = order.items.filter(item => item.status !== 'removed');
        const subtotal = activeItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const cgst = subtotal * 0.025;
        const sgst = subtotal * 0.025;
        const total = subtotal + cgst + sgst;

        return {
            subtotal: Math.round(subtotal * 100) / 100,
            cgst: Math.round(cgst * 100) / 100,
            sgst: Math.round(sgst * 100) / 100,
            total: Math.round(total * 100) / 100,
            items: activeItems
        };
    };

    const handleConfirmPayment = () => {
        if (confirm('Confirm payment received?')) {
            setIsProcessing(true);
            setTimeout(() => {
                markAsPaid(order.id);
                router.push('/business/staff/home');
            }, 500);
        }
    };

    const handleDownloadBill = () => {
        alert('Download functionality will be implemented with backend integration');
    };

    if (!table || !order) {
        return null;
    }

    const bill = calculateBill();
    const currentDate = new Date();

    return (
        <div className="min-h-screen bg-[#FFF8E7] py-8">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-600 hover:text-amber-600 mb-6 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span className="font-semibold">Back</span>
                </button>

                {/* Bill Card */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-100 relative">
                    {/* Decorative Top Border */}
                    <div className="h-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600"></div>

                    {/* Header */}
                    <div className="bg-white text-center pt-10 pb-6 px-8 border-b border-dashed border-gray-200">
                        <div className="text-6xl mb-4 grayscale opacity-80">🍽️</div>
                        <h1 className="text-4xl font-bold mb-2 text-gray-800">
                            {restaurant?.restaurantName || 'DineX Restaurant'}
                        </h1>
                        <p className="text-amber-600 font-medium tracking-wide uppercase text-sm">Premium Dining Experience</p>
                    </div>

                    {/* Bill Details */}
                    <div className="p-8 space-y-6">
                        {/* Meta Information */}
                        <div className="grid grid-cols-2 gap-4 pb-6 border-b border-gray-100 bg-gray-50/50 p-6 rounded-2xl">
                            <div>
                                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Table Number</p>
                                <p className="text-2xl font-bold text-gray-800">#{table.tableNumber}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Order ID</p>
                                <p className="text-lg font-bold text-gray-800 font-mono">{order.id.slice(-8)}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Date</p>
                                <p className="text-lg font-bold text-gray-800">
                                    {currentDate.toLocaleDateString('en-IN', {
                                        day: '2-digit',
                                        month: 'short',
                                        year: 'numeric'
                                    })}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Time</p>
                                <p className="text-lg font-bold text-gray-800">
                                    {currentDate.toLocaleTimeString('en-IN', {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </p>
                            </div>
                        </div>

                        {/* Items List */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-amber-500 rounded-full"></span>
                                Order Items
                            </h2>
                            <div className="space-y-3">
                                {bill.items.map((item, index) => (
                                    <div key={index} className="flex items-start justify-between py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 px-2 rounded-lg transition-colors">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${item.isVeg ? 'border-green-600' : 'border-red-600'
                                                    }`}>
                                                    <div className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'
                                                        }`}></div>
                                                </div>
                                                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                            </div>
                                            <p className="text-sm text-gray-500">₹{item.price} × {item.quantity}</p>
                                        </div>
                                        <p className="font-bold text-gray-800 text-lg">
                                            ₹{(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bill Summary */}
                        <div className="bg-amber-50/50 rounded-2xl p-6 space-y-3 border border-amber-100">
                            <div className="flex justify-between text-base">
                                <span className="text-gray-600 font-medium">Subtotal</span>
                                <span className="font-bold text-gray-800">₹{bill.subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-base">
                                <span className="text-gray-600 font-medium">CGST (2.5%)</span>
                                <span className="font-bold text-gray-800">₹{bill.cgst.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-base">
                                <span className="text-gray-600 font-medium">SGST (2.5%)</span>
                                <span className="font-bold text-gray-800">₹{bill.sgst.toFixed(2)}</span>
                            </div>
                            <div className="border-t border-dashed border-amber-300 pt-3 mt-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-gray-800">Total Amount</span>
                                    <span className="text-3xl font-bold text-amber-600">₹{bill.total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Thank You Message */}
                        <div className="text-center py-4 border-t border-gray-100">
                            <p className="text-lg font-semibold text-gray-800">Thank you for dining with us!</p>
                            <p className="text-sm text-gray-500 mt-1">We hope to see you again soon</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                            <button
                                onClick={handleDownloadBill}
                                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 font-bold py-4 rounded-xl transition-all active:scale-95 shadow-sm hover:shadow-md"
                            >
                                <Download className="w-5 h-5" />
                                Download Bill
                            </button>
                            <button
                                onClick={handleConfirmPayment}
                                disabled={isProcessing}
                                className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-green-200"
                            >
                                <CheckCircle className="w-5 h-5" />
                                {isProcessing ? 'Processing...' : 'Confirm Payment'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
