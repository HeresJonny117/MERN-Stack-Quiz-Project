const mongoose = require("mongoose");
require("dotenv").config;

const connectDB = async () => {
  try {
    console.log("MongoDB URI:", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
  } catch (e) {
    console.error("Database Failed", e.message);
    throw e;
  }
};

module.exports = connectDB;
