// configurando o servidor
const express = require("express")
const server = express()

//configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express:server
})


// configurar a apresentação da página
server.get("/", function (req, res) {
    return res.send("ok, cheguei aqui com nodemon")
})

// ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function () {
    console.log("iniciei o servidor.")
})