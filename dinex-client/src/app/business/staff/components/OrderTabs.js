export default function OrderTabs({ activeTab, onTabChange, runningCount, cancelledCount }) {
    return (
        <div className="flex items-center gap-4 border-b-2 border-[#D4C5B0]">
            <button
                onClick={() => onTabChange('running')}
                className={`
                    relative px-6 py-3 font-semibold transition-all cursor-pointer
                    ${activeTab === 'running'
                        ? 'text-[#C9A050]'
                        : 'text-[#6B5B4A] hover:text-[#8B7355]'
                    }
                `}
            >
                <span>Running Orders</span>
                <span className={`
                    ml-2 px-2 py-0.5 rounded-full text-xs font-bold
                    ${activeTab === 'running'
                        ? 'bg-[#C9A050] text-white'
                        : 'bg-[#E5D9C8] text-[#6B5B4A]'
                    }
                `}>
                    {runningCount}
                </span>
                {activeTab === 'running' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A050]"></div>
                )}
            </button>

            <button
                onClick={() => onTabChange('cancelled')}
                className={`
                    relative px-6 py-3 font-semibold transition-all cursor-pointer
                    ${activeTab === 'cancelled'
                        ? 'text-[#C9A050]'
                        : 'text-[#6B5B4A] hover:text-[#8B7355]'
                    }
                `}
            >
                <span>Cancelled Orders</span>
                <span className={`
                    ml-2 px-2 py-0.5 rounded-full text-xs font-bold
                    ${activeTab === 'cancelled'
                        ? 'bg-[#C9A050] text-white'
                        : 'bg-[#E5D9C8] text-[#6B5B4A]'
                    }
                `}>
                    {cancelledCount}
                </span>
                {activeTab === 'cancelled' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A050]"></div>
                )}
            </button>
        </div>
    );
}
