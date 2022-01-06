# Express

Express is a minimalist framework to handle web functionality in node.js app
limited functionality but VERY compatible with custom and Extra `Middleware`

`Middleware` - helps communication between two layers, two apps
middleware for client < to > server between two different parts of our backend

Express gives us a HTTP REQUEST API we can customize including GET POST PUT DELETE 

## Install Express

1. Create a new NPM Project - npm init
2. Install Express - npm install express or npm i express 
3. install nodemon - npm install -g nodemon
4. created index.js and import express                                                        ---- const express = require('express');
5. Make a variable called app that is equal to express                                        ---- const app = express();
6. Make a new variable called Server, it is equal to app listening on a port 5015 (LocalHOST) ---- const server = app.listen(5015, () => {
7. npm i cors

})