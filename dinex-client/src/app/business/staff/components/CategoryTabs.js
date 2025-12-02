import { ChevronRight } from 'lucide-react';

export default function CategoryTabs({ categories, activeCategory, onCategoryChange }) {
    return (
        <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => onCategoryChange(category.id)}
                    className={`
            flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap shadow-md hover:shadow-lg active:scale-95 cursor-pointer
            ${activeCategory === category.id
                            ? 'bg-[#C9A050] text-white scale-105'
                            : 'bg-gradient-to-br from-[#F5F0E8] to-[#EDE4D8] text-[#6B5B4A] hover:bg-gradient-to-br hover:from-[#EDE4D8] hover:to-[#E5D9C8]'
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
