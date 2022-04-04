const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ 'message': 'pong'});
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({'message': `Hello, ${ name }`})
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (parseint(age, 10) > 18) {
    return res.status(200).json({'message': `Hello, ${ name }`});
  } return res.status(401).json({'message': `Unauthorized`});
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({'message': `Seu nome é ${ name } e você tem ${ age } anos de idade`});
});

app.use((err, req, res, next) => {
  res.status(500).send(`Erro. Mensagem: ${err.message}`);
});

app.listen(3000, () => {
  console.log('Rodando na porta 3000!');
});