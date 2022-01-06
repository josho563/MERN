# Routing

HTTP Request (app.get("/stuff")) - Routes
so all our routes have been written in our main file server.js

# BAD PRACTICE
Zoo
- Lizard
    "/getAllLizard"
- Monkey
    "/getAllMonkey" // Not good practice
- Aquarium
    "/getAllFish

    Some routes will overlap

# GOOD PRACTICE
Routes folder
    - LizardRoutes
    - MonkeyRoutes
    - Fish Routes

EXPRESS IS NOT OBJECT ORIENTED PROGRAMMING (ish)
- Lizard Domain Lizard Controller Lizard Server

Route file -> Service + Controller merged into one