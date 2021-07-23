const app = require("./config/server");

const rotaNoticicas = require("./app/routes/noticias");
rotaNoticicas(app);

const rotaHome = require("./app/routes/home");
rotaHome(app);

const rotaForm = require("./app/routes/formulario_noticia");
rotaForm(app);

app.listen(4000, function () {
  console.log("Servidor rodando com Express");
});
