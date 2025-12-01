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

export default function CreateOrderPage() {
    const router = useRouter();
    const params = useParams();
    const tableId = parseInt(params.id);
    const { createOrder, tables } = useOrder();

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

    const handlePlaceOrder = () => {
        if (selectedItems.length === 0) return;

        setIsPlacingOrder(true);

        // Simulate API call
        setTimeout(() => {
            const orderId = createOrder(tableId, selectedItems, 0);
            router.push(`/business/staff/table/${tableId}/manage`);
        }, 500);
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
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-gray-50">
            {/* Navbar */}
            <StaffNavbar />

            {/* Sub Header */}
            <div className="bg-white shadow-md border-b-2 border-orange-200">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => router.back()}
                                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                            >
                                <ArrowLeft className="w-6 h-6 text-gray-700" />
                            </button>
                            <div>
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                    Create Order
                                </h1>
                                <p className="text-sm text-gray-600 mt-1">Table {table.tableNumber}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-600">Items Selected</p>
                            <p className="text-2xl font-bold text-orange-600">
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
                        <div className="bg-white rounded-2xl shadow-lg p-4">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search menu items..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none text-gray-700"
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
                        <div className="bg-white rounded-3xl shadow-2xl p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">
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
