# Market Mingle Frontend

This is the frontend for the Market Mingle e-commerce platform.

## Setup Instructions

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

## Connecting to Your Backend

After deploying your backend to Vercel, you'll need to update the API configuration:

1. Open `src/config/api.js`
2. Replace the `BASE_URL` value with your new Vercel deployment URL
3. Save the file and rebuild the frontend

## Deployment

To deploy the frontend to Vercel:

1. Create a Vercel account at https://vercel.com/signup
2. Install Vercel CLI: `npm i -g vercel`
3. Login to Vercel: `vercel login`
4. Navigate to the client directory: `cd client`
5. Deploy to Vercel: `vercel`
6. Follow the prompts to complete the deployment

## Features

- Browse products by category (Men, Women, Kids)
- View product details
- Add products to cart
- Checkout functionality

## Author

Rakesh Kumar
