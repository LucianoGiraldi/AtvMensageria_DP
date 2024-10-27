const amqp = require('amqplib');

async function receiveMessages() {
  const queue = 'task_queue';
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  await channel.assertQueue(queue, { durable: true });
  console.log(`Waiting for messages in ${queue}. To exit press CTRL+C`);

  channel.consume(queue, (msg) => {
    if (msg !== null) {
      const messageContent = JSON.parse(msg.content.toString());
      console.log("Received message:", messageContent);

      // Simula o processamento da tarefa
      setTimeout(() => {
        console.log("Processed message:", messageContent);
        channel.ack(msg);
      }, 2000);
    }
  }, { noAck: false });
}

receiveMessages();
