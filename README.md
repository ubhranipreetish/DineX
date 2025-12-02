# DineX – Restaurant Ordering & Table Booking System

DineX is a full-stack platform designed to simplify restaurant operations and enhance the dining experience for customers.  
It offers seamless **table booking**, **menu browsing** for **customers** and a **restaurant dashboard** to manage all offline orders in one place for **restaurants**.

---

## Live Demo Links

| Service | URL |
|--------|-----|
| **Frontend (Next.js – Vercel)** | https://dine-x-mu.vercel.app/ |
| **Backend API (Express – Render)** | https://dinex-24s9.onrender.com/ |


## Project Overview

### Problem Statement  
Restaurants often face difficulty managing **walk-in customers** and **table availability** in real time.  
Customers also struggle with inefficient booking systems, delayed order handling, and lack of transparency.

### DineX Solution  
DineX solves these problems by offering:

- A unified platform for **table booking + menu browsing**
- A powerful restaurant dashboard for **managing offline orders**
- Secure authentication system for both customers and restaurants


### Technologies Used

- **Frontend:** Next.js, React, TailwindCSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT (JSON Web Token)  
- **Hosting:**  
  - Frontend → Vercel  
  - Backend → Render  
  - DB → MongoDB Atlas  


## Key Features

### Authentication & Authorization
- JWT-based secure login/signup  
- Separate roles: **Customer** and **Restaurant**  

### Customer Interface
- Browse restaurants  
- View menus  
- Book tables  
- View their order history  

### Restaurant Interface
- Manage offline orders (CRUD)   
- Update order status (Accepted / Preparing / Ready / Completed)  
- Add walk-in customer orders  

### Searching, Filtering & Sorting
- Search restaurants by name or dish  
- Filter by cuisine, cost, rating, veg/non-veg  
- Sort by popularity, rating  
- Pagination for faster loading  

### Hosting
- Client, server, and database are fully deployed  
- Live URLs for easy access


## API Overview

Below are some core REST API routes:

| Endpoint | Method | Description | Access |
|----------|--------|-------------|--------|
| `/api/auth/signup` | POST | Register new user | Public |
| `/api/auth/login` | POST | Login user | Public |
| `/api/restaurants` | GET | Fetch all restaurants with filtering | Public |
| `/api/restaurants/:id` | GET | Get details of one restaurant | Public |
| `/api/bookings` | POST | Create new booking | Customer |
| `/api/bookings/user/:userId` | GET | Get user's booking | Customer |
| `/api/bookings/:id` | GET | Get single booking | Customer |
| `/api/bookings/:id` | PATCH | Update a booking | Customer |
| `/api/bookings/:id/cancel` | PATCH | Cancel a booking | Customer |
| `/api/bookings/:id` | DELETE | Delete cancelled booking | Customer |
| `/api/business/register` | POST | Register new restaurant owner | Business Owner |
| `/api/business/login` | POST | Login restaurant owner | Business Owner |
| `/api/business/profile` | GET | Get owner profile & restaurant data | Business Owner |
| `/api/business/restaurant` | PUT | Update restaurant details | Business Owner |
| `/api/business/staff` | GET | Get all staff members | Business Owner |
| `/api/business/staff` | POST | Add new staff members | Business Owner |
| `/api/business/staff/:staffId` | PUT | Update staff member | Business Owner |
| `/api/business/staff/:staffId` | DELETE | Remove staff member | Business Owner |
| `/api/business/staff/login` | POST | Login staff | Staff |
| `/api/business/staff/profile` | GET | Get Staff Profile | Staff |
| `/api/orders` | POST | Create new order | Staff |
| `/api/orders` | GET | Get all orders | Staff |
| `/api/orders/ongoing` | GET | Get ongoing orders | Staff |
| `/api/orders/table/:tableNo` | GET | Get order for specific table | Staff |
| `/api/orders/:orderId` | GET | Get specific order details | Staff |
| `/api/orders/:orderId/items` | POST | Add items to order | Staff |
| `/api/orders/:orderId/items/:itemIndex` | PATCH | Update order item (quantity/status) | Staff |
| `/api/orders/:orderId/items/:itemIndex` | DELETE | Update order item (quantity/status) | Staff |
| `/api/orders/:orderId/complete` | PATCH | Mark order as complete | Staff |
| `/api/orders/:orderId/cancel` | PATCH | Cancel order | Staff |
| `/api/orders/:orderId` | DELETE | Delete order | Staff |

Total Endpoints: 31

By Category:
Customer Auth: 2 endpoints
Restaurants: 2 endpoints
Bookings: 6 endpoints
Business Auth: 3 endpoints
Business Dashboard: 6 endpoints
Orders: 12 endpoints

By HTTP Method:
GET: 11 endpoints
POST: 7 endpoints
PUT: 2 endpoints
PATCH: 6 endpoints
DELETE: 4 endpoints