"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { API } from '@/utils/api';

const OrderContext = createContext();

export const useOrder = () => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error('useOrder must be used within OrderProvider');
    }
    return context;
};

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState({});
    const [tables, setTables] = useState([]);
    const [restaurant, setRestaurant] = useState(null);

    // Initialize from localStorage and fetch restaurant data
    useEffect(() => {
        const savedOrders = localStorage.getItem('dinex_orders');
        const savedTables = localStorage.getItem('dinex_tables');

        if (savedOrders) {
            setOrders(JSON.parse(savedOrders));
        }

        // Fetch restaurant profile to get table count
        const fetchRestaurantData = async () => {
            try {
                const token = localStorage.getItem('staffToken');
                if (!token) return;

                const res = await API.get('/api/business/staff/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });

                const restaurantData = res.data;
                console.log('Restaurant Data from API:', restaurantData);
                setRestaurant(restaurantData);

                // Ensure tables count is a number
                const totalTables = parseInt(restaurantData.tables) || 20;

                // Check if we have saved tables with correct count
                if (savedTables) {
                    const parsedTables = JSON.parse(savedTables);
                    if (parsedTables.length === totalTables) {
                        setTables(parsedTables);
                        return;
                    }
                }

                // Initialize tables based on restaurant data
                const initialTables = Array.from({ length: totalTables }, (_, i) => ({
                    id: i + 1,
                    tableNumber: i + 1,
                    status: 'free', // free or occupied (removed bill_pending)
                    currentBill: 0,
                    guests: 0,
                    orderId: null,
                    seatedAt: null
                }));
                setTables(initialTables);
                localStorage.setItem('dinex_tables', JSON.stringify(initialTables));
            } catch (error) {
                console.error('Error fetching restaurant data:', error);
                // Fallback to saved tables or default 20 tables
                if (savedTables) {
                    setTables(JSON.parse(savedTables));
                } else {
                    const defaultTables = Array.from({ length: 20 }, (_, i) => ({
                        id: i + 1,
                        tableNumber: i + 1,
                        status: 'free',
                        currentBill: 0,
                        guests: 0,
                        orderId: null,
                        seatedAt: null
                    }));
                    setTables(defaultTables);
                    localStorage.setItem('dinex_tables', JSON.stringify(defaultTables));
                }
            }
        };

        fetchRestaurantData();
    }, []);

    // Save to localStorage whenever orders change
    useEffect(() => {
        if (Object.keys(orders).length > 0) {
            localStorage.setItem('dinex_orders', JSON.stringify(orders));
        }
    }, [orders]);

    // Save to localStorage whenever tables change
    useEffect(() => {
        if (tables.length > 0) {
            localStorage.setItem('dinex_tables', JSON.stringify(tables));
        }
    }, [tables]);

    const createOrder = (tableId, items, guests = 0) => {
        const orderId = `ORD_${Date.now()}`;
        const newOrder = {
            id: orderId,
            tableId,
            items: items.map(item => ({
                ...item,
                status: 'preparing', // preparing, served, removed
                addedAt: new Date().toISOString()
            })),
            createdAt: new Date().toISOString(),
            status: 'active', // active, completed, cancelled
        };

        setOrders(prev => ({ ...prev, [orderId]: newOrder }));

        // Update table status
        setTables(prev => prev.map(table =>
            table.id === tableId
                ? {
                    ...table,
                    status: 'occupied',
                    orderId,
                    guests,
                    seatedAt: new Date().toISOString(),
                    currentBill: calculateBill(items).total
                }
                : table
        ));

        return orderId;
    };

    const addItemsToOrder = (orderId, newItems) => {
        setOrders(prev => {
            const order = prev[orderId];
            if (!order) return prev;

            const updatedItems = [
                ...order.items,
                ...newItems.map(item => ({
                    ...item,
                    status: 'preparing',
                    addedAt: new Date().toISOString()
                }))
            ];

            const updatedOrder = { ...order, items: updatedItems };

            // Update table bill
            const tableId = order.tableId;
            setTables(tables => tables.map(table =>
                table.id === tableId
                    ? { ...table, currentBill: calculateBill(updatedItems).total }
                    : table
            ));

            return { ...prev, [orderId]: updatedOrder };
        });
    };

    const updateItemStatus = (orderId, itemId, status) => {
        setOrders(prev => {
            const order = prev[orderId];
            if (!order) return prev;

            const updatedItems = order.items.map(item =>
                item.id === itemId && item.addedAt === itemId.split('_')[1]
                    ? { ...item, status }
                    : item
            );

            return {
                ...prev,
                [orderId]: { ...order, items: updatedItems }
            };
        });
    };

    const removeItemFromOrder = (orderId, itemIndex) => {
        setOrders(prev => {
            const order = prev[orderId];
            if (!order) return prev;

            const updatedItems = order.items.filter((_, index) => index !== itemIndex);
            const updatedOrder = { ...order, items: updatedItems };

            // Update table bill
            const tableId = order.tableId;
            setTables(tables => tables.map(table =>
                table.id === tableId
                    ? { ...table, currentBill: calculateBill(updatedItems).total }
                    : table
            ));

            return { ...prev, [orderId]: updatedOrder };
        });
    };

    const completeOrder = (orderId) => {
        // This function now goes directly to marking as paid
        // No intermediate "bill_pending" state
        return orderId;
    };

    const markAsPaid = (orderId) => {
        const order = orders[orderId];
        if (!order) return;

        // Archive the order
        setOrders(prev => {
            const updated = { ...prev };
            delete updated[orderId];
            return updated;
        });

        // Reset table to free
        setTables(prev => prev.map(table =>
            table.id === order.tableId
                ? {
                    ...table,
                    status: 'free',
                    currentBill: 0,
                    guests: 0,
                    orderId: null,
                    seatedAt: null
                }
                : table
        ));
    };

    const cancelOrder = (orderId) => {
        const order = orders[orderId];
        if (!order) return;

        // Remove the order
        setOrders(prev => {
            const updated = { ...prev };
            delete updated[orderId];
            return updated;
        });

        // Reset table to free
        setTables(prev => prev.map(table =>
            table.id === order.tableId
                ? {
                    ...table,
                    status: 'free',
                    currentBill: 0,
                    guests: 0,
                    orderId: null,
                    seatedAt: null
                }
                : table
        ));
    };

    const calculateBill = (items) => {
        const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
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

    const getOrderByTableId = (tableId) => {
        const table = tables.find(t => t.id === tableId);
        if (!table || !table.orderId) return null;
        return orders[table.orderId];
    };

    const getActiveOrders = () => {
        return Object.values(orders).filter(order => order.status === 'active');
    };

    const value = {
        orders,
        tables,
        restaurant,
        createOrder,
        addItemsToOrder,
        updateItemStatus,
        removeItemFromOrder,
        completeOrder,
        markAsPaid,
        cancelOrder,
        calculateBill,
        getOrderByTableId,
        getActiveOrders
    };

    return (
        <OrderContext.Provider value={value}>
            {children}
        </OrderContext.Provider>
    );
};
