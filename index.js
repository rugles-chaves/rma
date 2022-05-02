const express = require('express');
const { engine } = require ('express-handlebars');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

//Rotas

app.get('/cad', function(req,res){
    res.render('cad')
})

app.listen(3000);