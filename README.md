# 🎓 Edemy LMS – A Modern Learning Management System

**Edemy LMS** is a full-stack, original Learning Management System designed to empower educators and students with a seamless digital learning experience.  
Built with the **MERN** stack and **Clerk** for authentication, Edemy offers smooth course management, secure payments, and a responsive UI — all custom-built without third-party LMS templates.

---

## 🌐 Live Demo

👉 [Click here to explore Edemy](https://edemy-frontend-three.vercel.app/)

---

## 🚀 Tech Stack

### 🖥️ Frontend:
- ⚛️ **React** (Vite)
- 🔀 **React Router DOM** – Client-side routing
- 🔔 **React Hot Toast** – Toast notifications
- 📝 **Quill** – Rich text editor
- 🔌 **Axios** – API calls
- 📊 **RC Progress** – Progress indicators
- ▶️ **React YouTube** – Embedded video player
- 👤 **Clerk** – Authentication & user management

### 🧠 Backend:
- 🧠 **Node.js & Express.js** – REST API backend
- 🛢️ **MongoDB & Mongoose** – NoSQL database
- ☁️ **Cloudinary** – Media storage
- 📂 **Multer** – File upload handler
- 💸 **Stripe** – Payment gateway
- 🌐 **CORS** – Cross-origin support
- 🔐 **Dotenv** – Environment variable management
- 🚀 **Nodemon** – Dev runtime

---

## 🌟 Features

✅ Clerk-based secure authentication (Signup/Login with role-based access)  
✅ Course management (Create, edit, delete, enroll)  
✅ Embedded video lectures (YouTube + Cloudinary)  
✅ Real-time progress tracking  
✅ Educator dashboard with course analytics  
✅ Stripe-powered payment integration  
✅ Responsive mobile-first UI (Tailwind CSS)  
✅ Clean, scalable folder structure & readable code  

---

## ⚙️ Installation & Setup
Follow the steps below to run the Edemy - EdTech Platform locally on your machine.

### ⚙️ Steps to run locally

```bash
1️⃣ Clone the repository
git clone https://github.com/zohaibakhtar336/Edemy-EdTech-Platform.git
cd Edemy-EdTech-Platform

2️⃣ Install Dependencies
✅ Frontend Setup:
cd client
npm install
npm run dev

✅ Backend Setup:
cd server
npm install
npm run server

3️⃣ Setup Environment Variables
Create a .env file in both the client/ and server/ directories and add the required credentials.

✅ .env Example for Frontend (client/.env)
VITE_BACKEND_URL=http://localhost:5000
VITE_CURRENCY=$
VITE_CLERK_PUBLISHABLE_KEY=YOUR_CLERK_PUBLISHABLE_KEY

✅ .env Example for Backend (server/.env)
PORT=5000

CURRENCY=USD

MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING

CLOUDINARY_NAME=YOUR_CLOUDINARY_NAME
CLOUDINARY_API_KEY=YOUR_CLOUDINARY_API_KEY
CLOUDINARY_SECRET_KEY=YOUR_CLOUDINARY_SECRET

STRIPE_PUBLISHABLE_KEY=YOUR_STRIPE_PUBLISHABLE_KEY
STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET=YOUR_STRIPE_WEBHOOK_SECRET

CLERK_PUBLISHABLE_KEY=YOUR_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY=YOUR_CLERK_SECRET_KEY
CLERK_WEBHOOK_SECRET=YOUR_CLERK_WEBHOOK_SECRET

