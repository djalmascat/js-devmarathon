// configurando o servidor
const express = require("express")
const server = express()

// configurar o servidor para apresentar arquivos estáticos
server.use(express.static('public'))

//configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true //boolean aceita 2 valores: true or false
})


// Lista de doadores: Vetor ou array
const donors = [{
        name: "Diego Fernandes",
        blood: "AB+"
    },
    {
        name: "Cleiton Souza",
        blood: "B+"
    },
    {
        name: "Robson Marques",
        blood: "O+"
    },
    {
        name: "Mayk Brito",
        blood: "A-"
    },
]

// configurar a apresentação da página
server.get("/", function (req, res) {
    return res.render("index.html", { donors })
})

// ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function () {
    console.log("Server started")
})