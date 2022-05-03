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
app.get('/cad', function(req,res){
    res.render('cad')
})
//fim de rotas

app.listen(80);