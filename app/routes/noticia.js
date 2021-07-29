module.exports = function (app) {
  app.get("/noticia", function (req, res) {
    var connection = app.config.database();
    connection.query(
      "select * from noticias where id_noticia = 2",
      function (error, result) {
        res.render("noticias/noticia", { noticia: result });
      }
    );
  });
};
