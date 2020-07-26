var amqp = require('amqplib/callback_api');
const CONN_URL = '<your URL>';
amqp.connect(CONN_URL, function(err, conn) {
  conn.createChannel(function(err, ch) {
    ch.consume(
      'badge',
      function(msg) {
        console.log('.....');
        setTimeout(function() {
          console.log('Message:', msg.content.toString());
        }, 8000);
      },
      { noAck: false }
    );
  });
});
