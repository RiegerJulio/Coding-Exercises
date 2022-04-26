const express = require('express');
const bodyParser = require('body-parser');
const { createUser, validation, getUsers } = require('./models/user');

const app = express();
app.use(bodyParser.json());

app.get('/user', async (_req, res) => {
  const users = await getUsers();

  res.status(200).json(users);
});

app.post('/user', async (req, res) => {
  const { first_name, last_name, email, password} = req.body;

  if (!validation(first_name, last_name, email, password)) return res.status(400).json({message: 'Erro na validacao'});

  await createUser(first_name, last_name, email, password);

  res.status(201).json({message: 'Criado com Sucesso'});
});

const port = 3000
app.listen(port, () => console.log(`Listening on port ${port}!`));