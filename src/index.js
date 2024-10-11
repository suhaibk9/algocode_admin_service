const express = require('express');
const bodyParser = require('body-parser');
const connectToDB = require('./config/db.config');
const { PORT } = require('./config/server.config');
const errorHandler = require('./utils/ErrorHandler');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.get('/ping', (req, res) => {
  return res.status(200).send('pong');
});
app.use('/api', require('./routes/index'));
app.use(errorHandler);
app.listen(PORT, async (req, res) => {
  console.log(`Server is running on port ${PORT}`);
  await connectToDB();
  console.log('Connected to DB');
});
