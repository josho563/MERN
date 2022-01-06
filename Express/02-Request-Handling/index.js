// Import Express as a variable called express

const express = require('express');

// Making a variable called app that is equal to express
const app = express();

// Needed to parse JSON data for express to read
app.use(express.json());

// A basic get request to return a console log
// app.METHOD("path", whatRequestDoes() (as an arrow function)
app.get("/hello", () => {
    return console.log("site reached");
})

app.delete("/delete", () => {
    return console.log("Deleted items");
})

app.put("/Updated", () => {
    return console.log("Updated item");
})

app.post("/created", () => {
    return console.log("Created items");
})

// --------Requests-----------
// URL Param ID number, package name (nodemon) -- default --
// Within the path if something has a colon before it that is the URL param '/get/josh'
app.get('/get/:name', (req) => {
console.log(req);
console.log(req.params);
console.log(req.params.name);
})

// -------QUERY Param - ?character=jedi ------ for search bars if unsure what user will enter
app.get('/get', (req) => {
console.log(req.query);
console.log(req.query.species);
})

// Request body - Form data --- shopping website
app.post('/newJedi', (req, res) => {
    const body = req.body;
    console.log(body);
    res.send("hello");
    })
    
// Delete request
app.delete('/remove/:id', (req, res) => {
    console.log(req.params.id);
    res.status(202).send(`.....We lost something..... Not to worry we are still flying half a ship`);
});

// READ/GET Request
app.get('/get', (req, res) => {
    console.log(req.query);
    console.log(req.query.species);
    res.status(200).send(`I can read you like a book`);
    })

//Create Request
    app.post('/newJedi', (req, res) => {
        const body = req.body;
        console.log(body);
        res.send("hello");
        const name = req.params.name;
        res.status(201).send(`Created`);
        })

// UPDATE Request
app.put('/update/:id', (req, res) => {
    console.log(req.params);
    console.log(req.body);
    const id = req.params.id;
    res.status(202).send(`I have updated ${id} this you`);
    });


// Responses to data //.status() and //.send
app.get('/helloThere/:name', (req, res) => {
    const name = req.params.name;
res.status(202).send(`Hello There.... aghhh ${name} we have been expecting you`);
})

app.get('/error', (req, res) => {
    res.status(500).send(`.....We lost something..... Not to worry we are still flying half a ship`);
})


// The app listening function is at the bottom
// Make a new variable called server, it is equal to app listening on a port 5015 (LocalHOST)
const server = app.listen(5015, () => {
    console.log(`Server started on port ${server.address().port}`);
});