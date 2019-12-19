//Chamando o express para criar o server
const express = require("express");
//chamando o mongo
const mongoose = require("mongoose");

//chama a função do express - Start do aplicativo
const app = express();

//criando a conexão
mongoose
  .connect("mongodb://localhost:27017/projeto", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(function() {
    console.log("Banco de dados conectado");
  })
  .catch(function(err) {
    console.log(`Erro ao conectar ao banco: ${err}`);
  });
//rotas
app.use("/", require("./src/routes/index"));

//Inicializando o servidor
app.listen(3001, () => {
  console.log("Deu certo");
});
