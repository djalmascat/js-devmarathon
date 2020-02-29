// configurando o servidor
const express = require("express")
const server = express()

// configurar o servidor para apresentar arquivos estáticos
server.use(express.static('public'))

// habilitar body do formulário
server.use(express.urlencoded({
    extended: true
}))

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
    return res.render("index.html", {
        donors
    })
})

server.post("/", function (req, res) {
    // pegar dados do formulário
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    //colocar valores dentro do array
    donors.push({
        name: name,
        blood: blood
    })

    return res.redirect("/")
})


// ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function () {
    console.log("Server started")
})