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
    const { createOrder, tables } = useOrder();
    const { showToast } = useNotification();

    const [activeCategory, setActiveCategory] = useState('hot-beverages');
    const [selectedItems, setSelectedItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isPlacingOrder, setIsPlacingOrder] = useState(false);

    const table = tables.find(t => t.id === tableId);

    useEffect(() => {
        // Check auth
        const token = localStorage.getItem('staffToken');
        if (!token) {
            router.push('/business/staff/login');
            return;
        }

        // Check if table exists and is free
        if (!table) {
            router.push('/business/staff/home');
            return;
        }
    }, [table, router]);

    const handleAddItem = (item) => {
        setSelectedItems(prev => {
            const existingIndex = prev.findIndex(i => i.id === item.id);
            if (existingIndex >= 0) {
                // Increase quantity
                const updated = [...prev];
                updated[existingIndex].quantity += 1;
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
            updated[index].quantity = newQuantity;
            return updated;
        });
    };

    const handleRemoveItem = (index) => {
        setSelectedItems(prev => prev.filter((_, i) => i !== index));
    };

    const handlePlaceOrder = async () => {
        if (selectedItems.length === 0) return;

        setIsPlacingOrder(true);

        try {
            const orderId = await createOrder(tableId, selectedItems);
            router.push(`/business/staff/table/${tableId}/manage`);
        } catch (error) {
            console.error("Order creation failed:", error);
            showToast("Failed to create order.", "error");
        } finally {
            setIsPlacingOrder(false);
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

    return (
        <div className="min-h-screen bg-[#FFF8E7] text-gray-800">
            {/* Navbar */}
            <StaffNavbar />

            {/* Sub Header */}
            <div className="pt-6 pb-2">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => router.back()}
                                className="p-2 hover:bg-amber-100 rounded-xl transition-colors text-amber-600"
                            >
                                <ArrowLeft className="w-6 h-6" />
                            </button>
                            <div>
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                                    Create Order
                                </h1>
                                <p className="text-sm text-gray-500 mt-1">Table {table.tableNumber}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500">Items Selected</p>
                            <p className="text-2xl font-bold text-amber-600">
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
                        <div className="bg-white rounded-2xl shadow-lg shadow-amber-100/50 p-4 border border-amber-50">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search menu items..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-100 rounded-xl focus:border-amber-400 focus:outline-none text-gray-700 transition-colors"
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
                        <div className="bg-white rounded-3xl shadow-xl shadow-amber-100/20 p-6 border border-amber-50">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <span className="w-2 h-8 bg-gradient-to-b from-amber-400 to-yellow-500 rounded-full"></span>
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
                            onQuantityChange={handleQuantityChange}
                            onRemoveItem={handleRemoveItem}
                            onPlaceOrder={handlePlaceOrder}
                            isPlacingOrder={isPlacingOrder}
                            tableNumber={table.tableNumber}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
