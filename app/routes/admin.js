module.exports = function (app) {
  app.get("/formulario_inclusao_noticia", function (req, res) {
    res.render("admin/form_add_noticia");
  });

  app.post("/noticia/salvar", function (req, res) {
    var noticia = req.body;
    var connection = app.config.database();
    var noticiasModel = new app.app.models.noticiasModel(connection);

    noticiasModel.setNoticia(noticia, function (error, result) {
      res.redirect("/noticias");
    });
  });
};
