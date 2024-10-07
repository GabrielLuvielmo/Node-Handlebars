const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) =>{
    const user = {
        name: 'Jair Luiz Messias Inacio Lula Bolsonaro da Silva',
        age: 23,
        email: 'recebajairlula@hotmail.com'
    }
    res.render('neyma', {user: user})
})

app.listen(3000)