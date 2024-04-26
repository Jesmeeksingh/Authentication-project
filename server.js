const express = require('express');
const app = express();
const mongoose = require('mongoose');

//connecting mongodb database
mongoose.connect('mongodb://127.0.0.1:27017/customerdb');

// Set up views directory
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Import routes
const loginRoutes = require('./routes/loginRoutes');
const signupRoutes = require('./routes/signupRoutes')
const shoppingRoutes = require('./routes/shoppingRoutes')

// Middleware
app.use(express.urlencoded({ extended: true }));

// Mount routes
app.use('/login', loginRoutes);
app.use('/signup', signupRoutes);
app.use('/shopping', shoppingRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});