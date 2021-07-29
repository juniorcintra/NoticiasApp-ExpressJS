module.exports = function (app) {
  app.get("/formulario_inclusao_noticia", function (req, res) {
    res.render("admin/form_add_noticia");
  });

  app.post("/noticia/salvar", function (req, res) {
    var noticia = req.body;
    res.send(noticia);
  });
};
