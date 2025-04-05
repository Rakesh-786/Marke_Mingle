# Market Mingle Backend

This is the backend server for Market Mingle e-commerce platform.

## Deployment Instructions for Vercel

1. Create a Vercel account at https://vercel.com/signup
2. Install Vercel CLI: `npm i -g vercel`
3. Login to Vercel: `vercel login`
4. Navigate to the server directory: `cd server`
5. Deploy to Vercel: `vercel`
6. Follow the prompts to complete the deployment
7. Set up environment variables in the Vercel dashboard:
   - MONGO_URI: Your MongoDB connection string
   - CHAPA_URL: Your Chapa payment URL (if using Chapa)
   - CHAPA_AUTH: Your Chapa authentication key (if using Chapa)

## Environment Variables

Create a `.env` file in the server directory with the following variables:

```
MONGO_URI=your_mongodb_connection_string
CHAPA_URL=your_chapa_payment_url
CHAPA_AUTH=your_chapa_auth_key
```

## Running Locally

1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. For development with auto-restart: `npm run dev`

## API Endpoints

- GET `/api/items` - Get all items
- POST `/api/items` - Add a new item
- PUT `/api/items/:id` - Update an item
- DELETE `/api/items/:id` - Delete an item
- POST `/api/payment` - Initialize payment
- GET `/api/payment/verify/:id` - Verify payment

## Author

Rakesh Kumar
