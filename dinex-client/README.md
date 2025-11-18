# 🍽️ DineX – Restaurant Ordering & Table Booking System

DineX is a full-stack platform designed to simplify restaurant operations and enhance the dining experience for customers.  
It offers seamless **table booking**, **menu browsing**, **online ordering**, and a **restaurant dashboard** to manage both online and offline orders — all in one place.

---

## 🚀 Live Demo Links

| Service | URL |
|--------|-----|
| **Frontend (Next.js – Vercel)** | https://dine-x-mu.vercel.app/ |
| **Backend API (Express – Render)** | https://dinex-24s9.onrender.com/ |
| **Database (MongoDB Atlas Dashboard)** | https://cloud.mongodb.com/v2/69099995b37fa62f6c38bf02#/metrics/replicaSet/69099b19d82f480839f1b994/explorer/test/users/find |


## 📌 Project Overview

### ❗ Problem Statement  
Restaurants often face difficulty managing **online orders**, **walk-in customers**, and **table availability** in real time.  
Customers also struggle with inefficient booking systems, delayed order handling, and lack of transparency.

### 🎯 DineX Solution  
DineX solves these problems by offering:

- A unified platform for **table booking + menu browsing**
- A powerful restaurant dashboard for **managing offline orders**
- Secure authentication system for both customers and restaurants


### 🧩 Technologies Used

- **Frontend:** Next.js, React, TailwindCSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT (JSON Web Token)  
- **Hosting:**  
  - Frontend → Vercel  
  - Backend → Render  
  - DB → MongoDB Atlas  


## ✨ Key Features

### 🔐 Authentication & Authorization
- JWT-based secure login/signup  
- Separate roles: **Customer** and **Restaurant**  

### 🍽️ Customer Interface
- Browse restaurants  
- View menus  
- Book tables  
- View their order history  

### 🧾 Restaurant Interface
- Manage menu items (CRUD)  
- Manage offline orders  
- Update order status (Accepted / Preparing / Ready / Completed)  
- View table bookings  
- Add walk-in customer orders  

### 🔍 Searching, Filtering & Sorting
- Search restaurants by name or dish  
- Filter by cuisine, cost, rating, veg/non-veg  
- Sort by popularity, rating  
- Pagination for faster loading  

### 🌐 Hosting
- Client, server, and database are fully deployed  
- Live URLs for easy access


## 🧪 API Overview

Below are some core REST API routes:

| Endpoint | Method | Description | Access |
|----------|--------|-------------|--------|
| `/api/auth/signup` | POST | Register new user (Customer/Restaurant) | Public |
| `/api/auth/login` | POST | Login user | Public |
| `/api/restaurants` | GET | Fetch all restaurants | Authenticated |
| `/api/restaurants/:id` | GET | Get details of one restaurant | Authenticated |
| `/api/restaurants` | POST | Create new restaurant | Restaurant |
| `/api/restaurants/:id` | PUT | Update restaurant | Restaurant |
| `/api/restaurants/:id` | DELETE | Delete restaurant | Restaurant |
| `/api/orders` | POST | Place new order | Customer |
| `/api/orders` | GET | View all orders | Restaurant |
| `/api/orders/:id` | PUT | Update order status | Restaurant |
| `/api/bookings` | POST | Create booking | Customer |
| `/api/bookings` | GET | View restaurant bookings | Restaurant |
| `/api/bookings/:id` | DELETE | Cancel a booking | Customer |


