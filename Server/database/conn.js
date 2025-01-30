const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
  } catch (e) {
    console.error("Database Failed", e.message);
  }
};

module.export = connectDB;
