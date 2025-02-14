const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
  } catch (error) {
    next(error);
  }
};

module.exports = connectDb;
