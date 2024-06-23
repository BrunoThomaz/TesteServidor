const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, './Client')));


app.post('/dados-cliente', (req, res) => {
    console.log(req.body);
    res.redirect('/sucesso.html');
})

app.get('/teste-servidor', (req,res)=>{
    res.redirect('/testeServidor.html');
})

app.post('/autenticacao', (req,res) => {
    fs.writeFile(path.join(__dirname, 'log.json'), JSON.stringify(req.body), {flag:'a'}, err => {
        if (err) {
            console.error(err);
        } else {
            // file written successfully
        }
        });
    if (req.body.auth.usuario && req.body.auth.senha) {
        res.send(JSON.stringify({"token":"omelhortokendedotos"}))
    }
    console.log(req.body)
})

app.post('/cadastroCliente', (req,res) => {
    fs.writeFile(path.join(__dirname, 'log.json'), JSON.stringify(req.body), {flag:'a'}, err => {
        if (err) {
            console.error(err);
        } else {
            // file written successfully
        }
        });
    console.log(req.body)
    res.send(req.body)
})



app.listen(3001, () => {
    console.log('Server listing on http://localhost:3001.');
});