# Middleware

Middleware is used to aid communication between two `nodes` client and server.

Middleware in express is a function with REQ, RES and NEXT

NEXT = if a next present as callback, When it is completed it will find the subsequent function with the word next

# Nest Middleware

All regular middleware is fired from top to bottom with EVERY REQUEST
Middleware IS NOT A REQUEST

app.get("/hello") <--- Request
app.use()         <--- Middleware

Nested middleware looks different to regular, and you specify in what requests it should run.

Pass in a nested middleware as a callback into a request

app.get("./test", (req, res, nest_middleware) => {

})