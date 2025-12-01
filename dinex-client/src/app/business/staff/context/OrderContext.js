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

    const createOrder = async (tableId, items, guests = 0) => {
        try {
            const token = localStorage.getItem('staffToken');
            const res = await API.post('/api/orders', {
                tableNo: tableId,
                items: items.map(i => ({
                    itemId: i.id,
                    name: i.name,
                    price: i.price,
                    quantity: i.quantity
                }))
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            const newOrder = res.data.order;

            // Update local state
            setOrders(prev => ({ ...prev, [newOrder.orderId]: newOrder }));

            // Update table state (optimistic or based on response)
            setTables(prev => prev.map(t =>
                t.id === tableId
                    ? {
                        ...t,
                        status: 'occupied',
                        orderId: newOrder.orderId,
                        currentBill: newOrder.totalAmount,
                        seatedAt: newOrder.createdAt,
                        guests: guests
                    }
                    : t
            ));

            return newOrder.orderId;
        } catch (error) {
            console.error('Error creating order:', error);
            throw error;
        }
    };

    const addItemsToOrder = async (orderId, newItems) => {
        try {
            const token = localStorage.getItem('staffToken');
            const res = await API.post(`/api/orders/${orderId}/items`, {
                items: newItems.map(i => ({
                    itemId: i.id,
                    name: i.name,
                    price: i.price,
                    quantity: i.quantity
                }))
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            const updatedOrder = res.data.order;

            setOrders(prev => ({ ...prev, [orderId]: updatedOrder }));

            // Update table bill
            setTables(prev => prev.map(t =>
                t.orderId === orderId
                    ? { ...t, currentBill: updatedOrder.totalAmount }
                    : t
            ));
        } catch (error) {
            console.error('Error adding items:', error);
        }
    };

    const updateItemStatus = (orderId, itemId, status) => {
        // Placeholder for item status update if backend supports it
        // For now, update local state
        setOrders(prev => {
            const order = prev[orderId];
            if (!order) return prev;

            const updatedItems = order.items.map(item =>
                item.id === itemId || item.itemId === itemId
                    ? { ...item, status }
                    : item
            );

            return {
                ...prev,
                [orderId]: { ...order, items: updatedItems }
            };
        });
    };

    const removeItemFromOrder = async (orderId, itemIndex) => {
        try {
            const token = localStorage.getItem('staffToken');
            const res = await API.delete(`/api/orders/${orderId}/items/${itemIndex}`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            const updatedOrder = res.data.order;

            setOrders(prev => ({ ...prev, [orderId]: updatedOrder }));

            // Update table bill
            setTables(prev => prev.map(t =>
                t.orderId === orderId
                    ? { ...t, currentBill: updatedOrder.totalAmount }
                    : t
            ));
        } catch (error) {
            console.error('Error removing item:', error);
        }
    };

    const completeOrder = (orderId) => {
        return orderId;
    };

    const markAsPaid = async (orderId) => {
        try {
            const token = localStorage.getItem('staffToken');
            await API.patch(`/api/orders/${orderId}/complete`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });

            // Remove from active orders
            setOrders(prev => {
                const updated = { ...prev };
                delete updated[orderId];
                return updated;
            });

            // Reset table
            const order = orders[orderId];
            if (order) {
                setTables(prev => prev.map(t =>
                    t.id === order.tableNo // Use tableNo from order
                        ? { ...t, status: 'free', orderId: null, currentBill: 0, seatedAt: null, guests: 0 }
                        : t
                ));
            }
        } catch (error) {
            console.error('Error completing order:', error);
        }
    };

    const cancelOrder = async (orderId) => {
        try {
            const token = localStorage.getItem('staffToken');
            await API.patch(`/api/orders/${orderId}/cancel`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });

            // Remove from active orders
            setOrders(prev => {
                const updated = { ...prev };
                delete updated[orderId];
                return updated;
            });

            // Reset table
            const order = orders[orderId];
            if (order) {
                setTables(prev => prev.map(t =>
                    t.id === order.tableNo
                        ? { ...t, status: 'free', orderId: null, currentBill: 0, seatedAt: null, guests: 0 }
                        : t
                ));
            }
        } catch (error) {
            console.error('Error cancelling order:', error);
        }
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