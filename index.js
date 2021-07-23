const app = require("./config/server");

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
  console.log("Servidor rodando com Express");
});
