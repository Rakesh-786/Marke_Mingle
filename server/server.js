const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/db")
const PORT = process.env.PORT || 5000

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"));

// Health check endpoint that doesn't require database access
app.get('/', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Market Mingle API is running' });
});

// connect to the mongodb database
try {
    connectDB();
} catch (error) {
    console.error('MongoDB connection error:', error);
}

app.use('/api/items', require("./routes/items"))
app.use('/api/payment', cors(), require("./routes/payment"))

app.listen(PORT, console.log("Server is running on port ", PORT))