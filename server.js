const bodyParser = require('body-parser')
const express = require('express')

// instanciar express
const app = express();

// middlewares -> funcao executada qndo determinada requisicao chegar
// dentro da pasta atual onde encontra esse arquivo ('.'), sirva os arquivos estaticos, provendo os arquivos atraves desse middleware
app.use(express.static('.'))

// se vier um formato a partir de uma submit de um formulario, esse codigo vai ler os dados e transforma-los em objeto
// app.use(bodyParser.urlencoded({ extended: true }))

// se vier um json no body da requisição esse codigo q vai aplicar para transformar json em objeto
// app.use(bodyParser.json())



// qndo vier req do tipo GET nessa url '/teste'
app.get('/teste', (req, res) => {
    console.log(req);

    res.send('Ok')
})



app.listen(8080, () => console.log('Executando...'))