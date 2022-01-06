// Importing our packages
const express = require('express');
const cors = require('cors');

// Initializing app as a function
const app = express();

//This is Common Middleware 
app.use(express.json());
app.use(cors());


//Middleware 1
app.use((req, res, next) => {
    console.log(Date());
    next();
});

//Middleware 2
app.use((req, res, next) => {
    const number = Math.random();
    console.log(`Your random number today is = ${number}`);
    next();
});

//Nested Middleware 1
const nested = (req, res, next) => {
    console.log("Nested middleware");
    next();
}


// Import the route into server.js
const HondaRoutes = require('./HondaRoutes');
const FerrariRoutes = require('./FerrariRoutes');

// Tell server to use this route - using Middleware
// if any request beings with /jedi use the jediRoutes route file
app.use('/Honda', HondaRoutes);
app.use('/Ferrari', FerrariRoutes);

// Listen on port 5015
const server = app.listen(5015,() => {
    console.log(`Server started on port ${server.address().port}`);
});