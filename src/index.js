const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/server.config');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.get('/ping', (req, res) => {
  return res.status(200).send('pong');
});
app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
