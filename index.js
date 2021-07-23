const express = require("express");
const app = express();
var msg = require("./mod_teste");

app.set("view engine", "ejs");

app.get("/formulario_inclusao_noticia", function (req, res) {
  res.render("admin/form_add_noticia");
});

app.get("/noticias", function (req, res) {
  res.render("noticias/noticias");
});

app.get("/", function (req, res) {
  res.render("home/index");
});

app.listen(4000, function () {
  console.log(msg);
});
