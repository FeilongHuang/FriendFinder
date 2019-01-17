var express = require("express");
var path = require("path");
var app = express();
var htmlRoutes = require('./app/routing/htmlRoutes.js');
var apiRoutes = require("./app/routing/apiRoutes.js")
var PORT = 3000;
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use("/", htmlRoutes);
app.use("/", apiRoutes);
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});