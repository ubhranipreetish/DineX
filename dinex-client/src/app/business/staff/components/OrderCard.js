import { Clock, Eye, Trash2 } from 'lucide-react';

export default function OrderCard({ order, onView, onDelete, showDeleteButton = false }) {
    const getTimeElapsed = (createdAt) => {
        const minutes = Math.floor((new Date() - new Date(createdAt)) / 60000);
        if (minutes < 60) return `${minutes} min`;
        const hours = Math.floor(minutes / 60);
        const remainingMins = minutes % 60;
        return `${hours}h ${remainingMins}m`;
    };

    const itemCount = order.items?.filter(i => i.status !== 'removed').length || 0;

    return (
        <div className="bg-white border-2 border-[#D4C5B0] rounded-2xl overflow-hidden hover:border-[#C9A050] transition-all duration-300 shadow-lg hover:shadow-xl">
            {/* Card Header */}
            <div className="bg-gradient-to-br from-[#FAF8F5] to-[#F5F0E8] p-5 border-b border-[#D4C5B0]">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-bold text-[#4A3F35]">Table {order.tableNo}</h2>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${order.status === 'ongoing'
                            ? 'bg-[#C9A050] text-white border border-[#B8903D]'
                            : 'bg-[#8B6F47] text-white border border-[#6B5B4A]'
                        }`}>
                        {order.status === 'ongoing' ? 'In Progress' : 'Cancelled'}
                    </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B5B4A]">
                    <Clock className="w-4 h-4 text-[#C9A050]" />
                    <span>{getTimeElapsed(order.createdAt)} ago</span>
                </div>
            </div>

            {/* Card Body */}
            <div className="p-5 space-y-4">
                <div className="bg-gradient-to-br from-[#FAF8F5] to-[#F5F0E8] rounded-xl p-4 border border-[#E5D9C8]">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#6B5B4A]">Order ID</span>
                        <span className="font-mono font-bold text-sm text-[#4A3F35]">#{order.orderId.slice(-6)}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#6B5B4A]">Items</span>
                        <span className="font-bold text-[#4A3F35]">{itemCount}</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-[#D4C5B0] pt-2 mt-2">
                        <span className="text-sm text-[#6B5B4A]">Bill Amount</span>
                        <span className="text-xl font-bold text-[#C9A050]">₹{order.totalAmount?.toFixed(2) || '0.00'}</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className={`grid grid-cols-1 gap-3`}>
                    {showDeleteButton && (
                        <button
                            onClick={onDelete}
                            className="flex items-center justify-center gap-2 bg-[#8B6F47] hover:bg-[#7A5F3C] text-white py-3 rounded-xl font-bold transition-all active:scale-95 shadow-md cursor-pointer"
                        >
                            <Trash2 className="w-4 h-4" />
                            Delete
                        </button>
                    )}
                    
                    {!showDeleteButton && (
                        <button
                            onClick={onView}
                            className="flex items-center justify-center gap-2 bg-white hover:bg-[#F5F0E8] text-[#4A3F35] py-3 rounded-xl font-semibold transition-all active:scale-95 border-2 border-[#D4C5B0] shadow-sm cursor-pointer"
                        >
                            <Eye className="w-4 h-4" />
                            View
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
