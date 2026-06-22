<h1 align="center">🐾 Veterinary Booking System</h1>

<p align="center">
  A Full Stack Web Application to streamline veterinary appointment booking and management.
</p>

---

## 🌐 Live Demo

### 💻 Frontend (User Portal)

- https://veterinary-booking-system.vercel.app
- https://veterinary-booking-system-qua4acyr3-abdisamad-tawanes-projects.vercel.app

### 🛠️ Admin Dashboard

- https://veterinary-booking-system-admin.vercel.app
- https://veterinary-booking-system-admin-poks3kc43.vercel.app

### 🔧 Backend API

- https://veterinary-booking-system.onrender.com

🔐 Admin & vet dashboards require authentication.

---

## 🚀 Features

### 🧑‍⚕️ Users (Animal Owners)

- 📝 Register & Login
- 🐶 View veterinarians
- 📅 Book appointments
- 🤖 AI Chatbot consultation
- 📖 View booking history

### 🩺 Veterinarians

- 🔐 Secure login
- 🗓️ Manage appointments
- 📋 View bookings
- 💰 Track earnings

### 🛠️ Admin

- 🔐 Admin authentication
- ➕ Add veterinarians
- 📊 System monitoring
- 📅 Appointment management
- 📈 Reports generation

---

## 🛠️ Tech Stack

### 💻 Frontend

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)

---

### 🛠️ Admin Panel

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Toastify](https://img.shields.io/badge/React--Toastify-FF6B6B?style=for-the-badge)

---

### 🔧 Backend API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=white)
![M-Pesa](https://img.shields.io/badge/M--Pesa-00A859?style=for-the-badge)

---

### 🚀 Deployment

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)

---

## 📁 Project Structure

```bash
/veterinary-booking-system
├── frontend/   # User portal (Vite + React)
├── admin/      # Admin dashboard (Vite + React)
└── backend/    # REST API (Node.js + Express + MongoDB)
```

---

## ⚙️ Environment Variables

### 🔧 Backend `.env`

```env
MONGODB_URL=mongodb+srv://your_cluster_url

PORT=4000
JWT_SECRET=your_secret_key

# Cloudinary
CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret

# Admin
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=admin1234

# Payments
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
CURRENCY=INR

# M-Pesa
MPESA_CONSUMER_KEY=your_key
MPESA_CONSUMER_SECRET=your_secret
MPESA_SHORTCODE=your_shortcode
MPESA_PASSKEY=your_passkey
MPESA_CALLBACK_URL=https://yourdomain.com/mpesa/callback
```

---

### 💻 Frontend `.env`

```env
VITE_BACKEND_URL=http://localhost:4000
```

### 🛠️ Admin `.env`

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## 🚀 Installation Guide

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/veterinary-booking-system.git
cd veterinary-booking-system
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs at:

```
http://localhost:4000
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

### 4️⃣ Admin Panel Setup

```bash
cd admin
npm install
npm run dev
```

Admin runs at:

```
http://localhost:5174
```

---

## 🔐 Authentication System

- JWT-based authentication
- Role-based access (User / Vet / Admin)
- Protected routes for dashboards

---

## 🧠 System Architecture

- Users book appointments
- Admin manages system
- Vets handle schedules
- Backend handles API + DB + authentication
- Payments via Razorpay & M-Pesa

---

## 👨‍💻 Author

**Abdisamad Abass Tawane**

---

## 📜 License

This project is for educational and portfolio purposes.
