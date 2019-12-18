//Chamando o express para criar o server
const express = require("express");

//chama a função do express - Start do aplicativo
const app = express();

//Criando uma rota
app.get('/', (req, res) =>{
    //Exibindo mensagem
    res.send('Sai fora');
})

//Inicializando o servidor
app.listen(3001, () => {
    console.log('Deu certo');
});