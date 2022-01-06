// Importing our packages
const express = require('express');
const cors = require('cors');

// Initializing app as a function
const app = express();

//This is Common Middleware 
app.use(express.json());
app.use(cors());

// Import the route into server.js
const JediRoutes = require('./Routes/JediRoutes.js');
const SithRoutes = require('./Routes/SithRoutes.js');
const BountyHunterRoutes = require('./Routes/BountyHuntersRoutes.js');

// Tell server to use this route - using Middleware
// if any request beings with /jedi use the jediRoutes route file
app.use('/jedi', JediRoutes);
app.use('/Sith', SithRoutes);
app.use('/BountyHunter', BountyHunterRoutes);

// Listen on port 5015
const server = app.listen(5015,() => {
    console.log(`Server started on port ${server.address().port}`);
});