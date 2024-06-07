const express = require('express')
const { engine } = require('express-handlebars');
const app = express() // criar o servidor
const path = require('path')
const db = require('./db/connection')
const bodyParser = require('body-parser')

// iniciar o servidor
const PORT = 3000;

app.listen(PORT, function() {
    console.log(`O Express está rodando na porta ${PORT}`)
})

// body parser 
app.use(bodyParser.urlencoded({ extended: false }))

// handlebars
app.set('views', path.join(__dirname, 'views')); // diretório das views (templates)
app.engine('handlebars', engine({ defaultLayout: 'main' })); // arquivo principal de layout
app.set('view engine', 'handlebars');

// static folder
app.use(express.static(path.join(__dirname, 'public'))); // diretório de arquivos estáticos

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
    res.render('index')
})

// jobs routes
app.use('/jobs', require('./routes/jobs'))