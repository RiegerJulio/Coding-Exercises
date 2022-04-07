require('dotenv').config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/ping', (req, res) => res.status(200).json({ message: 'pong' }));


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));