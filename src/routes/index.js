const express = require("express");

//criando a varíavel da rota
const router = express.Router();

//chamando o mongoose
const mongoose = require("mongoose");

//chamando os models na rota
require("../models/User");

//Chamando a tabela de usuários
const User = mongoose.model("User");
//Rotas
router.get("/", function(req, res) {
  res.send("Home page");
});

//consultando os usuários
router.get("/user", async function(req, res) {
  const user = await User.find();
  return res.json(user);
});

router.get("/user", function(req, res) {
  res.send("usuarinho");
});

router.post("/user", async function(req, res) {
  //chamando a tabela de usuários

  await User.create(req.body)
    .then(function() {
      res.send("Usuário criado");
    })
    .catch(function(err) {
      res.send(`Deu erro kkkk ${err}`);
    });
});

module.exports = router;
