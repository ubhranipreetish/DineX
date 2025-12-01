"use client";
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Download, CheckCircle } from 'lucide-react';
import { useOrder } from '../../../context/OrderContext';

export default function BillPage() {
    const router = useRouter();
    const params = useParams();
    const tableId = parseInt(params.id);
    const { tables, getOrderByTableId, markAsPaid } = useOrder();
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
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-gray-50 py-8">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-700 hover:text-orange-600 mb-6 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span className="font-semibold">Back</span>
                </button>

                {/* Bill Card */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-orange-200">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 text-center">
                        <div className="text-6xl mb-4">🍽️</div>
                        <h1 className="text-4xl font-bold mb-2">DineX Restaurant</h1>
                        <p className="text-orange-100">Premium Dining Experience</p>
                    </div>

                    {/* Bill Details */}
                    <div className="p-8 space-y-6">
                        {/* Meta Information */}
                        <div className="grid grid-cols-2 gap-4 pb-6 border-b-2 border-gray-200">
                            <div>
                                <p className="text-sm text-gray-600 font-semibold">Table Number</p>
                                <p className="text-2xl font-bold text-gray-800">#{table.tableNumber}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 font-semibold">Order ID</p>
                                <p className="text-lg font-bold text-gray-800">{order.id.slice(-8)}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 font-semibold">Date</p>
                                <p className="text-lg font-bold text-gray-800">
                                    {currentDate.toLocaleDateString('en-IN', {
                                        day: '2-digit',
                                        month: 'short',
                                        year: 'numeric'
                                    })}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 font-semibold">Time</p>
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
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Order Items</h2>
                            <div className="space-y-3">
                                {bill.items.map((item, index) => (
                                    <div key={index} className="flex items-start justify-between py-3 border-b border-gray-200">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${item.isVeg ? 'border-green-600' : 'border-red-600'
                                                    }`}>
                                                    <div className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'
                                                        }`}></div>
                                                </div>
                                                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                            </div>
                                            <p className="text-sm text-gray-600">₹{item.price} × {item.quantity}</p>
                                        </div>
                                        <p className="font-bold text-gray-800 text-lg">
                                            ₹{(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bill Summary */}
                        <div className="bg-orange-50 rounded-2xl p-6 space-y-3">
                            <div className="flex justify-between text-base">
                                <span className="text-gray-700 font-semibold">Subtotal</span>
                                <span className="font-bold text-gray-800">₹{bill.subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-base">
                                <span className="text-gray-700 font-semibold">CGST (2.5%)</span>
                                <span className="font-bold text-gray-800">₹{bill.cgst.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-base">
                                <span className="text-gray-700 font-semibold">SGST (2.5%)</span>
                                <span className="font-bold text-gray-800">₹{bill.sgst.toFixed(2)}</span>
                            </div>
                            <div className="border-t-2 border-orange-300 pt-3 mt-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-gray-800">Total Amount</span>
                                    <span className="text-3xl font-bold text-orange-600">₹{bill.total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Thank You Message */}
                        <div className="text-center py-4 border-t-2 border-gray-200">
                            <p className="text-lg font-semibold text-gray-800">Thank you for dining with us!</p>
                            <p className="text-sm text-gray-600 mt-1">We hope to see you again soon</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                            <button
                                onClick={handleDownloadBill}
                                className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg"
                            >
                                <Download className="w-5 h-5" />
                                Download Bill
                            </button>
                            <button
                                onClick={handleConfirmPayment}
                                disabled={isProcessing}
                                className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg"
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
