const express = require("express");
var consign = require("consign");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./app/views");

consign().include("app/routes").into(app);

module.exports = app;
