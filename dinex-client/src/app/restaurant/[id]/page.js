"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BookingFlow from "@/components/BookingFlow";

export default function RestaurantDetail() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const dummyData = [
      {
        id: "1",
        name: "Café Mocha",
        cuisine: "Italian",
        rating: 4.5,
        description: "Cozy cafe with Italian-style desserts and coffee.",
        image: "/images/cafe1.jpg",
        menu: [
          { name: "Pasta Alfredo", price: 450 },
          { name: "Tiramisu", price: 300 },
        ],
      },
      {
        id: "2",
        name: "Tandoori Tales",
        cuisine: "Indian",
        rating: 4.2,
        description: "Authentic Indian cuisine with a modern twist.",
        image: "/images/cafe2.jpg",
        menu: [
          { name: "Butter Chicken", price: 520 },
          { name: "Paneer Tikka", price: 380 },
        ],
      },
      {
        id: "3",
        name: "Café Mocha",
        cuisine: "Italian",
        rating: 4.5,
        description: "Cozy cafe with Italian-style desserts and coffee.",
        image: "/images/cafe1.jpg",
        menu: [
          { name: "Pasta Alfredo", price: 450 },
          { name: "Tiramisu", price: 300 },
        ],
      },
      {
        id: "4",
        name: "Tandoori Tales",
        cuisine: "Indian",
        rating: 4.2,
        description: "Authentic Indian cuisine with a modern twist.",
        image: "/images/cafe2.jpg",
        menu: [
          { name: "Butter Chicken", price: 520 },
          { name: "Paneer Tikka", price: 380 },
        ],
      },
      {
        id: "5",
        name: "Café Mocha",
        cuisine: "Italian",
        rating: 4.5,
        description: "Cozy cafe with Italian-style desserts and coffee.",
        image: "/images/cafe1.jpg",
        menu: [
          { name: "Pasta Alfredo", price: 450 },
          { name: "Tiramisu", price: 300 },
        ],
      },
      {
        id: "6",
        name: "Tandoori Tales",
        cuisine: "Indian",
        rating: 4.2,
        description: "Authentic Indian cuisine with a modern twist.",
        image: "/images/cafe2.jpg",
        menu: [
          { name: "Butter Chicken", price: 520 },
          { name: "Paneer Tikka", price: 380 },
        ],
      },
      {
        id: "7",
        name: "Café Mocha",
        cuisine: "Italian",
        rating: 4.5,
        description: "Cozy cafe with Italian-style desserts and coffee.",
        image: "/images/cafe1.jpg",
        menu: [
          { name: "Pasta Alfredo", price: 450 },
          { name: "Tiramisu", price: 300 },
        ],
      },
      {
        id: "8",
        name: "Tandoori Tales",
        cuisine: "Indian",
        rating: 4.2,
        description: "Authentic Indian cuisine with a modern twist.",
        image: "/images/cafe2.jpg",
        menu: [
          { name: "Butter Chicken", price: 520 },
          { name: "Paneer Tikka", price: 380 },
        ],
      },
    ];

    const selected = dummyData.find((r) => r.id === id);
    setRestaurant(selected);
  }, [id]);

  if (!restaurant) return <p className="text-center mt-10 text-gray-600">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto mt-6 bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-64 object-cover rounded-xl shadow-md"
      />

      <div className="mt-6">
        <h1 className="text-3xl font-semibold text-gray-800">{restaurant.name}</h1>
        <p className="text-gray-500">{restaurant.cuisine}</p>
        <p className="text-yellow-500 mt-1">⭐ {restaurant.rating}</p>
        <p className="mt-4 text-gray-700 leading-relaxed">{restaurant.description}</p>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">Menu</h2>
      <div className="border rounded-xl p-4 bg-gray-50">
        {restaurant.menu.map((item, i) => (
          <div
            key={i}
            className="flex justify-between border-b border-gray-200 py-2 last:border-none"
          >
            <span className="text-gray-800">{item.name}</span>
            <span className="text-gray-700 font-medium">₹{item.price}</span>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <BookingFlow restaurantName={restaurant.name} />
      </div>
    </div>
  );
}
