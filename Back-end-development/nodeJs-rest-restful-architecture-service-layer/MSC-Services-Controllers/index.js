require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cepController = require('./controllers/cepController');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (req, res) => res.status(200).json({ message: 'pong' }));

app.get('/cep/:cep', cepController.findByCep);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
