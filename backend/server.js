const http = require("http"); // Import http here
const app = require("./app"); // Import the app (from app.js)
const port = process.env.PORT || 8080; // Define the port

const server = http.createServer(app); // Create the server with app as request handler

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
