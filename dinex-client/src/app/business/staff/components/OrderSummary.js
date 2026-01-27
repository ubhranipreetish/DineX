import { Trash2 } from 'lucide-react';
import QuantityControl from './QuantityControl';

export default function OrderSummary({
    items,
    existingItems = [],
    onQuantityChange,
    onRemoveItem,
    onRemoveExistingItem,
    onPlaceOrder,
    onGenerateBill,
    onCancelOrder,
    isPlacingOrder = false,
    tableNumber
}) {
    const allItems = [...existingItems, ...items];

    const calculateBill = () => {
        const subtotal = allItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const cgst = subtotal * 0.025;
        const sgst = subtotal * 0.025;
        const total = subtotal + cgst + sgst;

        return {
            subtotal: Math.round(subtotal * 100) / 100,
            cgst: Math.round(cgst * 100) / 100,
            sgst: Math.round(sgst * 100) / 100,
            total: Math.round(total * 100) / 100
        };
    };

    const bill = calculateBill();
    const itemCount = allItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="bg-white rounded-3xl shadow-2xl p-6 sticky top-4 h-fit border-2 border-[#D4C5B0]">
            {/* Header */}
            <div className="border-b-2 border-gray-200 pb-4 mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Order Summary</h2>
                <p className="text-sm text-gray-600 mt-1">Table {tableNumber}</p>
                {itemCount > 0 && (
                    <p className="text-sm text-[#C9A050] font-semibold mt-1">
                        {itemCount} {itemCount === 1 ? 'item' : 'items'}
                    </p>
                )}
            </div>

            {/* Items List */}
            {/* Items List */}
            <div className="max-h-[400px] overflow-y-auto mb-4 space-y-3 scrollbar-thin scrollbar-thumb-[#C9A050] scrollbar-track-gray-100">
                {allItems.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-400 text-lg">No items added yet</p>
                        <p className="text-gray-400 text-sm mt-2">Start adding items from the menu</p>
                    </div>
                ) : (
                    <>
                        {/* EXISTING ITEMS (Read Only) */}
                        {existingItems.map((item, index) => (
                            <div key={`existing-${item.id}-${index}`} className="bg-gray-50 rounded-xl p-3 border border-gray-200 opacity-80">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <h4 className="font-semibold text-gray-600 text-sm">{item.name}</h4>
                                            <span className="bg-gray-200 text-gray-600 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">Ordered</span>
                                        </div>
                                        <p className="text-gray-500 font-bold text-sm mt-1">₹{item.price}</p>
                                    </div>
                                    <button
                                        onClick={() => onRemoveExistingItem(index)}
                                        className="text-red-500 hover:text-red-700 transition-colors p-1 cursor-pointer"
                                        title="Remove item"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-gray-500">Qty: {item.quantity}</span>
                                    <span className="text-sm font-bold text-gray-500">
                                        ₹{item.price * item.quantity}
                                    </span>
                                </div>
                            </div>
                        ))}

                        {/* NEW ITEMS */}
                        {items.map((item, index) => (
                            <div key={`${item.id}-${index}`} className="bg-gradient-to-br from-[#FAF8F5] to-[#F5F0E8] rounded-xl p-3 border border-[#E5D9C8]">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <h4 className="font-semibold text-[#4A3F35] text-sm">{item.name}</h4>
                                            <span className="bg-amber-100 text-amber-700 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">New</span>
                                        </div>
                                        <p className="text-[#C9A050] font-bold text-sm mt-1">₹{item.price}</p>
                                    </div>
                                    <button
                                        onClick={() => onRemoveItem(index)}
                                        className="text-red-500 hover:text-red-700 transition-colors p-1 cursor-pointer"
                                        title="Remove item"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <QuantityControl
                                        quantity={item.quantity}
                                        onIncrease={() => onQuantityChange(index, item.quantity + 1)}
                                        onDecrease={() => onQuantityChange(index, item.quantity - 1)}
                                        size="sm"
                                    />
                                    <span className="text-sm font-bold text-gray-700">
                                        ₹{item.price * item.quantity}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>

            {/* Bill Summary */}
            {
                allItems.length > 0 && (
                    <div className="border-t-2 border-gray-200 pt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-semibold">₹{bill.subtotal}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">CGST (2.5%)</span>
                            <span className="font-semibold">₹{bill.cgst}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">SGST (2.5%)</span>
                            <span className="font-semibold">₹{bill.sgst}</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold border-t-2 border-[#D4C5B0] pt-3 mt-3">
                            <span className="text-[#4A3F35]">Total</span>
                            <span className="text-[#C9A050]">₹{bill.total}</span>
                        </div>
                    </div>
                )
            }

            {/* Place Order Button */}
            {/* Place Order Button */}
            <button
                onClick={onPlaceOrder}
                disabled={(items.length === 0 && existingItems.length === 0) || isPlacingOrder || (existingItems.length > 0 && items.length === 0)}
                className="w-full mt-6 bg-[#C9A050] hover:from-[#B8903D] hover:to-[#E8C670] disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg hover:shadow-xl text-lg cursor-pointer"
            >
                {isPlacingOrder ? 'Processing...' : (existingItems.length > 0 ? 'Update Order' : 'Place Order')}
            </button>

            {/* Extra Actions for Occupied Tables */}
            {
                existingItems.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        <button
                            onClick={onGenerateBill}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors shadow-md text-sm cursor-pointer"
                        >
                            Generate Bill
                        </button>
                        <button
                            onClick={onCancelOrder}
                            className="bg-white border-2 border-red-100 text-red-500 hover:bg-red-50 hover:border-red-200 font-bold py-3 rounded-xl transition-colors shadow-sm text-sm cursor-pointer"
                        >
                            Cancel Order
                        </button>
                    </div>
                )
            }
        </div >
    );
}
