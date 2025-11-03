const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://bhosale71096_db_user:b6JGBaPK15xhkyZN@cluster0.xg1o597.mongodb.net/devTinder"
    );
    console.log("Database connection established...");
  } catch (err) {
    console.error("Database cannot be connected!!", err);
    throw err;
  }
};

module.exports = connectDB;