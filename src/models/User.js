const mongoose = require("mongoose");

//criando uma tabela
const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  idade: {
    type: Number,
    required: true
  }
});

mongoose.model("User", UserSchema);
