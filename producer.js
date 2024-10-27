const amqp = require('amqplib');

async function sendMessages() {
  const queue = 'task_queue';
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  await channel.assertQueue(queue, { durable: true });

  const message = { orderId: 12345, description: 'Process order' };

  channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
    persistent: true
  });
  console.log("Message sent:", message);

  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
}

sendMessages();
