const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const User = require("./models/user");

const app = express();
const PORT = 4000;

app.use(express.json()); // middleware to parse JSON request body

app.post("/signup", async (req, res) => {
  try {
    // Creating a instance of a User model
    const user = new User(req.body)

    await user.save();
    console.log("User Added Successfully!")
    res.status(201).send("User Added Successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating user.");
  }
});

//Get user by email
app.get("/user", async (req, res) => {
  try {
    const userEmail = req.body.emailId
    console.log('requsted email : ', userEmail)
    const user = await User.find({emailId : userEmail})
    if(user.length === 0){
      res.status(404).send("User not found")
    } else {
      res.send(user)
    }
  }
  catch (err) {
    res.status(400).send("Something went wrong")
    console.log("User not found")
  }
})

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

