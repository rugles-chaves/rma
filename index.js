const express = require('express')
const app = express()
const handlebars = require('express-handlebars')

//Config tamplats energ

app.engine('handlebars', handlebars({defaultlLayout: 'main'}))
app.set('view engine', 'handlebrs')



app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)