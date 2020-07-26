const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { publishToQueue } = require('./services/MQService');

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.get('/post', async function(req, res, next) {
  // let { queueName, payload } = req.body;
  await publishToQueue('badge', { name: 'Stack', Age: 44444444 });
  res.statusCode = 200;
  res.data = { 'message-sent': true };
  next();
});
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
