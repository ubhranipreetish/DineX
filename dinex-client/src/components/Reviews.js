"use client";
import { useState } from "react";
import { ThumbsUp, MessageCircle, Share } from "lucide-react";

// Generate random background colors for avatars
const avatarColors = ["#F87171", "#FBBF24", "#34D399", "#60A5FA", "#A78BFA", "#F472B6", "#F59E0B", "#10B981"];

const reviews = [
  {
    id: 1,
    name: "Divya",
    followers: 0,
    reviews: 0,
    rating: 5,
    type: "DINING",
    timeAgo: "13 days ago",
    text: "Had an amazing evening at Drama! The vibe was great and the team made the experience even better. The cocktails were superb 🍸✨",
  },
  {
    id: 2,
    name: "Sannidhi",
    followers: 4,
    reviews: 0,
    rating: 1,
    type: "DINING",
    timeAgo: "28 days ago",
    text: "Food was disappointing. Service was slow, though the ambiance was nice.",
  },
  {
    id: 3,
    name: "Ridhi Babbar",
    followers: 30,
    reviews: 0,
    rating: 4,
    type: "DINING",
    timeAgo: "1 month ago",
    text: "Loved the interiors! Great food and an excellent place for parties 🎉",
  },
  {
    id: 4,
    name: "Ankit Sharma",
    followers: 12,
    reviews: 3,
    rating: 4,
    type: "DINING",
    timeAgo: "5 days ago",
    text: "Fantastic food and lovely ambiance. Perfect for date nights!",
  },
  {
    id: 5,
    name: "Megha",
    followers: 6,
    reviews: 1,
    rating: 3,
    type: "DINING",
    timeAgo: "1 week ago",
    text: "Average experience. Food was okay but service can improve.",
  },
  {
    id: 6,
    name: "Vivek",
    followers: 2,
    reviews: 1,
    rating: 5,
    type: "DINING",
    timeAgo: "2 weeks ago",
    text: "Loved the desserts! Definitely coming again soon 🍰",
  },
  {
    id: 7,
    name: "Aarti",
    followers: 1,
    reviews: 1,
    rating: 4,
    type: "DINING",
    timeAgo: "3 weeks ago",
    text: "Tasty food and quick service! Highly recommend the pasta.",
  },
  {
    id: 8,
    name: "Nikhil",
    followers: 10,
    reviews: 5,
    rating: 2,
    type: "DINING",
    timeAgo: "2 months ago",
    text: "Expected better. Food was cold when served.",
  },
  {
    id: 9,
    name: "Shivani",
    followers: 8,
    reviews: 3,
    rating: 4,
    type: "DINING",
    timeAgo: "4 weeks ago",
    text: "Good vibes and tasty food! The live music was a nice touch 🎶",
  },
  {
    id: 10,
    name: "Rahul",
    followers: 14,
    reviews: 5,
    rating: 5,
    type: "DINING",
    timeAgo: "10 days ago",
    text: "Amazing place for family dinners. Loved the butter chicken!",
  },
  {
    id: 11,
    name: "Simran",
    followers: 2,
    reviews: 2,
    rating: 4,
    type: "DINING",
    timeAgo: "3 days ago",
    text: "Everything was perfect! Service, ambiance, and food 🌟",
  },
  {
    id: 12,
    name: "Rohit",
    followers: 9,
    reviews: 3,
    rating: 2,
    type: "DINING",
    timeAgo: "1 month ago",
    text: "Too crowded and noisy. Food was decent but overpriced.",
  },
  {
    id: 13,
    name: "Sneha",
    followers: 7,
    reviews: 4,
    rating: 5,
    type: "DINING",
    timeAgo: "1 week ago",
    text: "Loved the cocktails! Great presentation and service 🍹",
  },
  {
    id: 14,
    name: "Harshit",
    followers: 3,
    reviews: 1,
    rating: 3,
    type: "DINING",
    timeAgo: "2 weeks ago",
    text: "Average food but nice interiors. Worth a visit once.",
  },
  {
    id: 15,
    name: "Tanya",
    followers: 5,
    reviews: 2,
    rating: 5,
    type: "DINING",
    timeAgo: "6 days ago",
    text: "Absolutely loved it! Friendly staff and delicious food 😋",
  },
  {
    id: 16,
    name: "Amit",
    followers: 12,
    reviews: 6,
    rating: 1,
    type: "DINING",
    timeAgo: "3 weeks ago",
    text: "Very slow service. Not visiting again.",
  },
  {
    id: 17,
    name: "Ritika",
    followers: 9,
    reviews: 3,
    rating: 4,
    type: "DINING",
    timeAgo: "2 months ago",
    text: "Loved the pizza! Perfectly baked 🍕",
  },
  {
    id: 18,
    name: "Karan",
    followers: 1,
    reviews: 1,
    rating: 5,
    type: "DINING",
    timeAgo: "5 days ago",
    text: "Good food and great staff. Overall a good experience.",
  },
  {
    id: 19,
    name: "Neha",
    followers: 10,
    reviews: 4,
    rating: 3,
    type: "DINING",
    timeAgo: "2 weeks ago",
    text: "Nice ambiance but food could be better.",
  },
  {
    id: 20,
    name: "Piyush",
    followers: 0,
    reviews: 0,
    rating: 5,
    type: "DINING",
    timeAgo: "1 day ago",
    text: "Loved the vibe and taste! Must visit 🔥",
  },
];

export default function Reviews({ restaurantName }) {
  const [page, setPage] = useState(1);
  const perPage = 5;
  const totalPages = Math.ceil(reviews.length / perPage);
  const currentReviews = reviews.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        {restaurantName} Dining Reviews
      </h2>

      <div className="space-y-6">
        {currentReviews.map((review) => {
          const bgColor =
            avatarColors[Math.floor(Math.random() * avatarColors.length)];
          const initial = review.name.charAt(0).toUpperCase();

          return (
            <div key={review.id} className="border-b border-gray-200 pb-6">
              {/* User Info */}
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                    style={{ backgroundColor: bgColor }}
                  >
                    {initial}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{review.name}</h3>
                    <p className="text-gray-500 text-sm">
                      {review.reviews} reviews • {review.followers} Followers
                    </p>
                  </div>
                </div>
                <button className="cursor-pointer text-red-500 border border-red-400 px-4 py-1 rounded-lg hover:bg-red-50 text-sm">
                  Follow
                </button>
              </div>

              {/* Rating + Review Text */}
              <div className="mt-3 pl-14">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-[2px] text-xs font-semibold rounded ${
                      review.rating >= 4
                        ? "bg-green-600 text-white"
                        : review.rating === 3
                        ? "bg-yellow-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {review.rating}★
                  </span>
                  <span className="text-xs font-medium text-gray-500">
                    {review.type}
                  </span>
                  <span className="text-xs text-gray-400">{review.timeAgo}</span>
                </div>

                <p className="text-gray-700 mt-2">{review.text}</p>

                <div className="flex items-center gap-6 text-gray-500 text-sm mt-3">
                  <button className="cursor-pointer flex items-center gap-1 hover:text-gray-700">
                    <ThumbsUp className="w-4 h-4" /> Helpful
                  </button>
                  <button className="cursor-pointer flex items-center gap-1 hover:text-gray-700">
                    <MessageCircle className="w-4 h-4" /> Comment
                  </button>
                  <button className="cursor-pointer flex items-center gap-1 hover:text-gray-700">
                    <Share className="w-4 h-4" /> Share
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="cursor-pointer px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-600">
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="cursor-pointer px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
