import { ChevronRight } from 'lucide-react';

export default function CategoryTabs({ categories, activeCategory, onCategoryChange }) {
    return (
        <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => onCategoryChange(category.id)}
                    className={`
            flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap shadow-md hover:shadow-lg active:scale-95
            ${activeCategory === category.id
                            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white scale-105'
                            : 'bg-white text-gray-700 hover:bg-orange-50'
                        }
          `}
                >
                    <span className="text-2xl">{category.icon}</span>
                    <span>{category.name}</span>
                    {activeCategory === category.id && <ChevronRight className="w-5 h-5" />}
                </button>
            ))}
        </div>
    );
}
