// This file will be for my Honda Collections

//need to import
const router = require('express').Router();


//All Routes

//READ ALL
router.get("/readAll", (req, res) => {
    console.log("Ferrari read all accessed")
    res.status(202).send("read all accessed ")
});


// Delete request
router.delete('/remove/:id', (req, res) => {
    console.log(req.params.id);
    res.status(202).send(`Removed Ferrari from garage`);
});

//Create Request
    router.post('/newFerrari', (req, res) => {
        const body = req.body;
        console.log(body);
        const name = req.params.name;
        res.status(201).send(`Ferrari Created`);
        })

// UPDATE Request
router.put('/update/:name', (req, res) => {
    console.log(req.params);
    console.log(req.body);
    const id = req.params.id;
    res.status(202).send(`I have updated ${name} for you`);
    });


// Export our router for server.js to use
module.exports = router;