"use client";
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Search } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, getItemsByCategory } from '../../../data/menu-data';
import CategoryTabs from '../../../components/CategoryTabs';
import MenuItem from '../../../components/MenuItem';
import OrderSummary from '../../../components/OrderSummary';
import { useOrder } from '../../../context/OrderContext';
import StaffNavbar from '../../../components/StaffNavbar';
import { useNotification } from "@/context/NotificationContext";

export default function CreateOrderPage() {
    const router = useRouter();
    const params = useParams();
    const tableId = parseInt(params.id);
    const { createOrder, tables, getOrderByTableId, addItemsToOrder, generateBill, cancelOrder, removeItemFromOrder } = useOrder();
    const { showToast, showDialog } = useNotification();

    const [activeCategory, setActiveCategory] = useState('hot-beverages');
    const [selectedItems, setSelectedItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isPlacingOrder, setIsPlacingOrder] = useState(false);

    // Existing Order State
    const [existingOrder, setExistingOrder] = useState(null);

    const table = tables.find(t => t.id === tableId);

    useEffect(() => {
        // Check auth
        const token = localStorage.getItem('staffToken');
        if (!token) {
            router.push('/business/staff/login');
            return;
        }

        // Check if table exists
        if (!table) {
            router.push('/business/staff/home');
            return;
        }

        // If occupied, fetch existing order
        if (table.status === 'occupied') {
            const order = getOrderByTableId(tableId);
            if (order) {
                setExistingOrder(order);
            }
        }
    }, [table, router, getOrderByTableId, tableId]);

    const handleAddItem = (item) => {
        setSelectedItems(prev => {
            const existingIndex = prev.findIndex(i => i.id === item.id);
            if (existingIndex >= 0) {
                // Increase quantity immutably
                const updated = [...prev];
                updated[existingIndex] = {
                    ...updated[existingIndex],
                    quantity: updated[existingIndex].quantity + 1
                };
                return updated;
            } else {
                // Add new item
                return [...prev, { ...item, quantity: 1 }];
            }
        });
    };

    const handleQuantityChange = (index, newQuantity) => {
        if (newQuantity <= 0) {
            handleRemoveItem(index);
            return;
        }
        setSelectedItems(prev => {
            const updated = [...prev];
            updated[index] = { ...updated[index], quantity: newQuantity };
            return updated;
        });
    };

    const handleRemoveItem = (index) => {
        setSelectedItems(prev => prev.filter((_, i) => i !== index));
    };

    const handleRemoveExistingItem = async (filteredIndex) => {
        if (!existingOrder) return;

        const confirmed = await showDialog({
            title: "Remove Item",
            message: "Remove this item from the existing order?",
            confirmText: "Remove",
            cancelText: "Cancel",
            type: "warning",
        });

        if (confirmed) {
            // Find the actual item index in the full list
            const visibleItems = existingOrder.items.filter(i => i.status !== 'removed');
            const targetItem = visibleItems[filteredIndex];

            if (targetItem) {
                const realIndex = existingOrder.items.indexOf(targetItem);
                if (realIndex !== -1) {
                    await removeItemFromOrder(existingOrder.orderId, realIndex);
                    showToast("Item removed", "success");
                    // Refresh existing order
                    const updatedOrder = getOrderByTableId(tableId);
                    setExistingOrder(updatedOrder);
                }
            }
        }
    };

    const handlePlaceOrder = async () => {
        if (selectedItems.length === 0) return;

        setIsPlacingOrder(true);

        try {
            if (existingOrder) {
                // UPDATE EXISTING ORDER
                await addItemsToOrder(existingOrder.orderId, selectedItems);
                showToast("Order updated successfully", "success");
                setSelectedItems([]); // Clear selection
                // Refresh existing order
                const updatedOrder = getOrderByTableId(tableId);
                setExistingOrder(updatedOrder);
            } else {
                // CREATE NEW ORDER
                await createOrder(tableId, selectedItems);
                router.push('/business/staff/home');
            }
        } catch (error) {
            console.error("Order action failed:", error);
            showToast("Failed to update order.", "error");
        } finally {
            setIsPlacingOrder(false);
        }
    };

    const handleGenerateBill = () => {
        if (!existingOrder) return;
        generateBill(tableId);
        router.push(`/business/staff/table/${table.id}/bill`);
    };

    const handleCancelOrder = async () => {
        if (!existingOrder) return;
        const confirmed = await showDialog({
            title: "Cancel Order",
            message: "Are you sure you want to cancel this entire order? This cannot be undone.",
            confirmText: "Cancel Order",
            cancelText: "Keep Order",
            type: "danger",
        });
        if (confirmed) {
            cancelOrder(existingOrder.orderId);
            showToast("Order cancelled", "success");
            router.push('/business/staff/home');
        }
    };

    const filteredItems = searchQuery
        ? MENU_ITEMS.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : getItemsByCategory(activeCategory);

    const getSelectedQuantity = (itemId) => {
        const item = selectedItems.find(i => i.id === itemId);
        return item ? item.quantity : 0;
    };

    if (!table) {
        return null;
    }

    const isUpdating = !!existingOrder;

    return (
        <div className="min-h-screen bg-[#F9F9F9] text-gray-800">
            {/* Navbar */}
            <StaffNavbar />

            {/* Sub Header */}
            <div className="pt-6 pb-2">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => router.push('/business/staff/home')} // Always go home on back
                                className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-600 cursor-pointer"
                            >
                                <ArrowLeft className="w-6 h-6" />
                            </button>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">
                                    {isUpdating ? 'Update Order' : 'Create Order'}
                                </h1>
                                <p className="text-sm text-gray-500 mt-1">
                                    Table {table.tableNumber} {isUpdating && `• Order #${existingOrder?.orderId?.slice(-6) || ''}`}
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500">New Items Selected</p>
                            <p className="text-2xl font-bold text-[#C9A050]">
                                {selectedItems.reduce((sum, item) => sum + item.quantity, 0)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Menu */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Search Bar */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search menu items..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-100 rounded-xl focus:border-[#C9A050] focus:outline-none text-gray-700 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Category Tabs */}
                        {!searchQuery && (
                            <CategoryTabs
                                categories={MENU_CATEGORIES}
                                activeCategory={activeCategory}
                                onCategoryChange={setActiveCategory}
                            />
                        )}

                        {/* Menu Items Grid */}
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="w-2 h-8 bg-[#C9A050] rounded-full"></span>
                                {searchQuery
                                    ? `Search Results (${filteredItems.length})`
                                    : MENU_CATEGORIES.find(c => c.id === activeCategory)?.name
                                }
                            </h2>
                            {filteredItems.length === 0 ? (
                                <div className="text-center py-16">
                                    <p className="text-gray-400 text-lg">No items found</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                                    {filteredItems.map(item => (
                                        <MenuItem
                                            key={item.id}
                                            item={item}
                                            onAdd={handleAddItem}
                                            selectedQuantity={getSelectedQuantity(item.id)}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="lg:col-span-1">
                        <OrderSummary
                            items={selectedItems}
                            existingItems={existingOrder?.items?.filter(i => i.status !== 'removed') || []}
                            onQuantityChange={handleQuantityChange}
                            onRemoveItem={handleRemoveItem}
                            onRemoveExistingItem={handleRemoveExistingItem}
                            onPlaceOrder={handlePlaceOrder}
                            onGenerateBill={handleGenerateBill}
                            onCancelOrder={handleCancelOrder}
                            isPlacingOrder={isPlacingOrder}
                            tableNumber={table.tableNumber}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
