const bodyParser = require('body-parser');
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.use(express.static('.'));

app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html');
})

app.get('/eeidaz', (req, res) => {

    res.sendFile(__dirname + '/templates/eeidaz.html');
})

app.get('/eefdaz', (req, res) => {

    res.sendFile(__dirname + '/templates/eefdaz.html');
})

app.get('/colaboradores', (req, res) => {
    res.sendFile(__dirname + '/templates/colaboradores.html');

})

app.post('/send', (req, res) => {
    const { nome, email, mensagem } = req.body;



    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: "2525",
        auth: {
            user: "86e3f3257eda36",
            pass: "c8580af1c2f42e",
        }
    })



    transporter.sendMail({
        from: `${nome} <${email}>`,
        to: "ucpel@sou.ucpel.edu.br",
        replyTo: "ucpel@sou.ucpel.edu.br",
        subject: `Mensagem recebida do site IMDAZ`,
        text: `${mensagem}`
    })

    res.status(200).send('Enviado com sucesso');
})



app.listen(8080, () => console.log('Executando...'));