// Import required modules
const express = require('express');
const path = require('path');

// Initialize the app
const app = express();
const port = 3000;

// Set static folder to serve CSS and client-side JS
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine and point to views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes

// Homepage - displays language options
app.get('/', (req, res) => {
  res.render('index'); // Render homepage (index.ejs)
});

// Login page
app.get('/login', (req, res) => {
  res.render('login'); // Render login page (login.ejs)
});

// Signup page
app.get('/signup', (req, res) => {
  res.render('signup'); // Render signup page (signup.ejs)
});

// Java course page
app.get('/java', (req, res) => {
  res.render('java'); // Render Java course page (java.ejs)
});

// Python course page
app.get('/python', (req, res) => {
  res.render('python'); // Render Python course page (python.ejs)
});

// C++ course page
app.get('/cpp', (req, res) => {
  res.render('cpp'); // Render C++ course page (cpp.ejs)
});

// Error handling for undefined routes
app.get('*', (req, res) => {
  res.status(404).send('404 Page Not Found');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
