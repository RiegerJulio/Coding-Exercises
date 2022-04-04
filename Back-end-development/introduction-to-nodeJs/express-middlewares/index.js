const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const axios = require('axios');
const { tokenValidation } = require('./middlewares/btcMiddleware');

const userRouter = require('./routes/userRouter');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRouter);

app.get('/btc', tokenValidation, async(_req, res) => {
  const result = await axios.get("https://api.coindesk.com/v1/bpi/currentprice/BTC.json");
  res.status(200).json(result.data);
})

app.listen(3001, () => console.log('Rodando na porta 3001'));