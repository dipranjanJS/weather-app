// Adding express
const express = require('express');

// Adding hbs
const hbs = require('hbs');

// Adding path
const path = require('path');

// Creating app and using express
const app = express();

// Delcaring public directory
const publicPath = path.join(__dirname, '../public');

// Declaring views for the application
const viewsPath = path.join(__dirname, '../templates/views');

// Declaring partials path
const partialsPath = path.join(__dirname, '../templates/partials');

// Using static path for static css and images in application
app.use(express.static(publicPath));

// Setting the view engine as hbs or Handlebars
app.set('view engine', 'hbs');

// Setting all the views for the application
app.set('views', viewsPath);

// Registering partials into the application
hbs.registerPartials(partialsPath);

// Default route or home route
app.get('', (req, res) => {
    res.render('index');
});

// About route
app.get('/about', (req, res) => {
    res.render('about');
});

// Help route
app.get('/help', (req, res) => {
    res.render("help");
});

// Creating server and setting port at 3000
app.listen(3000, () => {
    console.log("server is up and running");
});