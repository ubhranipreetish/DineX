import Link from "next/link";
import { Star } from "lucide-react";

export default function RestaurantCard({ restaurant }) {
  return (
    <Link href={`/restaurant/${restaurant.id}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition relative border border-gray-100">
        {/* Restaurant Image Section */}
        <div className="relative">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-52 object-cover rounded-t-2xl"
          />

          {/* Offer Banner */}
          {restaurant.offer && (
            <div className="absolute bottom-2 left-0 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-r-lg flex items-center gap-2">
              <span className="text-lg">💠</span> {restaurant.offer}
            </div>
          )}
        </div>

        {/* Restaurant Info */}
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">
              {restaurant.name}
            </h3>
            <span className="bg-green-100 text-green-800 text-sm font-semibold px-2 py-1 rounded flex items-center gap-1">
              <Star className="w-4 h-4 fill-green-600 text-green-600" />
              {restaurant.rating}
            </span>
          </div>

          <p className="text-gray-500 text-sm truncate">
            {restaurant.cuisine}
          </p>

          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>{restaurant.price}</span>
            <span>{restaurant.distance}</span>
          </div>

          <p className="text-gray-400 text-sm mt-1">
            {restaurant.location}
          </p>
        </div>
      </div>
    </Link>
  );
}
