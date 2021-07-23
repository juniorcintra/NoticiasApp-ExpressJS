const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/tecnologia", function (req, res) {
  res.render("secao/tecnologia");
});

app.get("/", function (req, res) {
  res.send("<html><body>Portal de Notícias</body></html>");
});

app.listen(4000, function () {
  console.log("Servidor rodando com Express");
});
