const express = require("express");
var consign = require("consign");
var bodyParser = require("body-parser");
var validator = require("express-validator");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(validator());

consign()
  .include("app/routes")
  .then("config/database.js")
  .then("app/models")
  .then("app/controllers")
  .into(app);

module.exports = app;
