// Import Express as a variable called express

const express = require('express');
const cors = require('cors');

// Making a variable called app that is equal to express
const app = express();

//This is Common Middleware 
app.use(express.json());

//CORS - will prevent any unwanted CORS errors
app.use(cors());

// This is Custom Middleware
// Middleware does something then calls next()
// next() invokes the subsequent middleware (with next passed in)
// whenever a request is made ALL middleware is fired

//Middleware Example
app.use((req, res, next) => {
    console.log(Date());
    next();
});

//Middleware Example 2
app.use((req, res, next) => {
    const number = Math.random();
    console.log(`Your random number today is = ${number}`);
    next();
});

// Request example
app.get('/' , (req, res,) => {
    res.send("You have arrived");
});

//Nested Middleware = will only turn on if specific url is called
// Middleware are arrow functions saved as variables
const nested = (req, res, next) => {
    console.log("Nested middleware");
    next();
}

// Request

// Request with nested middleware
// app.get("path", nestedMiddleware)
app.get('/nested', nested, (req, res) => {
    console.log("Request sent");
    res.send("nested middleware fired");
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
    app.post('/newJedi', nested, (req, res) => {
        const body = req.body;
        console.log(body);
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


// The app listening function is at the bottom listening on a port 5015 (LocalHOST)
const server = app.listen(5015, () => {
    console.log(`Server started on port ${server.address().port}`);
});
