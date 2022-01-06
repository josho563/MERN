# Express Request handling

Request handling is specifying what you want the app to do when it gets the request from front-end
- The path: "/get/greeting"
- The Method: GET
- The Body:


GET - READ
POST - CREATE
PUT - Update request (Takes in an ID and replaces the entire document)
PATCH - Update Request (only updates what has been modified)
DELETE - Delete request

Body is the data that is sent from the client to the server (data to put in a database)
Add a basic get request to our server that will return some data 

# Request and Responses
Requests - Client sends us (Search queries, id numbers, body etc)
Response - Server sends the client (Data from the database)

# Response
responses are what the server sends to the client,
without specifying a response the client is hanging and waiting for data

res.send() => what your passing back
res.status() -> HTTP Status of the response