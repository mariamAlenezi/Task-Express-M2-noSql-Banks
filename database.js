const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("OKAY");
  } catch (error) {
    console.log("DB connection could not be established");
  }
};

module.exports = connectDB;
