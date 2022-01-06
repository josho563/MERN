// This file will be for my Jedi Collections

//need to import
const router = require('express').router();

//All Routes go below and use router instead of app

router.get("/readAll", (req, res) => {
    console.log("read all accessed")
    res.status(202).send("read all accessed ")
});

// Export our router for server.js to use
module.exports = router;