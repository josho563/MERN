// Import Express as a variable called express

const express = require('express');

// Making a variable called app that is equal to express
const app = express();

// Make a new variable called server, it is equal to app listening on a port 5015 (LocalHOST)
const server = app.listen(5015, () => {
    console.log(`Server started on port ${server.address().port}`);
});