const bodyParser = require('body-parser');
const express = require('express');
const nodemailer = require('nodemailer');

// instanciar express
const app = express();

// middlewares -> funcao executada qndo determinada requisicao chegar
// dentro da pasta atual onde encontra esse arquivo ('.'), sirva os arquivos estaticos, provendo os arquivos atraves desse middleware
app.use(express.static('.'));

// se vier um formato a partir de uma submit de um formulario, esse codigo vai ler os dados e transforma-los em objeto
// app.use(bodyParser.urlencoded({ extended: true }))

// se vier um json no body da requisição esse codigo q vai aplicar para transformar json em objeto
app.use(bodyParser.json())



// qndo vier req do tipo GET nessa url '/teste'
app.get('/teste', (req, res) => {
    console.log(req);

    res.send('Ok');
})

app.get('/eeidaz', (req, res) => {

    res.sendFile(__dirname + '/templates/eeidaz.html');
})

app.get('/eefdaz', (req, res) => {

    res.sendFile(__dirname + '/templates/eefdaz.html');
})


app.get('/send', (req, res) => {
    console.log(req);


    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: "2525",
        auth: {
            user: "86e3f3257eda36",
            pass: "c8580af1c2f42e",
        }
    })

    transporter.sendMail({
        from: "uca <uca.cu.ruivo@email.com>",
        to: "gabriel.bigliardi@sou.ucpel.edu.br",
        replyTo: "gabriel.bigliardi@sou.ucpel.edu.br",
        subject: 'HELLO WORLD',
        text: 'testando email'
    })
})



app.listen(8080, () => console.log('Executando...'));