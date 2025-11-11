"use client";
import { useState } from "react";
import { CreditCard, Smartphone, Wallet, Building2, CheckCircle, ChevronRight, Lock } from 'lucide-react';

export default function Payment({ data, onComplete }) {
  const [method, setMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentMethods = [
    {
      id: "upi",
      name: "UPI",
      icon: <Smartphone className="w-6 h-6" />,
      description: "Pay via Google Pay, PhonePe, Paytm & more",
      recommended: true
    },
    {
      id: "card",
      name: "Credit/Debit Card",
      icon: <CreditCard className="w-6 h-6" />,
      description: "Visa, Mastercard, RuPay, Amex"
    },
    {
      id: "wallet",
      name: "Wallets",
      icon: <Wallet className="w-6 h-6" />,
      description: "Paytm, PhonePe, Amazon Pay & more"
    },
    {
      id: "netbanking",
      name: "Net Banking",
      icon: <Building2 className="w-6 h-6" />,
      description: "All major banks supported"
    }
  ];

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  return (
    <div className="min-h-screen border border-gray-300 rounded-xl py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - Payment Methods */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Lock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Complete Payment</h3>
                  <p className="text-sm text-gray-500">Choose your preferred payment method</p>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-3">
                {paymentMethods.map((pm) => (
                  <div
                    key={pm.id}
                    onClick={() => setMethod(pm.id)}
                    className={`relative flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      method === pm.id
                        ? 'border-red-500 bg-red-50 shadow-md'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {/* Recommended Badge */}
                    {pm.recommended && (
                      <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Recommended
                      </div>
                    )}

                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      method === pm.id ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {pm.icon}
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800">{pm.name}</h4>
                      <p className="text-sm text-gray-600">{pm.description}</p>
                    </div>

                    {/* Radio Indicator */}
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      method === pm.id
                        ? 'border-red-500 bg-red-500'
                        : 'border-gray-300'
                    }`}>
                      {method === pm.id && <CheckCircle className="w-4 h-4 text-white" />}
                    </div>

                    <ChevronRight className={`w-5 h-5 ${
                      method === pm.id ? 'text-red-600' : 'text-gray-400'
                    }`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Details Form */}
            {method === "card" && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h4 className="font-bold text-gray-800 mb-4">Enter Card Details</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                      maxLength="19"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                        maxLength="5"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                      <input
                        type="password"
                        placeholder="123"
                        className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                        maxLength="3"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                    <input
                      type="text"
                      placeholder="Name on card"
                      className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {method === "upi" && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h4 className="font-bold text-gray-800 mb-4">Enter UPI ID</h4>
                <input
                  type="text"
                  placeholder="yourname@upi"
                  className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                />
                <p className="text-sm text-gray-500 mt-2">Or scan QR code with any UPI app</p>
              </div>
            )}

            {method === "wallet" && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h4 className="font-bold text-gray-800 mb-4">Select Wallet</h4>
                <div className="grid grid-cols-2 gap-3">
                  {["Paytm", "PhonePe", "Amazon Pay", "Mobikwik"].map((wallet) => (
                    <button
                      key={wallet}
                      className="p-4 text-gray-800 border-2 border-gray-200 rounded-lg hover:border-red-500 hover:bg-red-50 transition-all font-medium"
                    >
                      {wallet}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {method === "netbanking" && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h4 className="font-bold text-gray-800 mb-4">Select Bank</h4>
                <select className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none">
                  <option>Select your bank</option>
                  <option>State Bank of India</option>
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>Axis Bank</option>
                  <option>Kotak Mahindra Bank</option>
                  <option>Punjab National Bank</option>
                </select>
              </div>
            )}

            {/* Security Info */}
            <div className="bg-blue-50 rounded-2xl p-4 mt-4 border border-blue-200">
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-blue-900 text-sm mb-1">100% Secure Payment</h5>
                  <p className="text-xs text-blue-800">
                    Your payment information is encrypted and secure. We never store your card details.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-4">Booking Summary</h4>
                
                {/* Restaurant Details */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-xl mb-4">
                  <h5 className="font-bold text-gray-800 mb-1">{data.restaurantName}</h5>
                  {data.restaurantAddress && (
                    <p className="text-xs text-gray-600">{data.restaurantAddress}</p>
                  )}
                </div>

                {/* Booking Details */}
                <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Date</span>
                    <span className="font-semibold text-gray-800">
                      {new Date(data.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Time</span>
                    <span className="font-semibold text-gray-800">{data.time}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Guests</span>
                    <span className="font-semibold text-gray-800">{data.people} {data.people === 1 ? 'Person' : 'People'}</span>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Booking Amount</span>
                    <span className="font-semibold text-gray-800">₹{data.amount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Convenience Fee</span>
                    <span className="font-semibold text-gray-800">₹0</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                    <span className="font-bold text-gray-800">Total Amount</span>
                    <span className="text-2xl font-bold text-red-600">₹{data.amount}</span>
                  </div>
                </div>

                {/* Redeemable Info */}
                <div className="bg-green-50 p-3 rounded-lg mb-4">
                  <p className="text-xs text-green-700 flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    Full amount redeemable on your bill
                  </p>
                </div>

                {/* Pay Button */}
                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    `Pay ₹${data.amount}`
                  )}
                </button>

                <p className="text-xs text-center text-gray-500 mt-3">
                  By proceeding, you agree to our Terms & Conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}