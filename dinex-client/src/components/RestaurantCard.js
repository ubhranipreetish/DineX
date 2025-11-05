import Link from "next/link";

export default function RestaurantCard({ restaurant }) {
  return (
    <Link href={`/restaurant/${restaurant.id}`}>
      <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {restaurant.name}
          </h3>
          <p className="text-gray-500">{restaurant.cuisine}</p>
          <p className="text-yellow-500 font-medium mt-1">
            ⭐ {restaurant.rating}
          </p>
        </div>
      </div>
    </Link>
  );
}
