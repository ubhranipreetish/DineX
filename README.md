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
- Manage menu items (CRUD)  
- Manage offline orders  
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
| `/api/orders` | POST | Place new order | Restaurant |
| `/api/orders` | GET | View all orders | Restaurant |
| `/api/orders/:id` | GET | View order details | Restaurant |
| `/api/orders/:id` | PUT | Update order status | Restaurant |
| `/api/orders/:id` | DELETE | Delete an order | Restaurant |

