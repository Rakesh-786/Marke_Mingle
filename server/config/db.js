const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            console.log("MONGO_URI environment variable not found")
            return;
        }

        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo DB Connected: ", conn.connection.host)
    }
    catch (err) {
        console.log("MongoDB connection error:", err)
        // Don't exit the process in production, just log the error
        if (process.env.NODE_ENV !== 'production') {
            process.exit(1)
        }
    }
}

module.exports = connectDB