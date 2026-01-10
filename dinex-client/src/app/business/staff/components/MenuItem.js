import { Plus, Minus } from 'lucide-react';

export default function MenuItem({ item, onAdd, selectedQuantity = 0 }) {
    return (
        <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all border border-gray-100 group hover:border-orange-300">
            {/* Veg/Non-veg indicator (Standard Indian food labeling) */}
            <div className="flex items-start justify-between mb-3">
                <div className={`w-5 h-5 border-2 flex items-center justify-center ${item.isVeg ? 'border-green-600' : 'border-red-700'}`}>
                    {item.isVeg ? (
                        <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                    ) : (
                        <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-b-[8px] border-l-transparent border-r-transparent border-b-red-700"></div>
                    )}
                </div>
                {selectedQuantity > 0 && (
                    <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {selectedQuantity} added
                    </span>
                )}
            </div>

            {/* Item image/emoji */}
            <div className="text-center mb-3">
                <span className="text-5xl">{item.image}</span>
            </div>

            {/* Item name */}
            <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-2 min-h-[56px]">
                {item.name}
            </h3>

            {/* Price and Add button */}
            <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-orange-600">
                    ₹{item.price}
                </span>
                <button
                    onClick={() => onAdd(item)}
                    className="flex items-center gap-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-xl font-semibold transition-all active:scale-95 shadow-md hover:shadow-lg cursor-pointer"
                >
                    <Plus className="w-4 h-4" />
                    Add
                </button>
            </div>
        </div>
    );
}
