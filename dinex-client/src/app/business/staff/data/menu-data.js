// Dummy menu data with categories and items
export const MENU_CATEGORIES = [
    { id: 'hot-beverages', name: 'Hot Beverages', icon: '☕' },
    { id: 'appetizers', name: 'Appetizers', icon: '🥟' },
    { id: 'main-course', name: 'Main Course', icon: '🍛' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'beverages', name: 'Beverages', icon: '🥤' },
];

export const MENU_ITEMS = [
    // Hot Beverages
    { id: 1, name: 'Espresso', category: 'hot-beverages', price: 120, isVeg: true, image: '☕' },
    { id: 2, name: 'Cappuccino', category: 'hot-beverages', price: 150, isVeg: true, image: '☕' },
    { id: 3, name: 'Latte', category: 'hot-beverages', price: 160, isVeg: true, image: '☕' },
    { id: 4, name: 'Americano', category: 'hot-beverages', price: 130, isVeg: true, image: '☕' },
    { id: 5, name: 'Hot Chocolate', category: 'hot-beverages', price: 140, isVeg: true, image: '☕' },
    { id: 6, name: 'Masala Chai', category: 'hot-beverages', price: 80, isVeg: true, image: '☕' },
    { id: 7, name: 'Green Tea', category: 'hot-beverages', price: 100, isVeg: true, image: '☕' },
    { id: 8, name: 'Filter Coffee', category: 'hot-beverages', price: 90, isVeg: true, image: '☕' },

    // Appetizers
    { id: 9, name: 'Paneer Tikka', category: 'appetizers', price: 280, isVeg: true, image: '🧀' },
    { id: 10, name: 'Veg Spring Rolls', category: 'appetizers', price: 220, isVeg: true, image: '🥟' },
    { id: 11, name: 'Chicken Wings', category: 'appetizers', price: 320, isVeg: false, image: '🍗' },
    { id: 12, name: 'Fish Fingers', category: 'appetizers', price: 340, isVeg: false, image: '🐟' },
    { id: 13, name: 'Hara Bhara Kabab', category: 'appetizers', price: 240, isVeg: true, image: '🥬' },
    { id: 14, name: 'Cheese Balls', category: 'appetizers', price: 260, isVeg: true, image: '🧀' },
    { id: 15, name: 'Crispy Corn', category: 'appetizers', price: 200, isVeg: true, image: '🌽' },
    { id: 16, name: 'Chicken Satay', category: 'appetizers', price: 350, isVeg: false, image: '🍢' },
    { id: 17, name: 'Mushroom Tikka', category: 'appetizers', price: 270, isVeg: true, image: '🍄' },
    { id: 18, name: 'Prawn Tempura', category: 'appetizers', price: 420, isVeg: false, image: '🦐' },

    // Main Course
    { id: 19, name: 'Butter Chicken', category: 'main-course', price: 380, isVeg: false, image: '🍗' },
    { id: 20, name: 'Paneer Butter Masala', category: 'main-course', price: 320, isVeg: true, image: '🧀' },
    { id: 21, name: 'Dal Makhani', category: 'main-course', price: 240, isVeg: true, image: '🍲' },
    { id: 22, name: 'Chicken Biryani', category: 'main-course', price: 420, isVeg: false, image: '🍛' },
    { id: 23, name: 'Veg Biryani', category: 'main-course', price: 340, isVeg: true, image: '🍛' },
    { id: 24, name: 'Palak Paneer', category: 'main-course', price: 300, isVeg: true, image: '🥬' },
    { id: 25, name: 'Kadhai Chicken', category: 'main-course', price: 400, isVeg: false, image: '🍗' },
    { id: 26, name: 'Mutton Rogan Josh', category: 'main-course', price: 480, isVeg: false, image: '🍖' },
    { id: 27, name: 'Malai Kofta', category: 'main-course', price: 310, isVeg: true, image: '🥔' },
    { id: 28, name: 'Fish Curry', category: 'main-course', price: 440, isVeg: false, image: '🐟' },
    { id: 29, name: 'Chole Bhature', category: 'main-course', price: 220, isVeg: true, image: '🫓' },
    { id: 30, name: 'Chicken Korma', category: 'main-course', price: 390, isVeg: false, image: '🍗' },
    { id: 31, name: 'Naan (Plain)', category: 'main-course', price: 40, isVeg: true, image: '🫓' },
    { id: 32, name: 'Garlic Naan', category: 'main-course', price: 60, isVeg: true, image: '🫓' },
    { id: 33, name: 'Butter Naan', category: 'main-course', price: 50, isVeg: true, image: '🫓' },
    { id: 34, name: 'Jeera Rice', category: 'main-course', price: 140, isVeg: true, image: '🍚' },
    { id: 35, name: 'Steamed Rice', category: 'main-course', price: 100, isVeg: true, image: '🍚' },

    // Desserts
    { id: 36, name: 'Gulab Jamun', category: 'desserts', price: 120, isVeg: true, image: '🍡' },
    { id: 37, name: 'Rasmalai', category: 'desserts', price: 140, isVeg: true, image: '🥛' },
    { id: 38, name: 'Ice Cream (Vanilla)', category: 'desserts', price: 100, isVeg: true, image: '🍨' },
    { id: 39, name: 'Ice Cream (Chocolate)', category: 'desserts', price: 100, isVeg: true, image: '🍨' },
    { id: 40, name: 'Brownie with Ice Cream', category: 'desserts', price: 180, isVeg: true, image: '🍰' },
    { id: 41, name: 'Kulfi', category: 'desserts', price: 90, isVeg: true, image: '🍦' },
    { id: 42, name: 'Fruit Custard', category: 'desserts', price: 110, isVeg: true, image: '🍮' },
    { id: 43, name: 'Gajar Halwa', category: 'desserts', price: 130, isVeg: true, image: '🥕' },
    { id: 44, name: 'Cheesecake', category: 'desserts', price: 200, isVeg: true, image: '🍰' },

    // Beverages
    { id: 45, name: 'Fresh Lime Soda', category: 'beverages', price: 80, isVeg: true, image: '🍋' },
    { id: 46, name: 'Mango Lassi', category: 'beverages', price: 120, isVeg: true, image: '🥭' },
    { id: 47, name: 'Sweet Lassi', category: 'beverages', price: 100, isVeg: true, image: '🥛' },
    { id: 48, name: 'Fresh Orange Juice', category: 'beverages', price: 110, isVeg: true, image: '🍊' },
    { id: 49, name: 'Watermelon Juice', category: 'beverages', price: 100, isVeg: true, image: '🍉' },
    { id: 50, name: 'Cold Coffee', category: 'beverages', price: 140, isVeg: true, image: '☕' },
    { id: 51, name: 'Mojito (Virgin)', category: 'beverages', price: 150, isVeg: true, image: '🍹' },
    { id: 52, name: 'Iced Tea', category: 'beverages', price: 100, isVeg: true, image: '🧃' },
    { id: 53, name: 'Coca Cola', category: 'beverages', price: 60, isVeg: true, image: '🥤' },
    { id: 54, name: 'Sprite', category: 'beverages', price: 60, isVeg: true, image: '🥤' },
];

// Helper function to get items by category
export const getItemsByCategory = (categoryId) => {
    return MENU_ITEMS.filter(item => item.category === categoryId);
};

// Tax rates
export const TAX_RATES = {
    CGST: 2.5,
    SGST: 2.5,
    total: 5.0
};
