const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const app = express();
const PORT = 5000;
const DB_URI = 'mongodb+srv://aakashchandra2004:Aakash%402004@userdetails.79qz8.mongodb.net/musicPlayer'; 

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(DB_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

// Routes
app.use('/', authRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
