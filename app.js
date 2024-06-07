const express = require('express')
const app = express() // criar o servidor
const db = require('./db/connection')
const bodyParser = require('body-parser')

// iniciar o servidor
const PORT = 3000;

app.listen(PORT, function() {
    console.log(`O Express está rodando na porta ${PORT}`)
})

// body parser 
app.use(bodyParser.urlencoded({ extended: false }))

// db connection
db
    .authenticate()
    .then(() => {
        console.log("Conectou ao banco com sucesso")
    })
    .catch(err => {
        console.log("Ocorreu um erro ao conectar", err)
    })

// routes
app.get('/', (req, res) => {
    res.send("Está funcionando")
})

// jobs routes
app.use('/jobs', require('./routes/jobs'))