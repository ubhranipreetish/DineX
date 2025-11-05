"use client";
import { useState } from "react";

export default function Payment({ data, onComplete }) {
  const [method, setMethod] = useState("card");

  return (
    <div className="border border-gray-200 p-6 rounded-xl shadow-sm bg-white">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Payment</h3>

      <div className="space-y-2 mb-6 text-gray-700">
        <p><strong>Restaurant:</strong> {data.restaurantName}</p>
        <p><strong>Date:</strong> {data.date}</p>
        <p><strong>Time:</strong> {data.time}</p>
        <p><strong>People:</strong> {data.people}</p>
        <p><strong>Amount:</strong> ₹{data.amount}</p>
      </div>

      <h4 className="font-semibold mb-2 text-gray-800">Choose Payment Method</h4>
      <div className="flex flex-col gap-3">
        <label className="flex items-center gap-2 text-gray-700">
          <input
            type="radio"
            name="payment"
            value="upi"
            checked={method === "upi"}
            onChange={() => setMethod("upi")}
          />
          UPI
        </label>

        <label className="flex items-center gap-2 text-gray-700">
          <input
            type="radio"
            name="payment"
            value="card"
            checked={method === "card"}
            onChange={() => setMethod("card")}
          />
          Credit/Debit Card
        </label>
      </div>

      {method === "card" && (
        <div className="mt-4 border border-gray-200 rounded-lg p-3 bg-gray-50 text-gray-700">
          <p className="font-medium mb-1">Selected Card:</p>
          <p>💳 **** **** **** 4242</p>
          <p className="text-sm text-gray-500">HDFC Bank Visa • Exp 06/28</p>
        </div>
      )}

      {method === "upi" && (
        <div className="mt-4 border border-gray-200 rounded-lg p-3 bg-gray-50 text-gray-700">
          <p className="font-medium mb-1">UPI ID:</p>
          <p>dinex@upi</p>
        </div>
      )}

      <button
        onClick={onComplete}
        className="mt-6 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition"
      >
        Pay ₹{data.amount}
      </button>
    </div>
  );
}
