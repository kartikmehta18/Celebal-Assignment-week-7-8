# MERN E-commerce Project Setup Guide

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (Local installation or MongoDB Atlas cloud database)

## Quick Setup

### 1. Install Dependencies
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### 2. Database Setup (Choose one option)

#### Option A: MongoDB Atlas (Recommended - Cloud Database)
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account and cluster
3. Get your connection string
4. Update `backend/.env` file:
   ```
   DB_URI=mongodb+srv://username:password@cluster0.mongodb.net/ecommerce?retryWrites=true&w=majority
   ```

#### Option B: Local MongoDB Installation
1. Download MongoDB Community Server from [MongoDB Downloads](https://www.mongodb.com/try/download/community)
2. Install MongoDB
3. Start MongoDB service
4. The current `.env` is configured for local MongoDB: `mongodb://localhost:27017/ecommerce`

### 3. Environment Variables
Update the `backend/.env` file with your configurations:
```
PORT=4000
DB_URI=your_mongodb_connection_string
STRIPE_API_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=30d
COOKIE_EXPIRE=30d
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

### 4. Run the Application

#### Development Mode (Recommended)
```bash
# Terminal 1: Start backend server
npm run dev

# Terminal 2: Start frontend development server
cd frontend
npm start
```

#### Production Mode
```bash
# Start backend server
npm start

# Build and serve frontend (for production)
cd frontend
npm run build
```

## Application URLs
- Backend API: http://localhost:4000
- Frontend: http://localhost:3000

## Features
- User authentication and authorization
- Product management
- Shopping cart functionality
- Order management
- Payment integration with Stripe
- Admin dashboard
- Image upload with Cloudinary

## Troubleshooting

### Database Connection Issues
- Make sure MongoDB is running (if using local installation)
- Check your MongoDB Atlas connection string (if using cloud)
- Verify network connectivity

### Port Conflicts
- Change the PORT in `.env` file if 4000 is already in use
- Make sure frontend port 3000 is available

### Payment Issues
- Update Stripe keys in `.env` file
- Test with Stripe test cards: 4242424242424242

## Getting Started
1. Register as a user on the frontend
2. Browse products
3. Add products to cart
4. Create admin user to access admin panel
5. Manage products, orders, and users through admin dashboard
