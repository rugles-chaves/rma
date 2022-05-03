//Modulos Instalado
const express = require('express');
const { engine } = require ('express-handlebars');
const app = express();
//const boryParser = require('bory-parser');
const path = require('path')

//config

    //config Handkebars engine
        app.engine('handlebars', engine());
        app.set('view engine', 'handlebars');
    //fim config Handkebars energine

    //Static 
        app.use(express.static(path.join(__dirname,'public')))

//Rotas
app.get('/', function(req,res){
    res.render('home')
})
app.get('/carrinho', function(req,res){
    res.render('carrinho')
})

app.get('/teste', (req,res) => {
    res.render('teste')
})
//fim de rotas

const PORT = process.env.PORT || 80
app.listen(PORT);