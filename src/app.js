const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const User = require("./models/user");

const app = express();
const PORT = 4000;

app.use(express.json()); // to parse JSON request body

app.post("/signup", async (req, res) => {
  try {
    // Creating a instance of a User model
    const user = new User({
      firstName: "Akshay",
      lastName: "Bhosale",
      emailId: "akshaybhosale@gmail.com",
      password: "Akshay@123.."
    });

    await user.save();
    res.status(201).send("User Added Successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating user.");
  }
});

connectDB()
  .then(() => {
    console.log("database connection established");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT} successfully.`);
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!");
  });

