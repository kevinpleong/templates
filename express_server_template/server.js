// These are dependencies installed through npm.
// You must run npm install in the terminal in order for them to work
const express = require('express');
const app = express();
const server = require("http").createServer(app);
const PORT = process.env.PORT || 5001;
const ip = require("ip");
const colors = require("colors");



// This line of code sets our view engine to use Embedded JavaScript
// We must keep our EJS files inside a folder called views
// In order to show people ejs files, we use the command response.render("name-of-ejs-file")
app.set("view engine", "ejs");



// This simply sets it up so that anything in the public_files folder is visible to the client.
// the public_files folder should hold images, scripts, CSS and anyhing else that the client needs to see.
app.use(express.static(__dirname + "/public_files"))


//
app.get('/', (req, res) => {
  console.log("rendering home page for " + req.ip);
  res.render("pages/index");
});









server.listen(PORT, () => {
  console.log("===================================");
  console.log("The server is now online.".red)
  console.log(`Visit ` + `${ip.address()}:${PORT}`.underline.green + ` to see the website`);
  console.log("===================================");
});