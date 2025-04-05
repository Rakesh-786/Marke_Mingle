# Market Mingle E-commerce Platform

Market Mingle is a full-stack e-commerce platform built with React for the frontend and Node.js/Express for the backend.

## Project Structure

- `client/` - Frontend React application
- `server/` - Backend Express API

## Setup Instructions

### Backend Setup

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   CHAPA_URL=your_chapa_payment_url
   CHAPA_AUTH=your_chapa_auth_key
   ```

4. Start the server:
   ```
   npm start
   ```
   
   For development with auto-restart:
   ```
   npm run dev
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```
   cd client
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

## Deployment

### Backend Deployment to Vercel

1. Create a Vercel account at https://vercel.com/signup
2. Install Vercel CLI: `npm i -g vercel`
3. Login to Vercel: `vercel login`
4. Navigate to the server directory: `cd server`
5. Deploy to Vercel: `vercel`
6. Follow the prompts to complete the deployment
7. Set up environment variables in the Vercel dashboard

### Frontend Deployment

After deploying your backend, update the API URL in the frontend:

1. Open `client/src/config/api.js`
2. Replace the `BASE_URL` value with your new Vercel deployment URL
3. Deploy the frontend to Vercel or your preferred hosting service

## Features

- Browse products by category (Men, Women, Kids)
- View product details
- Add products to cart
- Checkout functionality
- Payment processing

## API Endpoints

- GET `/api/items` - Get all items
- POST `/api/items` - Add a new item
- PUT `/api/items/:id` - Update an item
- DELETE `/api/items/:id` - Delete an item
- POST `/api/payment` - Initialize payment
- GET `/api/payment/verify/:id` - Verify payment

## Author

Rakesh Kumar
