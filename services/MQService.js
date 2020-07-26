var amqp = require('amqplib/callback_api');
const CONN_URL = '<Your URL>';
let ch = null;
amqp.connect(CONN_URL, function(err, conn) {
  conn.createChannel(function(err, channel) {
    ch = channel;
  });
});
exports.publishToQueue = async (queueName, data) => {
  try {
    ch.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));
  } catch (err) {
    console.log(err);
  }
};
process.on('exit', code => {
  ch.close();
  console.log(`Closing rabbitmq channel`);
});
