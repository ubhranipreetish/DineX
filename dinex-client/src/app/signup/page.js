"use client";
import { useState } from "react";
import { API } from "@/utils/api";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "customer" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/api/auth/signup", form);
      alert(res.data.msg);
    } catch (err) {
      alert(err.response?.data?.msg || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4 text-center">Signup</h2>

        <input className="w-full border p-2 mb-2 rounded" placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="w-full border p-2 mb-2 rounded" placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className="w-full border p-2 mb-2 rounded" type="password" placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <select className="w-full border p-2 mb-4 rounded"
          onChange={(e) => setForm({ ...form, role: e.target.value })}>
          <option value="customer">Customer</option>
          <option value="restaurant">Restaurant</option>
        </select>

        <button className="bg-red-500 text-white py-2 rounded w-full hover:bg-red-600">Signup</button>
      </form>
    </div>
  );
}
