
const mongoose = require("mongoose");

async function ConnectToDb() {
    try {
     
        await mongoose.connect("mongodb+srv://superintelligence187_db_user:fb4r5WOoa5LLewro@cluster0.9kxkwri.mongodb.net/Backend")
        console.log("Connected to DB");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
    }
}

module.exports = ConnectToDb;

