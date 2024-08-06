const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require('nodemailer');

const User = require("./database/user.js"); // Load environment variables from .env file

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 8000;

// Connect to MongoDB (replace <YOUR_CONNECTION_STRING> with your actual connection string)
mongoose
  .connect("mongodb://127.0.0.1:27017/MyProjectBackend")
  .then(() => {
    console.log("Connected with DataBase");
  })
  .catch((err) => {
    console.log(`Error in connecting Dtabase : ${err}`);
  });

  // Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST route to handle form submission
app.post('/contactUs', (req, res) => {
  const { name, phone, email, address, subject, message } = req.body;

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
      user:"tusharpathania07@gmail.com",
      pass:"app pass"
  }
  });

  // Email content
  let mailOptions = {
    from: email,
    to: 'tusharkumar0510@gmail.com', // Recipient email
    subject: 'New Contact Form Submission',
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send(true);
    }
  });
});


  app.get("/login",async (req,res)=>{
    try {
        const { email, password } = req.query;
    
        // Find the user by email
        const user = await User.findOne({ email });
    
        // If the user doesn't exist, return an error
        if (!user) {
          return res.status(404).json({ message: "User not found." });
        }
    
        // Compare the provided password with the stored password
        if (password === user.password) {
          // Passwords match, login successful
          res.status(200).json({ message: "Login successful." });
        } else {
          // Passwords do not match, login failed
          res.status(401).json({ message: "Invalid credentials." });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
      }
  })

app.post("/signup", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User already exists with this email." });
    }

    // Create a new user
    const newUser = new User({ email, password, name });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User signed up successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
