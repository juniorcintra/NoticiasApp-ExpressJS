module.exports = function (app) {
  app.get("/formulario_inclusao_noticia", function (req, res) {
    res.render("admin/form_add_noticia");
  });

  app.post("/noticia/salvar", function (req, res) {
    var noticia = req.body;
    var connection = app.config.database();
    var noticiasModel = app.app.models.noticiasModel();

    noticiasModel.setNoticia(noticia, connection, function (error, result) {
      res.redirect("/noticias");
    });
  });
};
