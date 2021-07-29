module.exports = function (app) {
  app.get("/formulario_inclusao_noticia", function (req, res) {
    res.render("admin/form_add_noticia", { errors: {}, noticia: {} });
  });

  app.post("/noticia/salvar", function (req, res) {
    var noticia = req.body;

    req.assert("titulo", "Titulo é obrigatório").notEmpty();
    req
      .assert("resumo", "Resumo é obrigatório")
      .notEmpty()
      .len(10, 100)
      .withMessage("Resumo tem que ter entre 10 e 100 caracteres");
    // req.assert('resumo', "Resumo é obrigatório").len(10,100);
    req.assert("autor", "Autor é obrigatório").notEmpty();
    req
      .assert("data", "Data é obrigatória")
      .notEmpty()
      .isDate({ format: "YYYY-MM-DD" });

    req.assert("noticia", "Noticia é obrigatória").notEmpty();

    var errors = req.validationErrors();

    if (errors) {
      res.render("admin/form_add_noticia", {
        errors: errors,
        noticia: noticia,
      });
      return;
    }
    var connection = app.config.database();
    var noticiasModel = new app.app.models.noticiasModel(connection);

    noticiasModel.setNoticia(noticia, function (error, result) {
      res.redirect("/noticias");
    });
  });
};
