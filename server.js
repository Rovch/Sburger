const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const connection = require("./config/connection.js")
const routes = require("./controllers/burgers_controller.js")
// Sets up the Express App
// =============================================================
var app = express();
var exphbs = require("express-handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routes)
app.use(express.static(__dirname + '/public'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// =============================================================
var PORT = 3030;
app.listen(process.env.PORT|| PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});