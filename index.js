const express = require('express');
const { engine } = require ('express-handlebars');
const app = express();
//config Handkebars engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
//fim config Handkebars energine

//Rotas
app.get('/cad', function(req,res){
    res.render('cad')
})

//fim de rotas

app.listen(3000);